"use client";

import { FaHouseUser } from "react-icons/fa6";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { FaTools } from "react-icons/fa";
import { IoDesktopSharp, IoCall } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: " General information", icon: FaHouseUser, href: "/english" },
  {
    name: "Academic training", icon: HiMiniAcademicCap,
    href: "/english/studies",
  },
  {
    name: "Projects", icon: IoDesktopSharp,
    href: "/english/projects"
  },
  { name: "Work experience",icon: FaTools, href: "/english/work-experience" },
  { name: "Contact", icon: IoCall, href: "/english/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full flex fixed bg-black bottom-0 md:top-0 justify-between items-center  h-20 md:px-8 pb-5 md:pb-1 py-1">
      <p className="hidden md:block text-white text-xl border-2 border-cyan-600 rounded-lg p-4">NicoScript</p>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("border-l-2 border-r-2 flex border-gray-600 p-3 w-28 justify-around flex-col  text-white h-full items-center m-1 duration-300 hover:border-sky-300", {
              "border-sky-300": pathname === link.href,
            })}
          >
            <p className="hidden md:block text-wrap text-center">{link.name}</p><div className="">{link.icon && <link.icon />}</div>
          </Link>
        );
      })}
      <Link
      href={'/'}>
      <CiSettings className="hidden md:block text-white h-12 w-12"/></Link>
    </nav>
  );
};

export default Nav;
