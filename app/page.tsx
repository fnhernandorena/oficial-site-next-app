import Link from "next/link"

export default function Page() {
  return (
    <main className="flex-1 h-full flex bg-black pb-48">
      <div className="w-full h-full flex justify-center content-center flex-col p-9">
        <b className='flex justify-center'>
          <h1 className="text-center p-8 mt-20 mb-16 bg-sky-600 rounded-full text-5xl w-4/5 text-white">
            Hi! I`m Francisco Hernandorena <i className="fa-solid fa-code"></i>
          </h1>
        </b>
        <div className="flex flex-1 justify-center">
          <div className="text-white py-5 flex flex-wrap justify-around border border-black rounded-3xl m-3 items-center font-medium md:border-2 md:border-solid md:border-sky-600  md:m-5 md:py-30 md:text-xl md:bg-gray-900 transition-linear duration-300 md:flex-col w-72 h-72">
            <h3 className='text-3xl p-1 text-center' >
              Bienvenido!
              <br /> este es mi
              <br /> curriculum
            </h3>
            <p className="text-center">
              Si hablas español
              <br /> selecciona esta opcion:
            </p>
            <Link
            href={'/spanish'}
              type="button"
              className="w-25 bg-gray-600 rounded-2xl w-36 p-3 my-1 text-center duration-300 hover:bg-sky-600"
            >
              Vamos! <i className="fa-solid fa-bolt"></i>
            </Link>
          </div>
          <div className=" text-white py-5 flex flex-wrap justify-around border border-black rounded-3xl m-3 items-center font-medium md:border-2 md:border-solid md:border-sky-600  md:m-5 md:py-30 md:text-xl md:bg-gray-900 transition-linear duration-300 md:flex-col w-72 h-72">
            <h3 className='text-3xl p-1 text-center'>
              Welcome!
              <br /> this is my <br />
              curriculum
            </h3>
            <p className="text-center">
              If you talk english <br />
              pick this option:
            </p>
            <Link
            href={'/english'}
              type="button"
              className="w-25 bg-gray-600 rounded-2xl w-36 p-3 my-1 text-center duration-300 hover:bg-sky-600"
            >
              Come on! <i className="fa-solid fa-bolt"></i>
            </Link>
          </div>
          <div className="text-white py-5 flex flex-wrap justify-around border border-black rounded-3xl m-3 items-center font-medium md:border-2 md:border-solid md:border-sky-600  md:m-5 md:py-30 md:text-xl md:bg-gray-900 transition-linear duration-300 md:flex-col w-72 h-72">
            <h3 className='text-3xl p-1 text-center'>
              Benvenuto!
              <br /> questo è il mio
              <br /> curriculum
            </h3>
            <p className="text-center">
              Se parli italiano
              <br /> seleziona questa opzione:
            </p>
            <Link
            href={'/italian'}
              type="button"
              className="w-25 bg-gray-600 rounded-2xl w-36 p-3 my-1 text-center duration-300 hover:bg-sky-600"
            >
              Dai! <i className="fa-solid fa-bolt"></i>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
