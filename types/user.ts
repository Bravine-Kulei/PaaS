export enum UserRole {
  FARMER = "FARMER",
  INVESTOR = "INVESTOR",
  ADMIN = "ADMIN",
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserSession {
  user: {
    id: string;
    email: string;
    name: string;
    role: UserRole;
  };
}

