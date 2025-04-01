import Buttons from "../Components/UI/Buttons";
import Projects from "../Components/UI/Projects";
import Titre from "../Components/UI/Titre";
import { projectsData } from "../assets/data/projectsData";
import { useState } from "react";

const Project0 = () => {
  const [project] = useState(projectsData);
  return (
    <>
      <section className="z-40">
        <Titre
          title={
            <span className="text-[12px]  md:text-xl lg:text-3xl text-center">
              And this portfolio
            </span>
          }
        />

        <div className="project-1">
          <Projects project={project[4]} />
          <div>
            <h6 className="text-center text-sm lg:text-xl mt-7 text-primaryColor font-bold">
              Thank you 👨‍💻
            </h6>
          </div>
        </div>
        <div className="fixed bottom-1/2 w-full z-[100]">
          <Buttons left="/projects-1" />
        </div>
      </section>
    </>
  );
};
export default Project0;
