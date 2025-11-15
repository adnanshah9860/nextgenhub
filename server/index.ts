// server/index.ts
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";    // <-- add this

// create __filename and __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import sendContact from "./sendContact";
import sendLead from "./sendLead";


const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;

app.use(express.json());

// adjust origins to match your frontend (Cloudflare Pages domain + localhost)
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://<your-pages-subdomain>.pages.dev", // replace if known
  "https://ngh.in",
  "https://www.ngh.in",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // allow tools like curl/postman
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
  })
);

app.get("/health", (_req, res) => res.json({ ok: true, env: process.env.NODE_ENV || "development" }));

app.use(sendContact);
app.use(sendLead);

// in production, optionally serve frontend (if you host frontend with same domain)
if (process.env.NODE_ENV === "production") {
  const distPath = path.join(__dirname, "..", "dist");
  app.use(express.static(distPath));
  app.get("*", (_req, res) => res.sendFile(path.join(distPath, "index.html")));
}

app.use((err: any, _req: express.Request, res: express.Response, _next: any) => {
  console.error("Unhandled error:", err?.message ?? err);
  res.status(500).json({ message: "Server error" });
});

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT} (env=${process.env.NODE_ENV || "development"})`);
});
