import { Route, Routes } from "react-router-dom";
import About from "../Components/UI/About";
import Overview from "../Components/UI/Overview";
import Resume from "../Components/UI/Resume";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";
import Contact from "../pages/Contact";
import ErrorPG from "../pages/ErrorPG.jsx";
import Project0 from "../pages/Project0";
import Project1 from "../pages/Project1";
import Project2 from "../pages/Project2";
import Project3 from "../pages/Project3";
import Project4 from "../pages/Project4";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/home" element={<Overview />} />
      <Route path="/projects-1" element={<Project1 />} />
      <Route path="/projects-2" element={<Project2 />} />
      <Route path="/projects-3" element={<Project3 />} />
      <Route path="/projects-4" element={<Project4 />} />
      <Route path="/projects-5" element={<Project0 />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/apropos" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/blog" element={<Blog />} /> */}
      <Route path="/blog/:id" element={<BlogPost />} />

      {/* Route catch-all pour les erreurs 404 - doit être en dernier */}
      <Route path="*" element={<ErrorPG />} />
    </Routes>
  );
};
export default Routers;
