import {clsx} from 'clsx'
import backgroundScene from '../../assets/background-scene.jpg'

export function BgSplineAlternative({grayscale = false}){
  return <div className={clsx(
    "w-full absolute inset-0 h-screen z-0",
    grayscale ? "grayscale" : ""
  )}
  >
    <img src={backgroundScene} className='w-full h-screen'/>
  </div>
}