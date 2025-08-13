import express from "express";
import path from "path";

export async function setupVite(_app: any, _server: any) {
  // In development you might integrate with Vite dev server.
  // For Render production we don't need anything here.
  return;
}

export function serveStatic(app: any) {
  // Serve a built client at client/dist if present.
  const clientDist = path.resolve(process.cwd(), "client", "dist");
  app.use(express.static(clientDist));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(clientDist, "index.html"));
  });
}

export function log(...args: any[]) {
  // Simple logging wrapper
  console.log(...args);
}
