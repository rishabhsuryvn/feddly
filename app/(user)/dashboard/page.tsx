import NewProject from "@/components/NewProject";
import React from "react";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import ProjectList from "./ProjectList";

export default async function page() {
  const { userId } = await auth();
  if (!userId) return null;

  const userProjects = await db
    .select()
    .from(projects)
    .where(eq(projects.userId, userId));

  console.log(userId);
  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-3xl text-center font-bold my-4">Your Projects</h1>
        <NewProject />
      </div>

      <ProjectList projects={userProjects} />
    </div>
  );
}
