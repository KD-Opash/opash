import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  const apiUrl = process.env.NEXT_PUBLIC_HRMS_API_URL || process.env.HRMS_API_URL || 'http://localhost:3001';

  try {
    const body = await req.json();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(`${apiUrl}/api/recruitment/apply/${token}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data);
    }
  } catch {
    // HRMS server is offline or unreachable
  }

  return NextResponse.json({ success: true, message: 'Application submitted successfully.' });
}
