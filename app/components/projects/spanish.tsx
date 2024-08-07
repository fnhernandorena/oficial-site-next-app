import Image from "next/image";
import { projects } from "@/app/lib/data";
import Link from "next/link";


export default async function Projects() {
    const pro = await projects();
    let dir = 0
  return (
    <div className="w-full flex flex-wrap justify-around">
    {pro?.map((project) =>
        <div  data-aos={dir == 0 && "fade-up-right" || dir == 1 && "fade-up-left"} className="z-90 w-full md:w-5/12 bg-black rounded-xl p-3 m-3 flex flex-col justify-between items-center" key={project.id}>
    <h3 className="text-3xl font-bold text-sky-300">{project.titulospa}</h3>
  <Image
    src={project.img_path}
    className="rounded-3xl my-3"
    alt={project.tituloeng}
    width={960}
    height={960}
    
  />
    <p className="text-white text-center">{project.cuerpospa}</p>
    
          {project.link1 !== null && (
  <Link
  className="p-2 bg-sky-700 w-72 text-center md:bg-gray-900 rounded-lg m-2 duration-300 hover:bg-sky-700"
  target="_blank"
  key={project.link1name}
  href={project.link1}
><p className="text-white ">{project.link1name}</p></Link>
)}
{project.link2 !== null && (
  <Link
  className="p-2 bg-sky-700 w-72 text-center md:bg-gray-900 rounded-lg m-2 duration-300 hover:bg-sky-700"
  target="_blank"
  key={project.link2name}
  href={project.link2}
><p className="text-white ">{project.link2name}</p></Link>
)}
{project.ytlink !== null && (
  <Link
  className="p-2 bg-red-700 md:bg-gray-900 rounded-lg m-2 duration-300 hover:bg-red-700"
  target="_blank"
  key={project.yttitle}
  href={project.ytlink}
><p className="text-white ">{project.yttitle}</p></Link>
)}<p className="hidden">{dir =dir+1}</p> 
    </div>
    )}
     
    </div>
  );
}
