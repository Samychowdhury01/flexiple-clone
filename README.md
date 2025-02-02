# Flexiple Clone

A full-stack Next.js application built with Prisma and MongoDB. The project includes API routes for handling candidates and reviews, as well as server actions to retrieve data from the database.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS, shadcn
- **Database:** MongoDB (via Prisma ORM)
- **UI Components:** Radix UI
- **Build Tools:** TypeScript, ESLint, Turbopack

## Features

- API Routes:
  - `POST /api/candidates` - Create a new candidate in the database.
  - `POST /api/reviews` - Create a new review in the database.
- Server actions for retrieving candidates and reviews data.

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (latest LTS recommended)
- MongoDB (or a MongoDB Atlas instance)
- Package manager (npm)

### Clone the repository

```sh
git clone https://github.com/Samychowdhury01/flexiple-clone.git
cd flexiple-clone
```

### Install dependencies

```sh
npm install

```

### Setup Environment Variables

Create a `.env` file in the root directory and add the following:

```
DATABASE_URL="mongodb+srv://<admin-username>:<admin-password>@cluster0.ktqos2d.mongodb.net/<collection-name>?retryWrites=true&w=majority"
```

### Run the Development Server

```sh
npm run dev
```

This will start the Next.js development server on `http://localhost:3000`.

### Seed the Database (Optional)

If you need initial test data, run:

```sh
npx prisma db seed
```

## Project Structure

```
.
├── prisma/          # Prisma schema and migration files
    └── seed.ts      # Seed script
├── public/          # Static assets
├── src/
│   ├── app/         # Next.js App Router components
│   |   └── api      # API routes
│   ├── assets/      # images and other files
│   ├── components/  # UI components
│   ├── lib/         # Utility functions
│   ├── actions/     # For server action
│   ├── font/        # as google does provide supply font
│   └── types        # define types
├── .env             # Environment variables
├── next.config.js   # Next.js configuration
├── package.json     # Project dependencies
└── README.md        # Project documentation
```
