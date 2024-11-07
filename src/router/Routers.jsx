import { Routes, Route } from "react-router-dom";
import Overview from "../Components/UI/Overview";
import About from "../Components/UI/About";
import Resume from "../Components/UI/Resume";
import Project1 from "../pages/Project1";
import Project2 from "../pages/Project2";
import Project3 from "../pages/Project3";
import Project4 from "../pages/Project4";
import ErrorPG from "../pages/ErrorPG.jsx";
import Project0 from "../pages/Project0";
import MySeoComP from "../pages/MySeoComP";




const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/home" element={<Overview />} />
      <Route path="/projects-1" element={<Project1 />} />
      <Route path="/projects-2" element={<Project2 />} />
      <Route path="/projects-3" element={<Project3 />} />
      <Route path="/projects-4" element={<Project4 />} />
      <Route path="/projects-5" element={<Project0  />} />
      {/* seo */}
      <Route path="/MySeoComP" element={<MySeoComP />} />


      <Route path="/error" element={<ErrorPG />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/apropos" element={<About />} />
    </Routes>
  );
};
export default Routers;
