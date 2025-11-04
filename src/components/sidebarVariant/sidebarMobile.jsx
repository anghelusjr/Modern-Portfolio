import { NavIconLink } from '../icons/navIconLink'
import * as Icons from './importedIcons'

export function SidebarMobile(){
  const tailUtil = "w-7 h-7 sm:w-8 sm:h-8 text-white hover:text-purple-400 active:text-black py-10 text-shadow-lg";

    return (
    <aside 
      className="sm:hidden fixed -top-80 left-1/2 -translate-x-1/2 
      h-100 w-100 z-9999 overflow-hidden flex justify-center items-start rounded-full
      bg-gradient-to-r from-gray-950 via-gray-500 to-gray-950
      ">
      <nav className='relative h-100'>
        <ul className='flex gap-4 absolute bottom-5 left-1/2 -translate-x-1/2'>
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

}