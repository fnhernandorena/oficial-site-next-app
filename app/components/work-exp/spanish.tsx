import Link from "next/link";
import { workExp } from "@/app/lib/data";


export default async function WorkExp() {
    const work = await workExp();
  return (
    <div className="w-full">
    {work?.map((work) =>
        <div key={work.id}>
    <h3 className="text-3xl font-bold text-sky-300 border-double border-b-8 border-r-8 border-sky-300 my-4">{work.titulospa}</h3>
    <p className="text-xl text-white my-5">{work.cuerpospa}</p>
    {work.link13 !== null && (
  <Link
  className="flex justify-center rounded-xl bg-sky-700 md:bg-gray-800 duration-300 hover:bg-sky-700 mb-10 p-2"
  target="_blank"
  key={work.link1name}
  href={work.link1}
><p className="text-white text-xl">{work.link1name}</p></Link>
)}
    
   </div>
    )}
     
    </div>
  );
}
