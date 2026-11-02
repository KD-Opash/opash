import { NextResponse } from 'next/server';
import { caseStudiesData, CaseStudy } from '@/data/case-studies';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const apiUrl = process.env.NEXT_PUBLIC_HRMS_API_URL || process.env.HRMS_API_URL || 'http://localhost:3001';

  // Prevent self-recursion
  const host = request.headers.get('host');
  const isInternal = request.headers.get('x-internal-fetch') === 'true';

  let isSelfCalling = false;
  try {
    const apiHost = new URL(apiUrl).host;
    if (host && apiHost === host) {
      isSelfCalling = true;
    }
  } catch {
    // ignore
  }

  if (!isInternal && !isSelfCalling) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1200);

      const res = await fetch(`${apiUrl}/api/portfolio/public/${slug}`, {
        signal: controller.signal,
        headers: { 
          'Content-Type': 'application/json',
          'x-internal-fetch': 'true',
        },
        next: { revalidate: 30 },
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const json = await res.json();
        if (json && json.success && json.data) {
          return NextResponse.json({
            success: true,
            data: json.data,
            source: 'admin',
          });
        }
      }
    } catch {
      // Admin backend offline or endpoint not found
    }
  }

  // Find in local case studies
  const item = caseStudiesData.find(
    (cs) => cs.slug === slug || cs.id === slug
  );

  if (item) {
    return NextResponse.json({
      success: true,
      data: item,
      source: 'fallback',
    });
  }

  return NextResponse.json(
    { success: false, message: 'Portfolio item not found' },
    { status: 404 }
  );
}
