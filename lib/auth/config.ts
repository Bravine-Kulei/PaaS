/**
 * NextAuth configuration
 * 
 * This file will contain NextAuth.js configuration
 * Separated from main auth module for easy management
 */

export const authConfig = {
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/login",
  },
  session: {
    strategy: "jwt" as const,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
} as const;

