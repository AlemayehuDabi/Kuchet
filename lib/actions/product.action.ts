'use server';

import { PrismaClient } from '@prisma/client';
import { JsonObjectConverter } from '../utils';
import { LATEST_PRODUCT_LIMIT } from '../constants';

export const GetLastestProduct = async () => {
  const prisma = new PrismaClient();

  const response = await prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: { createdAt: 'desc' },
  });

  return JsonObjectConverter(response);
};
