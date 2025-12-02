// Route handler to gracefully handle service worker 404 requests
// This prevents the 404 errors from appearing in the console

export async function GET(request: Request) {
  // Return a 404 response with proper headers
  // This stops the browser from repeatedly requesting the service worker
  return new Response('', {
    status: 404,
    headers: {
      'Content-Type': 'application/javascript',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  });
}



