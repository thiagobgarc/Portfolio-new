import { NavigationBar } from "../components/navigation_bar";

export const AboutScreen = () => {
  return (
    <div className="bg-purple-300 min-h-screen flex justify-center items-center flex-col">
      <NavigationBar />

      <div className="flex flex-col items-center justify-center h-full mx-10">
        <div className="flex-col mx-10 border-2 border-neonBlue shadow-lg shadow-neonBlue rounded-2xl p-4">
          <p className="text-1xl mt-10 mb-5 mx-10 text-neonBlue font-mono">
            Hello and welcome to my software engineering portfolio! My name is Thiago Garcia and I am a software engineer with a passion for creating elegant and effective solutions to complex problems.
          </p>

          <p className="text-1xl mb-5 mx-10 text-neonBlue font-mono">
            My journey into software engineering began with a desire to learn how technology could be used to solve real-world problems. I decided to pursue a career in software engineering. I enrolled in General Assembly's immersive bootcamp, where I gained hands-on experience with various programming languages and frameworks, including JavaScript, React.js, Node.js, and Python.
          </p>

          <p className="text-1xl mb-5 mx-10 text-neonBlue font-mono">
            During the bootcamp, I worked on a number of projects that allowed me to apply my new skills and knowledge to real-world problems. I collaborated with other students to develop web applications, mobile applications, and full-stack applications that integrated with various databases and APIs.
          </p>

          <p className="text-1xl mb-5 mx-10 text-neonBlue font-mono">
            After completing the bootcamp, I continued to refine my skills and knowledge by working on personal projects and contributing to open-source projects. I am always looking for new challenges and opportunities to learn and grow as a software engineer.
          </p>
        </div>
      </div>
    </div>
  );
};