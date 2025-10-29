export const USER_ROLES = {
  FARMER: "FARMER",
  INVESTOR: "INVESTOR",
  ADMIN: "ADMIN",
} as const;

export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES];

