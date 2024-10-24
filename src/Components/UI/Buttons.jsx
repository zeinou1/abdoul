/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function Buttons({ right, left }) {
 
  return (
    <div className="scroll-bottom ">
      {left && (
        <NavLink to={left} >

          <span className="text-7xl text-[#F97317] absolute left-7 top-1/2 -translate-y-1/2 ">&#10092;</span>

        </NavLink>
      )}
      
      {right && (
        <NavLink to={right} className="right">
          <span className="text-7xl text-[#F97317] absolute right-7 top-1/2 -translate-y-1/2 ">&#10093;</span>
        </NavLink>
      )}
    </div>
  );
}

export default Buttons;