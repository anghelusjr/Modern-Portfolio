
import { GridContainer } from '../components/layout/GridContainer'
import { FlexContainer } from '../components/layout/FlexContainer';
import { PrimaryButton } from '../components/buttons';
import { BgSplineAlternative } from '../components/scene/bgSplineAlternative';
import AngelPhoto from '../assets/angel-buenavista-web-designer-1280-transparent.webp'



function AboutPage() {
  return (

    <GridContainer position='relative'>
      <BgSplineAlternative grayscale />
      <GridContainer
        as='article'
        padding='30'
        column='1'
        height='screen'
        overflow='auto'
        position='absolute'
        zIndex='50'
      >
        <h1 className='text-white text-shadow-lg py-30'>Things You Need to Know About Me</h1>

        <FlexContainer as='section' gap='10'>
          <h2>I’m Angel Buenavista, a Filipino web designer from Taguig City, specializing in creating visually engaging and user-friendly websites.</h2>
          
          <div className='flex flex-row'>
            <FlexContainer>
              <img src={AngelPhoto} alt='about angel buenavista photo' className='w-screen grayscale'/>
            </FlexContainer>
            <FlexContainer justifyContent='center' gap='10'>
              <p>
                I’m an aspiring web  designer based in Taguig City, Philippines, focused on learning and creating websites while keeping up with web development trends. My interest in web design started when I explored how websites come together, and I quickly realized I wanted to build those experiences myself. Although I’m still developing my skills, I’ve worked on several projects, helping small businesses and personal brands establish their digital presence while continuing to grow as a designer.
              </p>
              <PrimaryButton>
                download cv
              </PrimaryButton>
            </FlexContainer>
          </div>
        </FlexContainer>
        <h2>Analyst Website Designer</h2>
        <p>In my work as a website designer, I address problems by carefully examining user requirements and technological limitations,
          then coming up with innovative solutions that produce useful, beautiful websites.
          Web Designer Since 2022
          Duda, WordPress, Elementor, Gutenberg
        </p>
        <h2>My Solid Tech Stack</h2>
        <h2>Web services in taguig city</h2>

      </GridContainer>
    </GridContainer>
  )
}

export default AboutPage;