import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    // Check if email ends with allowed domains
    const allowedDomains = ['@igdtuw.ac.in', '@gmail.com'];
    const isValidDomain = allowedDomains.some(domain => email && email.endsWith(domain));
    
    if (!email || !isValidDomain) {
      return NextResponse.json(
        { error: 'Only @igdtuw.ac.in and @gmail.com email addresses are allowed' },
        { status: 400 }
      );
    }
    
    return NextResponse.json({ valid: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
} 