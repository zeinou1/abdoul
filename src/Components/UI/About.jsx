import { useState, useEffect } from "react";

import Titre from "./Titre";
const About = () => {
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);
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
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // clean composant after scrolling
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about" className="relative">
      <Titre title="À propos " />
      <div className="container">
        <div className="px-2">
          <p className="text-center md:text-left text-lg leading-9 text-primaryColor">
            <span className="text-gray-50">Lover de </span>{" "}
            <span className="text-blue-700 animate-pulse">React</span> Avec un parcours
            initial dans le domaine informatique, j&apos;ai entrepris une reconversion
            pour me spécialiser dans le développement web. Passionné par la création
            d&apos;interfaces modernes et performantes, j&apos;ai perfectionné mes
            compétences sur des technologies comme{" "}
            <span className="text-gray-50">JavaScript, React, HTML,CSS</span> et{" "}
            <span className="text-gray-50">tailwindcss.</span> En 2024, j&apos;ai validé
            mes compétences chez OpenClassrooms, renforçant ainsi mon expertise dans la
            création d&apos;applications web et l&apos;adoption des meilleures pratiques
            de développement.
          </p>
          <button
            onClick={handleVisibility}
            className="border-2 border-primaryColor  px-2"
          >
            {setShowText ? (
              <span className="text-xl text-gray-50">lire la suite</span>
            ) : (
              ""
            )}
          </button>

          {showText && (
            <p className="text-lg text-primaryColor font-bold mt-2 leading-8">
              Je suis à la recherche d’une opportunité où je peux contribuer avec mon
              expertise en React tout en continuant à grandir en tant que développeur.
              Prêt à relever de nouveaux défis.
            </p>
          )}
        </div>
        {/* End à propos */}
        <div className="contact mt-24">
          <div className="contact__info flex flex-col  justify-center">
            <h3 className="text-gray-50 text-xl">Contact</h3> <br />
            <p className="text-lg">
              {" "}
              <span className="text-primaryColor">Nom:</span>{" "}
              <span>Mohamed zeinoudini abdoul-kader</span>
            </p>
            <p className="text-lg mt-3">
              {" "}
              <span className="text-primaryColor">Téléphone:</span>{" "}
              <span>0768638529</span>
            </p>
            <p className="text-lg mt-3">
              {" "}
              <span className="text-primaryColor">E-mail:</span>{" "}
              <span>
                <a href="mailto:zarikader@example.com" className="">
                  contactmehere@gmail.com
                </a>
              </span>
            </p>
          </div>
          <div className="social__network">
            <div>
              <span className="text-gray-50 text-5xl ">
                <i className="ri-facebook-fill"></i>
              </span>{" "}
              <span className="pl-2">
                <a href="/">Facebook</a>
              </span>
              <span className="text-4xl"></span>
            </div>
            <div>
              <span className="text-gray-50 text-5xl ">
                <i className="ri-github-fill"></i>
              </span>{" "}
              <span className="pl-2">
                <a href="/">Github</a>
              </span>
              <span className="text-4xl"></span>
            </div>
            <div>
              <span className="text-gray-50 text-5xl ">
                <i className="ri-linkedin-fill"></i>
              </span>{" "}
              <span className="pl-2">
                <a href="/">LinkedIn</a>
              </span>
              <span className="text-4xl"></span>
            </div>
          </div>
        </div>

        {/* End contact */}
        <div className="formation mt-24">
          <h3 className="text-gray-50 text-xl">Formation et diplôme</h3> <br />
          <div className="formation__wrapper">
            <div className="formation__content">
              <div className="formation__group flex flex-col justify-center gap-7">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="200"
                  className="flex flex-col justify-center gap-2 px-4 py-4 border-2 border-primaryColor ring-2 ring-primaryColor"
                >
                  <h6 className="text-gray-50 md:text-lg ">Intégrateur Web / react</h6>
                  <p className="text-primaryColor text-md">OpenClassrooms / paris</p>
                  <span className="text-primaryColor text-md">2023 - 2024</span>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="300"
                  className="flex flex-col justify-center gap-2 px-4 py-4 border-2 border-primaryColor ring-2 ring-primaryColor"
                >
                  <h6 className="text-gray-50 md:text-lg ">
                    Valorisation des usages numériques
                  </h6>
                  <p className="text-primaryColor text-md">Université Paris 8</p>
                  <span className="text-primaryColor text-md">2019 - 2020</span>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="400"
                  className="flex flex-col justify-center gap-2 px-4 py-4 border-2 border-primaryColor ring-2 ring-primaryColor"
                >
                  <h6 className="text-gray-50 md:text-lg ">Réseau informatique</h6>
                  <p className="text-primaryColor text-md">ISI Dakar / Sénégal</p>
                  <span className="text-primaryColor text-md">2015- 2016</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End formation */}
        {/* Experience */}
        <div className="formation mt-24">
          <h3 className="text-gray-50 text-xl">Expériences professionnelles</h3> <br />
          <div className="formation__wrapper">
            <div className="formation__content">
              <div className="formation__group flex flex-col justify-center gap-7">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="200"
                  className="flex flex-col justify-center gap-2 px-4 py-4 border-2 border-primaryColor ring-2 ring-primaryColor"
                >
                  <h6 className="text-gray-50 md:text-lg ">Projet personnel</h6>
                  <div
                    className="lg:flex  lg:gap-10 lg:flex-row flex flex-col gap-4
                  "
                  >
                    <h6>
                      VisitKM :{" "}
                      <span> Un site de réservation d’Appartement en ligne</span>
                    </h6>
                    <span className="text-primaryColor text-md">2020 - 2023</span>
                  </div>
                  <div className="text-primaryColor text-md">
                    <div>
                      <h6 className="text-gray-600 font-bold">Technologies:</h6>
                      <br />
                      <span>React, Redux-Toolkit, API-Context, Tailwind Css</span>
                    </div>
                  </div>
                  <div className="text-primaryColor text-md">
                    <div>
                      <h6 className="text-gray-600 font-bold">Rôle</h6>
                      <br />
                      <span>
                        Création d interfaces utilisateurs, gestion de l'état avec Redux
                        Toolkit
                      </span>
                    </div>
                  </div>
                  <div className="text-primaryColor text-md">
                    <div>
                      <h6 className="text-gray-600 font-bold"> Fonctionnalités:</h6>
                      <br />
                      <span>
                        <div className="flex flex-col gap-2">
                          <span>
                            1. Intégré des API pour gérer l'authentification des
                            utilisateurs Par (Token)
                          </span>{" "}
                          <br />
                          <span>
                            2. L’ajout d’appartement, L’enregistrement et la mise à jour
                            des utilisateurs
                          </span>{" "}
                          <br />
                          <span>3. Réservation</span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="200"
                  className="flex flex-col justify-center gap-2 px-4 py-4 border-2 border-primaryColor ring-2 ring-primaryColor"
                >
                  <h6 className="text-gray-50 md:text-lg ">Employé polyvalent</h6>
                  <span className="text-primaryColor text-md">2020 - 2023</span>
                  <p className="text-primaryColor text-md">
                    Résolution de problèmes, Travail en équipe, Rigueur, Contact-client
                  </p>
                  <p className="text-primaryColor text-md">
                    Gestion des Commandes - Étiquetage - Drive - Inventaire
                  </p>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="300"
                  className="flex flex-col justify-center gap-2 px-4 py-4 border-2 border-primaryColor ring-2 ring-primaryColor"
                >
                  <h6 className="text-gray-50 md:text-lg ">
                    Stage Technicien informatique
                  </h6>
                  <span className="text-primaryColor text-md">2016</span>
                  <p className="text-primaryColor text-md">
                    Gestion et résolution des incidents - Entretien de l&apos;active
                  
                  </p>
                  <p className="text-primaryColor text-md">
                  Directory - Installation des machines Windows/Linux - Mise à jour des
                  machines
                  
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="400"
                  className="flex flex-col justify-center gap-2 px-4 py-4 border-2 border-primaryColor ring-2 ring-primaryColor"
                >
                  <h6 className="text-gray-50 md:text-lg ">Technicien de maintenance</h6>
                  <span className="text-primaryColor text-md">2015</span>
                  <p className="text-primaryColor text-md">
                    Installation de postes de travail - Installation d&apos;imprimantes en
                    
                  </p>
                  <p className="text-primaryColor text-md">
                  réseau - Maintenance préventive
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-primaryColor text-white p-3  shadow-lg hover:bg-blue-600 transition duration-300"
        >
          ⬆️
        </button>
      )}
    </section>
  );
};

export default About;
