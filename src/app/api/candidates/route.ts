import prisma from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body, 'from request');
  
  if (Object.entries(body).length === 0) {
    return NextResponse.json({
      status: 404,
      message: "No data found in the body",
      data: null,
    });
  }

  // Ensure skills are converted to lowercase
  const candidate = await prisma.candidate.create({
    data: {
      ...body,
      skills: body?.skills.map((skill: string) => skill.toLowerCase()) 
    },
  });

  if (!candidate) {
    return NextResponse.json({
      status: 400,
      message: "Candidate not created",
      data: null,
    });
  }

  return NextResponse.json({
    status: 200,
    message: "Candidate created successfully",
    data: candidate,
  });
}
