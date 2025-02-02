import prisma from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const review = await prisma.review.create({
    data: body,
  });
console.log(body)
  if (!review) {
    return NextResponse.json({
      status: 400,
      message: "Review not created",
    });
  }
  
  return NextResponse.json({
    status: 200,
    message: "Review created successfully",
    review,
  });
}
