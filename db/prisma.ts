import { neonConfig, Pool } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';

// Set up WebSocket for Neon
neonConfig.webSocketConstructor = ws;

// Define the connection string from environment variables
const connectionString = process.env.DATABASE_URL;

// Instead of creating a Pool instance, pass the connection configuration directly
const adapter = new PrismaNeon({ connectionString });

// Extend PrismaClient with custom result transformer
export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
  },
});
