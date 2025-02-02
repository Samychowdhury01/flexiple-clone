"use server";

import prisma from "@/lib/prisma";

export const getReviews = async () => {
  const reviews = await prisma.review.findMany();
  return reviews;
};
