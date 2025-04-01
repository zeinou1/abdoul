import Buttons from "../Components/UI/Buttons";
import Projects from "../Components/UI/Projects";
import { projectsData } from "../assets/data/projectsData";
import { useState } from "react";
import Titre from "../Components/UI/Titre";

const Project3 = () => {
  const [project] = useState(projectsData);

  // console.log(index)

  return (
    <section>
      <Titre title={<span className="md:text-xl lg:text-3xl text-sm">Projet 3</span>} />
      <div className="project-2">
        <Projects project={project[2]} />
      </div>
      <div className="fixed bottom-1/2 w-full z-[100]">
        <Buttons left={"/projects-2"} right="/projects-4" />
      </div>
    </section>
  );
};
export default Project3;
