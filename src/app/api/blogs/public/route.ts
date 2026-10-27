import { NextResponse } from 'next/server';
import { blogsData } from '@/data/blogs';

export async function GET() {
  const apiUrl = process.env.NEXT_PUBLIC_HRMS_API_URL || process.env.HRMS_API_URL || 'http://localhost:3001';

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);

    const res = await fetch(`${apiUrl}/api/blogs/public`, {
      signal: controller.signal,
      headers: { 'Content-Type': 'application/json' },
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
