
import Buttons from "../Components/UI/Buttons";
import Projects from "../Components/UI/Projects";
import Titre from "../Components/UI/Titre";
import { projectsData } from "../assets/data/projectsData";
import { useState } from "react";


const Project0 = () => {
  const [project] = useState(projectsData);
  return (
    <section>
    <Titre title={<span className="text-[16px] md:text-xl">And this portfolio</span>} />

    <main className="project">
      <Projects project={project[4]} />
      <div>
        <h6 className="text-center text-sm lg:text-xl mt-7 text-primaryColor font-bold">Thank you  👨‍💻</h6>
      </div>
      <Buttons left="/projects-1"  />
    </main>
  </section>
  )
}
export default Project0