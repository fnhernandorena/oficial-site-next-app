'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Sobre mi', href: '/spanish' },
  {
    name: 'Formacion Academica',
    href: '/spanish/studies',
  },
  { name: 'Experiencia laboral', href: '/spanish/work-experience' },
  { name: 'Contacto', href: '/spanish/contact' },
];

const Nav = () => {
  const pathname = usePathname();
    return (
        <nav className="flex w-full flex-row justify-around bg-neutral-700 mb-10">
       {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'bg-red-200 p-3 w-56 text-center rounded-2xl',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
      </nav>
    );
  };
  
  export default Nav;