/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Titre = ({ title }) => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-7 transform duration-100">
        <Link to="/">
          <i className="ri-arrow-left-circle-line text-4xl text-[#F97317]  "></i>
        </Link>
      </div>
      <div className=" mb-7 border-b border-[#F97317] pb-2 ">
        <h2 className=" text-2xl lg:text-3xl text-center text-[#F97317] font-bold">
          <span data-aos="fade-left" data-aos-duration="1500">
            {title}
          </span>
        </h2>
      </div>
    </div>
  );
};
export default Titre;
