import resume from "/resume/Thiago's Resume 09.07.23 (1)-1.png"
import { NavigationBar } from "./navigation_bar";

export const Pdf = () => {
  
    return (
        <div className="bg-purple-300 min-h-screen  p-0 justify-between items-center flex flex-col">
            <div className="pt-3 sm:pt-1">
            <NavigationBar />
            </div>
            <div className="flex-1 justify-center items-center mt-20 sm:mb-10">
            <div className="rounded-3xl shadow-2xl  shadow-neonBlue mx-10">
                <img src={resume} alt="resume" 
                className="object-contain h-full w-full rounded-lg"
                />
            </div>
            </div>
        </div>
      );
  };