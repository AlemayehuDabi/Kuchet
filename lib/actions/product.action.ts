'use server';

import { prisma } from '@/db/prisma';
import { JsonObjectConverter } from '../utils';
import { LATEST_PRODUCT_LIMIT } from '../constants';

export const GetLastestProduct = async () => {
  const response = await prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: { createdAt: 'desc' },
  });

  return JsonObjectConverter(response);
};

// get a product by slug
export const GetProductBySlug = async (slug: string) => {
  const response = await prisma.product.findFirst({
    where: {
      slug: slug,
    },
  });

  return JsonObjectConverter(response);
};
