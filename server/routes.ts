import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Lead capture endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const validatedData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(validatedData);
      
      // TODO: Webhook integration for Zapier/Make
      // Example: Send lead data to external CRM or email service
      // await fetch('https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID/', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(lead)
      // });
      
      // TODO: WhatsApp Business API notification
      // Example: Send WhatsApp notification to admin about new lead
      // await sendWhatsAppNotification({
      //   to: 'ADMIN_WHATSAPP_NUMBER',
      //   message: `New lead from ${lead.name} - ${lead.email}`
      // });
      
      res.status(201).json({
        success: true,
        message: "Lead captured successfully",
        data: lead,
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: validationError.message,
        });
      }
      console.error("Error creating lead:", error);
      res.status(500).json({
        success: false,
        message: "Failed to capture lead. Please try again.",
      });
    }
  });

  // Get all leads (admin endpoint)
  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getLeads();
      res.json({
        success: true,
        data: leads,
        count: leads.length,
      });
    } catch (error) {
      console.error("Error fetching leads:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch leads",
      });
    }
  });

  // Contact/Quote form endpoint
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // TODO: Webhook integration for Zapier/Make
      // Example: Send contact data to external CRM
      // await fetch('https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID/', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(contact)
      // });
      
      // TODO: WhatsApp Business API notification
      // Example: Send instant WhatsApp notification to admin
      // await sendWhatsAppNotification({
      //   to: 'ADMIN_WHATSAPP_NUMBER',
      //   message: `New quote request from ${contact.name} (${contact.business})\nService: ${contact.service}\nBudget: ${contact.budget}\nPhone: ${contact.phone}`
      // });
      
      // TODO: Auto-reply email to customer
      // Example: Send confirmation email to customer
      // await sendEmail({
      //   to: contact.email,
      //   subject: 'Thank you for contacting NGH!',
      //   body: `Hi ${contact.name}, we received your request and will contact you within 24 hours.`
      // });
      
      res.status(201).json({
        success: true,
        message: "Quote request submitted successfully",
        data: contact,
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: validationError.message,
        });
      }
      console.error("Error creating contact:", error);
      res.status(500).json({
        success: false,
        message: "Failed to submit quote request. Please try again.",
      });
    }
  });

  // Get all contacts (admin endpoint)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({
        success: true,
        data: contacts,
        count: contacts.length,
      });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch contacts",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
