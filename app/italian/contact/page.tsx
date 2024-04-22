import Link from "next/link";
import React from "react";

const links = [
  {
    name: " fnhernandorena@gmail.com",
    href: "mailto:fnhernandorena@gmail.com",
    title: "Email:",
  },
  {
    name: "Francisco Nicolas Hernandorena",
    href: "https://www.linkedin.com/in/fnhernandorena/",
    title: "LinkedIn:",
  },
  {
    name: " Nico_hernandorenaa",
    href: "https://www.instagram.com/nico_hernandorenaa/",
    title: "Instagram:",
  },
  {
    name: " Nico_Hernandorena",
    href: "https://t.me/Nico_Hernandorena",
    title: " Telegram:",
  },
];

export default function Page() {
  return (
    <div  data-aos="fade-right" className="flex-1">
      <div className="w-full flex justify-start">
        <div className="w-full md:w-1/2 my-2 mx-2">
          <h3 className="text-3xl font-bold text-sky-300 border-double border-b-8 border-r-8 border-sky-300">
            Contatto Rapido
          </h3>
          {links.map((link) => {
            return (
              <div key={link.name}>
                <p>{link.title}</p>
                <Link
                  href={link.href}
                  className={
                    "flex justify-center rounded-xl bg-sky-700 md:bg-gray-800 duration-300 hover:bg-sky-700 m-3 p-3"
                  }
                >
                  <p className=" text-wrap text-center">{link.name}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
