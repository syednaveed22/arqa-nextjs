import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware to handle service worker requests gracefully
 * This prevents 404 errors from appearing in logs
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle service worker requests
  if (pathname === '/service-worker.js') {
    return new NextResponse('', {
      status: 404,
      headers: {
        'Content-Type': 'application/javascript',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/service-worker.js',
    // Add other paths if needed
  ],
};



