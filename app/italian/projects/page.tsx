import Projects from "@/app/components/projects/italian";
import Link from "next/link";

export default function Page() {
  return (
    <main  data-aos="fade-right" className="flex flex-col">
      <Link href="https://github.com/fnhernandorena" className="text-xl flex justify-center rounded-xl bg-sky-700 md:bg-gray-800 duration-300 hover:bg-sky-700 m-3 p-3">Visita il mio account GitHub per vedere altri progetti!</Link>
      <Projects />
    </main>
  );
}