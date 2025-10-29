export const ROUTES = {
  // Auth
  LOGIN: "/login",
  REGISTER: "/register",
  
  // Farmer
  FARMER_DASHBOARD: "/farmer/dashboard",
  FARMER_PROFILE: "/farmer/profile",
  FARMER_INVESTMENTS: "/farmer/investments",
  FARMER_EXPENSES: "/farmer/expenses",
  
  // Investor
  INVESTOR_DASHBOARD: "/investor/dashboard",
  INVESTOR_BROWSE: "/investor/browse",
  INVESTOR_PORTFOLIO: "/investor/portfolio",
  
  // Admin
  ADMIN_DASHBOARD: "/admin/dashboard",
  ADMIN_FARMERS: "/admin/farmers",
} as const;

