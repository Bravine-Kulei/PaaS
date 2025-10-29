/**
 * API endpoint constants
 */

const API_BASE = "/api";

export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: `${API_BASE}/auth/login`,
    REGISTER: `${API_BASE}/auth/register`,
    LOGOUT: `${API_BASE}/auth/logout`,
    SESSION: `${API_BASE}/auth/session`,
  },
  
  // Farmers
  FARMERS: {
    BASE: `${API_BASE}/farmers`,
    PROFILE: (id: string) => `${API_BASE}/farmers/${id}`,
    VERIFY: (id: string) => `${API_BASE}/farmers/${id}/verify`,
  },
  
  // Investors
  INVESTORS: {
    BASE: `${API_BASE}/investors`,
    PORTFOLIO: (id: string) => `${API_BASE}/investors/${id}/portfolio`,
  },
  
  // Investments
  INVESTMENTS: {
    BASE: `${API_BASE}/investments`,
    LISTING: (id: string) => `${API_BASE}/investments/${id}`,
    CREATE: `${API_BASE}/investments/create`,
    INVEST: (id: string) => `${API_BASE}/investments/${id}/invest`,
  },
  
  // Transactions
  TRANSACTIONS: {
    BASE: `${API_BASE}/transactions`,
    CREATE: `${API_BASE}/transactions/create`,
    BY_FARMER: (farmerId: string) => `${API_BASE}/transactions/farmer/${farmerId}`,
  },
  
  // Products (Supply Chain)
  PRODUCTS: {
    BASE: `${API_BASE}/products`,
    BY_TYPE: (type: string) => `${API_BASE}/products/type/${type}`,
  },
  
  // Produce (Marketplace)
  PRODUCE: {
    BASE: `${API_BASE}/produce`,
    LISTING: (id: string) => `${API_BASE}/produce/${id}`,
    CREATE: `${API_BASE}/produce/create`,
  },
} as const;

