import { NextResponse } from 'next/server';
import { blogsData } from '@/data/blogs';

export async function GET(request: Request) {
  const apiUrl = process.env.NEXT_PUBLIC_HRMS_API_URL || process.env.HRMS_API_URL || 'http://localhost:3001';

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

      const res = await fetch(`${apiUrl}/api/blogs/public`, {
        signal: controller.signal,
        headers: { 
          'Content-Type': 'application/json',
          'x-internal-fetch': 'true',
        },
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data && data.success && Array.isArray(data.data) && data.data.length > 0) {
          return NextResponse.json(data);
        }
      }
    } catch {
      // HRMS server is offline or unreachable - serve fallback data
    }
  }

  // Provide fallback blogs dataset
  const fallbackBlogs = blogsData.map((blog) => ({
    ...blog,
    publishedAt: blog.date,
  }));

  return NextResponse.json({
    success: true,
    data: fallbackBlogs,
    source: 'fallback',
  });
}
