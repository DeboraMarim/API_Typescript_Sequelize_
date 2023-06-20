import { Product } from './Product';

export type Order = {
  id: number;
  userId: number;
  productIds?: Product[];
};

export type OrderProduct = {
  id: number;
  userId: number;
  productIds?: number[];
};

export type PartialOrder = {
  id?: number;
  userId: number;
  productIds?: number[];
};