import { Link } from "react-router-dom"

export const NavigationBar = () => {
    return (
        <div className="bg-purple-300 p-2 justify-between flex">
            <Link to={"/"}>
            <h2 className="text-2xl text-white mr-4 ml-4 opacity-70">Portfolio</h2>
            </Link>
            <div className="flex justify-end">
            <Link to="https://github.com/thiagobgarc">
            <img className="mr-4" 
                src="src/assets/images/icons8-github-48.png" 
                alt="github" 
                width={30} height={24}
            />
            </Link>
            <Link to="https://www.linkedin.com/in/thiago-bueno-garcia-34604a25a">
            <img className="mr-4" 
                src="src/assets/images/icons8-linkedin-100.png" 
                alt="linkedin" 
                width={30} height={24}
            />
            </Link>
            <Link to={"/resume"}>
                <img className="mr-4"
                src="src/assets/images/icons8-resume-64.png"
                alt="resume"
                width={30} height={24}
                />
            </Link>
            </div>
            
        </div>
    )
}