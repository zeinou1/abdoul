/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function Buttons({ right, left }) {
  return (
    <div className="scroll-bottom">
      {left && (
        <NavLink to={left}>
          <div className="absolute left-7 top-1/2 -translate-y-1/2 group transition-all duration-300">
            <span className="text-6xl text-primaryColor group-hover:text-white transition-all duration-300 flex items-center justify-center bg-black/30 backdrop-blur-sm p-2 rounded-full border border-primaryColor/30 group-hover:border-primaryColor group-hover:shadow-lg group-hover:shadow-primaryColor/30 transform group-hover:scale-110">
              &#10092;
            </span>
            <span className="absolute -inset-1 bg-gradient-to-r from-primaryColor to-yellow-500 rounded-full blur opacity-0 group-hover:opacity-70 transition duration-300 -z-10"></span>
          </div>
        </NavLink>
      )}

      {right && (
        <NavLink to={right} className="right">
          <div className="absolute right-7 top-1/2 -translate-y-1/2 group transition-all duration-300">
            <span className="text-6xl text-primaryColor group-hover:text-white transition-all duration-300 flex items-center justify-center bg-black/30 backdrop-blur-sm p-2 rounded-full border border-primaryColor/30 group-hover:border-primaryColor group-hover:shadow-lg group-hover:shadow-primaryColor/30 transform group-hover:scale-110">
              &#10093;
            </span>
            {/* <span className="absolute -inset-1 bg-gradient-to-r from-primaryColor to-yellow-500 rounded-full blur opacity-0 group-hover:opacity-70 transition duration-300 -z-10"></span> */}
          </div>
        </NavLink>
      )}
    </div>
  );
}

export default Buttons;
