import { useEffect, useState } from "react";
import Titre from "../UI/Titre.jsx";

const Resume = () => {
  const [showText, setShowText] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section
      id="cpt"
      className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black py-10"
    >
      <Titre
        title={
          <span className="text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl">
            Compétences
          </span>
        }
      />
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primaryColor/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primaryColor/5 rounded-full filter blur-3xl animate-slow opacity-30"></div>
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primaryColor to-yellow-500 bg-clip-text text-transparent mb-2">
            Front-End
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primaryColor to-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Nouvelle disposition en grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Carte HTML & CSS */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="backdrop-blur-md bg-black/60 p-4 sm:p-6 rounded-xl border border-primaryColor/40 shadow-lg hover:shadow-primaryColor/40 transition-all duration-500 transform hover:scale-[1.03] text-gray-200 hover:border-primaryColor/60 h-full flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black border-primaryColor border-4 flex items-center justify-center">
                  <i className="ri-html5-fill text-xl sm:text-2xl text-primaryColor"></i>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                  HTML & CSS
                </h3>
              </div>
              <ul className="space-y-2 mt-4">
                <li className="text-xs sm:text-sm md:text-base leading-5 sm:leading-6 flex items-center gap-2">
                  <span className="text-primaryColor">→</span> Implémenter une interface
                  responsive avec HTML et CSS
                </li>
                <li className="text-xs sm:text-sm md:text-base leading-5 sm:leading-6 flex items-center gap-2">
                  <span className="text-primaryColor">→</span> Intégrer du contenu
                  conformément à une maquette avec HTML et CSS
                </li>
              </ul>
            </div>
          </div>

          {/* Carte JavaScript */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="backdrop-blur-md bg-black/60 p-4 sm:p-6 rounded-xl border border-primaryColor/40 shadow-lg hover:shadow-yellow-400/40 transition-all duration-500 transform hover:scale-[1.03] text-gray-200 hover:border-yellow-400/60 h-full flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black border-primaryColor border-4 flex items-center justify-center">
                  <i className="ri-javascript-fill text-xl sm:text-2xl text-yellow-400"></i>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                  JavaScript
                </h3>
              </div>
              <ul className="space-y-2 mt-4">
                <li className="text-xs sm:text-sm md:text-base leading-5 sm:leading-6 flex items-center gap-2">
                  <span className="text-primaryColor">→</span> Gérer les événements
                </li>
                <li className="text-xs sm:text-sm md:text-base leading-5 sm:leading-6 flex items-center gap-2">
                  <span className="text-primaryColor">→</span> Manipuler les éléments du
                  DOM avec JavaScript
                </li>
                <li className="text-xs sm:text-sm md:text-base leading-5 sm:leading-6 flex items-center gap-2">
                  <span className="text-primaryColor">→</span> Récupérer les données
                  utilisateurs via des formulaires
                </li>
              </ul>
            </div>
          </div>

          {/* Carte React */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="backdrop-blur-md bg-black/60 p-4 sm:p-6 rounded-xl border border-primaryColor/40 shadow-lg hover:shadow-blue-700/40 transition-all duration-500 transform hover:scale-[1.03] text-gray-50 hover:border-blue-700/60 h-full flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black border-primaryColor border-4 flex items-center justify-center">
                  <i className="ri-reactjs-line text-xl sm:text-2xl text-blue-700"></i>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                  React
                </h3>
              </div>
              <ul className="space-y-2 mt-4">
                <li className="text-xs sm:text-sm md:text-base leading-6 sm:leading-7 md:leading-8 font-semibold">
                  Les hooks
                </li>
                <li className="text-primaryColor text-xs sm:text-sm md:text-base leading-5 sm:leading-6 ml-4 flex items-center gap-2">
                  <span className="text-yellow-500">→</span> useState
                </li>
                <li className="text-primaryColor text-xs sm:text-sm md:text-base leading-5 sm:leading-6 ml-4 flex items-center gap-2">
                  <span className="text-yellow-500">→</span> useEffect
                </li>
                <li className="text-primaryColor text-xs sm:text-sm md:text-base leading-5 sm:leading-6 ml-4 flex items-center gap-2">
                  <span className="text-yellow-500">→</span> useContext
                </li>
                <li className="text-xs sm:text-sm md:text-base leading-5 sm:leading-6 font-semibold mt-2">
                  État Global
                </li>
                <li className="text-primaryColor text-xs sm:text-sm md:text-base leading-5 sm:leading-6 ml-4 flex items-center gap-2">
                  <span className="text-yellow-500">→</span> API Context
                </li>
                <li className="text-primaryColor text-xs sm:text-sm md:text-base leading-5 sm:leading-6 ml-4 flex items-center gap-2">
                  <span className="text-yellow-500">→</span> Redux Toolkit
                </li>
                <li className="text-xs sm:text-sm md:text-base leading-5 sm:leading-6 font-semibold mt-2">
                  Test
                </li>
                <li className="text-primaryColor text-xs sm:text-sm md:text-base leading-5 sm:leading-6 ml-4 flex items-center gap-2">
                  <span className="text-yellow-500">→</span> Tests unitaires
                </li>
              </ul>
            </div>
          </div>

          {/* Carte Compétences Diverses */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="backdrop-blur-md bg-black/60 p-4 sm:p-6 rounded-xl border border-primaryColor/40 shadow-lg hover:shadow-green-600/40 transition-all duration-500 transform hover:scale-[1.03] text-gray-50 hover:border-green-600/60 h-full flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black border-primaryColor border-4 flex items-center justify-center">
                  <i className="ri-psychotherapy-fill text-xl sm:text-2xl text-green-600"></i>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                  Diverses
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-white border-b border-primaryColor/30 pb-1 mb-2 text-xs sm:text-sm">
                    Divers
                  </h4>
                  <ul className="space-y-1">
                    <li className="text-primaryColor text-xs sm:text-sm md:text-base leading-5 sm:leading-6 flex items-center gap-2">
                      <span className="text-yellow-500">→</span> SEO
                    </li>
                    <li className="text-primaryColor text-xs sm:text-sm md:text-base leading-5 sm:leading-6 flex items-center gap-2">
                      <span className="text-yellow-500">→</span> Debug
                    </li>
                    <li className="text-primaryColor text-xs sm:text-sm md:text-base leading-5 sm:leading-6 flex items-center gap-2">
                      <span className="text-yellow-500">→</span> API REST
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-white border-b border-primaryColor/30 pb-1 mb-2 text-xs sm:text-sm">
                    Méthodologies
                  </h4>
                  <ul className="space-y-1">
                    <li className="text-primaryColor text-xs sm:text-sm md:text-base leading-5 sm:leading-6 flex items-center gap-2">
                      <span className="text-yellow-500">→</span> Agile
                    </li>
                  </ul>

                  <h4 className="font-semibold text-white border-b border-primaryColor/30 pb-1 mb-2 mt-4 text-xs sm:text-sm">
                    Outils Dev
                  </h4>
                  <ul className="space-y-1">
                    <li className="text-primaryColor text-xs sm:text-sm md:text-base leading-5 sm:leading-6 flex items-center gap-2">
                      <span className="text-yellow-500">→</span> VSCode
                    </li>
                    <li className="text-primaryColor text-xs sm:text-sm md:text-base leading-5 sm:leading-6 flex items-center gap-2">
                      <span className="text-yellow-500">→</span> Git
                    </li>
                    <li className="text-primaryColor text-xs sm:text-sm md:text-base leading-5 sm:leading-6 flex items-center gap-2">
                      <span className="text-yellow-500">→</span> WebStorm
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Citation et Contact - Nouvelle disposition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="backdrop-blur-sm bg-black/30 p-8 rounded-xl shadow-2xl border border-primaryColor/20 h-full transform transition-all duration-500 hover:shadow-primaryColor/20 flex flex-col justify-center">
              <div className="relative group mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-primaryColor via-yellow-500 to-primaryColor rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-300"></div>
                <p className="relative md:text-lg text-sm leading-6 lg:max-w-[600] lg:mx-auto text-primaryColor font-[500] p-4 bg-black/50 rounded-lg border border-primaryColor/30">
                  Je suis aussi motivé qu&apos;un{" "}
                  <span className="text-blue-700 animate-pulse font-bold">useEffect</span>{" "}
                  sans dépendances, toujours prêt à se déclencher !&quot;
                </p>
              </div>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="backdrop-blur-sm bg-black/30 p-8 rounded-xl shadow-2xl border border-primaryColor/20 h-full transform transition-all duration-500 hover:shadow-primaryColor/20 flex flex-col justify-center">
              <button
                onClick={() => setShowText(!showText)}
                className="backdrop-blur-sm bg-black/50 p-6 rounded-xl border border-primaryColor/30 shadow-lg hover:shadow-primaryColor/30 transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-4 group"
              >
                <i className="ri-phone-line text-2xl text-primaryColor group-hover:text-yellow-500 transition-colors duration-300"></i>
                {showText === false ? (
                  <span className="text-white text-lg group-hover:text-yellow-500 transition-colors duration-300 animate-pulse">
                    Contactez-moi pour plus d'informations !
                  </span>
                ) : (
                  <span className="text-gray-50 text-xl font-bold group-hover:text-yellow-500 transition-colors duration-300">
                    07-68-63-85-29
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton de retour en haut */}
      <button
        className="btn bg-black text-gray-50 fixed right-5 bottom-10 border border-primaryColor/30 shadow-lg hover:shadow-primaryColor/30 transition-all duration-500 transform hover:scale-110 p-4 rounded-full z-50"
        onClick={scrollToTop}
      >
        <i className="ri-arrow-up-line text-xl text-primaryColor"></i>
      </button>
    </section>
  );
};
export default Resume;
