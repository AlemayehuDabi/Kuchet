import Image from 'next/image';
import Link from 'next/link';
import { APP_TITLE } from '@/lib/constants';
import Menu from './menu';
import logo from '@/public/images/logo.png';

const Header = () => {
  return (
    <header className="w-full border-b mx-auto py-4">
      <div className=" flex justify-between mx-10 items-center">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src={logo}
              alt={`${APP_TITLE} logo`}
              height={48}
              width={48}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_TITLE}
            </span>
          </Link>
        </div>

        <Menu />
      </div>
    </header>
  );
};

export default Header;
