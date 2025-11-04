
import { GridContainer } from '../../components/layout/GridContainer'
import { FlexContainer } from '../../components/layout/FlexContainer';
import { PrimaryButton } from '../../components/buttonVariant/buttons';
import AngelPhoto from '../../assets/angel-buenavista-website-developer.webp'
import team1 from '../../assets/team1.webp'
import team2 from '../../assets/team2.webp'
import bestCostume from '../../assets/best-costume.webp'
import certificate1 from '../../assets/may-certificate.webp'
import certificate2 from '../../assets/nov-certificate.webp'
import { motion } from 'framer-motion';
import { PanelsTopLeft } from 'lucide-react'
import { Pricing } from './pricing/pricing';
import { KeyVisual } from './kv/keyvisual';


function AboutPage() {
  return (
    <>
      <header>
        <title>About | Angel Buenavista — Web Designer in Taguig, Philippines </title>
        <meta name="description" content="Learn more about Angel Buenavista, a passionate web designer from Taguig, Philippines. Discover my journey, design philosophy, and how I help brands build professional and creative online experiences." />
      </header>
      <KeyVisual />
      {/* <GridContainer
        as='article'
        padding='custom'
        overflow='custom'
        column='1'
        height='screen'
        backgroundColor='primary'
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full w-screen sm:h-[calc(100dvh-100px)] flex flex-col justify-end items-center border-b-8 sm:border-none border-violet-500 px-6 
        sm:bg-cover sm:bg-center sm:py-10 sm:bg-no-repeat sm:bg-fixed sm:bg-[url('/background-ring.webp')]">

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-2xl sm:text-3xl md:text-4xl backdrop-blur-xs sm:p-8 sm:rounded-2xl
         sm:bg-purple-800/80 text-white text-shadow-md pt-30 pb-10 md:p-6 md:-ml-16 sm:my-20'>
            Discover <strong>Angel Buenavista</strong>: A <strong>Website Designer </strong>
            committed to creating visually stunning and responsive websites.
          </motion.h1>
        </motion.div>
        <FlexContainer as='section' gap='10' padding='6'>

          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.5 }}
            className='text-xl md:text-2xl text-white capitalize pt-6'>A <em>Filipino <strong>Web Designer</strong> from <strong>Taguig City</strong></em>, specializing in building user-friendly and easy-to-navigate websites
          </motion.h2>

          <div className='sm:grid sm:grid-cols-2 sm:gap-6 sm:items-center sm:bg-purple-900 rounded-2xl '>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              src={AngelPhoto} alt='about angel buenavista photo' className='w-screen hidden sm:rounded-l-xl sm:block' loading='lazy' />
            <motion.p
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              viewport={{ once: true, amount: 0.5 }}
              className='text-white md:text-lg pb-10 sm:pb-0 sm:pr-5'>
              I’m an aspiring <strong>Web Designer</strong>  based in <strong>Taguig City</strong>, Philippines, focused on learning and keeping up with web development trends.
              In my work, I carefully study user needs and technical requirements, then design innovative solutions that balance functionality and aesthetics.
            </motion.p>
          </div>
        </FlexContainer>
        <div className="bg-cover bg-center bg-no-repeat bg-fixed shadow
      bg-[url('/background-ring.webp')]
      px-6 pt-10
      ">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className='bg-white/95 px-6 py-10 rounded-2xl'>
            <PanelsTopLeft className='w-15 h-15 mb-5 text-purple-900' />
            <h2 className='text-2xl md:text-3xl pb-6 text-black capitalize' >
              Skills & Expertise
            </h2>
            <p className='text-black md:text-lg'> 
              I’ve been working in website design for almost 4 years, focusing on layouts, visuals, and making websites easy to use. Along the way, I’ve started learning coding too, so I can turn my designs into fully working websites that balance looks and performance.
            </p>
          </motion.div>
          <GridContainer padding="py" gap='6' column='custom'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className='bg-purple-600/30 backdrop-blur-md 
               py-10 px-6 className rounded-xl shadow-2xl text-center'>
              <h3 className='text-xl md:text-2xl text-white pb-6 capitalize'>
                Design Skills
              </h3>
              <GridContainer column='3'>
                <div className="devicon-figma-plain text-5xl text-white" >
                  <p className='text-xs pt-2'>
                    Design and Wireframes
                  </p>
                </div>
                <div className="devicon-photoshop-plain text-5xl text-white">
                  <p className='text-xs pt-2'>
                    Editing and Adjustment
                  </p>
                </div>
                <div className="devicon-canva-plain text-5xl text-white">
                  <p className='text-xs pt-2'>
                    Marketing Materials
                  </p>
                </div>
              </GridContainer>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className='bg-purple-600/30 backdrop-blur-md 
             py-10 px-6 className rounded-xl shadow-2xl text-center'>
              <h3 className='text-xl md:text-2xl text-white pb-6 capitalize'>
                Frontend Dev
              </h3>
              <GridContainer column='3' gap='4'>
                <div className="devicon-html5-plain text-5xl text-white">
                  <p className='text-xs pt-2'>
                    Semantic Optimizes
                  </p>
                </div>
                <div className="devicon-css3-plain text-5xl text-white">
                  <p className='text-xs pt-2'>
                    Styling, Responsive
                  </p>
                </div>
                <div className="devicon-javascript-plain text-5xl text-white">
                  <p className='text-xs pt-2'>
                    Interactive Website
                  </p>
                </div>
                <div className="devicon-react-plain text-5xl text-white">
                  <p className='text-xs pt-2'>
                    Crafting Components
                  </p>
                </div>
                <div className="devicon-tailwindcss-plain text-5xl text-white">
                  <p className='text-xs pt-2'>
                    Consistent UIs
                  </p>
                </div>
                <div className="devicon-framermotion-plain text-5xl text-white">
                  <p className='text-xs pt-2'>
                    Smooth Animations
                  </p>
                </div>
              </GridContainer>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className='bg-purple-600/30 backdrop-blur-md 
             py-10 px-6 rounded-xl shadow-2xl text-center'>
              <h3 className='text-xl md:text-2xl text-white pb-6 capitalize'>
                Website Builders
              </h3>
              <div>
                <div className="devicon-wordpress-plain text-5xl text-white">
                  <p className='text-xs pt-2'>
                    Built quickly and can be easily maintained.
                  </p>
                </div>
                <div className="text-3xl text-white text-center mt-3">Duda
                  <p className='text-xs pt-2'>
                    Fast website building and easy to navigate.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className='bg-purple-600/30 backdrop-blur-md 
            py-10 px-6 className rounded-xl shadow-2xl text-center'>
              <h3 className='text-xl md:text-2xl text-white pb-6 capitalize'>
                Tools & Workflow
              </h3>
              <GridContainer column='2' gap='6'>
                <div className="devicon-git-plain text-5xl text-white">
                  <p className='text-xs pt-2'>
                    Manages version effectively.
                  </p>
                </div>
                <div className="devicon-github-plain text-5xl text-white">
                  <p className='text-xs pt-2'>
                    Collaborates, shares projects.
                  </p>
                </div>
                <div className="devicon-vercel-plain text-5xl text-white">
                  <p className='text-xs pt-2'>
                    Deploy web apps seamlessly.
                  </p>
                </div>
                <div className="devicon-visualstudio-plain text-5xl text-white">
                  <p className='text-xs pt-2'>
                    Building projects efficiently.
                  </p>
                </div>
              </GridContainer>
            </motion.div>
          </GridContainer>
          <div className='pb-10 text-center'>
            <PrimaryButton variant='primary' ahref='/contact'>
              Download CV
            </PrimaryButton>
          </div>
        </div>
        <FlexContainer
          as='section'
          padding='6'
          gap='10'
        >
          <motion.h2
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.5 }}
            className='text-2xl md:text-3xl pt-10 text-white capitalize'>
            How My Journey Into <strong>Web Design </strong>
            Began
          </motion.h2>
          <div className='sm:grid items-center justify-center gap-6 sm:grid-cols-2 xl:grid-cols-[1fr_2fr_20px]'>
            <motion.p
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              viewport={{ once: true, amount: 0.5 }}
              className='text-white py-6 md:text-lg'>
              My interest in <strong>Web Design</strong>  started when I explored how websites come together, and I quickly realized I wanted to build those experiences myself. Although I’m still developing my skills, I’ve worked on several projects, helping small businesses and personal brands establish their digital presence while continuing to grow as a designer.
            </motion.p>
          </div>
          <motion.h3
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.5 }}
            className='text-xl md:text-2xl text-white capitalize'>
            Beyond the Screen
          </motion.h3>
          <div className='grid grid-cols gap-4 sm:grid-cols-2 xl:grid-cols-3'>
            <img src={team1} alt='cowboy and cowgirl party' className='h-full w-screen pr-2 ' loading='lazy' />
            <img src={team2} alt='team year end party' className='h-full w-screen pr-2' loading='lazy' />
            <img src={bestCostume} alt='best cowboy costume' className='h-full w-screen pr-2' loading='lazy' />
          </div>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.5 }}
            className='text-white md:text-lg'>
            I believe that great design is built not only through skills but also through collaboration. During our year-end gathering and costume party, I had the chance to connect with my teammates outside work. I even received the Best Cowboy Costume award, a fun reminder that I value creativity and building positive relationships in every setting.
          </motion.p>

          <motion.h3
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.5 }}
            className='text-xl md:text-2xl text-white capitalize'>
            Top Designer of the Month Award
          </motion.h3>
          <div className='grid grid-cols-1 gap-4 pb-10 sm:grid-cols-2 xl:grid-cols-3'>
            <img src={certificate1} alt='top designer of the month of may' className='h-full w-screen pr-2 ' loading='lazy' />
            <img src={certificate2} alt='top designer of the month of nov' className='h-full w-screen pr-2' loading='lazy' />
          </div>
        </FlexContainer>
        <section
          className="bg-[url('/bg-pricing.webp')] bg-cover bg-center bg-fixed 
              overflow-scroll overflow-x-hidden h-dvh w-dvw snap-center snap-always scrollbar-hide
              ">
          <div className="bg-black/40 h-auto w-dvw pt-30 pb-10 px-4">
            <h2 className="text-white text-2xl text-center pb-10 font-bold text-shadow-2xl">I also offer freelance web design packages</h2>
            <div className="grid grid-cols overflow-y-scroll items-center gap-5">
              <Pricing />
            </div>
          </div>
        </section>
        <div className='pb-10 pt-6 flex justify-center'>
          <PrimaryButton variant='secondary' ahref='/contact'>
            Collaboration Starts Here
          </PrimaryButton>
        </div>
        <footer className='-mx-30 py-4 text-center bg-purple-700 text-white text-shadow-lg'>
          <p>
            © 2025 Angel Buenavista — Web Designer
          </p>
        </footer>
      </GridContainer > */}
    </>

  )
}

export default AboutPage;