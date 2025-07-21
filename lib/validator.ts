import { z } from 'zod';
import { formatNumberWithDecimal } from './utils';

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    { message: 'Price must have exactly two decimal places' }
  );

export const insertProductSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters' })
    .max(10, { message: 'Name must be at least 3 characters' }),
  slug: z.string().min(3, { message: 'Slug must be at least 3 characters' }),
  category: z
    .string()
    .min(3, { message: 'Category must be at least 3 characters' }),
  images: z.array(z.string()).min(1, 'Product must have at least one image'),
  brand: z.string().min(3, 'Brand must be at least 3 characters'),
  description: z.string().min(3, 'Description must be at least 3 characters'),
  stock: z.coerce.number(),
  price: currency,
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
});

// sign in schema
export const signInSchemaWithCredintial = z.object({
  email: z.email('invalid email'),
  password: z.string().min(6, 'minimum value for password must be 6'),
});

// sign-up schema
export const signUpSchemaWithCredintial = z
  .object({
    name: z.string().min(3, 'minimum value for name must be 3'),
    email: z.email('invalid email'),
    password: z.string().min(6, 'minimum value for password must be 6'),
    confirmPassword: z
      .string()
      .min(6, 'minimum value for confirm password must be 6'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });
