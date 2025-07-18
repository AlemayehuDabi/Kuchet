'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react';

export default function ProductImage({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0);

  if (!images || images.length === 0) {
    return <p className="text-center">No images available</p>;
  }

  return (
    <div className="px-5 space-y-5">
      <Image
        src={images[currentImage]}
        alt="image"
        width={1000}
        height={1000}
        className="object-contain object-center px-5 border border-gray-200 cursor-pointer p-3 rounded-md bg-gray-50/20"
      />

      <div className="flex items-center gap-4">
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setCurrentImage(index)}
            className={cn(
              'border cursor-pointer hover:border-green-600 p-2 rounded-xl',
              currentImage === index && 'border-green-500'
            )}
          >
            <Image
              src={image}
              alt="image"
              width={100}
              height={100}
              className="object-contain object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
