export enum ProductType {
  SEEDS = "SEEDS",
  FERTILIZER = "FERTILIZER",
  INSECTICIDE = "INSECTICIDE",
}

export interface Product {
  id: string;
  name: string;
  type: ProductType;
  supplier: string;
  verified: boolean;
  description?: string;
  price?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProduceListing {
  id: string;
  farmerId: string;
  name: string;
  price: number;
  quantity: number;
  unit: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

