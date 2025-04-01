import { useState } from "react";
import Buttons from "../Components/UI/Buttons";
import Projects from "../Components/UI/Projects";
import Titre from "../Components/UI/Titre";
import { projectsData } from "../assets/data/projectsData";

const Project1 = () => {
  const [project] = useState(projectsData);

  // console.log(index)
  // useEffect(() => {
  //   if (projectsData) {
  //     setProject(projectsData);
  //   }
  // }, []);
  // if (!project) {
  //   return (
  //     <div>
  //       {" "}
  //       <h2 className="text-center text-3xl text-red-600 pt-24"> Project not Found</h2>
  //     </div>
  //   );
  // }
  return (
    <section className="relative">
      <Titre title={<span className="md:text-xl lg:text-3xl text-sm">Projet 1</span>} />
      <div className="project-0">
        <Projects project={project[0]} />
      </div>
      <div className="fixed bottom-1/2 w-full z-[100]">
        <Buttons right="/projects-2" />
      </div>
    </section>
  );
};
export default Project1;
