/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Define routes for the API endpoints for application
 * e.g., /api/posts, /api/products, etc.
 * Make sure to handle authentication and authorization as needed.
 */

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { error: "Missing DATABASE_URL environment variable" },
      { status: 500 }
    );
  }

  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts ?? []);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
