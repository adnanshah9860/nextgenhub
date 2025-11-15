// server/sendLead.ts
import express from "express";
import sgMail from "@sendgrid/mail";

const router = express.Router();

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.warn("SENDGRID_API_KEY not set - lead emails will be simulated (dev).");
}

router.post("/api/leads", async (req, res) => {
  try {
    const { name = "—", email = "—", whatsapp = "—", website = "—", source = "website" } = req.body ?? {};

    if (!name || !email || !whatsapp) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const receiver = process.env.RECEIVER_EMAIL || "next.gen.hub9@gmail.com";
    const sender = process.env.SENDER_EMAIL || `no-reply@ngh.in`;

    const html = `
      <h2>New Lead — Next Generation Hub</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>WhatsApp:</strong> ${escapeHtml(whatsapp)}</p>
      <p><strong>Website:</strong> ${escapeHtml(website)}</p>
      <p><strong>Source:</strong> ${escapeHtml(source)}</p>
      <p><small>Sent from NGH website</small></p>
    `;

    const msg = {
      to: receiver,
      from: sender,
      subject: `NGH Lead (audit): ${name}`,
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
    console.error("sendLead error:", err?.response ?? err);
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
