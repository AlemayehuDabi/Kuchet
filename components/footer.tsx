import { APP_TITLE } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t">
      <div className="py-5 flex-center">
        {currentYear} {APP_TITLE}. All Right Reserved
      </div>
    </footer>
  );
}
