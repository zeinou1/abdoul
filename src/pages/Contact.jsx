import { useEffect, useState } from "react";
import Titre from "../Components/UI/Titre";
import MySeoComP from "./MySeoComP";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    setIsVisible(true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <MySeoComP
        title="Contact - Mohamed Zeinoudini Abdoul-kader"
        description="Contactez Mohamed Zeinoudini Abdoul-kader, développeur front-end React. Collaborons ensemble sur votre projet web."
        url="https://abdlkdrmz.vercel.app/contact"
      />

      <section
        id="contact"
        className="relative bg-gradient-to-b from-gray-900 to-black min-h-screen py-10"
      >
        {/* Éléments décoratifs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primaryColor/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primaryColor/5 rounded-full filter blur-3xl animate-slow opacity-30"></div>
        </div>

        <div className="relative z-10">
          <Titre
            title={
              <span className="text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl bg-gradient-to-r from-primaryColor to-yellow-500 bg-clip-text text-transparent">
                Contact
              </span>
            }
          />

          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Hero Contact */}
            <div
              className={`backdrop-blur-sm bg-black/30 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-xl shadow-2xl border border-primaryColor/20 mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Prenons contact
                </h2>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed sm:leading-loose">
                  Vous recherchez un développeur junior motivé ? Une opportunité
                  m&apos;intéresse ? N&apos;hésitez pas à me contacter. Je serais ravi
                  d&apos;échanger avec vous sur vos besoins.
                </p>
              </div>

              {/* Informations de contact */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
                {/* Informations personnelles */}
                <div className="space-y-6 sm:space-y-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
                    <i className="ri-user-line text-primaryColor text-xl sm:text-2xl"></i>
                    Informations de contact
                  </h3>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-black/50 rounded-lg border border-primaryColor/30 hover:border-primaryColor/50 transition-all duration-300">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primaryColor/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-user-fill text-primaryColor text-lg sm:text-xl lg:text-2xl"></i>
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-primaryColor text-xs sm:text-sm md:text-base font-semibold block">
                          Nom
                        </span>
                        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                          Mohamed Zeinoudini Abdoul-kader
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-black/50 rounded-lg border border-primaryColor/30 hover:border-primaryColor/50 transition-all duration-300">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-phone-fill text-yellow-500 text-lg sm:text-xl lg:text-2xl"></i>
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-yellow-500 text-xs sm:text-sm md:text-base font-semibold block">
                          Téléphone
                        </span>
                        <a
                          href="tel:0768638529"
                          className="text-white text-sm sm:text-base md:text-lg lg:text-xl hover:text-yellow-500 transition-colors duration-300 font-medium block"
                        >
                          07 68 63 85 29
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-black/50 rounded-lg border border-primaryColor/30 hover:border-primaryColor/50 transition-all duration-300">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-map-pin-fill text-purple-500 text-lg sm:text-xl lg:text-2xl"></i>
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-purple-500 text-xs sm:text-sm md:text-base font-semibold block">
                          Localisation
                        </span>
                        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                          Île-de-France, France
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Réseaux sociaux et liens */}
                <div className="space-y-6 sm:space-y-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
                    <i className="ri-links-line text-primaryColor text-xl sm:text-2xl"></i>
                    Réseaux & Liens
                  </h3>

                  <div className="space-y-4 sm:space-y-6">
                    <a
                      href="https://github.com/zeinou1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-black/50 rounded-lg border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-gray-800/50 group"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-gray-600/50 transition-colors duration-300 flex-shrink-0">
                        <i className="ri-github-fill text-white text-xl sm:text-2xl lg:text-3xl"></i>
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-white font-semibold text-sm sm:text-base md:text-lg block">
                          GitHub
                        </span>
                        <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                          Découvrez mes projets
                        </p>
                      </div>
                      <i className="ri-external-link-line text-gray-400 ml-auto group-hover:text-white transition-colors duration-300 text-lg sm:text-xl flex-shrink-0"></i>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/abdoul-kader-mohamed-zeinoudini-474229137/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-black/50 rounded-lg border border-blue-700/50 hover:border-blue-600 transition-all duration-300 hover:scale-105 hover:bg-blue-900/20 group"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-700/50 rounded-lg flex items-center justify-center group-hover:bg-blue-600/50 transition-colors duration-300 flex-shrink-0">
                        <i className="ri-linkedin-fill text-blue-400 text-xl sm:text-2xl lg:text-3xl"></i>
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-white font-semibold text-sm sm:text-base md:text-lg block">
                          LinkedIn
                        </span>
                        <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                          Mon profil professionnel
                        </p>
                      </div>
                      <i className="ri-external-link-line text-gray-400 ml-auto group-hover:text-blue-400 transition-colors duration-300 text-lg sm:text-xl flex-shrink-0"></i>
                    </a>

                    <a
                      href="/resume"
                      className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-black/50 rounded-lg border border-primaryColor/50 hover:border-primaryColor transition-all duration-300 hover:scale-105 hover:bg-primaryColor/10 group"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primaryColor/20 rounded-lg flex items-center justify-center group-hover:bg-primaryColor/30 transition-colors duration-300 flex-shrink-0">
                        <i className="ri-file-text-line text-primaryColor text-xl sm:text-2xl lg:text-3xl"></i>
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-white font-semibold text-sm sm:text-base md:text-lg block">
                          Mon CV
                        </span>
                        <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                          Compétences & expériences
                        </p>
                      </div>
                      <i className="ri-arrow-right-line text-gray-400 ml-auto group-hover:text-primaryColor transition-colors duration-300 text-lg sm:text-xl flex-shrink-0"></i>
                    </a>

                    <a
                      href="/projects-1"
                      className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-black/50 rounded-lg border border-yellow-500/50 hover:border-yellow-500 transition-all duration-300 hover:scale-105 hover:bg-yellow-500/10 group"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors duration-300 flex-shrink-0">
                        <i className="ri-folder-open-line text-yellow-500 text-xl sm:text-2xl lg:text-3xl"></i>
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-white font-semibold text-sm sm:text-base md:text-lg block">
                          Mes Projets
                        </span>
                        <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                          Mes réalisations
                        </p>
                      </div>
                      <i className="ri-arrow-right-line text-gray-400 ml-auto group-hover:text-yellow-500 transition-colors duration-300 text-lg sm:text-xl flex-shrink-0"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
                <div className="inline-block bg-gradient-to-r from-primaryColor/20 to-yellow-500/20 p-6 sm:p-8 lg:p-10 rounded-xl border border-primaryColor/30 max-w-2xl">
                  <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                    Intéressé par mon profil ?
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                    Contactez-moi pour échanger sur une opportunité
                  </p>
                  <a
                    href="mailto:zarikader@gmail.com"
                    className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-primaryColor to-yellow-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-xl hover:shadow-primaryColor/25 hover:-translate-y-1 transition-all duration-300"
                  >
                    <i className="ri-mail-send-line text-lg sm:text-xl"></i>
                    Me contacter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 bg-gradient-to-r from-primaryColor to-yellow-500 text-white p-4 rounded-full shadow-lg shadow-primaryColor/30 hover:scale-110 transition-all duration-300 z-20"
          >
            <i className="ri-arrow-up-line text-xl"></i>
          </button>
        )}
      </section>
    </>
  );
};

export default Contact;
