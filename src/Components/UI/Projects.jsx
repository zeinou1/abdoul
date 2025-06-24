import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-10"
    >
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primaryColor/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primaryColor/5 rounded-full filter blur-3xl animate-slow opacity-30"></div>
      </div>

      <div className="container h-auto relative z-10 max-w-6xl mx-auto px-4">
        <div
          className={`backdrop-blur-sm bg-black/30 p-4 sm:p-6 lg:p-8 rounded-xl shadow-2xl border border-primaryColor/20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Partie Project - Header */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-9 mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-bold bg-gradient-to-r from-primaryColor to-yellow-500 bg-clip-text text-transparent md:text-left transform transition-all duration-500 hover:scale-105">
              {project.title}
            </h2>

            {/* Description */}
            <div className="backdrop-blur-sm bg-black/50 p-4 sm:p-6 rounded-xl border border-primaryColor/30 shadow-lg hover:shadow-primaryColor/30 transition-all duration-500 transform hover:scale-[1.02]">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex items-center gap-2">
                  <i className="ri-information-line text-xl sm:text-2xl text-primaryColor"></i>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                    Description
                  </h3>
                </div>
                <p className="text-primaryColor text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 md:leading-8 md:text-left text-center">
                  {project.infos}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="backdrop-blur-sm bg-black/50 p-4 sm:p-6 rounded-xl border border-primaryColor/30 shadow-lg hover:shadow-primaryColor/30 transition-all duration-500 transform hover:scale-[1.02]">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex items-center gap-2">
                  <i className="ri-code-s-slash-line text-xl sm:text-2xl text-primaryColor"></i>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                    Technologies
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {project.languages.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-gradient-to-r from-primaryColor/20 to-yellow-500/20 backdrop-blur-sm rounded-full border border-primaryColor/30 text-white text-sm sm:text-base md:text-lg transform transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-primaryColor/40 hover:to-yellow-500/40 hover:border-primaryColor"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Partie liens */}
          <div className="flex flex-col items-center justify-center my-12">
            <div className="relative group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-primaryColor via-yellow-500 to-primaryColor rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-300"></div>
              <div className="relative p-1">
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full bg-black border-2 border-primaryColor group-hover:border-yellow-500 transition-all duration-500">
                  <i className="ri-code-s-slash-line text-3xl sm:text-4xl lg:text-5xl text-primaryColor group-hover:text-yellow-500 transition-all duration-500"></i>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-md mx-auto">
              {project.link && (
                <a
                  target="_blank"
                  href={project.link}
                  className="backdrop-blur-sm bg-black/50 p-3 sm:p-4 rounded-xl border border-primaryColor/30 shadow-lg hover:shadow-primaryColor/30 transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-2 group"
                  rel="noreferrer"
                >
                  <i className="ri-global-line text-lg sm:text-xl text-primaryColor group-hover:text-yellow-500 transition-colors duration-300"></i>
                  <span className="text-white group-hover:text-yellow-500 transition-colors duration-300 text-sm sm:text-base md:text-lg">
                    Voir le site
                  </span>
                </a>
              )}

              {project.code && (
                <a
                  target="_blank"
                  href={project.code}
                  className="backdrop-blur-sm bg-black/50 p-3 sm:p-4 rounded-xl border border-primaryColor/30 shadow-lg hover:shadow-primaryColor/30 transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-2 group"
                  rel="noreferrer"
                >
                  <i className="ri-github-fill text-lg sm:text-xl text-primaryColor group-hover:text-yellow-500 transition-colors duration-300"></i>
                  <span className="text-white group-hover:text-yellow-500 transition-colors duration-300 text-sm sm:text-base md:text-lg">
                    Voir le code
                  </span>
                </a>
              )}
            </div>
          </div>

          {/* Bouton Home */}
          <div className="flex justify-center mt-12">
            <Link
              to="/"
              className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-primaryColor to-yellow-500 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-primaryColor/50 flex items-center gap-2"
            >
              <i className="ri-home-4-line text-base sm:text-lg"></i>
              <span className="font-bold text-sm sm:text-base md:text-lg">
                Retour à l'accueil
              </span>
            </Link>
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
