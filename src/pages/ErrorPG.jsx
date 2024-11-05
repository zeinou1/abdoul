import error from "../assets/error.svg"
const ErrorPG = () => {
    return (
        <div className='lg:flex lg:flex-row lg:items-center lg:justify-center mb-3 flex flex-col'>
            <div className="max-w-7xl px-[50px] mx-auto lg:w-[70%] ">
                <img src={error} alt="page not found" className="max-w-"/>
            </div>
            <div className="max-w-7xl px-[50px] mx-auto lg:block w-[30%]">
                <img src={error} alt="page not found" className="hidden lg:block "/>
                <h6 className="text-center pt-10 text-primaryColor">
                    Sorry I'm comming Back !
                </h6>
            </div>
        </div>
    );
};

export default ErrorPG;