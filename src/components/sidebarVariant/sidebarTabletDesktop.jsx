import { NavIconLink } from '../icons/navIconLink'
import * as Icons from './importedIcons'
import { forwardRef} from 'react';


export const SidebarTabletDesktop = forwardRef((props, ref) =>{
  const tailUtil = "w-7 h-7 sm:w-8 sm:h-8 text-white hover:text-purple-400 active:text-black py-10 text-shadow-lg";

    return (
    <aside ref={ref}
      className="hidden absolute left-[-100%] lg:left-0 sm:block lg:block xl:hidden top-0 bottom-0
      z-9999 overflow-hidden justify-center items-start
      bg-gradient-to-b from-gray-700 via-gray-900 to-gray-700
      transition-all duration-200 ease-in-out px-7
      ">
      <nav className='relative h-screen'>
        <ul className='flex flex-col gap-4 sm:gap-1 
        absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
          <NavIconLink
            path='/'
            icon={<Icons.UserCircleIcon />}
            tailUtil={tailUtil}
          />
          <NavIconLink
            path='/about'
            icon={<Icons.DocumentTextIcon />}
            tailUtil={tailUtil}
          />
          <NavIconLink
            path='/projects'
            icon={<Icons.BriefcaseIcon />}
            tailUtil={tailUtil}
          />
          <NavIconLink
            path='/contact'
            icon={<Icons.EnvelopeIcon />}
            tailUtil={tailUtil}
          />
        </ul>
      </nav>
    </aside>
  );

})