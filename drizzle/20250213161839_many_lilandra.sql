CREATE TABLE "feedbacks" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_id" integer,
	"user_name" text,
	"user_email" text,
	"message" text,
	"rating" integer
);
--> statement-breakpoint
CREATE TABLE "subscriptions" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar,
	"stripe_customer_id" text,
	"stripe_subscription_id" text,
	"subscribed" boolean
);
--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "user_id" varchar;