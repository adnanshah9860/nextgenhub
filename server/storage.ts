import { 
  leads,
  contacts,
  type Lead,
  type InsertLead,
  type Contact,
  type InsertContact,
  type Quote,
  type InsertQuote,
} from "@shared/schema";
import { db } from "./db";
import { desc } from "drizzle-orm";

export interface IStorage {
  // Lead capture (free audit requests)
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  
  // Contact/Quote requests (same table, different use case)
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Alias methods for clarity - quotes ARE contacts
  createQuote(quote: InsertQuote): Promise<Quote>;
  getQuotes(): Promise<Quote[]>;
}

export class DatabaseStorage implements IStorage {

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const [lead] = await db
      .insert(leads)
      .values(insertLead)
      .returning();
    return lead;
  }

  async getLeads(): Promise<Lead[]> {
    return await db.select().from(leads).orderBy(desc(leads.createdAt));
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(insertContact)
      .returning();
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts).orderBy(desc(contacts.createdAt));
  }

  // Quote methods are aliases to contact methods since they use the same table
  async createQuote(quote: InsertQuote): Promise<Quote> {
    return await this.createContact(quote);
  }

  async getQuotes(): Promise<Quote[]> {
    return await this.getContacts();
  }
}

export const storage = new DatabaseStorage();
