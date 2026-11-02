import { NextResponse } from 'next/server';
import { caseStudiesData, CaseStudy } from '@/data/case-studies';

function getFilteredFallback(domainFilter: string | null, query: string | undefined): CaseStudy[] {
  let fallbackData = [...caseStudiesData];
  if (domainFilter && domainFilter !== 'All') {
    fallbackData = fallbackData.filter((item) =>
      item.domain.toLowerCase().includes(domainFilter.toLowerCase())
    );
  }
  if (query) {
    fallbackData = fallbackData.filter(
      (item) =>
        item.client.toLowerCase().includes(query) ||
        item.headline.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.technologies.some((t) => t.toLowerCase().includes(query))
    );
  }
  return fallbackData;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const domainFilter = searchParams.get('domain');
  const query = searchParams.get('q')?.toLowerCase().trim();

  // Prevent self-recursion: If internal or calling self, return fallback immediately
  const host = request.headers.get('host');
  const isInternal = request.headers.get('x-internal-fetch') === 'true';

  const apiUrl = process.env.NEXT_PUBLIC_HRMS_API_URL || process.env.HRMS_API_URL || 'http://localhost:3001';

  let isSelfCalling = false;
  try {
    const apiHost = new URL(apiUrl).host;
    if (host && apiHost === host) {
      isSelfCalling = true;
    }
  } catch {
    // ignore
  }

  if (isInternal || isSelfCalling) {
    const fallbackData = getFilteredFallback(domainFilter, query);
    return NextResponse.json({
      success: true,
      data: fallbackData,
      total: fallbackData.length,
      source: 'fallback',
    });
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1200);

    const endpoints = [
      `${apiUrl}/api/portfolio/public`,
      `${apiUrl}/api/portfolios/public`,
      `${apiUrl}/api/projects/public`,
    ];

    let adminProjects: any[] | null = null;

    for (const ep of endpoints) {
      try {
        const res = await fetch(ep, {
          signal: controller.signal,
          headers: { 
            'Content-Type': 'application/json',
            'x-internal-fetch': 'true',
          },
          next: { revalidate: 30 },
        });

        if (res.ok) {
          const json = await res.json();
          if (json && json.success && Array.isArray(json.data) && json.data.length > 0) {
            adminProjects = json.data;
            break;
          }
        }
      } catch {
        // try next endpoint or fallback
      }
    }

    clearTimeout(timeoutId);

    if (adminProjects && adminProjects.length > 0) {
      const mapped: CaseStudy[] = adminProjects.map((p, idx) => ({
        id: p.id || p._id || `proj-${idx}`,
        slug: p.slug || (p.title || p.client || `project-${idx}`).toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        client: p.client || p.title || p.name || 'Enterprise Client',
        domain: p.domain || p.category || 'Custom Software Development',
        website: p.website || p.liveUrl || p.url || 'https://opashsoftware.com',
        headline: p.headline || p.subtitle || p.title || 'Scalable Digital Platform',
        summary: p.summary || p.description || p.overview || '',
        challenge: p.challenge || p.problemStatement || 'Handling high-volume transactions with strict uptime and low latency.',
        solution: p.solution || p.architecture || 'Delivered a modern scalable cloud-native architecture with microservices and real-time data sync.',
        results: Array.isArray(p.results) && p.results.length > 0
          ? p.results
          : [
              { metric: '99.99%', label: 'Verified Production Uptime' },
              { metric: '2x', label: 'Processing Acceleration' },
              { metric: '100%', label: 'Code & IP Ownership' },
            ],
        technologies: Array.isArray(p.technologies) && p.technologies.length > 0
          ? p.technologies
          : Array.isArray(p.techStack)
          ? p.techStack
          : ['Next.js', 'React', 'Node.js', 'AWS Cloud'],
        testimonial: p.testimonial || {
          quote: p.testimonialQuote || 'Opash Software delivered exceptional results with precision, speed, and great architectural insights.',
          author: p.testimonialAuthor || 'Product Lead',
          role: p.testimonialRole || 'Engineering Director',
          company: p.client || 'Enterprise Client',
        },
        accentColor: p.accentColor || 'from-emerald-600 to-teal-500',
        image: p.image || p.thumbnail || p.coverImage || '',
        featured: p.featured ?? true,
      }));

      let filtered = mapped;
      if (domainFilter && domainFilter !== 'All') {
        filtered = filtered.filter((item) =>
          item.domain.toLowerCase().includes(domainFilter.toLowerCase())
        );
      }
      if (query) {
        filtered = filtered.filter(
          (item) =>
            item.client.toLowerCase().includes(query) ||
            item.headline.toLowerCase().includes(query) ||
            item.summary.toLowerCase().includes(query) ||
            item.technologies.some((t) => t.toLowerCase().includes(query))
        );
      }

      return NextResponse.json({
        success: true,
        data: filtered,
        total: filtered.length,
        source: 'admin',
      });
    }
  } catch {
    // Admin API offline
  }

  const fallbackData = getFilteredFallback(domainFilter, query);
  return NextResponse.json({
    success: true,
    data: fallbackData,
    total: fallbackData.length,
    source: 'fallback',
  });
}
