export enum InvestmentStatus {
  ACTIVE = "ACTIVE",
  FUNDED = "FUNDED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export interface InvestmentListing {
  id: string;
  farmerId: string;
  title: string;
  description: string;
  amountNeeded: number;
  amountRaised: number;
  status: InvestmentStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface Investment {
  id: string;
  investorId: string;
  listingId: string;
  amount: number;
  status: InvestmentStatus;
  createdAt: Date;
}

