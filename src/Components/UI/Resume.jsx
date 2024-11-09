import Titre from "../UI/Titre.jsx";
import { useState } from "react";
const Resume = () => {
  const [showText, setShowText] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section id="cpt" className="relative">
      <Titre title={<span className="md:text-xl lg:text-3xl text-sm">Compétences</span>} />
      <div className="container ">
        <div className="text-center">
          <h2 className="text-gray-50 font-[800]  md:text-2xl text-sm mb-4">
            Front-End
          </h2>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased font-semibold text-sm">
              {/*============== Vertical line running through the middle ===============*/}
              <div
                className="hidden absolute w-1 sm:block bg-primaryColor h-full left-1/2 
              transform -translate-x-1/2 
              "
              ></div>
              {/* ================ left card   ===============*/}
              <div className="mt-6 sm:mt-0 sm:mb-8">
                <div className="flex flex-col items-center sm:flex-row ">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1500"
                        data-aos-delay="200"
                        className="
                        border-4 border-primaryColor
                       text-gray-200
                        bg-gray-900 p-4 rounded shadow group cursor-pointer ease-in duration-150 "
                      >
                        <p className="md:text-xl text-sm group-hover:font-[500] leading-7">
                          <ul>
                            <li className="md:text-md text-sm leading-8">Implémenter une interface responsive avec HTML et CSS</li>
                            <br />
                            <li className="md:text-md text-sm leading-8">
                              Intégrer du contenu conformément à une maquette avec HTML et
                              CSS
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className=" rounded-full bg-gray-900 border-primaryColor
                  border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 
                  sm:translate-y-0 *:flex items-center justify-center
                   -top-2 
                  sm:top-[10%]
                  "
                  >
                    <span className="text-3xl text-gray-100 animate-slow flex items-center justify-center">
                      <i className="ri-html5-fill"></i>
                    </span>
                  </div>
                </div>
              </div>

              {/* ================ right card =============== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col items-center sm:flex-row ">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        data-aos-delay="300"
                        className="bg-gray-900 p-4  border-4 border-primaryColor

                       text-gray-200 rounded shadow group  cursor-pointer ease-in duration-150 "
                      >
                        <p className="text-md pt-4 group-hover:font-[500] leading-7 group-hover:text-white">
                          <ul>
                            <li className="md:text-md text-sm leading-8">Gérer les événements </li>
                            <br />
                            <li className="md:text-md text-sm leading-8">
                              Manipuler les éléments du DOM avec JavaScript Récupérer les
                              données utilisateurs dans le JavaScript via des formulaires
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-full bg-primaryColor border-primaryColor
                  border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 
                  sm:translate-y-0 flex items-center justify-center
                
                
                  "
                  >
                    <span className="text-3xl text-yellow-400 animate-slow flex items-center justify-center">
                      <i className="ri-javascript-fill"></i>
                    </span>
                  </div>
                </div>
              </div>
              {/* ================ left card ================*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col items-center sm:flex-row ">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1500"
                        data-aos-delay="400"
                        className="bg-gray-900 p-4  border-4 border-primaryColor rounded shadow group  cursor-pointer ease-in duration-150 text-gray-50 "
                      >
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          <ul>
                            <ul>
                              <h6 className="md:text-md text-sm leading-8">Les hooks</h6>
                              <li className="text-primaryColor md:text-md text-sm leading-8">useState</li>
                              <li className="text-primaryColor md:text-md text-sm leading-8">useEffect</li>
                              <li className="text-primaryColor md:text-md text-sm leading-8">useContext...</li>
                              <li>Etat Global</li>
                              <li className="text-primaryColor md:text-md text-sm leading-8">Api context</li>
                              <li className="text-primaryColor md:text-md text-sm leading-8">Redux Toolkit...</li>
                              <li>Test</li>
                              <li className="text-primaryColor md:text-md text-sm leading-8">Unitaires...</li>
                            </ul>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-full bg-primaryColor border-primaryColor
                  border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 
                  sm:translate-y-0 flex items-center justify-center
                  "
                  >
                    <span className="text-3xl text-blue-700 animate-slow flex items-center justify-center">
                      <i className="ri-reactjs-line"></i>
                    </span>
                  </div>
                </div>
              </div>
              {/* ================ right card =============== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col items-center sm:flex-row ">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        data-aos-delay="300"
                        className="bg-gray-900  border-4 border-primaryColor p-4 rounded shadow group  cursor-pointer ease-in duration-150 text-gray-50 "
                      >
                        <h3 className="md:text-md text-sm leading-8 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-md">
                          {" "}
                          Divers..
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          <ul>
                            <li className="text-primaryColor md:text-md text-sm leading-8">- SEO</li>
                            <li className="text-primaryColor md:text-md text-sm leading-8">- Debug</li>
                            <li className="text-primaryColor md:text-md text-sm leading-8">- API rest</li>
                          </ul>
                        </p>
                        <h3 className="md:text-md text-sm leading-8 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-md">
                          {" "}
                          Méthedologies
                        </h3>
                        <p className="lg:text-[15px] text-sm text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          <ul>
                            <li className="text-primaryColor md:text-xl text-sm leading-8">- Agile</li>
                          </ul>
                        </p>
                        <h3 className="md:text-md text-sm leading-8 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-md">
                          {" "}
                          Outils Dev..
                        </h3>
                        <ul>
                          <li className="text-primaryColor md:text-md text-sm leading-8">- Vscode</li>
                          <li className="text-primaryColor md:text-md text-sm leading-8">- Git</li>
                          <li className="text-primaryColor md:text-md text-sm leading-8">- WebStorm</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-full bg-primaryColor border-primaryColor 
                  border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 
                  sm:translate-y-0 flex items-center justify-center
                  "
                  >
                    <span className="text-3xl text-green-600 animate-slow">
                      <i className="ri-psychotherapy-fill"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
          className="btn bg-primaryColor text-gray-50 absolute right-5 bottom-48 "
          onClick={scrollToTop}
      >
        <i className="ri-arrow-up-line"></i>
      </button>
      {/* End resume */}
      <div className="flex flex-col items-center justify-center text-center px-2 sm:px-0 ">
        <p className=" md:text-lg text-sm leading-8 lg:max-w-[600] lg:mx-auto text-primaryColor font-[500] ">
          Je suis aussi motivé qu&apos;un{" "}
          <span className="text-blue-700 animate-pulse">useEffect</span> sans dépendances,
          toujours prêt à se déclencher !&quot; <br />
        </p>
        <button 
        onClick={() => setShowText(!showText)}
        className="btn mt-3">
          {
            showText === false ? <span className="text-white animate-pulse">call me here for more information !</span>: <span 
            className="text-gray-50 text-lg font-bold"
          
            >
              07-68-63-85-29
            </span>
          }
        </button>
      </div>
    </section>
  );
};
export default Resume;
