/**
 * Define routes for the API endpoints for application
 * e.g., /api/users, /api/products, etc.
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
    const users = await prisma.user.findMany();
    return NextResponse.json(users ?? []);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
