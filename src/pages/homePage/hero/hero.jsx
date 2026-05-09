import greetingRobot from '../../../assets/greeting-robot.webp';
import { motion } from "motion/react";
import { PrimaryButton } from '../../../components/buttonVariant/buttons';
import { FlexContainer } from '../../../components/layout/FlexContainer';



export function Hero() {
  return (
    <>
      <section
        className="bg-[url('/background-scene.webp')] h-screen bg-cover bg-center bg-fixed
        flex flex-col items-center justify-center z-50 snap-center snap-always lg:pl-15 xl:pl-60
        overflow-hidden pt-50 xl:pt-20
        ">
        <iframe src='https://my.spline.design/genkubgreetingrobot-3NvOMQQZyhFSl30DrDSSfiYr/' frameborder='0' width='100%' height='100%'></iframe>
        {/* <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="w-40 sm:w-50 mr-16 sm:mr-15 -m-8 sm:-m-15"
          draggable="false"
          src={greetingRobot}
          alt="greeting robot" /> */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className=' 
            text-xl sm:text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text capitalize text-center leading-9 sm:leading-10 md:leading-11 lg:leading-12
              bg-gradient-to-t from-gray-100 via-gray-400 to-white text-shadow-lg pb-5'
        >
          <span className="text-4xl sm:text-5xl md:text-6xl text-white text-shadow-lg font-thin">
            Angel Buenavista
          </span><br />
          A website <span className="text-3xl sm:text-4xl md:text-5xl font-bold" >designer</span> &  <span className="text-3xl sm:text-4xl md:text-5xl font-bold">developer</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className='pb-40 xl:pb-20'
        >
          <FlexContainer
            flexDirection='row'
            gap='4'
            padding='4'
          >
            <PrimaryButton
              ahref="/projects"
              variant='secondary'
            >
              View Projects
            </PrimaryButton>
            <PrimaryButton
              ahref="/contact"
            >
              Get in touch
            </PrimaryButton>
          </FlexContainer>
        </motion.div>

      </section>
    </>
  )
}