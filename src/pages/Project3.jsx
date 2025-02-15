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
      <main className="">
       
          <Projects project={project[2]} />
          <Buttons left={"/projects-2"} right="/projects-4" />
       
      </main>
    </section>
  );
};
export default Project3;
