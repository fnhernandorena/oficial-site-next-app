"use client";

import { FaHouseUser } from "react-icons/fa6";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { FaTools } from "react-icons/fa";
import { IoDesktopSharp, IoCall } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { RxExit } from "react-icons/rx";

const links = [
  { name: "Informazioni generali", icon: FaHouseUser, href: "/italian" },
  {
    name: "Formazione accademica", icon: HiMiniAcademicCap,
    href: "/italian/studies",
  },
  {
    name: "Progetti", icon: IoDesktopSharp,
    href: "/italian/projects"
  },
  { name: "Esperienza di lavoro",icon: FaTools, href: "/italian/work-experience" },
  { name: "Contatto", icon: IoCall, href: "/italian/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="flex fixed left-0 top-0 w-full md:hidden bg-black justify-around items-center p-1">
        {" "}
        <p className="text-white text-xl border-2 border-cyan-600 rounded-lg p-1">
          NicoDev
        </p>
        <Link key="toindex" href={"/"}>
          <RxExit className="border-l-2 border-r-2 px-3 border-gray-600 md:hidden block text-white w-full h-8" />
        </Link>
      </div>
      <nav className="w-full h-20 flex fixed bg-black left-0 bottom-0 md:top-0 justify-between items-center  md:h-24 md:px-8 pb-5 md:pb-1 py-1">
        <p className="hidden md:block text-white text-xl border-2 border-cyan-600 rounded-lg p-4">
          NicoDev
        </p>
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "border-l-2 border-r-2 flex border-gray-600 p-3 w-28 justify-around flex-col  text-white h-full items-center m-1 duration-300 hover:border-sky-300",
                {
                  "border-sky-300": pathname === link.href,
                }
              )}
            >
              <p className="hidden md:block text-wrap text-center">
                {link.name}
              </p>
              <div className="">{link.icon && <link.icon />}</div>
            </Link>
          );
        })}
        <Link key="toindex" href={"/"}>
          <RxExit className="hidden md:block text-white h-12 w-12" />
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
