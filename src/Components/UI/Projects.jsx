import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Projects = ({ project}) => {
  return (
    <section id="projects" >
      <div className="container h-auto ">
        <div className="project__wrapper relative ">
          {/* Partie Project */}
          <div className="flex flex-col  gap-9 lg:gap-4">
            <h2 className="lg:text-2xl text-xl text-center font-bold text-gray-50 underline underline-offset-4 decoration-[#F97317] md:text-left  ">
              {project.title}
            </h2>
            <div className="text-xl lg:mt-2 lg:flex lg:gap-5 lg:items-center overflow-hidden">
              {" "}
              <p className="lg:text-lg text-[16px] md:text-left text-center text-gray-50">
                {" "}
                Description 
              </p>
              <p className="text-[#F97317] text-sm lg:text-md md:text-left text-center">
                {" "}
                - {project.infos}
              </p>
            </div>
            <div className="lg:text-2xl mt-2 lg:flex lg:gap-5 lg:items-center">
              {" "}
              <p className="lg:text-xl text-gray-50 text-sm md:text-left text-center ">
                {" "}
                Téchnologies 
              </p>
              <div className="text-[#F97317] text-md lg:text-sm md:text-left text-center  ">
              
                {project.languages.map((item) => (
                  <span
                    key={item}
                    className="pl-3 
                  
                  "
                  >
                    - {item} 
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Partie lien code et site */}
          <div
            className="
            
           
           absolute left-1/2 transform -translate-x-1/2 -translate-y-4 
          top-[220%]
          
  
        
          "
          >
            <div className="flex flex-col items-center gap-1">
              <span className="lg:text-7xl text-5xl mb-3 text-[#F97317]">
                <i className="ri-code-s-slash-line"></i>
              </span>

              <div className="text-gray-50 lg:text-lg text-md   cursor-pointer">
                <div className="flex flex-col">
                  {project.link ? (
                    <a target="_blank" href={project.link}>
                      <span className="text-[11px] md:text-lg  hover:underline-offset-4 hover:decoration-[#F97317]">
                        Voir Le site ici 🜸🜸!
                      </span>
                    </a>
                  ) : (
                    <a target="_blank" href={project.link}></a>
                  )}
                  {project.code ? (
                    <a target="_blank" href={project.code}>
                      <span className="text-[#F97317]">
                        <span className="text-[11px] md:text-lg  hover:underline-offset-4 hover:decoration-[#F97317]">
                          Le code ici 🧑🏿‍💻🧑🏿‍💻 !
                        </span>
                      </span>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          <button
            className="hidden md:block px-7 py-2 border-2 group rounded-md border-[#F97317]
           absolute transform -translate-x-1/2 -translate-y-1/2 
         left-[50%] bottom-[-500px]  hover:bg-yellow-950  hover:text-gray-50
          "
          >
            <Link
              to="/"
              className="lg:text-xl font-bold group-hover:text-gray-50 text-[#F97317] "
            >
              Home
            </Link>
          </button>
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 
          right-4  top-1/2"
          >

          </div>
        </div>
      </div>
    </section>
  );
};
Projects.propTypes = {
  project: PropTypes.object,
};

export default Projects;
