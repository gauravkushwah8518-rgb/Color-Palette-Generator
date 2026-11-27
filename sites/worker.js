export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Serve the prebuilt static site (dist/) for every path.
    const response = await env.ASSETS.fetch(request);
    if (response.status === 404 && !url.pathname.includes('.')) {
      return env.ASSETS.fetch(new Request(new URL('/index.html', url), request));
    }
    return response;
  },
};
