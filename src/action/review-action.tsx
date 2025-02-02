"use server";

import prisma from "@/lib/prisma";

export const getReview = async () => {
  const reviews = await prisma.review.findMany();
  return reviews;
};
