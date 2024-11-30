import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export default function Page() {
  return (
    <div  data-aos="fade-right" className="flex-1">
      <div className="w-full flex justify-start">
        <div className="w-full md:w-1/2 my-2 mx-2">
          <h3 className="text-3xl font-bold text-sky-300 border-double border-b-8 border-r-8 border-sky-300">
            Contacto Rapido
          </h3>
          <div className="flex justify-around text-3xl pt-10">
            <Link
              className="hover:text-pink-500 duration-300"
              href="https://www.instagram.com/nico_hernandorenaa/"
            >
              <FaInstagram />
            </Link>
            <Link
              className="duration-300 hover:text-red-600"
              href="mailto:fnhernandorena@gmail.com"
            >
              <IoMailOutline />
            </Link>
            <Link
              className="duration-300 hover:text-blue-700"
              href="https://www.linkedin.com/in/fnhernandorena/"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="duration-300 hover:text-black"
              href="https://github.com/fnhernandorena"
            >
              <FaGithub />
            </Link>
            <Link
              className="duration-300 hover:text-blue-400"
              href="https://t.me/Nico_Hernandorena"
            >
              <FaTelegramPlane />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
