import { NextResponse } from 'next/server';
import { TESTIMONIALS_DATA, TestimonialItem } from '@/components/TestimonialsSlider';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = (searchParams.get('q') || searchParams.get('search') || '').toLowerCase().trim();

  // Prevent self-recursion: If internal or calling self, return fallback immediately
  const host = request.headers.get('host');
  const isInternal = request.headers.get('x-internal-fetch') === 'true';

  const apiUrl =
    process.env.NEXT_PUBLIC_HRMS_API_URL ||
    process.env.HRMS_API_URL ||
    'https://hrms.opash.in';

  let isSelfCalling = false;
  try {
    const apiHost = new URL(apiUrl).host;
    if (host && apiHost === host) {
      isSelfCalling = true;
    }
  } catch {
    // ignore
  }

  const getFilteredFallback = (): TestimonialItem[] => {
    if (!query) return TESTIMONIALS_DATA;
    return TESTIMONIALS_DATA.filter(
      (t) =>
        t.author.toLowerCase().includes(query) ||
        t.company.toLowerCase().includes(query) ||
        t.quote.toLowerCase().includes(query) ||
        t.industry.toLowerCase().includes(query) ||
        t.techStack.some((tech) => tech.toLowerCase().includes(query))
    );
  };

  if (isInternal || isSelfCalling) {
    const fallbackData = getFilteredFallback();
    return NextResponse.json({
      success: true,
      data: fallbackData,
      total: fallbackData.length,
      source: 'fallback',
    });
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const res = await fetch(`${apiUrl}/api/testimonials/public`, {
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
      if (json && json.success && Array.isArray(json.data) && json.data.length > 0) {
        const mapped: TestimonialItem[] = json.data.map((item: any, idx: number) => ({
          id: item.id || item._id || `testi-${idx}`,
          author: item.author || 'Verified Client',
          role: item.role || 'Executive',
          company: item.company || 'Enterprise Partner',
          website: item.website || '',
          relationship: item.relationship || 'Engineering Partnership',
          rating: typeof item.rating === 'number' ? item.rating : 5,
          quote: item.quote || '',
          avatarText:
            item.avatarText ||
            (item.author
              ? item.author
                  .trim()
                  .split(/\s+/)
                  .map((w: string) => w[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()
              : 'OP'),
          avatarImage: item.avatarImage || '',
          metric: item.metric || '',
          metricLabel: item.metricLabel || '',
          industry: item.industry || 'Technology & SaaS',
          location: item.location || 'United States 🇺🇸',
          duration: item.duration || 'Long-term Engagement',
          accent: item.accent || '#00bbab',
          accentRgb: item.accentRgb || '0, 187, 171',
          techStack: Array.isArray(item.techStack) ? item.techStack : [],
        }));

        let filtered = mapped;
        if (query) {
          filtered = filtered.filter(
            (t) =>
              t.author.toLowerCase().includes(query) ||
              t.company.toLowerCase().includes(query) ||
              t.quote.toLowerCase().includes(query) ||
              t.industry.toLowerCase().includes(query) ||
              t.techStack.some((tech) => tech.toLowerCase().includes(query))
          );
        }

        return NextResponse.json({
          success: true,
          data: filtered,
          total: filtered.length,
          source: 'admin',
        });
      }
    }
  } catch (err) {
    console.warn('Failed to reach admin testimonials API, serving fallback:', err);
  }

  const fallbackData = getFilteredFallback();
  return NextResponse.json({
    success: true,
    data: fallbackData,
    total: fallbackData.length,
    source: 'fallback',
  });
}
