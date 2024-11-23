import { NavLink } from "react-router-dom";

function CustomNavLink({to, isActive, children}) {
    const navlinkClass = "flex items-center gap-x-2 px-2 py-1.5"
  return (
    <li>
    <NavLink
      to= {to}
      className={({ isActive }) =>
        isActive
          ? `${navlinkClass} bg-primary-700/50 text-primary-900`
          : `${navlinkClass} hover:text-primary-900 hover:bg-primary-100/50 rounded-lg text-secondary-600 transition-all duration-300`
      }
    >
        {children}
    </NavLink>
    </li>
  );
}

export default CustomNavLink;
