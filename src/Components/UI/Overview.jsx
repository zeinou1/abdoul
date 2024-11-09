import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import ME from "../../assets/img-projects/me.jpg";
import cv from "../../assets/data/Mohamed.pdf";
import { useState } from "react";

const Overview = () => {
  const [Error, setError] = useState(cv);
  console.log(Error);
  return (
    <section className="">
      <div className="container mt-2">
        <div className="over__wrapper">
          <div className="over__info lg:flex lg:flex-row flex flex-col  gap-10 ">
            <div className="lg:w-[30%] flex flex-col items-center justify-center gap-1 relative">
              <div className="relative p-1 ">
                <div className="flex">
                  <img
                    src={ME}
                    alt="photo for me"
                    className="w-44 h-44 object-cover max-w-full max-h-full rounded-full"
                  />
                </div>
                <div className="absolute inset-0 border-4 ring-2 ring-primaryColor border-primaryColor rounded-full animate-pulse"></div>
              </div>

              <h1
                className="text-xl font-bold text-center text-primaryColor leading-relaxed
              hover:underline cursor-pointer mt-4
              "
              >
                <Link to="/apropos">
                  Mohamed zeinoudini <br />
                  Abdoul-kader
                </Link>
              </h1>
              <div>
                <p className="text-lg md:text-left text-center text-primaryColor font-semibold mt-2">
                  Bienvenu, dans mon aventure
                </p>
                <br />

                <p className="text-md md:text-left text-center text-primaryColor dark:text-primaryColor font-semibold">
                  Explorer mon portfolio et découvrir mes projets
                </p>

                <span className="text-right hidden lg:block cursor-pointer">
                  <Link to="/">
                    <i className="ri-arrow-right-up-fill text-3xl text-center text-primaryColor"></i>
                  </Link>
                </span>
              </div>
              <Link to="/apropos">
                <span className="lg:hidden my-8 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center p-8 animate-bounce">
                  <i className="ri-arrow-down-fill text-6xl text-center text-primaryColor"></i>
                </span>
              </Link>

              <div className="border-4 border-primaryColor px-4 py-2 bg-gray-800 shadow-xl transform transition-transform duration-300 hover:scale-105">
                <p className="text-md text-primaryColor font-semibold text-center">
                  Je suis un Dev Junior {" "}
                  <span className="text-[#F97312] text-lg font-bold">
                    {" "}
                    <br />
                    <Typewriter
                      words={["Front-end", "React","JavaScript"]}
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
            <div className="lg:w-[70%] p-8 mt-16">
              <div>
                <div className="flex flex-col gap-5 justify-center">
                  <div
                    //! animation Aos
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="w-full border-2 border-primaryColor p-5 bg-[#2A1612] text-center text lg:text-xl text-primaryColor "
                  >
                    <button className="transform transition-transform duration-300 hover:scale-105">
                      <Link to="/projects-1" className="">
                        Go see my projects!
                      </Link>
                    </button>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-duration="1900"
                    data-aos-delay="300"
                    className="w-full border-2 border-primaryColor p-5 bg-[#2A1612] text-center text lg:text-xl text-primaryColor "
                  >
                    <button className="transform transition-transform duration-300 hover:scale-105">
                      <Link to="/resume" className="">
                        Compétences techniques !
                      </Link>
                    </button>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="400"
                    className="w-full border-4 border-primaryColor p-5 bg-[#2A1612] text-center text lg:text-xl text-primaryColor hover:bg-[#a15c2e] hover:text-white hover:border-separate "
                  >
                    <button className="transform transition-transform duration-300 hover:scale-105">
                      <span className="group:hover:bg-primaryColor hover:text-white">
                        {Error ? (
                          <a href={cv} download>
                            Récupérer le PDF maintenant !
                          </a>
                        ) : (
                          <Link to="/error">Sorry</Link>
                        )}
                      </span>
                    </button>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-duration="2200"
                    data-aos-delay="500"
                    className="w-full border-2 border-primaryColor p-5 bg-[#2A1612] text-center text lg:text-xl text-primaryColor "
                  >
                    <button className="transform transition-transform duration-300 hover:scale-105">
                      <span className="lg:flex lg:items-center lg:justify-center lg:gap-6">
                        <span className="hidden md:block animate-pulse text-xl self-start">
                          <i className="ri-arrow-left-fill"></i>
                        </span>
                        <span className="self-center">
                          <Link to="/apropos">À propos de moi !</Link>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* ---- End Corps portfolio---- */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Overview;
