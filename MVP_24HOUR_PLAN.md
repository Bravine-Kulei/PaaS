# 24-HOUR MVP SPRINT PLAN

## Timeline Breakdown

### **Phase 1: Setup (Hour 0-2)**
- [ ] Initialize Next.js project with TypeScript
- [ ] Install dependencies (Prisma, NextAuth, Tailwind, shadcn/ui)
- [ ] Set up Prisma with SQLite
- [ ] Create database schema
- [ ] Basic project structure

### **Phase 2: Auth System (Hour 2-5)**
- [ ] NextAuth configuration
- [ ] Login/Signup pages
- [ ] User registration (role selection)
- [ ] Protected route middleware
- [ ] Dashboard routing by role

### **Phase 3: Farmer Features (Hour 5-9)**
- [ ] Farmer registration form
- [ ] Farmer profile page
- [ ] Investment listing creation
- [ ] List farmer's investment listings
- [ ] Basic verification status badge

### **Phase 4: Investor Features (Hour 5-9)**
- [ ] Browse all farmers
- [ ] View farmer profiles
- [ ] Browse investment listings
- [ ] Make investment (simulated)
- [ ] Investment confirmation

### **Phase 5: Fund Management (Hour 9-13)**
- [ ] Transaction model and CRUD
- [ ] Add expense form
- [ ] View transactions list
- [ ] Calculate fund balance
- [ ] Financial dashboard

### **Phase 6: Supply Chain (Hour 13-16)**
- [ ] Product model (seeds, fertilizers, insecticides)
- [ ] Product listing page
- [ ] Basic product cards
- [ ] Supplier information display

### **Phase 7: Marketplace (Hour 13-16)**
- [ ] Produce listing model
- [ ] Create produce listing form
- [ ] Browse produce listings
- [ ] Basic filtering

### **Phase 8: Dashboards (Hour 16-20)**
- [ ] Farmer dashboard:
  - Total funds received
  - Current balance
  - Recent transactions
  - Active investments
  - Listed produce
- [ ] Investor dashboard:
  - Investment portfolio
  - Active investments
  - Total invested

### **Phase 9: UI Polish (Hour 20-22)**
- [ ] Responsive design
- [ ] Loading states
- [ ] Error handling
- [ ] Form validations
- [ ] Basic animations

### **Phase 10: Deployment (Hour 22-24)**
- [ ] Environment variables setup
- [ ] Database migration
- [ ] Deploy to Vercel
- [ ] Test deployed version
- [ ] Fix critical bugs
- [ ] Demo preparation

---

## File Structure

```
PaaS/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/
│   │   ├── farmer/
│   │   │   ├── dashboard/
│   │   │   ├── profile/
│   │   │   ├── investments/
│   │   │   └── expenses/
│   │   └── investor/
│   │       ├── dashboard/
│   │       └── browse/
│   ├── api/
│   │   ├── auth/
│   │   └── [endpoints]
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/ (shadcn components)
│   └── [custom components]
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   └── utils.ts
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
└── public/
```

---

## Priority Features (Must Have)

1. ✅ User authentication (login/register with roles)
2. ✅ Farmer profile & registration
3. ✅ Investment listing creation
4. ✅ Investment browsing & making
5. ✅ Basic fund tracking
6. ✅ Dashboard views
7. ✅ Supply chain catalog
8. ✅ Produce marketplace

---

## Nice to Have (If Time Permits)

- Basic search functionality
- Profile editing
- Transaction categories
- Simple charts/graphs
- Email notifications (simulated)

---

## Quick Reference Commands

```bash
# Initialize Next.js
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir

# Install dependencies
npm install prisma @prisma/client next-auth
npm install -D prisma
npm install bcryptjs @types/bcryptjs

# Prisma setup
npx prisma init --datasource-provider sqlite
npx prisma migrate dev --name init
npx prisma generate
npx prisma studio

# Run dev
npm run dev

# Deploy
vercel
```

---

**START TIME:** __________  
**END TIME:** __________  
**STATUS:** Ready to begin!

