/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Titre = ({ title }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 sm:gap-5 items-center justify-center lg:justify-start lg:items-start my-6 sm:my-10 lg:my-20 relative z-40">
      <Link
        to="/"
        className="ml-5 relative group transition-all duration-300 cursor-pointer focus:outline-none rounded-full z-10"
        aria-label="Retour à l'accueil"
      >
        <i className="ri-home-4-line text-xl sm:text-2xl md:text-3xl text-primaryColor group-hover:text-white group-focus:text-white transition-all duration-300 bg-black/30 backdrop-blur-sm p-2 sm:p-3 rounded-full border border-primaryColor/30 group-hover:border-primaryColor group-focus:border-primaryColor group-hover:shadow-lg group-focus:shadow-lg group-hover:shadow-primaryColor/30 group-focus:shadow-primaryColor/30 transform group-hover:scale-110 group-focus:scale-110 relative z-20"></i>
        <span className="absolute -inset-1 bg-gradient-to-r from-primaryColor to-yellow-500 rounded-full blur opacity-0 group-hover:opacity-70 group-focus:opacity-70 transition duration-300 z-0"></span>
      </Link>
      <div className="text-center lg:text-left">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold uppercase text-white">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Titre;
