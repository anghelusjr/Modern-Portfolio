import {clsx} from 'clsx'
import backgroundScene from '../../assets/background-scene.jpg'

export function BgSplineAlternative({grayscale = false}){
  return <div className={clsx(
    "w-[100dvw] h-[100dvh]",
    grayscale ? "grayscale" : ""
  )}
  >
    <img src={backgroundScene} alt='Spline Community Background' className='object-cover w-[100dvw] h-[100dvh]'/>
  </div>
}