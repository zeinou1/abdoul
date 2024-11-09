import Buttons from "../Components/UI/Buttons";
import Projects from "../Components/UI/Projects";
import Titre from "../Components/UI/Titre";
import { projectsData } from "../assets/data/projectsData";
import { useState } from "react";

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
    <section>
      <Titre title={<span className="md:text-xl text-sm">Projet 1</span>}  />
      <main>
        <Projects project={project[0]} />
        <Buttons right="/projects-2" />
      </main>
    </section>
  );
};
export default Project1;
