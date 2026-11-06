// In production the admin panel is served from the same domain as the bot API
// (e.g. https://bot.carpartsai.ae), so default to the page's own origin.
// VITE_API_BASE_URL can override this at build time.
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.MODE === 'production'
    ? window.location.origin
    : 'http://localhost:5000');

export const SSE_URL = `${API_BASE_URL}/events`;
