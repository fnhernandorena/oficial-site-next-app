"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { CiSettings } from "react-icons/ci";

const links = [
  { name: "Sobre mi", href: "/spanish" },
  {
    name: "Formacion Academica",
    href: "/spanish/studies",
  },
  {
    name: "Proyectos",
    href: "/spanish/projects"
  },
  { name: "Experiencia laboral", href: "/spanish/work-experience" },
  { name: "Contacto", href: "/spanish/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full flex fixed bg-black top-0 justify-between items-center  h-20 px-8 py-1">
      <p className="text-white text-xl border border-cyan-600 rounded-lg p-4">NicoScript</p>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("border-l border-r flex border-gray-600 p-3 w-28 justify-center  text-white h-full items-center my-1", {
              "border-sky-300 text-sky-300 text-center": pathname === link.href,
            })}
          >
            <p className="hidden md:block text-wrap text-center">{link.name}</p>
          </Link>
        );
      })}
      <CiSettings className="text-white h-12 w-12"/>
    </nav>
  );
};

export default Nav;
