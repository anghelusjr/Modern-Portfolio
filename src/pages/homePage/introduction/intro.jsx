import html5 from "../../../assets/icons/html5-plain.svg"
import css3 from "../../../assets/icons/css3-plain.svg"
import javascript from "../../../assets/icons/javascript-plain.svg"
import react from "../../../assets/icons/react-original.svg"
import tailwindcss from "../../../assets/icons/tailwindcss-original.svg"
import framermotion from "../../../assets/icons/framermotion-original.svg"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"


export function Introduction() {
  return (
    <>
      <section
        className="bg-white bg-[url('/intro-background.webp')] bg-center bg-cover xl:pl-8
         bg-fixed overflow-scroll overflow-x-hidden h-dvh w-dvw snap-center snap-always">
        <div className="bg-white/75 w-dvw">
          <div className="overflow-scroll overflow-x-hidden h-dvh sm:h-dvh px-5 sm:px-20 pt-23 xl:pl-60 xl:pt-10 flex flex-col items-center justify-start gap-5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
              viewport={{ once: true, amount: 1 }}
              className="bg-[url('/angel-buenavista-web-designer-hero-1240.webp')] 
            bg-top bg-cover p-20 rounded-full shadow-md grayscale-50" />
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
              viewport={{ once: true, amount: 1 }}
              className="text-gray-800 text-shadow-2xs font-medium text-4xl xl:text-5xl text-center">
              Angel Buenavista
            </motion.h2>
            <div className="flex flex-col items-center max-w-6xl lg:max-w-4xl lg:pl-15 xl:max-w-6xl 2xl:max-w-7xl">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col gap-4 text-xl md:text-xl text-shadow-2xs text-center leading-8 text-gray-700">
                I design and build websites that look good and are easy to use. I work with WordPress, Duda 2.0, React, and Tailwind CSS to make websites for businesses and personal projects. I focus on creating websites that are fast, responsive, and professional. <br />

                  <Link to="Angel-Buenavista-CV.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-2 bg-gray-800 w-50 cursor-pointer text-gray-200 rounded-lg xl:mt-5">
                      Download CV
                    </button>
                  </Link>
                  <Link to="/about" className="underline text-xl sm:leading-50 text-shadow-2xs text-gray-600">
                      Read more about me
                  </Link>

              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
                viewport={{ once: true, amount: 0.1 }}
                className="xl:max-w-3xl grid grid-cols-3 sm:grid-cols-6 py-10 gap-10 xl:gap-10 justify-around">
                <span className=" h-10 w-10 transition-all duration-400 hover:-translate-y-2">
                  <img src={html5} alt="skeleton of the website" />
                </span>
                <span className=" transition-all duration-400 hover:-translate-y-2">
                  <img src={css3} alt="css3 for styling website." />
                </span>
                <span className=" transition-all duration-400 hover:-translate-y-2">
                  <img src={javascript} alt="interactive website" />
                </span>
                <span className=" transition-all duration-400 hover:-translate-y-2">
                  <img src={react} alt="clean components UI" />
                </span>
                <span className=" transition-all duration-400 hover:-translate-y-2">
                  <img src={tailwindcss} alt="clean designing techniques" />
                </span>
                <span className=" transition-all duration-400 hover:-translate-y-2">
                  <img src={framermotion} alt="light animations." />
                </span>
              </motion.div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}