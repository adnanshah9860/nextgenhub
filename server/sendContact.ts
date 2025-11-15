// server/sendContact.ts
import express from "express";
import sgMail from "@sendgrid/mail";

const router = express.Router();

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.warn("SENDGRID_API_KEY not set - emails will be simulated (dev).");
}

router.post("/api/contacts", async (req, res) => {
  try {
    const {
      name = "—",
      business = "—",
      city = "—",
      phone = "—",
      email = "—",
      service = "—",
      budget = "—",
      message = "—",
    } = req.body ?? {};

    if (!name || !phone || !email || !service || !budget) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const receiver = process.env.RECEIVER_EMAIL || "next.gen.hub9@gmail.com";
    const sender = process.env.SENDER_EMAIL || `no-reply@ngh.in`;

    const html = `
      <h2>New Contact — Next Generation Hub</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Business:</strong> ${escapeHtml(business)}</p>
      <p><strong>City:</strong> ${escapeHtml(city)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Service:</strong> ${escapeHtml(service)}</p>
      <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
      <p><strong>Message:</strong><br/>${escapeHtml(message)}</p>
      <p><small>Sent from NGH website</small></p>
    `;

    const msg = {
      to: receiver,
      from: sender,
      subject: `NGH Lead: ${name} — ${service}`,
      html,
      replyTo: email,
    };

    if (!process.env.SENDGRID_API_KEY) {
      console.log("DEV (simulated send):", msg);
      return res.status(200).json({ ok: true, simulated: true });
    }

    await sgMail.send(msg);
    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error("sendContact error:", err?.response ?? err);
    return res.status(500).json({ message: "Failed to send email" });
  }
});

export default router;

function escapeHtml(str: string) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
