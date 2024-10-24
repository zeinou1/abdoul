import Buttons from "../Components/UI/Buttons";
import Projects from "../Components/UI/Projects";
import { projectsData } from "../assets/data/projectsData";
import { useState } from "react";
import Titre from "../Components/UI/Titre";

const Project2 = () => {
  const [project] = useState(projectsData);

  return (
    <section>
      <Titre title=" Projet 2" />
      <main className="project">
        <Projects project={project[1]} />
        <Buttons left="/projects-1" right={"/projects-3"} />
      </main>
    </section>
  );
};
export default Project2;
