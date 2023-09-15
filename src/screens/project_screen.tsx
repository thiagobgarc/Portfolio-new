import { Carousel } from "react-responsive-carousel";
import { NavigationBar } from "../components/navigation_bar"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import seedData from "../seed/seedData"
import { Link } from "react-router-dom";

export const ProjectScreen = () => {
    return (
        <div className="bg-purple-300 flex flex-col h-screen justify-center items-center sm:w-full">
            <div className="flex-col flex mb-4 mt-4">
                <NavigationBar />
            </div>
           <div className="flex-wrap opacity-70 rounded-3xl shadow-lg shadow-neonBlue sm:w-full">
            <h1 className="sm:w-full text-2xl lg:text-3xl mt-10 ml-0 text-neonBlue text-center mb-10 font-mono font-semibold">
               Web and Mobile Projects
            </h1>
            <Carousel>
                {seedData.map((project: any, index: number) => (
                    <Link to={project.link}>
                    <div className="slide h-60 w-12 sm:h-96 sm:w-24">
                        <img src={project.image} alt={project.projectName}
                            key={index} 
                            className="object-cover h-full w-full rounded-lg"
                        />
                    </div>
                    </Link>
            ))}
            </Carousel>
            </div>
           
        </div>
    )
}