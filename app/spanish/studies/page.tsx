import Image from "next/image";

export default function Page() {
  return (
    <main>
      <ul className="text">
        <li>
          <h3 className="text-3xl font-bold text-red-500 border-double border-b-8 border-r-8 border-red-500 my-4">
            Estudios secundarios
          </h3>
          <p className="text-xl">
            En el año 2022 me recibí de Técnico Químico en la Escuela de
            Educacion Secundaria Técnica N°1. <br />
            Fueron 7 años cursando doble o triple turno combinado con taller del
            primer al tercer año y de el cuarto al septimo año combinados con el
            laboratorio, considerado el mejor de la zona. <br />
            <b>Adjunto certificados:</b>{" "}
          </p>{" "}
          <div className="w-full flex flex-col items-center">
            <Image
              className="rounded-3xl m-2"
              src={"/img/titulo_ind.jpg"}
              alt={`Foto de mi cara`}
              width={800}
              height={800}
            />
            <Image
              className="rounded-3xl m-2 "
              src={"/img/tit_tecqui.jpg"}
              alt={`Foto de mi cara`}
              width={800}
              height={800}
            />
          </div>
        </li>

        <li>
          <h3 className="text-3xl font-bold text-red-500 border-double border-b-8 border-r-8 border-red-500 my-4">
            Programación
          </h3>
          <p className="text-xl">
            A lo largo de este 2023 realicé el curso de desarrollo web front-end
            en la UTN. Comprendo y manejo perfectamente HTML, CSS. <br />
            Además, luego de terminar el curso me dediqué completamente a
            JavaScript generando conocimientos cada vez más avanzados. <br />{" "}
          </p>
          <b className="text-xl">
            <i className="fa-brands fa-github"></i> Repositorios de Github:
          </b>{" "}
          <br />
          <a href="https://github.com/fnhernandorena/CV" className="text-xl font-bold text-red-500">
            <i className="fa-solid fa-paperclip"></i> Repositorio de la pagina
            web del curriculum antiguo
          </a>{" "}
          <br />
          <a href="https://github.com/fnhernandorena/CV-Vite" className="text-xl font-bold text-red-500">
            <i className="fa-solid fa-paperclip"></i> Repositorio de la pagina
            web del curriculum actual con Vite.js
          </a>{" "}
          <br />
          <ul className="mx-4">
            <li>
              <h3 className="text-2xl font-bold text-red-500 border-double border-b-4 border-r-4 border-red-500 my-4">
                JavaScript
              </h3>
              <p className="text-xl">
                En su totalidad cuento con al rededor de 300 horas de estudio y
                practicas con el lenguaje de programacion JavaScript. <br />
                Manejo en su totalidad conceptos como variables, arrays,
                funciones en todos sus tipos, canvas, constructores y demas.
              </p>
              <b className="text-xl">
                <i className="fa-brands fa-square-js"></i> Proyectos JavaScript:
              </b>{" "}
              <br />
              <a
                href="../Javascript-proyects/divisioncuenta/cuenta.html"
                className="text-xl font-bold text-red-500 my-1"
              >
                <i className="fa-regular fa-clipboard"></i> Division de gastos!
                (solamente en español)
              </a>
              <br />
              <a
                href="../Javascript-proyects/canvas 1.0/canvas1.0.html"
                className="text-xl font-bold text-red-500 my-1"
              >
                <i className="fa-solid fa-paintbrush"></i> Web paint con canvas!
                (solamente compatible con ordenadores)
              </a>
            </li>
            <li>
              <h3 className="text-2xl font-bold text-red-500 border-double border-b-4 border-r-4 border-red-500 my-4">
                React Native
              </h3>
              <p className="text-xl">
                Luego de aprender JavaScript dedique la totalidad de mi a
                aprender a trabajar React Native y en especial el framework
                `expo`. <br />
                Aproximadamente 100 horas de estudio y desarrollo de proyectos
              </p>
              <b className="text-xl">
                <i className="fa-brands fa-react"></i> Proyectos React Native:
              </b>{" "}
              <br />
              <a
                href="https://expo.dev/artifacts/eas/rp9knEiqMasKx9gK51oRCb.apk"
                className="text-xl font-bold text-red-500 my-1"
              >
                <i className="fa-solid fa-clock-rotate-left"></i> Contador (tipo
                pomodoro, APK android)
              </a>
              <br />
              <a
                href="https://expo.dev/artifacts/eas/hb6HaiH9Gaskyzvg6kzQwh.apk"
                className="text-xl font-bold text-red-500 my-1"
              >
                <i className="fa-solid fa-calculator"></i> Dividir Cuenta (APK
                Android)
              </a>
            </li>
            <li>
              <h3 className="text-2xl font-bold text-red-500 border-double border-b-4 border-r-4 border-red-500 my-4">
                Typescript
              </h3>
              <p className="text-xl">
                200 horas de estudio desarrollando y aprendiendo Angular,
                Next.js y Tailwind.
              </p>
              <b className="text-xl">
                <i className="fa-solid fa-keyboard"></i> Proyectos Typescript:
              </b>{" "}
              <br />
              <a
                href="https://github.com/fnhernandorena/angular-project"
                className="text-xl font-bold text-red-500 my-1"
              >
                <i className="fa-brands fa-angular"></i> Angular app
              </a>
              <br />
              <a
                href="https://fnhernandorena.000webhostapp.com/"
                className="text-xl font-bold text-red-500 my-1"
              >
                <i className="fa-solid fa-globe"></i> Next CV (Proximamente)
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h3 className="text-3xl font-bold text-red-500 border-double border-b-8 border-r-8 border-red-500 my-4">
            Desarrollo web Front-End
          </h3>
          <p className="text-xl">
            En la UTN de Buenos Aires realicé una diplomatura de desarrollo web
            full stack con react JS con una carga horaria de 187 horas. <br />
            El mismo, concluyó con la creación de una página web Front-End
            completamente funcional, con imágenes, envíos de formularios y
            conexión de los servidores. <br />
            <b className="text-xl">
              <i className="fa-brands fa-github"></i> Repositorios de Github:
            </b>{" "}
            <br />
            <a
              href="https://github.com/fnhernandorena/archivos-diplo-dw"
              className="text-xl font-bold text-red-500 my-1"
            >
              <i className="fa-solid fa-paperclip"></i> Repositorio tareas
              diplomatura de desarrollo web Front-End
            </a>{" "}
            <br />
            <a
              href="https://github.com/fnhernandorena/trabajo-final-desarrollo-web"
              className="text-xl font-bold text-red-500 my-1"
            >
              <i className="fa-solid fa-paperclip"></i> Repositorio trabajo
              final diplomatura de desarrollo web Front-End
            </a>{" "}
            <br />
            <b className="text-xl">Adjunto certificado:</b>
          </p>
          <div className="w-full flex flex-col items-center">
            <Image
              className="rounded-3xl my-2"
              src={"/img/certdes.png"}
              alt={`Foto de mi cara`}
              width={800}
              height={800}
            />{" "}
          </div>
        </li>
        <li>
          <h3 className="text-3xl font-bold text-red-500 border-double border-b-8 border-r-8 border-red-500 my-4">
            Diseño Gráfico
          </h3>
          <p className="text-xl">
            Realicé en la UTN de Buenos Aires el curso basico de diseño gráfico
            básico con una carga horaria de 87 horas, basado en la utilización
            completa de las herramientas de Adobe Photoshop y Adobe Illustrator.
            <br />
            <b>Adjunto certificado:</b>
          </p>
          <div className="w-full flex flex-col items-center">
            <Image
              className="rounded-3xl  my-2"
              src={"/img/cretdis.png"}
              alt={`Foto de mi cara`}
              width={800}
              height={800}
            />{" "}
          </div>
        </li>
        <li>
          {" "}
          <h3 className="text-3xl font-bold text-red-500 border-double border-b-8 border-r-8 border-red-500 my-4">
            Idiomas
          </h3>
          <p className="text-xl">
            En mi pasion por aprender, los idiomas no quedan afuera.
          </p>
          <ul className="mx-4">
            <li>
              <h4 className="text-2xl font-bold text-red-500 border-double border-b-4 border-r-4 border-red-500 my-4">
                Italiano
              </h4>
              <p className="text-xl">
                A principio de este 2023 arranqué a estudiar Italiano, en la
                Sociedad Italiana de mi ciudad. A día de hoy, continúo con la
                cursada y progresando en mi aprendizaje.
              </p>
            </li>{" "}
            <li>
              <h4 className="text-2xl font-bold text-red-500 border-double border-b-4 border-r-4 border-red-500 my-4">
                Inglés
              </h4>
              <p className="text-xl">
                Estudié durante 5 años inglés en el Instituto `De Analia`.{" "}
                <br />
                En actualidad presento un muy buen manejo del idioma, aunque
                normalmente en el día a día no lo utilizo.
                <br /> <b>Adjunto certificados:</b>
              </p>
              <div className="w-full flex flex-col items-center">
                <Image
                  className="rounded-3xl  my-2"
                  src={"/img/certing.jpg"}
                  alt={`Foto de mi cara`}
                  width={800}
                  height={800}
                />
                <Image
                  className="rounded-3xl  my-2"
                  src={"/img/certing.jpg"}
                  alt={`Foto de mi cara`}
                  width={800}
                  height={800}
                />{" "}
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </main>
  );
}
