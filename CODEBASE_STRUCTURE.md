# Codebase Structure

## Overview
Professional, scalable codebase structure following Next.js 14 App Router best practices and enterprise-level organization.

---

## Directory Structure

```
PaaS/
├── app/                          # Next.js 14 App Router
│   ├── (auth)/                   # Auth group route
│   │   ├── login/
│   │   ├── register/
│   │   └── layout.tsx
│   ├── (dashboard)/              # Protected dashboard group
│   │   ├── farmer/
│   │   │   ├── dashboard/
│   │   │   ├── profile/
│   │   │   ├── investments/
│   │   │   │   ├── create/
│   │   │   │   └── [id]/
│   │   │   ├── expenses/
│   │   │   └── layout.tsx
│   │   ├── investor/
│   │   │   ├── dashboard/
│   │   │   ├── browse/
│   │   │   ├── portfolio/
│   │   │   └── layout.tsx
│   │   └── admin/
│   │       ├── dashboard/
│   │       ├── farmers/
│   │       └── layout.tsx
│   ├── api/                      # API routes
│   │   ├── auth/                 # Auth endpoints
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── logout/
│   │   ├── farmers/              # Farmer endpoints
│   │   ├── investors/            # Investor endpoints
│   │   ├── investments/          # Investment endpoints
│   │   ├── transactions/         # Transaction endpoints
│   │   ├── products/             # Supply chain endpoints
│   │   └── produce/              # Marketplace endpoints
│   ├── api/[...all]/route.ts     # Catch-all API route (if needed)
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   ├── loading.tsx                # Global loading
│   └── error.tsx                  # Global error
│
├── components/                    # React components
│   ├── ui/                       # shadcn/ui components (reusable)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── table.tsx
│   │   ├── dialog.tsx
│   │   └── ... (other UI primitives)
│   ├── auth/                     # Auth-specific components
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   └── ProtectedRoute.tsx
│   ├── farmer/                   # Farmer-specific components
│   │   ├── FarmerProfile.tsx
│   │   ├── InvestmentListingForm.tsx
│   │   ├── TransactionForm.tsx
│   │   └── ExpenseTracker.tsx
│   ├── investor/                 # Investor-specific components
│   │   ├── FarmerCard.tsx
│   │   ├── InvestmentCard.tsx
│   │   └── PortfolioSummary.tsx
│   ├── marketplace/              # Marketplace components
│   │   ├── ProduceCard.tsx
│   │   └── ProductCatalog.tsx
│   ├── dashboard/                # Shared dashboard components
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   ├── StatsCard.tsx
│   │   └── ChartCard.tsx
│   └── layout/                   # Layout components
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── Container.tsx
│
├── lib/                          # Libraries and utilities
│   ├── auth/                     # Auth module (separated)
│   │   ├── config.ts             # NextAuth config
│   │   ├── providers.ts          # Auth providers
│   │   ├── middleware.ts         # Auth middleware
│   │   ├── session.ts            # Session helpers
│   │   └── types.ts              # Auth types
│   ├── api/                      # API client utilities
│   │   ├── client.ts             # API client setup
│   │   ├── endpoints.ts          # API endpoint constants
│   │   └── errors.ts             # Error handling
│   ├── db/                       # Database utilities
│   │   ├── prisma.ts             # Prisma client instance
│   │   └── queries/              # Database query helpers
│   │       ├── farmers.ts
│   │       ├── investments.ts
│   │       └── transactions.ts
│   ├── utils/                    # General utilities
│   │   ├── format.ts             # Formatting helpers
│   │   ├── validation.ts         # Validation schemas
│   │   ├── date.ts               # Date utilities
│   │   └── currency.ts           # Currency formatting
│   ├── hooks/                    # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useInvestments.ts
│   │   └── useTransactions.ts
│   └── constants/                # Constants
│       ├── roles.ts
│       ├── status.ts
│       └── routes.ts
│
├── types/                        # TypeScript type definitions
│   ├── auth.ts                   # Auth types
│   ├── user.ts                   # User types
│   ├── farmer.ts                 # Farmer types
│   ├── investment.ts             # Investment types
│   ├── transaction.ts            # Transaction types
│   ├── product.ts                # Product types
│   └── api.ts                    # API response types
│
├── prisma/                       # Prisma ORM
│   ├── schema.prisma             # Database schema
│   ├── seed.ts                   # Database seeds
│   └── migrations/               # Database migrations
│
├── middleware.ts                 # Next.js middleware
│
├── public/                       # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── styles/                       # Global styles
│   └── globals.css
│
├── .env.local                    # Environment variables (gitignored)
├── .env.example                  # Environment template
├── tailwind.config.ts            # Tailwind config
├── tsconfig.json                 # TypeScript config
├── next.config.js                # Next.js config
└── package.json                  # Dependencies
```

---

## Key Principles

### 1. **Separation of Concerns**
- `/lib/auth/` - All authentication logic isolated
- `/components/ui/` - Reusable UI components
- `/lib/utils/` - Pure utility functions
- Feature-based organization in `/components/` and `/app/`

### 2. **Type Safety**
- Centralized types in `/types/` directory
- Shared types across frontend and backend
- Strict TypeScript configuration

### 3. **Reusability**
- `/components/ui/` - Design system components
- `/lib/utils/` - Shared utilities
- Custom hooks in `/lib/hooks/` for reusable logic

### 4. **API Organization**
- RESTful structure in `/app/api/`
- API client utilities in `/lib/api/`
- Error handling centralized

### 5. **Database Layer**
- Prisma client in `/lib/db/prisma.ts`
- Query helpers organized by domain in `/lib/db/queries/`

### 6. **Auth Module Isolation**
- Complete auth functionality in `/lib/auth/`
- Session management, middleware, providers all separated
- Easy to swap or extend auth methods

---

## File Naming Conventions

- **Components:** PascalCase (`FarmerProfile.tsx`)
- **Utils:** camelCase (`formatCurrency.ts`)
- **Types:** camelCase with `.ts` extension (`investment.ts`)
- **Constants:** UPPER_SNAKE_CASE inside files
- **Routes:** lowercase with dashes (`/app/api/farmers/verify/route.ts`)

---

## Import Path Aliases

Configured in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"],
      "@/types/*": ["./types/*"],
      "@/app/*": ["./app/*"]
    }
  }
}
```

Example imports:
```typescript
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/hooks/useAuth'
import { Farmer } from '@/types/farmer'
import { formatCurrency } from '@/lib/utils/currency'
```

---

## Next Steps

This structure provides:
- ✅ Clear separation of auth functionality
- ✅ Reusable components in dedicated folder
- ✅ Utils organized and accessible
- ✅ Professional, scalable architecture
- ✅ Easy to maintain and extend
- ✅ Type-safe throughout

Ready for implementation!

