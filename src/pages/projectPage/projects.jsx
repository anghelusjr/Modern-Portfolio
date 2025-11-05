


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

        <section className="h-auto flex flex-col gap-4 mt-10 xl:mt-20 pl-4 max-w-3xl 2xl:max-w-4xl">
          <h2 className="text-4xl capitalize">Foundational Projects</h2>
          <p>
            These projects represent the early stages of my journey as a web designer and developer.
            They focus on mastering essential front-end skills such as layout design, responsive
            structure, and interactive user experiences which became the foundation of my professional work today.
          </p>
          <div className="grid xl:grid-cols-2">
            <iframe
              src="https://anghelusjr.github.io/project-learning-ecommerce/"
              title="E-commerce"
              className="bg-white/5 p-6 my-10 rounded-xl  w-full h-150 shadow-md hover:shadow-lg transition">
            </iframe>
            <iframe
              src="https://anghelusjr.github.io/project-learning-ecommerce/"
              title="E-commerce"
              className="bg-white/5 p-6 my-10 rounded-xl   w-full h-150 shadow-md hover:shadow-lg transition">
            </iframe>
            <iframe
              src="https://anghelusjr.github.io/project-learning-ecommerce/"
              title="E-commerce"
              className="bg-white/5 p-6 my-10 rounded-xl  w-full h-150 shadow-md hover:shadow-lg transition">
            </iframe>
          </div>

        </section>

        <section className="h-auto flex flex-col gap-4 mt-10 xl:mt-20 pl-4 max-w-3xl 2xl:max-w-4xl">
          <h2 className="text-4xl capitalize">Highlighted Works</h2>

          <p>
            These projects represent the early stages of my journey as a web designer and developer.
            They focus on mastering essential front-end skills — such as layout design, responsive
            structure, and interactive user experiences — which became the foundation of my professional work today.
          </p>
          <div>
            <iframe
              src="https://anghelusjr.github.io/project-learning-ecommerce/"
              title="E-commerce"
              className="bg-white/5 p-6 my-10 rounded-xl w-full h-150 shadow-md hover:shadow-lg transition">
            </iframe>
            <p className="text-center">
              A simple ecommerce website built with HTML, CSS, and JavaScript,
              using a basic product database (JSON/local storage).
            </p>
          </div>
        </section>
      </article >
    </>
  );
}

export default ProjectsPage;