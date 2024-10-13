import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { error: "Missing DATABASE_URL environment variable" },
      { status: 500 }
    );
  }
  try {
    const body = await req.json();
    const { title, content } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const user = await prisma.post.create({
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Error during user creation:", error);
    return NextResponse.json(
      { error: "User creation failed" },
      { status: 400 }
    );
  }
}
