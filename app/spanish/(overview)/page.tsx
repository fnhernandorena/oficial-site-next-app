import Image from "next/image";

export default function Page() {
  return (
    <main className="flex-1 flex">
      <ul className="text">
        <li>
          <h3 className="text-3xl font-bold text-red-500 border-double border-b-8 border-r-8 border-red-500">Sobre mi</h3>
          <div className="flex items-center gap-3 py-4">
            <Image
              src={"/img/yo1.jpg"}
              className="rounded-full"
              alt={`Foto de mi cara`}
              width={280}
              height={280}
            />
            <p className="text-xl">
              Nací el 14 de febrero de 2004 en la ciudad de San Pedro, ciudad en
              la que vivo. Durante la semana trabajo, entreno, estudio y trato
              de disfrutar el mayor tiempo posible de mi familia, en especial de
              mis abuelos. <br />
              Me considero una persona eficiente, desarrollando mis actividades
              de manera organizada. Me caracteriza una sana y apasionada
              ambición, necesaria para estar aprendiendo y desarrollando
              actividades necesarias para obtener los distintos fines que me
              propongo. <br />
            </p>
          </div>
        </li>
        <li>
          <h3 className="text-3xl font-bold text-red-500 border-double border-b-8 border-r-8 border-red-500">Mi tiempo libre</h3>
          <p className="text-xl">
            Soy un jóven que ama estar en familia y rodeado de buenos amigos.
            Juego al fútbol y entreno por diversión y salud. <br />
            Disfruto de la compra, refacción y venta de motos. <br />
            Pasar tiempo al aire libre conectando con la naturaleza y uno mismo.
            <br />
          </p>
        </li>
      </ul>
    </main>
  );
}
