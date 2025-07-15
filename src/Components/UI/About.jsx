import { useEffect, useState } from "react";

import Titre from "./Titre";
const About = () => {
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const handleVisibility = () => {
    setShowText(!showText);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // display btn in scroll
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }

    // Déterminer la section active pour les effets de parallaxe
    const scrollPosition = window.scrollY;
    if (scrollPosition < 500) {
      setActiveSection("about");
    } else if (scrollPosition < 1000) {
      setActiveSection("contact");
    } else if (scrollPosition < 1500) {
      setActiveSection("formation");
    } else {
      setActiveSection("experience");
    }
  };

  useEffect(() => {
    setIsVisible(true);
    window.addEventListener("scroll", handleScroll);
    // clean composant after scrolling
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="about"
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
              À propos{" "}
            </span>
          }
        />
        <div className="container max-w-6xl mx-auto px-4">
          <div
            className={`backdrop-blur-sm bg-black/30 p-4 sm:p-6 lg:p-8 rounded-xl shadow-2xl border border-primaryColor/20 mb-12 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-center md:text-left leading-6 sm:leading-7 md:leading-8 lg:leading-10 text-white text-sm sm:text-base md:text-lg lg:text-xl">
              Développeur Front-End Junior, avec une solide base en informatique, je me
              spécialise dans la conception et le développement d'interfaces modernes et
              performantes. <br />. Passionné par le développement web, j'ai perfectionné
              mes compétences sur des technologies comme{" "}
              <span className="bg-gradient-to-r from-primaryColor to-yellow-500 bg-clip-text text-transparent font-bold">
                JavaScript, React, HTML, CSS
              </span>{" "}
              et{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-primaryColor bg-clip-text text-transparent font-bold">
                Tailwind CSS.
              </span>{" "}
              <br /> En 2024, j'ai validé mes compétences chez OpenClassrooms, renforçant
              ainsi mon expertise dans la création d'applications web dynamiques et
              l'application des meilleures pratiques de développement. <br /> Toujours en
              veille technologique, je suis motivé par l'innovation et prêt à contribuer
              activement à des projets ambitieux.
            </p>
            <div className="flex justify-center md:justify-start mt-6">
              <button
                onClick={handleVisibility}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primaryColor to-yellow-500 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-primaryColor/50 flex items-center gap-2"
              >
                {!showText ? (
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white flex items-center gap-2">
                    <i className="ri-arrow-down-line"></i> Lire la suite
                  </span>
                ) : (
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white flex items-center gap-2">
                    <i className="ri-arrow-up-line"></i> Réduire
                  </span>
                )}
              </button>
            </div>

            {showText && (
              <div className="mt-6 backdrop-blur-sm bg-primaryColor/10 p-4 rounded-lg border border-primaryColor/30 transform transition-all duration-500 animate-fadeIn">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-bold leading-6 sm:leading-7 md:leading-8 text-center md:text-left">
                  Je suis à la recherche d'une opportunité avec laquelle je peux
                  contribuer avec mon expertise en React tout en continuant à grandir en
                  tant que développeur. Prêt à relever de nouveaux défis.
                </p>
              </div>
            )}
          </div>

          {/* Redirection vers Contact */}
          <div
            className={`backdrop-blur-sm bg-black/30 p-4 sm:p-6 lg:p-8 rounded-xl shadow-2xl border border-primaryColor/20 mb-12 transform transition-all duration-1000 text-center ${
              activeSection === "contact"
                ? "scale-[1.02] shadow-primaryColor/30"
                : "scale-100"
            }`}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-primaryColor to-yellow-500 bg-clip-text text-transparent inline-block">
              Contact
            </h3>
            <div className="space-y-6">
              <p className="text-white text-sm sm:text-base md:text-lg">
                Vous souhaitez me contacter ? Découvrez toutes mes informations de contact
                sur ma page dédiée.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primaryColor to-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl hover:shadow-primaryColor/25 hover:-translate-y-1 transition-all duration-300"
              >
                <i className="ri-mail-line text-lg"></i>
                Aller à la page Contact
              </a>
            </div>
          </div>

          {/* Formation section */}
          <div
            className={`backdrop-blur-sm bg-black/30 p-6 rounded-xl shadow-2xl border border-primaryColor/20 mb-12 transform transition-all duration-1000 ${
              activeSection === "formation"
                ? "scale-[1.02] shadow-primaryColor/30"
                : "scale-100"
            }`}
          >
            <h3 className="lg:text-2xl font-bold mb-6 bg-gradient-to-r from-primaryColor to-yellow-500 bg-clip-text text-transparent inline-block">
              Formation et diplôme
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="200"
                className="backdrop-blur-sm bg-black/50 p-6 rounded-xl border-2 border-primaryColor/50 shadow-lg hover:shadow-primaryColor/30 transition-all duration-500 transform hover:scale-105 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primaryColor to-yellow-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-xl"></div>
                <h6 className="text-gray-50 md:text-xl text-sm font-bold mb-3 group-hover:text-primaryColor transition-colors duration-300">
                  Intégrateur Web / React
                </h6>
                <p className="text-primaryColor md:text-xl text-sm">
                  OpenClassrooms / Paris
                </p>
                <span className="text-primaryColor md:text-xl text-sm block mt-2">
                  2023 - 2024
                </span>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
                className="backdrop-blur-sm bg-black/50 p-6 rounded-xl border-2 border-primaryColor/50 shadow-lg hover:shadow-primaryColor/30 transition-all duration-500 transform hover:scale-105 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primaryColor to-yellow-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-xl"></div>
                <h6 className="text-gray-50 md:text-xl text-sm font-bold mb-3 group-hover:text-primaryColor transition-colors duration-300">
                  Master Valorisation des usages numériques
                </h6>
                <p className="text-primaryColor md:text-xl text-sm">Université Paris 8</p>
                <span className="text-primaryColor md:text-xl text-sm block mt-2">
                  2019 - 2020
                </span>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="400"
                className="backdrop-blur-sm bg-black/50 p-6 rounded-xl border-2 border-primaryColor/50 shadow-lg hover:shadow-primaryColor/30 transition-all duration-500 transform hover:scale-105 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primaryColor to-yellow-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-xl"></div>
                <h6 className="text-gray-50 md:text-xl text-sm font-bold mb-3 group-hover:text-primaryColor transition-colors duration-300">
                  Master Réseau informatique
                </h6>
                <p className="text-primaryColor md:text-xl text-sm">
                  ISI Dakar / Sénégal
                </p>
                <span className="text-primaryColor md:text-xl text-sm block mt-2">
                  2016
                </span>
              </div>
            </div>
          </div>

          {/* Experience section */}
          <div
            className={`backdrop-blur-sm bg-black/30 p-6 rounded-xl shadow-2xl border border-primaryColor/20 mb-12 transform transition-all duration-1000 ${
              activeSection === "experience"
                ? "scale-[1.02] shadow-primaryColor/30"
                : "scale-100"
            }`}
          >
            <h3 className="lg:text-2xl font-bold mb-6 bg-gradient-to-r from-primaryColor to-yellow-500 bg-clip-text text-transparent inline-block">
              Expériences professionnelles
            </h3>

            <div className="space-y-8">
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="200"
                className="backdrop-blur-sm bg-black/50 p-6 rounded-xl border-2 border-primaryColor/50 shadow-lg hover:shadow-primaryColor/30 transition-all duration-500 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primaryColor to-yellow-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-xl"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h6 className="text-gray-50 md:text-xl text-sm font-bold group-hover:text-primaryColor transition-colors duration-300">
                    Projet personnel - VisitKM
                  </h6>
                  <span className="text-primaryColor md:text-xl text-sm">
                    Octobre - 2024
                  </span>
                </div>
                <p className="text-white md:text-lg text-sm mb-4">
                  Site de réservation d'Appartement en ligne
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="space-y-3">
                    <h6 className="text-gray-300 font-bold md:text-lg text-sm flex items-center gap-2">
                      <i className="ri-code-s-slash-line text-primaryColor"></i>{" "}
                      Technologies:
                    </h6>
                    <p className="text-primaryColor md:text-lg text-sm ml-6">
                      React, Redux-Toolkit, API-Context, Tailwind CSS
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h6 className="text-gray-300 font-bold md:text-lg text-sm flex items-center gap-2">
                      <i className="ri-user-settings-line text-primaryColor"></i> Rôle:
                    </h6>
                    <p className="text-primaryColor md:text-lg text-sm ml-6">
                      Création d'interfaces utilisateurs, gestion de l'état avec Redux
                      Toolkit
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h6 className="text-gray-300 font-bold md:text-lg text-sm flex items-center gap-2 mb-3">
                    <i className="ri-function-line text-primaryColor"></i>{" "}
                    Fonctionnalités:
                  </h6>
                  <ul className="space-y-2 ml-6">
                    <li className="text-primaryColor md:text-lg text-sm flex items-start gap-2">
                      <span className="text-white font-bold">1.</span> Intégré des API
                      pour gérer l'authentification des utilisateurs Par (Token)
                    </li>
                    <li className="text-primaryColor md:text-lg text-sm flex items-start gap-2">
                      <span className="text-white font-bold">2.</span> L'enregistrement et
                      la mise à jour des utilisateurs
                    </li>
                    <li className="text-primaryColor md:text-lg text-sm flex items-start gap-2">
                      <span className="text-white font-bold">3.</span> Récupération du
                      profil utilisateur via (ID)
                    </li>
                    <li className="text-primaryColor md:text-lg text-sm flex items-start gap-2">
                      <span className="text-white font-bold">4.</span> L'ajout
                      d'appartement et la mise à jour
                    </li>
                    <li className="text-primaryColor md:text-lg text-sm flex items-start gap-2">
                      <span className="text-white font-bold">5.</span> Réservation
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="200"
                  className="backdrop-blur-sm bg-black/50 p-6 rounded-xl border-2 border-primaryColor/50 shadow-lg hover:shadow-primaryColor/30 transition-all duration-500 transform hover:scale-105 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primaryColor to-yellow-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-xl"></div>
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <h6 className="text-gray-50 lg:text-xl text-sm font-bold mb-3 group-hover:text-primaryColor transition-colors duration-300">
                        Employé polyvalent
                      </h6>
                      <span className="text-primaryColor md:text-xl text-sm block mb-4">
                        2020 - 2023
                      </span>
                    </div>
                    <div>
                      <p className="text-primaryColor md:text-lg text-sm">
                        Résolution de problèmes, Travail en équipe, Rigueur, relation
                        client
                      </p>
                      <p className="text-primaryColor md:text-lg text-sm mt-2">
                        Gestion des Commandes - Étiquetage - Drive - Inventaire
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="300"
                  className="backdrop-blur-sm bg-black/50 p-6 rounded-xl border-2 border-primaryColor/50 shadow-lg hover:shadow-primaryColor/30 transition-all duration-500 transform hover:scale-105 group overflow-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primaryColor to-yellow-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-xl"></div>
                  <div className="flex flex-col justify-between h-full md:h-0">
                    <div>
                      <h6 className="text-gray-50 lg:text-xl text-sm font-bold mb-3 group-hover:text-primaryColor transition-colors duration-300">
                        Stage Technicien informatique
                      </h6>
                      <span className="text-primaryColor md:text-xl text-sm block mb-4">
                        2016
                      </span>
                    </div>
                    <div>
                      <p className="text-primaryColor md:text-lg text-sm">
                        Gestion et résolution des incidents - Entretien de l&apos;active
                        Directory
                      </p>
                      <p className="text-primaryColor md:text-lg text-sm mt-2">
                        Installation des machines Windows/Linux - Mise à jour des machines
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="400"
                  className="backdrop-blur-sm bg-black/50 p-6 rounded-xl border-2 border-primaryColor/50 shadow-lg hover:shadow-primaryColor/30 transition-all duration-500 transform hover:scale-105 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primaryColor to-yellow-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-xl"></div>
                  <div className="flex flex-col justify-between h-full md:h-0 ">
                    <div>
                      <h6 className="text-gray-50 lg:text-xl text-sm font-bold  group-hover:text-primaryColor transition-colors duration-300">
                        Technicien Informatique
                      </h6>
                      <span className="text-primaryColor md:text-xl text-sm block mb-3">
                        2015
                      </span>
                    </div>
                    <div>
                      <p className="text-primaryColor md:text-lg text-sm">
                        Installation de postes de travail - Installation
                        d&apos;imprimantes en réseau
                      </p>
                      <p className="text-primaryColor md:text-lg text-sm mt-2">
                        Maintenance préventive
                      </p>
                    </div>
                  </div>
                </div>
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
  );
};

export default About;
