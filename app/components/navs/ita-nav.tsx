"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { CiSettings } from "react-icons/ci";

const links = [
  { name: "Informazioni generali", href: "/italian" },
  {
    name: "Formazione accademica",
    href: "/italian/studies",
  },
  {
    name: "Progetti",
    href: "/italian/projects"
  },
  { name: "Esperienza di lavoro", href: "/italian/work-experience" },
  { name: "Contatto", href: "/italian/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full flex fixed bg-black top-0 justify-between items-center  h-20 px-8 py-1">
      <p className="text-white text-xl border-2 border-cyan-600 rounded-lg p-4">NicoScript</p>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("border-l-2 border-r-2 flex border-gray-600 p-3 w-28 justify-center  text-white h-full items-center my-1 duration-300 hover:border-sky-300", {
              "border-sky-300": pathname === link.href,
            })}
          >
            <p className="hidden md:block text-wrap text-center">{link.name}</p>
          </Link>
        );
      })}
      <Link
      href={'/'}>
      <CiSettings className="text-white h-12 w-12"/></Link>
    </nav>
  );
};

export default Nav;
