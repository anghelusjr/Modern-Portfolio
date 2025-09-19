import { NavLink } from "react-router-dom";

export function NavIconLink({ path, icon, tailUtil }) {

  return (
    <li key={path} className={tailUtil}>
      <NavLink
        to={path}
        title={
          path === '/' ? "Angel Buenavista" 
          : path === '/about' ? "About Me" 
          : path === '/projects' ?  "My Projects" 
          : path === '/contact' ?  "Get in Touch" : ''}>
        {icon}
      </NavLink>
    </li>
  );
}