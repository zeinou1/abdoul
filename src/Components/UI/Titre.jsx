/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Titre = ({ title }) => {
  return (
    <div className="relative ">
      <div className="absolute top-0 left-7 transform duration-300 group cursor-pointer z-50">
        <Link to="/home">
          <div className="relative">
            <i className="ri-arrow-left-circle-line text-4xl text-primaryColor group-hover:text-white transition-all duration-300 bg-black/30 backdrop-blur-sm p-2 rounded-full border border-primaryColor/30 group-hover:border-primaryColor group-hover:shadow-lg group-hover:shadow-primaryColor/30 transform group-hover:scale-110 cursor-pointer "></i>
            <span className="absolute -inset-1 bg-gradient-to-r from-primaryColor to-yellow-500 rounded-full blur opacity-0 group-hover:opacity-70 transition duration-300 -z-10"></span>
          </div>
        </Link>
      </div>
      <div className="mb-7 pb-4 relative">
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-primaryColor to-transparent"></div>
        <h2 className="text-2xl lg:text-3xl text-center font-bold bg-gradient-to-r from-primaryColor to-yellow-500 bg-clip-text text-transparent">
          <span data-aos="fade-left" data-aos-duration="1500">
            {title}
          </span>
        </h2>
      </div>
    </div>
  );
};
export default Titre;
