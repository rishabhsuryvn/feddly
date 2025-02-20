import { pgTable, text, varchar, integer, boolean, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { v4 as gen_uuid } from 'uuid';

export const projects = pgTable("projects", {
  id: uuid("id").default(gen_uuid()).primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  url: text("url").notNull(),
  userId: varchar("user_id").notNull().unique(),
});

export const projectsRelations = relations(projects, ({ many, one }) => ({
  feedbacks: many(feedbacks),
  user: one(subscriptions, {
    fields: [projects.userId],
    references: [subscriptions.userId],
  }),
}));

export const feedbacks = pgTable("feedbacks", {
  id: uuid("id").default(gen_uuid()).primaryKey(),
  projectId: uuid("project_id").notNull().references(() => projects.id, { onDelete: 'cascade' }),
  userName: text("user_name").notNull(),
  userEmail: text("user_email").notNull(),
  message: text("message").notNull(),
  rating: integer("rating").notNull(),
});

export const feedbacksRelations = relations(feedbacks, ({ one }) => ({
  project: one(projects, {
    fields: [feedbacks.projectId],
    references: [projects.id],
  }),
}));

export const subscriptions = pgTable("subscriptions", {
  id: uuid("id").default(gen_uuid()).primaryKey(),
  userId: varchar("user_id").notNull().references(() => projects.userId),
  stripeCustomerId: text("stripe_customer_id"),
  stripeSubscriptionId: text("stripe_subscription_id"),
  subscribed: boolean("subscribed").default(false),
});

export const subscriptionsRelations = relations(subscriptions, ({ one }) => ({
  projects: one(projects, {
    fields: [subscriptions.userId],
    references: [projects.userId],
  }),
}));