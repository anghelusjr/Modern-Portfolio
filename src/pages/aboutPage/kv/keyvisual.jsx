import AngelPhoto from '../../../assets/angel-buenavista-about-key-visual.webp'
import Phone from '../../../assets/about/Phone.webp'
import {WebLottie} from '../../../components/lottie/webDesignAnimation'


export function KeyVisual() {
  return (
    <>
      <article className="flex h-dvh bg-black xl:pl-60">
        <section className="flex flex-col grow w-80 xl:gap-3 xl:p-4">
          <div className=" flex items-center justify-center bg-gray-700 grow basis-110 rounded-2xl p-4 shadow-lg">
            <h1 className='xl:text-3xl text-gray-200 text-shadow-2xs leading-12'>  Discover <strong>Angel Buenavista</strong>: A <strong>Website Designer </strong>
              committed to creating visually stunning and responsive websites.</h1>
          </div>
          <div
            className="grow rounded-2xl shadow-lg overflow-hidden">
            <img
              className='scale-150 hover:scale-200 transition-all ease-in-out duration-500'
              src="/angel-photos/angel-designer.webp"
              alt="angel buenavista about me photo" />
          </div>
        </section>
        <section className="flex flex-col grow-3 xl:py-4 xl:pr-4 ">
          <div className="flex grow-2 xl:pb-4 ">
            <div className="flex flex-col xl:gap-3 grow-2">
              <div className="flex xl:gap-4 grow">
                <div className="flex flex-col items-center justify-center grow basis-2 bg-gray-100 rounded-2xl">
                  <p className='text-4xl font-bold text-gray-700'>Web Desginer</p>
                  <p className='text-3xl font-bold text-gray-700'>4 years</p>
                </div>
                <div className="flex flex-col items-center justify-center grow basis-2 bg-gray-100 rounded-2xl">
                  <p className='text-4xl font-bold text-gray-700'>Frontend </p>
                  <p className='text-3xl font-bold text-gray-700'>Developer</p>
                </div>
              </div>
              <div className="flex justify-center grow-2 basis-60 bg-gray-700 rounded-2xl">
                <div className='relative w-200 h-150 xl:-m-50 rounded-b-full overflow-hidden'>
                  <img
                    className='absolute z-50 w-170 -right-30 bottom-20'
                    src={Phone}
                    alt="Phone design" />
                  <img src={AngelPhoto} draggable="false"
                    className='w-150 absolute -bottom-70 left-1/2 -translate-x-1/2' />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-30 xl:gap-4 xl:pl-4 grow">
              <div className="flex flex-col xl:gap-10 justify-around
              items-center grow-3 basis-1 bg-gray-100 rounded-2xl
              xl:p-4
              ">
                <h3 className='text-2xl font-medium text-gray-800'>
                  Skills & Expertise
                </h3>
                <div className='grid grid-cols-3 xl:gap-10 place-items-center'>
                  <div className="devicon-html5-plain text-5xl text-center text-gray-700">
                    <p className='text-xs pt-2'>
                      Semantic Optimizes
                    </p>
                  </div>
                  <div className="devicon-css3-plain text-5xl text-center text-gray-700">
                    <p className='text-xs pt-2'>
                      Styling, Responsive
                    </p>
                  </div>
                  <div className="devicon-javascript-plain text-5xl text-center text-gray-700">
                    <p className='text-xs pt-2'>
                      Interactive Website
                    </p>
                  </div>
                  <div className="devicon-react-plain text-5xl text-center text-gray-700">
                    <p className='text-xs pt-2'>
                      Crafting Components
                    </p>
                  </div>
                  <div className="devicon-tailwindcss-plain text-5xl text-center text-gray-700">
                    <p className='text-xs pt-2'>
                      Consistent UIs
                    </p>
                  </div>
                  <div className="devicon-framermotion-plain text-5xl text-center text-gray-700">
                    <p className='text-xs pt-2'>
                      Smooth Animations
                    </p>
                  </div>
                </div>

              </div>
              <div className="flex justify-center items-center gap-10 basis-0  grow bg-gray-100 rounded-2xl">
                <div className="devicon-photoshop-plain text-5xl text-center text-gray-700">
                </div>
                <div className="devicon-wordpress-plain text-5xl text-center text-gray-700">

                </div>
                <div className="text-3xl text-center text-gray-700">
                  <p className='font-medium'>Duda</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex grow gap-4">
            <div className="flex relative overflow-hidden items-end bg-gray-50 grow 
            xl:basis-300 rounded-2xl xl:pl-10 xl:pb-10
            
            ">
              <WebLottie/>
              <h2 className='text-3xl text-gray-900 text-shadow-2xs xl:leading-15 z-10'>
                A <em>Filipino <br/><strong className='xl:text-5xl text-gray-900'>Website Designer</strong></em>
              </h2>
            </div>
            <div className="flex items-center xl:gap-10 basis-7xl bg-gray-700 grow-2 rounded-2xl xl:p-4
            ">
              <p className='text-3xl text-gray-100'>
                building user-friendly and easy-to-navigate websites
              </p>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}