import { useState } from "react";
import Buttons from "../Components/UI/Buttons";
import Projects from "../Components/UI/Projects";
import Titre from "../Components/UI/Titre";
import { projectsData } from "../assets/data/projectsData";

const Project2 = () => {
  const [project] = useState(projectsData);

  return (
    <section className="relative">
      <Titre
        title={
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl">Projet 2</span>
        }
      />
      <div className="project-2">
        <Projects project={project[1]} />
      </div>
      <div className="fixed bottom-1/2 w-full z-[100]">
        <Buttons left="/projects-1" right={"/projects-3"} />
      </div>
    </section>
  );
};
export default Project2;
