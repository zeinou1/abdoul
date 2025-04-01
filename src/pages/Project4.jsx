import Buttons from "../Components/UI/Buttons";
import Projects from "../Components/UI/Projects";
import { projectsData } from "../assets/data/projectsData";
import { useState } from "react";
import Titre from "../Components/UI/Titre";

const Project4 = () => {
  const [project] = useState(projectsData);

  // console.log(index)

  return (
    <section>
      <Titre title={<span className="md:text-xl lg:text-3xl text-sm">Projet 4</span>} />
      <div className="project-4">
        <Projects project={project[3]} />
      </div>
      <div className="fixed bottom-1/2 w-full z-[100]">
        <Buttons left="/projects-3" />
      </div>
    </section>
  );
};
export default Project4;
