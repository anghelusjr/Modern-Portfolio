import * as Icons from './importedIcons'
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import profilePhoto from '../../assets/profile-photo.webp'
import { clsx } from 'clsx';


export function SidebarProfileTabletDesktop(props, ref) {

  return (
    <aside ref={ref}
      className="hidden xl:block w-60 pt-8 absolute lg:left-0 top-0 bottom-0 
      z-9999 overflow-hidden justify-center items-start bg-gray-800
      ">
      <nav className='relative h-screen '>
        <div className='flex justify-center items-center pb-10'>
          <motion.div
            style={{ backgroundImage: `url(${profilePhoto})` }}
            className=" bg-top bg-cover w-26 h-26 rounded-full shadow-md" />
        </div>
        <ul className='flex flex-col w-full gap-4 sm:gap-1 lg:gap-5
            absolute left-1/2 -translate-x-25'>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                clsx(
                  "flex py-2 gap-2 items-center text-white border border-transparent transition-all ease-in duration-200 hover:shadow-2xl hover:border hover:border-gray-400 hover:bg-black xl:hover:pl-5",
                  {
                    "bg-black border-gray-400 shadow-2xl xl:pl-5": isActive,
                  }
                )
              }
            >
              <div className="flex gap-2 justify-center items-center">
                <Icons.UserCircleIcon width="40" />
                Angel CB
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                clsx(
                  "flex py-2 gap-2 items-center text-white border border-transparent transition-all ease-in duration-200 hover:shadow-2xl hover:border hover:border-gray-400 hover:bg-black xl:hover:pl-5",
                  {
                    "bg-black border-gray-400 shadow-2xl xl:pl-5": isActive,
                  }
                )
              }
            >
              <div className="flex gap-2 justify-center items-center">
                <Icons.UserCircleIcon width="40" />
                Learn about me
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                clsx(
                  "flex py-2 gap-2 items-center text-white border border-transparent transition-all ease-in duration-200 hover:shadow-2xl hover:border hover:border-gray-400 hover:bg-black xl:hover:pl-5",
                  {
                    "bg-black border-gray-400 shadow-2xl xl:pl-5": isActive,
                  }
                )
              }
            >
              <div className="flex gap-2 justify-center items-center">
                <Icons.UserCircleIcon width="40" />
                My Projects
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                clsx(
                  "flex py-2 gap-2 items-center text-white border border-transparent transition-all ease-in duration-200 hover:shadow-2xl hover:border hover:border-gray-400 hover:bg-black xl:hover:pl-5",
                  {
                    "bg-black border-gray-400 shadow-2xl xl:pl-5": isActive,
                  }
                )
              }
            >
              <div className="flex gap-2 justify-center items-center">
                <Icons.UserCircleIcon width="40" />
                Get in Touch
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}