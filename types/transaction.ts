export enum TransactionType {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE",
}

export enum TransactionCategory {
  SEEDS = "SEEDS",
  FERTILIZER = "FERTILIZER",
  INSECTICIDE = "INSECTICIDE",
  LABOR = "LABOR",
  EQUIPMENT = "EQUIPMENT",
  INVESTMENT = "INVESTMENT",
  PRODUCE_SALE = "PRODUCE_SALE",
  OTHER = "OTHER",
}

export interface Transaction {
  id: string;
  farmerId: string;
  type: TransactionType;
  amount: number;
  description: string;
  category: TransactionCategory;
  createdAt: Date;
  updatedAt: Date;
}

