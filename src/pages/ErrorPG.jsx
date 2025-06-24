import error from "../assets/error.svg";
import Titre from "../Components/UI/Titre.jsx";

const ErrorPG = () => {
  return (
    <>
      {" "}
      <section>
        <Titre
          title={
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl">Not found</span>
          }
        />
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-center mb-3 flex flex-col gap-4 sm:gap-6">
          <div className="max-w-7xl px-4 sm:px-[50px] mx-auto lg:w-[70%]">
            <img src={error} alt="page not found" className="lg:max-h-96 w-full h-auto" />
          </div>
          <div className="max-w-7xl px-4 sm:px-[50px] mx-auto lg:block w-full lg:w-[30%]">
            <img
              src={error}
              alt="page not found"
              className="hidden lg:block w-full h-auto"
            />
            <h6 className="text-center pt-6 sm:pt-10 text-sm sm:text-base md:text-lg lg:text-xl text-primaryColor font-bold">
              Sorry I&apos;m coming back, thank you! 👨‍💻
            </h6>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPG;
