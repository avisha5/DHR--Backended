import { Express } from "express";
import http from "http";

/**
 * Minimal route setup used by index.ts
 * - Exposes /api/health
 * - Returns an http.Server for index.ts to use
 */
export async function registerRoutes(app: Express) {
  app.get("/api/health", (_req, res) => {
    res.json({ ok: true, timestamp: new Date().toISOString() });
  });

  // If you have more API routes, add them here (e.g., /api/auth, /api/vitals ...)
  // For now this ensures the server object is created and returned.
  const server = http.createServer(app);
  return server;
}
