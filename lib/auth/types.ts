/**
 * Auth module types
 */

import { UserRole } from "@/types/user";

export interface AuthConfig {
  secret: string;
  expiresIn: string;
}

export interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface AuthContext {
  user: SessionUser | null;
  isLoading: boolean;
}

