/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function Buttons({ right, left }) {
  return (
    <div className="scroll-bottom relative z-1">
      {left && (
        <NavLink
          to={left}
          aria-label="Page précédente"
          className="focus:outline-none rounded-full"
        >
          <div className="absolute left-7 top-1/2 -translate-y-1/2 group transition-all duration-300 z-1">
            <span
              className="w-16 h-16 text-primaryColor group-hover:text-white group-focus:text-white transition-all duration-300 flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-full border border-primaryColor/30 group-hover:border-primaryColor group-focus:border-primaryColor group-hover:shadow-lg group-focus:shadow-lg group-hover:shadow-primaryColor/30 group-focus:shadow-primaryColor/30 transform group-hover:scale-110 group-focus:scale-110"
              role="button"
              tabIndex={0}
            >
              <i className="ri-arrow-left-s-line text-4xl leading-none"></i>
            </span>
            <span className="absolute -inset-1 bg-gradient-to-r from-primaryColor to-yellow-500 rounded-full blur opacity-0 group-hover:opacity-70 group-focus:opacity-70 transition duration-300 z-0"></span>
          </div>
        </NavLink>
      )}

      {right && (
        <NavLink
          to={right}
          className="right focus:outline-none rounded-full"
          aria-label="Page suivante"
        >
          <div className="absolute right-7 top-1/2 -translate-y-1/2 group transition-all duration-300 z-1">
            <span
              className="w-16 h-16 text-primaryColor group-hover:text-white group-focus:text-white transition-all duration-300 flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-full border border-primaryColor/30 group-hover:border-primaryColor group-focus:border-primaryColor group-hover:shadow-lg group-focus:shadow-lg group-hover:shadow-primaryColor/30 group-focus:shadow-primaryColor/30 transform group-hover:scale-110 group-focus:scale-110"
              role="button"
              tabIndex={0}
            >
              <i className="ri-arrow-right-s-line text-4xl leading-none"></i>
            </span>
            <span className="absolute -inset-1 bg-gradient-to-r from-primaryColor to-yellow-500 rounded-full blur opacity-0 group-hover:opacity-70 group-focus:opacity-70 transition duration-300 z-0"></span>
          </div>
        </NavLink>
      )}
    </div>
  );
}

export default Buttons;
