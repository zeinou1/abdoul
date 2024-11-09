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
      <Titre title={<span className="md:text-xl lg:text-3xl text-sm">Projet 4</span>}/>
      <main className="">
        
          <Projects project={project[3]} />
          <Buttons left="/projects-3" right="/projects-5" />
      
      </main>
    </section>
  );
};
export default Project4;
