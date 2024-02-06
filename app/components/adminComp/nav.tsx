"use client"

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
    { name: "Blog", href: "/admin/edit" },
    {
      name: "Studies",
      href: "/admin/edit/studies",
    },
    {
      name: "Projects",
      href: "/admin/edit/projects"
    },
    { name: "Work experience", href: "/admin/edit/work-experience" },
  ];

const Nav = () => {
  const pathname = usePathname();
    return (
      <nav className="w-full flex justify-center bg-black h-20 py-1">
       <div className="w-full max-w-3xl flex  justify-between items-center  ">{links.map((link) => {
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
      })}</div> 

      </nav>
    );
  };
  
  export default Nav;