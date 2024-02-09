import Image from "next/image";
import { studies } from "@/app/lib/data";


export default async function Studies() {
    const stu = await studies();
  return (
    <div className="w-full">
    {stu?.map((studie) =>
        <div key={studie.id}>
    <h3 className="text-3xl font-bold text-sky-300 border-double border-b-8 border-r-8 border-sky-300 my-4">{studie.tituloing}</h3>
    <p className="text-xl text-white my-5">{studie.cuerpoing}</p>
    {studie.img1_id !== null && (
  <Image
    src={studie.img1_id}
    className="rounded-3xl"
    alt={`Foto de mi cara`}
    width={960}
    height={960}
  />
)}
    {studie.img2_id !== null && (
  <Image
    src={studie.img2_id}
    className="rounded-3xl my-8"
    alt={`Foto de mi cara`}
    width={960}
    height={960}
  />
)}</div>
    )}
     
    </div>
  );
}
