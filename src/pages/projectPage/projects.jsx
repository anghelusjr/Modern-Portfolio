import { Link } from "react-router-dom";
import ShowcaseSection from "./ShowcaseSection";
import LostFoundShowcase from "./LostFoundShowcase";


function ProjectsPage() {
  return (

    <>
      <header>
        <title>Projects | Angel Buenavista — Web Designer in Taguig, Philippines </title>
        <meta name="description" content="Explore my web design projects — from business websites to creative digital experiences. See how Angel Buenavista, a web designer based in Taguig, Philippines, turns ideas into beautiful, functional websites." />
      </header>

      <article className="flex flex-col items-center h-auto overflow-hidden 
      pb-30 mt-30 px-4 xl:mt-8 lg:ml-16 xl:ml-62 xl:p-10">
        <h1 className="text-5xl capitalize p-6  bg-gray-800 rounded-3xl text-gray-100 2xl:px-20">Recent Projects I’ve Been Working on</h1>

        <ShowcaseSection />
        <section className="h-auto flex flex-col gap-4 mt-10 md:mt-20 lg:mt-30 pl-4">

          <div className="flex items-center justify-center">
            <img
              src="/projects/website-design/sasuke-fukuhara.webp"
              alt="Sasuke Fukuhara Hair Stylist Portfolio"
              className="w-lg h-auto my-10 rounded-lg shadow-lg"
            />
          </div>
          <Link to="https://www.sasukefukuhara.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-center"
          >https://www.sasukefukuhara.online</Link>
          <p className="text-center max-w-3xl 2xl:max-w-4xl">
            Kuya Mage often struggled to showcase his work to clients. This website was created to display his photos clearly, provide pricing information, and offer an easy way for potential clients to get in touch.
          </p>
        </section>

        <section className="h-auto flex flex-col gap-4 mt-10 md:mt-20 lg:mt-30 xl:mb-40 pl-4">

          <div className="flex items-center justify-center">
            <img
              src="/projects/website-design/graphicator.webp"
              alt="Sasuke Fukuhara Hair Stylist Portfolio"
              className="w-lg h-auto my-10 rounded-lg shadow-lg"
            />
          </div>
          <Link to="https://graphicatorsign.online"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-center"
          >https://graphicatorsign.online</Link>
          <p className="text-center max-w-3xl 2xl:max-w-4xl">
            Designs business signage, tarpaulins, custom stickers, and vehicle graphics for businesses, private vehicles, and public transportation.
          </p>
        </section>



        <section className="h-auto flex flex-col gap-4 mt-10 pl-4 max-w-3xl 2xl:max-w-4xl">
          <div className="flex items-center justify-center">
            <img
              src="/projects/website-design/website.webp"
              alt="Internal Mock Design"
              className="w-screen h-auto my-10"
            />
          </div>
          <p className="text-center max-w-3xl 2xl:max-w-4xl">
            This project is a portfolio recreation inspired by an internal company website. The original site was built in Duda, but for this portfolio, all content has been replaced with stock images, placeholder text, and dummy data. No client information, pr oprietary data, or brand materials are included.
          </p>
          <div className="flex items-center justify-center">
            {/* <img
              src="/projects/website-design/wholepage.webp"
              alt="Internal Wholepage - Mock Design"
              className="w-4xl h-auto my-10 rounded-lg shadow-lg"
            /> */}
          </div>

          <h2 className="font-display text-3xl font-bold leading-[1.02] tracking-tight sm:text-5xl sm:mt-30 text-[#12303A]">
            Coding / Development
          </h2>

          <p>
            These projects represent the early stages of my journey as a web designer and developer.
            They focus on mastering essential front-end skills such as layout design, responsive
            structure, and interactive user experiences which became the foundation of my professional work today.
          </p>

          <div>
            <img
              src="/projects/website-design/ecommerce.webp"
              alt="Sasuke Fukuhara Hair Stylist Portfolio"
              className="w-screen h-auto my-10 rounded-lg shadow-lg"
            />
            <div className="flex flex-col items-center gap-4">
              <p className="text-center">
                A fully functional ecommerce website built with HTML, CSS, and JavaScript,
                using a basic product database (JSON/local storage).
              </p>
              <Link to="https://anghelusjr.github.io/project-learning-ecommerce/" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 bg-gray-800 w-40 cursor-pointer text-gray-200 rounded-lg xl:mt-5">View Demo</button>
              </Link>
            </div>
          </div>
        </section>

        <LostFoundShowcase />



      </article >

    </>
  );
}

export default ProjectsPage;