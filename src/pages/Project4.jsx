import { useState } from "react";
import Buttons from "../Components/UI/Buttons";
import Projects from "../Components/UI/Projects";
import Titre from "../Components/UI/Titre";
import { projectsData } from "../assets/data/projectsData";

const Project4 = () => {
  const [project] = useState(projectsData);

  // console.log(index)

  return (
    <section>
      <Titre
        title={
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl">Projet 4</span>
        }
      />
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
