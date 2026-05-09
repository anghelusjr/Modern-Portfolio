import { Testimonials } from "./testimonial/testimonial";
import { Blogs } from "./blog/blogSection";
import { Introduction } from "./introduction/intro";
import { ProjectSection } from "./projectSection/projectSection";
import { Hero } from "./hero/hero";

function Home() {

  return (
    <>
      <header>
        <title>Angel Buenavista | Web Designer & Frontend Developer</title>
        <meta name="description" content="Angel Buenavista is a web designer and frontend developer in Taguig, Philippines, creating modern, responsive websites for growing businesses online with care." />
      </header>
      <section
        className="h-dvh w-dvw overflow-y-scroll scrollbar-hide 
        overflow-x-hidden snap-y snap-mandatory scroll-smooth">
        <Hero />
        <Introduction />
        <ProjectSection />
        <Testimonials />
        <Blogs />
      </section>
    </>
  )
}

export default Home;