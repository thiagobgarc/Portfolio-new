import React from "react";

export const NavigationBar = () => {
  return (
    <div className="bg-purple-300 p-2 justify-between flex">
      <a href="/">
        <h2 className="text-2xl text-white mr-4 ml-4 opacity-70">Portfolio</h2>
      </a>
      <div className="flex justify-end">
        <a href="https://github.com/thiagobgarc">
          <img
            className="mr-4"
            src="src/assets/images/icons8-github-48.png"
            alt="github"
            width={30}
            height={24}
          />
        </a>
        <a href="https://www.linkedin.com/in/thiago-bueno-garcia-34604a25a">
          <img
            className="mr-4"
            src="src/assets/images/icons8-linkedin-100.png"
            alt="linkedin"
            width={30}
            height={24}
          />
        </a>
        <a href="/resume">
          <img
            className="mr-4"
            src="src/assets/images/icons8-resume-64.png"
            alt="resume"
            width={30}
            height={24}
          />
        </a>
      </div>
    </div>
  );
};