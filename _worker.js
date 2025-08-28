// Simple static asset server for the MP4 video maker
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Handle root path
    if (url.pathname === '/' || url.pathname === '/index.html') {
      // Return the main HTML file with proper headers
      const response = await env.ASSETS.fetch('https://shortvideomaker.franzai.com/index.html');
      const headers = new Headers(response.headers);
      
      // Add security headers
      headers.set('X-Frame-Options', 'DENY');
      headers.set('X-Content-Type-Options', 'nosniff');
      headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
      headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
      
      // Cache for 1 hour
      headers.set('Cache-Control', 'public, max-age=3600');
      
      return new Response(response.body, {
        status: response.status,
        headers: headers
      });
    }
    
    // Handle 404
    return new Response('Not Found', { status: 404 });
  }
};