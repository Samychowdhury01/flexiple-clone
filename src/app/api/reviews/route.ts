import prisma from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body);
    const review = await prisma.review.create({
      data: body,
    });
console.log(review, 'from line 11')
    if (!review) {
      return NextResponse.json({
        status: 400,
        message: "Review not created",
        data: null,
      });
    }

    return NextResponse.json({
      status: 200,
      message: "Review created successfully",
      data: review,
    });
  } catch (err) {
    NextResponse.json({
      status: 500,
      message: "Internal Server Error",
      data: err,
    });
  }
}
