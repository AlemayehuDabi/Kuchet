import Image from 'next/image';
import React from 'react';
import not_found from '@/public/images/custom/404_Error_-_Page_Not_Found-removebg-preview.png';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto">
      <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen gap-10 mx-10">
        <div className="flex flex-col gap-4 text-4xl font-bold">
          <span>Whoops.</span>
          <span>This page is NOT available</span>
          <span className="text-lg text-wrap">
            The link you clicked is may be broken or the page may have be
            removed
          </span>
          <Link href="/">
            <Button variant="link">Go Back To Home Page</Button>
          </Link>
        </div>
        <Image
          src={not_found}
          alt="NOT found"
          className="w-[30rem] h-[30rem]"
          color="white"
        />
      </div>
    </div>
  );
}
