import { insertProductSchema } from '@/lib/validator';
import { z } from 'zod';

// product type
export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  numReviews: number;
  createdAt: Date;
};
