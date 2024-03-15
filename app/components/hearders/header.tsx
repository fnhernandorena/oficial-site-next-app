import { FaCode } from "react-icons/fa";

const Header = () => {
    return (
      <header className=" w-11/12 h-36 md:h-96 flex justify-center items-center bg-sky-600 mt-20 md:mt-24 mb-12 rounded-full">
      
          <h1 className="w-5/6 text-3xl sm:text-5xl md:text-8xl text-white 
           flex justify-around items-center"> <FaCode />
            <b>
             
              NicoDev <br /> Oficial Site
              
             
            </b><FaCode />
          </h1>
      </header>
    );
  };
  
  export default Header;