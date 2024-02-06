import Link from "next/link";

export default function Page() {
  return (
    <main>
      <ul className="text">
        <li>
          <h3 className="text-3xl font-bold text-sky-300 border-double border-b-8 border-r-8 border-sky-300">
            Mecánica de motos y atención al público
          </h3>
          <div className="text-xl text-white">
            Desde el año 2020 trabajo en `Power motos`. Me desempeño,
            principalmente, en el arreglo de motos de hasta 400 cc. <br />
            A su vez, ocupo el puesto en atención al cliente, asesorando en la
            compra de repuestos y accesorios. <br />
            Como extra, compro motos, las reparo y las vendo. <br />
            <b>
              {" "}
              <i className="fa-solid fa-paperclip"></i> Referancia comprobable:
            </b>{" "}
            <br />
            <div>
              Email: <br />
              <Link
                className="p-2 bg-gray-300 rounded-lg m-2 duration-300 hover:bg-sky-700"
                target="_blank"
                href="mailto:pablodelpardo9@gmail.com"
              >
                <p className="text-white ">El mundo de el mueble</p>
              </Link>
            </div>
          </div>
        </li>
        <li>
          <h3 className="text-3xl font-bold text-sky-300 border-double border-b-8 border-r-8 border-sky-300">
            Atención al público y gestión de ventas
          </h3>
          <div className="text-xl text-white">
            Durante la pandemia, trabajé en el negocio de mi abuelo como asesor
            de marketing y ventas online. <br />
            <b>
              {" "}
              <i className="fa-solid fa-paperclip"></i> Referancia comprobable:
            </b>{" "}
            <br />
            <div>
              {" "}
              Whatsapp: <br />
              <Link
                className="p-2 bg-gray-300 rounded-lg m-2 duration-300 hover:bg-sky-700"
                target="_blank"
                href="https://l.instagram.com/?u=https%3A%2F%2Fwa.link%2Fztvna4&e=AT2yQx4ipi2ySBhMHjdtahjYiMy8yvS6CAP1vzziu9LjMP9e8mD55tviJKlfH0HkiSGAfVyFwH9D9AnUZAYpAOkQnAy0DMprCcY7tg"
              >
                <p className="text-white ">El mundo de el mueble</p>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </main>
  );
}
