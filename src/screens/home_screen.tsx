import { Link } from "react-router-dom";
import { NavigationBar } from "../components/navigation_bar";
import { ProjectScreen } from "./project_screen";
export const HomeScreen = () => {
    return (
    <div className="bg-purple-300 flex flex-col h-screen justify-center items-center">
        <div className="flex-col flex mb-4">
            <NavigationBar />
        </div>
        <div className="opacity-90 rounded-3xl pb-5 shadow-lg shadow-neonBlue">
        <div className="flex-col space-x-9 space-y-10 mt-20 flex-1 justify-space-between opacity-100">
            <h1 className="text-2xl mt-10 ml-7 text-neonBlue font-semibold font-mono">Hi, my name is</h1>
            <h1 className="text-4xl font-semibold text-neonBlue opacity-60 font-mono">Thiago Bueno Garcia</h1>
            <h1 className="text-5xl font-bold  text-neonBlue opacity-70 font-mono">I am a Software Engineer</h1>
        <div className=" flex flex-col justify-start items-start pl-3 pr-10 mr-10">
            <p className="text-1xl text-neonBlue ml-7 opacity-60 font-mono">
                Mobile and web developer with a passion for building great products.
            </p>
        </div>
        <div className="flex flex-row space-x-4">
            <Link to={"/projects"}>
            <button className="text-neonBlue-light p-2 rounded-lg border-2 border-neonBlue opacity-80">
                Projects
            </button>
            </Link>
            <Link to={"/about"}>
            <button className="text-neonBlue-light p-2 rounded-lg border-2 border-neonBlue opacity-80">
                About
            </button>
            </Link>
            <Link to={"/contact"}>
            <button className="text-neonBlue-light p-2 rounded-lg border-2 border-neonBlue opacity-80">
                Contact
            </button>
            </Link>
        </div>
        </div>
        </div>
    </div>
    )
}