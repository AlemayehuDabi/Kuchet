import { Button } from '@/components/ui/button';
import { ThemeTogger } from '@/components/ThemeTogger';
import Link from 'next/link';
import { MenuIcon, ShoppingCart, UserIcon } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Menu = () => {
  return (
    <div className="flex justify-end">
      <nav className="hidden md:flex w-full max-w-xs gap-1 items-center">
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon /> Sign In
          </Link>
        </Button>
        <ThemeTogger />
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Kuchet</SheetTitle>
              <SheetDescription>Modern Ecommerce Website</SheetDescription>
            </SheetHeader>
            <div className="grid flex-1 auto-rows-min gap-6 px-4">
              <ThemeTogger />
              <Button asChild variant="ghost">
                <Link href="/cart">
                  <ShoppingCart /> Cart
                </Link>
              </Button>
              <Button asChild>
                <Link href="/sign-in">
                  <UserIcon /> Sign In
                </Link>
              </Button>
            </div>
            <SheetFooter>
              <Button>Sign-out</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
