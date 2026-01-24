import html5 from "../../../assets/icons/html5-plain.svg"
import css3 from "../../../assets/icons/css3-plain.svg"
import javascript from "../../../assets/icons/javascript-plain.svg"
import { projectData } from "./projectData.jsx"


export function ProjectCard() {
  return (
    <>
      {projectData.map((project, index) => {
        return (
          <div key={index} className="w-full max-w-md h-auto p-4 border rounded-lg 
            bg-gradient-to-br from-white to-gray-50 bg-clip-border pb-10
            shadow-lg hover:shadow-xl transition-all duration-400 hover:-translate-y-2 cursor-pointer">
            <div className="w-full h-80 overflow-hidden">
              <img
                className="w-full shadow-md"
                src={project.projectImage}
                alt="Card Project show off skills expertise"
                loading="lazy" />
            </div>
            <div className="overflow-hidden">
              <h3 className="text-gray-600 font-medium text-2xl pt-6">
                {project.projectHeading}
              </h3>
              <p className="text-lg leading-7 text-gray-800">
                {project.projectDescription}
              </p>
              {/* <div
                className="xl:max-w-3xl flex pt-6 gap-4 xl:gap-4">
                <span className=" h-6 w-6 transition-all duration-400 hover:-translate-y-2">
                  <img
                    src={html5}
                    alt="skeleton of the website" />
                </span>
                <span className="h-6 w-6 transition-all duration-400 hover:-translate-y-2">
                  <img
                    src={css3}
                    alt="css3 for styling website." />
                </span>
                <span className="h-6 w-6 transition-all duration-400 hover:-translate-y-2">
                  <img
                    src={javascript}
                    alt="interactive website" />
                </span>
              </div> */}
            </div>
          </div>
        )
      })}

    </>
  )
}