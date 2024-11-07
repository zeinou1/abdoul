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
      <Titre title=" Projet 4"/>
      <main className="">
        
          <Projects project={project[4]} />
          <Buttons left="/projects-3" right="/projects-5" />
      
      </main>
    </section>
  );
};
export default Project4;
