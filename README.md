# Agricultural PaaS Platform

## Overview
A comprehensive Platform as a Service connecting investors, farmers, suppliers, and buyers in the agricultural ecosystem with transparency, accountability, and financial management.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Database:** SQLite (via Prisma)
- **Styling:** Tailwind CSS
- **Authentication:** NextAuth.js

## Project Structure

See [CODEBASE_STRUCTURE.md](./CODEBASE_STRUCTURE.md) for detailed structure documentation.

### Key Directories
- `/app` - Next.js App Router (pages and API routes)
- `/components` - React components (UI, auth, feature-specific)
- `/lib` - Utilities, auth module, API client
- `/types` - TypeScript type definitions
- `/prisma` - Database schema and migrations

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Initialize database
npx prisma migrate dev

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

See `.env.example` for required environment variables.

## Development

```bash
# Run development server
npm run dev

# Run database migrations
npx prisma migrate dev

# Open Prisma Studio
npx prisma studio

# Build for production
npm run build
```

## MVP Features

1. User authentication (Investor, Farmer, Admin roles)
2. Farmer registration and verification
3. Investment listing and matching
4. Fund management and tracking
5. Supply chain product catalog
6. Produce marketplace
7. Financial dashboards

## License

ISC

