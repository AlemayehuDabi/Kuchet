import React from 'react';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Product } from '@/types';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="dark:bg-white">
      <CardHeader>
        <Link href={`${product.slug}`}>
          <Image
            src={product.images[0]} // Displaying the first image
            alt={product.name}
            width={500}
            height={300}
            className="object-contain mb-4 rounded h-[15rem] w-[20rem]"
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 dark:text-black">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <div className="flex justify-between items-center">
            <p className="text-gray-600 text-lg ">${product.price}</p>
            <p className="text-sm text-gray-500 ">
              Rating: {product.rating} ({product.numReviews} reviews)
            </p>
          </div>
          {product.stock !== undefined && product.stock <= 0 ? (
            <p className="text-red-500 font-bold mt-2">Out of Stock</p>
          ) : (
            <Button>Add to Cart</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
