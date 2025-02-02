/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/lib/prisma";
import { TFilter } from "@/types/types.candidate";

export const getCandidates = async (filters?: TFilter) => {
  const whereConditions: any = {};

  if (filters) {
    const { skill, notice } = filters;

    if (skill) {
      whereConditions.skills = {
        hasSome: [skill.trim().toLowerCase()],
      };
    }

    if (notice) {
      whereConditions.notice = {
        mode: "insensitive",
        equals: notice,
      };
    }
  }

  const candidates = await prisma.candidate.findMany({
    where: whereConditions,
  });

  return candidates;
};
