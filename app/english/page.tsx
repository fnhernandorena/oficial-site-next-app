import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  return (
    <main  data-aos="fade-right" className="flex-1 flex mx-2">
      <ul className="text">
        <li>
          <h3 className="text-3xl font-bold text-sky-300 border-double border-b-8 border-r-8 border-sky-300">About me</h3>
          <div className="flex justify-center flex-wrap md:flex-nowrap items-center gap-3 py-4">
            <Image
              src={"/img/yo1.jpg"}
              className="rounded-full"
              alt={`Foto de mi cara`}
              width={280}
              height={280}
            />
            <p className="text-xl text-white">
            I was born on February 14,2004 in the city of San Pedro, the city
              where i live. During the week i work, train, study and try to
              enjoy my family`s as much time as possible, especially my
              grandparents. <br />
              I consider myself an efficient person, developing my activities in
              an organized manner. I am characterized by a healthy and
              passionate ambition, necessary to be learning and developing
              activities necessary to obtain the different goals that I propose.{" "}
              <br />
            </p>
          </div>
        </li>
        <li>
          <h3 className="text-3xl font-bold text-sky-300 border-double border-b-8 border-r-8 border-sky-300">My free time </h3>
          <p className="text-xl text-white">
          I am a young man who loves being with family and surrounded by good
            friends. I play soccer and train for fun and health. <br />
            I enjoy buying, repairing and selling motorcycles. <br />
            Spend time outdoors connecting with nature and yourself. <br />
            <br />
          </p>
        </li>
        <li><h3 className="text-3xl font-bold text-sky-300 border-double border-b-8 border-r-8 border-sky-300">View my resume</h3>
        <Link href="/documents/FranciscoHernandorena-SoftwareDeveloper-Resume.pdf" className="flex justify-center rounded-xl bg-sky-700 md:bg-gray-800 duration-300 hover:bg-sky-700 m-3 p-3">Click here!</Link>
          </li>
      </ul>
    </main>
  );
}
