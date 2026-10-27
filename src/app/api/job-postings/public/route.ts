import { NextResponse } from 'next/server';
import { careersData } from '@/data/careers';

export async function GET() {
  const apiUrl = process.env.NEXT_PUBLIC_HRMS_API_URL || process.env.HRMS_API_URL || 'http://localhost:3001';

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);

    const res = await fetch(`${apiUrl}/api/job-postings/public`, {
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

  // Provide fallback job postings from careers dataset
  const fallbackOpenings = careersData.openings.map((job) => ({
    id: job.id,
    token: job.token || job.id,
    title: job.title,
    department: job.department,
    location: job.location,
    type: job.type,
    experience: job.experience,
    description: job.description,
    responsibilities: job.responsibilities,
    requirements: job.requirements,
    skillsRequired: job.requirements,
  }));

  return NextResponse.json({
    success: true,
    data: fallbackOpenings,
    source: 'fallback',
  });
}
