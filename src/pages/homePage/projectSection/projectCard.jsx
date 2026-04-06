import { projectData } from "./projectData.jsx"

export function ProjectCard() {
  return (
    <>
      {projectData.map((project, index) => {
        return (
          <a
            key={index}
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-md h-full"
          >
            <div
              className="h-full flex flex-col p-4 border rounded-lg 
              bg-gradient-to-br from-white to-gray-50 pb-6
              shadow-lg hover:shadow-xl transition-all duration-300 
              hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
            >
              {/* IMAGE */}
              <div className="w-full h-80 overflow-hidden rounded-md">
                <img
                  className="w-full h-full object-cover shadow-md"
                  src={project.projectImage}
                  alt={project.projectHeading}
                  loading="lazy"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-1">
                <h3 className="text-gray-700 font-semibold text-2xl pt-6">
                  {project.projectHeading}
                </h3>

                <p className="text-base leading-7 text-gray-600 pt-2 flex-1">
                  {project.projectDescription}
                </p>

                {/* CTA */}
                <div className="pt-6 mt-auto">
                  <span className="inline-block text-sm font-medium text-black border-b border-black hover:opacity-70 transition">
                    Visit Website →
                  </span>
                </div>
              </div>
            </div>
          </a>
        )
      })}
    </>
  )
}