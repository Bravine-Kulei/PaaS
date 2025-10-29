export enum VerificationStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

export interface FarmerProfile {
  id: string;
  userId: string;
  farmName: string;
  location: string;
  farmSize: number;
  crops: string[];
  verificationStatus: VerificationStatus;
  documents?: string[];
  createdAt: Date;
  updatedAt: Date;
}

