
function ProjectsPage() {
  return (


    <article className="h-screen p-(--spacing-desktop) overflow-hidden">
      <h1>My projects</h1>

      <section>
        <h2>E-commerce Project</h2>
        <p>
          A simple ecommerce website built with HTML, CSS, and JavaScript,
          using a basic product database (JSON/local storage).
        </p>

        <div className="bg-white">
          {/* Project One */}
          <iframe
            src="https://anghelusjr.github.io/project-learning-ecommerce/"
            title="E-commerce"
            className="bg-white/5 p-6 my-10 rounded-xl w-full h-150 shadow-md hover:shadow-lg transition">
          </iframe>
        </div>
      </section>
    </article >
  );
}

export default ProjectsPage;