import { ProjectCard } from "./projectCard";
import { Link } from "react-router-dom";

export function ProjectSection() {
  return (
    <>
      <section
        className="bg-[url('/background-scene.webp')] bg-no-repeat bg-cover 
        grid grid-cols place-items-center xl:pl-65 pt-30 xl:pt-10 pb-10 gap-10 overflow-scroll
        h-screen w-screen snap-center snap-always px-4 lg:pl-15 overflow-x-hidden
        ">
        <h2 className="text-center text-gray-300 font-medium text-2xl lg:text-3xl xl:text-4xl">Featured Web Design Projects & Development</h2>
        <div className="grid grid-cols max-w-5xl lg:max-w-6xl lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <ProjectCard />
        </div>
        <Link to="/projects" className="text-white w-auto h-auto py-3 px-6 bg-gray-600 rounded-md">Check Out my Latest Work</Link>
      </section>
    </>
  )
}