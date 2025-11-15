// server/index.ts
import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import sendContact from "./sendContact";
import sendLead from "./sendLead";

// Create __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT || 5000);

// Body parsing
app.use(express.json());

// Allowed origins - allow local dev and set via env
const DEFAULT_ALLOWED = [
  "http://localhost:5173",
  "http://localhost:5174",
];

const envOrigins = process.env.ALLOWED_ORIGINS; // CSV of origins if set
let allowedOrigins = DEFAULT_ALLOWED.slice();
if (envOrigins) {
  // comma separated list
  allowedOrigins = allowedOrigins.concat(envOrigins.split(",").map(s => s.trim()).filter(Boolean));
}

// CORS with helpful logging
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) {
      // allow tools like curl/postman or server-to-server
      return callback(null, true);
    }
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    console.warn(`CORS blocked for origin: ${origin}`);
    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true,
}));

// Basic health
app.get("/health", (_req, res) => res.json({ ok: true, env: process.env.NODE_ENV || "development" }));

// Mount API routes
app.use(sendContact);
app.use(sendLead);

// Production static serving guard: only serve if dist/index.html exists
if (process.env.NODE_ENV === "production") {
  const distPath = path.join(__dirname, "..", "dist");
  const indexFile = path.join(distPath, "index.html");

  try {
    if (fs.existsSync(indexFile)) {
      app.use(express.static(distPath));
      app.get("*", (_req, res) => res.sendFile(indexFile));
      console.log(`Serving static frontend from ${distPath}`);
    } else {
      console.log(`Frontend not found at ${indexFile} — skipping static serving.`);
    }
  } catch (err) {
    console.error("Error checking frontend files:", err);
  }
}

// Global error handler (non-crashing)
app.use((err: any, _req: express.Request, res: express.Response, _next: any) => {
  console.error("Unhandled error:", err?.message ?? err);
  // send safe message to client
  res.status(500).json({ message: "Server error" });
});

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT} (env=${process.env.NODE_ENV || "development"})`);
});
