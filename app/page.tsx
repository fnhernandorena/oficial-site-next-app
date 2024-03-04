'use client'
import Link from "next/link"
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const rainbowElement = document.getElementById('arc');
    if (rainbowElement) {
      rainbowElement.classList.add('anim');

      rainbowElement.addEventListener('animationend', () => {
        rainbowElement.classList.remove('anim');
      });
      return () => {
        rainbowElement.removeEventListener('animationend', () => {
          rainbowElement.classList.remove('anim');
        });
      };
    }
    const rainbowElements = document.querySelectorAll('.arc-bd');
    rainbowElements.forEach(element => {
      element.classList.add('animbd');
      element.addEventListener('animationend', () => {
        element.classList.remove('animbd');
      });
    });
  }, []);
  return (
    <main className="flex-1 h-full flex bg-black pb-48">
      <div className="w-full h-full flex justify-center content-center flex-col p-9">
        <b className='flex justify-center'>
          <h1 id="arc" className="text-center p-8 mt-20 mb-16 bg-sky-600 rounded-full text-3xl md:text-5xl w-full text-white">
            Hi! I`m Francisco Hernandorena <i className="fa-solid fa-code"></i>
          </h1>
        </b>
        <div className="flex flex-1 flex-wrap justify-center">
          <div className="arc-bd my-3 bg-gray-900 transition-linear duration-300 text-white w-full py-5 flex items-center md:justify-around rounded-xl font-medium border-2 border-solid border-sky-600  md:m-5 md:py-30 text-xl flex-col md:w-72 md:h-72 md:rounded-3xl">
            <h3 className='text-3xl p-1 text-center mb-3' >
              Bienvenido!
              <br /> este es mi sitio oficial
            </h3>
            <div className="flex flex-row md:flex-col items-center justify-around w-full px-2">
            <p className="text-center">
              Si hablas español
              <br /> selecciona esta opcion:
            </p>
            <Link
            href={'/spanish'}
              type="button"
              className="w-25 bg-sky-600 md:bg-gray-600 rounded-2xl w-36 p-3 my-1 text-center duration-300 hover:bg-sky-600"
            >
              Vamos! <i className="fa-solid fa-bolt"></i>
            </Link></div>
          </div>
          <div className=" arc-bd my-3 bg-gray-900 transition-linear duration-300 text-white w-full py-5 flex items-center md:justify-around rounded-xl font-medium border-2 border-solid border-sky-600  md:m-5 md:py-30 text-xl flex-col md:w-72 md:h-72 md:rounded-3xl">
            <h3 className='text-3xl p-1 text-center mb-3' >
            Welcome!
              <br /> this is my oficial site
            </h3>
            <div className="flex flex-row md:flex-col items-center justify-around w-full px-2">
            <p className="text-center">
            If you talk english <br />
              pick this option:
            </p>
            <Link
            href={'/english'}
              type="button"
              className="w-25 bg-sky-600 md:bg-gray-600 rounded-2xl w-36 p-3 my-1 text-center duration-300 hover:bg-sky-600"
            >
              Come on!  <i className="fa-solid fa-bolt"></i>
            </Link></div>
          </div>
          <div className="arc-bd my-3 bg-gray-900 transition-linear duration-300 text-white w-full py-5 flex items-center md:justify-around rounded-xl font-medium border-2 border-solid border-sky-600  md:m-5 md:py-30 text-xl flex-col md:w-72 md:h-72 md:rounded-3xl">
            <h3 className='text-3xl p-1 text-center mb-3' >
            Benvenuto!
              <br /> questo è il mio sito ufficiale
            </h3>
            <div className="flex flex-row md:flex-col items-center justify-around w-full px-2">
            <p className="text-center">
            Se parli italiano
              <br /> seleziona questa opzione:
            </p>
            <Link
            href={'/italian'}
              type="button"
              className="w-25 bg-sky-600 md:bg-gray-600 rounded-2xl w-36 p-3 my-1 text-center duration-300 hover:bg-sky-600"
            >
              Dai!  <i className="fa-solid fa-bolt"></i>
            </Link></div>
          </div>
          
        </div>
      </div>
    </main>
  )
}
