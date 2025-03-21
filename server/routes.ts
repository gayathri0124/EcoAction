import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertUserSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for user registration
  app.post("/api/user/signup", async (req, res) => {
    try {
      // Validate request body against the schema
      const userData = insertUserSchema.parse(req.body);
      
      // Check if user with this email already exists
      const existingUser = await storage.getUserByEmail(userData.email);
      if (existingUser) {
        return res.status(409).json({ message: "User with this email already exists" });
      }
      
      // Create new user
      const newUser = await storage.createUser(userData);
      
      // Return user without password
      const { password, ...userWithoutPassword } = newUser;
      res.status(201).json({ 
        message: "User created successfully", 
        user: userWithoutPassword 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // API route for contact form
  app.post("/api/contact", async (req, res) => {
    try {
      // Add current date to the contact data
      const contactData = {
        ...req.body,
        createdAt: new Date().toISOString()
      };
      
      // Validate request body
      const validContactData = insertContactSchema.parse(contactData);
      
      // Save contact message
      const newContact = await storage.createContact(validContactData);
      
      res.status(201).json({ 
        message: "Message sent successfully",
        contactId: newContact.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      console.error("Error creating contact:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
