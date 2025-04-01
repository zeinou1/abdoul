import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import cv from "../../assets/data/cv.pdf";
import ME from "../../assets/img-projects/me.jpg";

const Overview = () => {
  const [Error, setError] = useState(cv);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation d'entrée progressive des éléments
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <div className="container mt-2">
        <div className="over__wrapper">
          <div
            className={`over__info lg:flex lg:flex-row flex flex-col gap-10 transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="lg:w-[30%] flex flex-col items-center justify-center gap-3 relative backdrop-blur-sm bg-black/30 p-6 rounded-xl shadow-2xl border border-primaryColor/20">
              <div className="relative p-1 group transition-all duration-500 ease-in-out">
                <div className="flex overflow-hidden rounded-full">
                  <img
                    src={ME}
                    alt="photo for me"
                    className="w-48 h-48 object-cover max-w-full max-h-full rounded-full transform transition-all duration-500 hover:scale-105 filter saturate-100"
                  />
                </div>
                <div className="absolute inset-0 border-4 ring-2 ring-primaryColor border-primaryColor/70 rounded-full animate-pulse shadow-lg shadow-primaryColor/30"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primaryColor via-yellow-500 to-primaryColor rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-300"></div>
              </div>

              <h1
                className="text-2xl font-bold text-center text-white leading-relaxed
              hover:text-primaryColor cursor-pointer mt-4 transition-all duration-300 ease-in-out
              "
              >
                <Link to="/apropos" className="relative group">
                  <span className="bg-gradient-to-r from-primaryColor to-yellow-500 bg-clip-text text-transparent">
                    Mohamed zeinoudini
                  </span>{" "}
                  <br />
                  <span className="bg-gradient-to-r from-yellow-500 to-primaryColor bg-clip-text text-transparent">
                    Abdoul-kader
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primaryColor group-hover:w-full transition-all duration-300"></span>
                </Link>
              </h1>
              <div className="mt-2 text-center">
                <p className="text-lg text-white font-semibold mt-2 transition-all duration-300 hover:text-primaryColor">
                  Bienvenu, dans mon aventure
                </p>
                <br />

                <p className="text-md text-white font-semibold transition-all duration-300 hover:text-primaryColor">
                  Explorer mon portfolio et découvrir mes projets
                </p>

                <span className="text-right hidden lg:block cursor-pointer mt-2">
                  <Link to="/">
                    <i className="ri-arrow-right-up-fill text-3xl text-center text-primaryColor hover:text-white transition-all duration-300"></i>
                  </Link>
                </span>
              </div>
              <Link to="/apropos">
                <span className="lg:hidden my-6 w-10 h-10 bg-primaryColor/20 backdrop-blur-sm rounded-full flex items-center justify-center p-8 animate-bounce shadow-lg shadow-primaryColor/30 hover:bg-primaryColor/50 transition-all duration-300">
                  <i className="ri-arrow-down-fill text-5xl text-center text-white"></i>
                </span>
              </Link>

              <div className="border-2 border-primaryColor/70 px-6 py-4 bg-black/50 backdrop-blur-sm shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-primaryColor/30 rounded-lg">
                <p className="text-md text-white font-semibold text-center">
                  Je suis un Dev Junior{" "}
                  <span className="bg-gradient-to-r from-primaryColor to-yellow-500 bg-clip-text text-transparent text-xl font-bold">
                    {" "}
                    <br />
                    <Typewriter
                      words={["Front-end", "React", "JavaScript"]}
                      loop
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </p>
              </div>
            </div>
            <div className="lg:w-[70%] p-8 mt-8 lg:mt-0">
              <div className="backdrop-blur-sm bg-black/30 p-6 rounded-xl shadow-2xl border border-primaryColor/20">
                <h2 className="lg:text-2xl font-bold text-white mb-4 text-center bg-gradient-to-r from-primaryColor to-yellow-500 bg-clip-text text-transparent">
                  Navigation
                </h2>

                {/* Effet WOW pour attirer l'attention sur le CV */}
                <div
                  className="relative mb-6 p-4 overflow-hidden rounded-lg border-2 border-primaryColor animate-pulse group cursor-pointer"
                  onClick={() => {
                    const cvLink = document.querySelector('a[href="' + cv + '"]');
                    if (cvLink) cvLink.click();
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primaryColor/10 to-yellow-500/10 animate-pulse"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primaryColor via-yellow-500 to-primaryColor blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>

                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-20 h-20 bg-primaryColor/20 rounded-full filter blur-xl animate-ping"></div>
                    <div className="absolute w-16 h-16 bg-yellow-500/20 rounded-full filter blur-lg animate-ping animation-delay-1000"></div>
                    <div className="absolute w-24 h-24 bg-primaryColor/10 rounded-full filter blur-md group-hover:scale-150 transition-all duration-700"></div>
                    <div className="z-10 text-center transform transition-all duration-500 group-hover:scale-110">
                      <p className="lg:text-xl font-bold text-white mb-2 animate-pulse group-hover:text-yellow-400 transition-colors duration-300">
                        🌟 Téléchargez mon CV ! 🌟
                      </p>
                      <p className="text-sm text-primaryColor mb-3 group-hover:text-white transition-colors duration-300">
                        Découvrez mes compétences et mon parcours
                      </p>
                      <div className="animate-bounce group-hover:animate-ping">
                        <i className="ri-arrow-down-line text-2xl text-yellow-500 group-hover:text-white transition-colors duration-300"></i>
                      </div>
                    </div>
                  </div>

                  {/* Particules décoratives qui apparaissent au survol */}
                  <div className="absolute top-0 left-1/4 w-2 h-2 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:transform group-hover:-translate-y-10"></div>
                  <div className="absolute top-0 right-1/4 w-2 h-2 bg-primaryColor rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:transform group-hover:-translate-y-10 group-hover:delay-100"></div>
                  <div className="absolute bottom-0 left-1/3 w-2 h-2 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:transform group-hover:translate-y-10 group-hover:delay-200"></div>
                  <div className="absolute bottom-0 right-1/3 w-2 h-2 bg-primaryColor rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:transform group-hover:translate-y-10 group-hover:delay-300"></div>
                </div>

                <div className="flex flex-col gap-6 justify-center">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="w-full border border-primaryColor/50 p-5 bg-gradient-to-r from-black/80 to-gray-900/80 text-center rounded-lg shadow-lg hover:shadow-primaryColor/30 transition-all duration-500 group overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primaryColor to-yellow-600 opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                    <Link
                      to="/projects-1"
                      className="lg:text-xl text-sm text-white group-hover:text-primaryColor  flex items-center justify-center gap-2 transform transition-all duration-500 hover:scale-105 w-full"
                    >
                      <i className="ri-folder-open-line"></i> Go see my projects here!
                    </Link>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-duration="1900"
                    data-aos-delay="300"
                    className="w-full border border-primaryColor/50 p-5 bg-gradient-to-r from-black/80 to-gray-900/80 text-center rounded-lg shadow-lg hover:shadow-primaryColor/30 transition-all duration-500 group overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primaryColor to-yellow-600 opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                    <Link
                      to="/resume"
                      className="text-sm lg:text-xl text-white group-hover:text-primaryColor flex items-center justify-center gap-2 transform transition-all duration-500 hover:scale-105 w-full"
                    >
                      <i className="ri-code-box-line"></i> Compétences techniques !
                    </Link>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="400"
                    className="w-full border border-primaryColor/50 p-5 bg-gradient-to-r from-black/80 to-gray-900/80 text-center rounded-lg shadow-lg hover:shadow-primaryColor/30 transition-all duration-500 group overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primaryColor to-yellow-600 opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                    <span className="text-sm lg:text-xl text-white group-hover:text-primaryColor flex items-center justify-center gap-2 transform transition-all duration-500 hover:scale-105 w-full">
                      {Error ? (
                        <a
                          href={cv}
                          download
                          className="flex items-center justify-center gap-2 w-full"
                        >
                          <i className="ri-file-download-line"></i> Récupérer le PDF
                          maintenant !
                        </a>
                      ) : (
                        <Link
                          to="/error"
                          className="flex items-center justify-center gap-2 w-full"
                        >
                          <i className="ri-error-warning-line"></i> Sorry
                        </Link>
                      )}
                    </span>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-duration="2200"
                    data-aos-delay="500"
                    className="w-full border border-primaryColor/50 p-5 bg-gradient-to-r from-black/80 to-gray-900/80 text-center rounded-lg shadow-lg hover:shadow-primaryColor/30 transition-all duration-500 group overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primaryColor to-yellow-600 opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                    <Link
                      to="/apropos"
                      className="lg:flex lg:items-center lg:justify-center lg:gap-2 text-xl text-white group-hover:text-primaryColor  transform transition-all duration-500 hover:scale-105 w-full"
                    >
                      <span className="hidden md:block text-xl self-start">
                        <i className="ri-user-line"></i>
                      </span>
                      <span className="self-center text-sm lg:text-xl">
                        À propos de moi !
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* ---- End Corps portfolio---- */}
          </div>

          {/* Éléments décoratifs */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-primaryColor/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primaryColor/5 rounded-full filter blur-3xl animate-slow opacity-30"></div>
        </div>
      </div>
    </section>
  );
};
export default Overview;
