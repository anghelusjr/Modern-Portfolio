import AngelPhoto from '../../../assets/angel-buenavista-about-key-visual.webp'
import Phone from '../../../assets/about/phone.webp'
import { WebLottie } from '../../../components/lottie/webDesignAnimation'


export function KeyVisual() {
  return (
    <>
      <article className="flex flex-col h-dvh xl:h-full lg:pl-13 xl:pl-62">
        <section className="flex flex-col xl:flex-row items-center gap-3 xl:w-full xl:mr-2 xl:mt-2">
          <div className="flex items-center justify-center 
          bg-gray-800 grow rounded-2xl p-4 shadow-lg
          mx-2 xl:ml-0 -mt-20 xl:m-0 z-50 max-w-lg sm:max-w-2xl lg:max-w-3xl order-last
          ">
            <h1 className='text-xl xl:text-2xl text-gray-100 text-shadow-2xs leading-12'>
              <span className='text-5xl font-medium text-gray-300'> Discover </span>
              <br /><strong className='text-4xl xl:text-3xl text-white text-shadow-2xl'> Angel Buenavista </strong>
              <br /><strong className='text-2xl xl:text-xl text-gray-400 uppercase '>A Website Designer </strong>
              committed to creating visually stunning and responsive websites.</h1>
          </div>
          <div
            className="relative overflow-hidden h-80 w-full xl:rounded-2xl shadow-lg order-first xl:order-last
            sm:order-2 xl:h-58 xl:mr-2">
            <img
              className='absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2
              grayscale'
              src="/angel-photos/angel-designer.webp"
              alt="angel buenavista about me photo" />
          </div>
        </section>
        <section className="flex flex-col xl:grow-3">
          <div className="flex items-center xl:items-center flex-col xl:flex-row xl:-mt-4">
            <div className="flex w-full xl:h-full sm:mx-6 sm:mt-3 sm:gap-3
            sm:items-center xl:p-0 xl:gap-2 xl:m-0 flex-col grow-6">
              <div className="flex items-center sm:w-full sm:mx-2 gap-4 flex-col 
              sm:max-w-xl lg:max-w-3xl xl:max-w-none xl:w-full sm:flex-row sm:h-30 gap-2 m-4 xl:mt-4 ">
                <div className="flex flex-col w-full h-full xl:h-40 max-w-sm 
                items-center justify-center grow basis-30 bg-gray-200 rounded-2xl
                xl:max-w-none
                ">
                  <p className='text-3xl font-bold text-gray-700'>Web Desginer</p>
                  <p className='text-xl xl:text-2xl font-bold text-gray-700'>4 years</p>
                </div>
                <div className="flex flex-col w-full h-full xl:h-40 max-w-sm 
                items-center justify-center grow basis-30 bg-gray-200 rounded-2xl
                xl:max-w-none
                ">
                  <p className='text-3xl font-bold text-gray-700'>Frontend </p>
                  <p className='text-xl xl:text-2xl font-bold text-gray-700'>Developer</p>
                </div>
              </div>
              <div className="flex justify-center basis-60 xl:basis-100 xl:w-full bg-gray-800 rounded-2xl mx-2 sm:mt-4 xl:grow">
                <div className='relative h-95 w-100 xl:w-150 xl:h-150 
                xl:-m-50 rounded-b-full overflow-hidden'>
                  <img
                    className='absolute z-50 w-170 -right-25 top-20 xl:top-50 xl:bottom-20'
                    src={Phone}
                    alt="Phone design" />
                  <img src={AngelPhoto} draggable="false"
                    className='w-150 absolute  xl:-bottom-70 left-1/2 -translate-x-1/2' />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center xl:justify-start justify-center sm:flex-row xl:flex-col gap-4
              sm:py-10 xl:max-w-sm xl:gap-4 xl:pl-4 grow mx-2 w-full px-2 py-6 lg:max-w-2xl xl:max-w-none
              xl:w-100
            ">
              <div className="flex flex-col gap-10 justify-around
              items-center xl:grow-3 w-full bg-gray-100 rounded-2xl
               bg-stone-300 py-10 px-4 max-w-md sm:ml-4
              ">
                <h3 className='text-2xl font-medium text-gray-800'>
                  Skills & Expertise
                </h3>
                <div className='grid grid-cols-3 gap-8 sm:gap-4 xl:gap-10 place-items-center'>
                  <div className="devicon-html5-plain text-5xl text-center text-gray-700 pb-2">
                    <p className='text-xs pt-2'>
                      HTML5
                    </p>
                  </div>
                  <div className="devicon-css3-plain text-5xl text-center text-gray-700 pb-2">
                    <p className='text-xs pt-2'>
                      CSS3
                    </p>
                  </div>
                  <div className="devicon-javascript-plain text-5xl text-center text-gray-700 pb-2">
                    <p className='text-xs pt-2'>
                      Javascript
                    </p>
                  </div>
                  <div className="devicon-react-plain text-5xl text-center text-gray-700 pb-2">
                    <p className='text-xs pt-2'>
                      React
                    </p>
                  </div>
                  <div className="devicon-tailwindcss-plain text-5xl text-center text-gray-700 pb-2">
                    <p className='text-xs pt-2'>
                      Tailwindcss
                    </p>
                  </div>
                  <div className="devicon-framermotion-plain text-5xl text-center text-gray-700 pb-2">
                    <p className='text-xs pt-2'>
                      Framer
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 max-w-md justify-around sm:justify-center
              items-center w-full rounded-2xl xl:p-4 bg-stone-300 py-10 px-4 h-full sm:mr-4 xl:-mr-3
              ">
                <h3 className='text-2xl font-medium text-gray-800'>
                  Related Tools
                </h3>
                <div className='grid grid-cols-2 gap-10 sm:gap-10 xl:gap-10 place-items-center'>
                  <div className="devicon-photoshop-plain text-5xl text-center text-gray-700">
                    <p className='text-xs pt-2'>
                      Photoshop
                    </p>
                  </div>
                  <div className="devicon-wordpress-plain text-5xl text-center text-gray-700">
                    <p className='text-xs pt-2'>
                      Wordpress
                    </p>
                  </div>
                  <div className="text-3xl text-center text-gray-700">
                    <p className='font-medium'>Duda</p>
                    <p className='text-xs pt-2'>
                      Builder
                    </p>
                  </div>
                  <div className="text-3xl text-center text-gray-700">
                    <p className='font-medium'>Spline</p>
                    <p className='text-xs pt-2'>
                      3D Design
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>
          <div className="flex items-center xl:items-start flex-col xl:flex-row grow gap-10 xl:gap-4 mx-3 xl:mx-2 xl:-mt-5 xl:mb-4">
            <div className="flex relative overflow-hidden items-end w-full xl:items-end bg-gray-50 grow 
             basis-xs xl:rounded-2xl xl:h-50 order-last xl:order-first
            ">
              <WebLottie />
              <h2 className='text-4xl xl:text-3xl w-full text-gray-900 text-shadow-2xl bg-white/80 p-2 xl:leading-10 z-10
              md:pb-10 md:pl-10 lg:pl-30 lg:pb-20 xl:pb-3 xl:pl-10
              '>
                A <em>Filipino <br /><strong className='xl:text-4xl text-gray-900'>Website Designer</strong></em>
              </h2>
            </div>
            <div className="flex items-center xl:gap-10 
            basis-sm xl:basis-xs bg-gray-800 xl:grow-2 rounded-2xl xl:p-4 
            px-4 max-w-2xl mx-2 xl:mx-0 xl:h-50
            ">
              <p className='text-3xl text-gray-100 leading-12'>
                <span className='text-4xl text-gray-300 font-bold'>Building user-friendly</span>
                <span className='text-2xl text-gray-100 font-thin'> and easy-to-navigate </span>
                <span className='capitalize font-bold text-stone-100'>websites</span>
              </p>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}