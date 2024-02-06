import Image from "next/image";
import { projects } from "@/app/lib/data";


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
    </div>
    )}
     
    </div>
  );
}
