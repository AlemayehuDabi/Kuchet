'use client';
import React from 'react';

import { useTheme } from 'next-themes';
import { ScaleLoader } from 'react-spinners'; // Import desired loaders

export default function Loading() {
  // You can customize the color, size, speed, etc., using props
  const { theme } = useTheme();

  const spinnerColor = theme === 'light' ? '#364153' : '#f3f4f6'; // A nice green-blue color

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-gray-700"
      aria-live="polite"
      aria-busy="true"
    >
      <ScaleLoader
        color={spinnerColor}
        loading={true}
        height={70}
        width={10}
        radius={2}
        margin={2}
        className="mb-4"
      />

      <div
        className={`text-xl font-medium ${
          theme === 'dark' ? 'text-gray-500' : 'text-gray-300'
        }`}
      >
        Loading...
      </div>
    </div>
  );
}
