import { NavIconLink } from './navIconLink'
import { forwardRef} from 'react';
import { EnvelopeIcon, UserCircleIcon, BriefcaseIcon, DocumentTextIcon } from "@heroicons/react/16/solid"


export const Sidebar = forwardRef((props, ref) =>{
  const tailUtil = "w-10 h-10 text-(--color-hue2) py-10";

    return (
    <aside ref={ref}
      className="left-0 display absolute z-9999 top-0 bottom-0 px-5 border-r
      overflow-hidden flex transition-all duration-200 ease-in-out
      justify-center items-start py-(--space-lg) bg-[rgba(var(--color-raw),0.9)]">
      <nav>
        <ul className=''>
          <NavIconLink
            path='/'
            icon={<UserCircleIcon />}
            tailUtil={tailUtil}
          />
          <NavIconLink
            path='/about'
            icon={<DocumentTextIcon />}
            tailUtil={tailUtil}
          />
          <NavIconLink
            path='/projects'
            icon={<BriefcaseIcon />}
            tailUtil={tailUtil}
          />
          <NavIconLink
            path='/contact'
            icon={<EnvelopeIcon />}
            tailUtil={tailUtil}
          />
        </ul>
      </nav>
    </aside>
  );

})