import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';

async function main() {
  const prisma = new PrismaClient();
  // deleting product from the db before seeding
  await prisma.product.deleteMany();

  // deleting user related table from the db before seeding
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  // product seeding
  await prisma.product.createMany({ data: sampleData.products });
  // user seeding
  await prisma.user.createMany({ data: sampleData.users });
}

main();
