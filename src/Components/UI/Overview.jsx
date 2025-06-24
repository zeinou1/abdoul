import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import cv from "../../assets/data/cv.pdf";
import ME from "../../assets/img-projects/me.jpg";
import MySeoComP from "../../pages/MySeoComP";

const Overview = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <MySeoComP
        title="Mohamed Zeinoudini Abdoul-kader - Portfolio Développeur Front-End React"
        description="Développeur web front-end junior passionné par React. Découvrez mes projets et compétences en JavaScript, HTML, CSS et développement web moderne."
        url="https://abdlkdrmz.vercel.app/"
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primaryColor/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Left Column - Profile */}
              <div className="lg:col-span-2 text-center lg:text-left space-y-6">
                {/* Profile Image */}
                <div className="relative inline-block group">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto lg:mx-0 relative">
                    <img
                      src={ME}
                      alt="Mohamed Zeinoudini Abdoul-kader"
                      className="w-full h-full object-cover rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primaryColor/20 to-transparent rounded-2xl"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-primaryColor to-yellow-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="space-y-3">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    <span className="bg-gradient-to-r from-primaryColor to-yellow-500 bg-clip-text text-transparent">
                      Mohamed Zeinoudini
                    </span>
                    <br />
                    <span className="text-white">Abdoul-kader</span>
                  </h1>

                  <div className="text-lg sm:text-xl text-primaryColor font-semibold">
                    <Typewriter
                      words={[
                        "Développeur Front-End",
                        "Expert React",
                        "Créateur d'Interfaces",
                      ]}
                      loop
                      cursor
                      cursorStyle="|"
                      typeSpeed={80}
                      deleteSpeed={50}
                      delaySpeed={2000}
                    />
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
                    Développeur junior passionné, prêt à rejoindre votre équipe pour créer
                    des expériences web modernes et performantes.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href={cv}
                    download
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-primaryColor to-yellow-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primaryColor/25 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primaryColor focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    <i className="ri-download-line text-xl"></i>
                    Télécharger mon CV
                  </a>
                </div>
              </div>

              {/* Right Column - Navigation Cards */}
              <div className="lg:col-span-3 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center lg:text-left">
                  Découvrez mon profil
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Projects Card */}
                  <Link
                    to="/projects-1"
                    className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 transition-all duration-300 hover:border-primaryColor/50 hover:shadow-xl hover:shadow-primaryColor/10 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primaryColor"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primaryColor/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="w-12 h-12 bg-primaryColor/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primaryColor/30 transition-colors duration-300">
                        <i className="ri-folder-open-line text-2xl text-primaryColor"></i>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primaryColor transition-colors duration-300">
                        Mes Projets
                      </h3>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        Mes réalisations et applications web
                      </p>
                    </div>
                  </Link>

                  {/* Skills Card */}
                  <Link
                    to="/resume"
                    className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 transition-all duration-300 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors duration-300">
                        <i className="ri-code-box-line text-2xl text-yellow-500"></i>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                        Compétences
                      </h3>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        Mes compétences techniques et outils maîtrisés
                      </p>
                    </div>
                  </Link>

                  {/* About Card */}
                  <Link
                    to="/apropos"
                    className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 transition-all duration-300 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors duration-300">
                        <i className="ri-user-line text-2xl text-green-500"></i>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-500 transition-colors duration-300">
                        À Propos
                      </h3>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        Mon parcours, mes valeurs et ma vision
                      </p>
                    </div>
                  </Link>

                  {/* Contact Card */}
                  <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Link to="/contact" className="relative">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors duration-300">
                        <i className="ri-mail-line text-2xl text-purple-500"></i>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-500 transition-colors duration-300">
                        Contact
                      </h3>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        Échangeons sur vos opportunités
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-12 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 lg:pt-10 border-t border-gray-700/50">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 text-center">
                <div className="space-y-2 sm:space-y-3">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primaryColor">
                    5+
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-400">
                    Projets Réalisés
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-500">
                    React/Next.js
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-400">
                    Spécialisation
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-500">
                    Disponible
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-400">
                    Statut
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
