// import heroImg from '../assets/angel-buenavista-web-designer-hero-1280-transparent.webp'
import { motion } from "motion/react"
import { PrimaryButton } from '../components/buttons'
import { GridContainer } from '../components/layout/GridContainer'
import { FlexContainer } from '../components/layout/FlexContainer';
import SplineScene from "../components/scene/splineScene"
import { BgSplineAlternative } from '../components/scene/bgSplineAlternative';


function HomePage() {
  return (
    <GridContainer
      as='article'
      position='relative'
      height='screen'
      overflow='hidden'
      column='1'
    >
      <FlexContainer
        as='section'
        position='absolute'
        alignItems='center'
        placement='center'
        width='full'
        zIndex='50'
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className=' 
            text-transparent bg-clip-text capitalize text-center 
             bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-shadow-lg'
        >
          <span className='text-6xl sm md:text-7xl lg:text-8xl text-white text-shadow-lg '>Angel Buenavista</span><br />
          A website designer & <br /> developer
        </motion.h1>
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
      </FlexContainer>
      <BgSplineAlternative />
      <SplineScene />
    </GridContainer>

  )
}

export default HomePage;