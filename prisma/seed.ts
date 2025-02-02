import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed Reviews
  const reviewsData = [
    {
      authorName: "John Doe",
      position: "Software Engineer",
      review: "Great company culture and interesting projects.",
    },
    {
      authorName: "Jane Smith",
      position: "Product Manager",
      review: "Excellent work-life balance and growth opportunities.",
    },
    {
      authorName: "Mike Johnson",
      position: "UX Designer",
      review: "Innovative environment with cutting-edge tools.",
    },
  ];

  for (const review of reviewsData) {
    await prisma.review.create({
      data: review,
    });
  }

  console.log("Seeded Reviews");

  // Seed Candidates
  const candidatesData = [
    {
      id: "63f5c7f36a6d42d9b77f1f68",
      name: "Alice Johnson",
      experience: 5,
      notice: "Immediately Available",
      ctc: 800000,
      skills: ["JavaScript", "React", "Node.js"],
    },
    {
      id: "63f5c7f36a6d42d9b77f1f69",
      name: "Bob Smith",
      experience: 3,
      notice: "1-15 days",
      ctc: 600000,
      skills: ["Python", "Docker"],
    },
    {
      id: "63f5c7f36a6d42d9b77f1f70",
      name: "Charlie Brown",
      experience: 7,
      notice: "16-30 days",
      ctc: 1000000,
      skills: ["React", "Next.js", "Node.js"],
    },
    {
      id: "63f5c7f36a6d42d9b77f1f71",
      name: "David Lee",
      experience: 2,
      notice: "46-60 days",
      ctc: 400000,
      skills: ["Angular", "JavaScript"],
    },
  ];

  for (const candidate of candidatesData) {
    await prisma.candidate.create({
      data: candidate,
    });
  }

  console.log("Seeded Candidates");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
