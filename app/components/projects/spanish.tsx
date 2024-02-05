import Image from "next/image";
import { projects } from "@/data";
import Link from "next/link";


export default async function Projects() {
    const pro = await projects();
  return (
    <div className="w-full flex flex-wrap justify-around">
    {pro?.map((project) =>
        <div className="w-5/12 bg-black rounded-xl p-3 m-3" key={project.id}>
    <h3 className="text-3xl font-bold text-sky-300">{project.titulospa}</h3>
  <Image
    src={project.img_path}
    className="rounded-3xl my-3"
    alt={`Foto de mi cara`}
    width={960}
    height={960}
  />
    <p className="text-white">{project.cuerpospa}</p>
    
          {project.link1 !== null && (
  <Link
  target="_blank"
  key={project.link1name}
  href={project.link1}
><p className="text-white">{project.link1name}</p></Link>
)}
{project.link2 !== null && (
  <Link
  target="_blank"
  key={project.link2name}
  href={project.link2}
><p className="text-white">{project.link2name}</p></Link>
)}
    </div>
    )}
     
    </div>
  );
}
