import { HiCollection, HiHome, HiOutlineCollection } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-4">
      <ul className="flex flex-col gap-y-4 pt-4">
        <li>
          <NavLink
            to="/owner/dashboard"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-2 px-2 py-1.5 bg-primary-700/50 text-primary-900"
                : "flex items-center gap-x-2 px-2 py-1.5 hover:text-primary-900 hover:bg-primary-100/50 rounded-lg text-secondary-600 transition-all duration-300"
            }
          >
            <HiHome />
            <span>داشبورد</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/owner/projects"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-2 px-2 py-1.5 bg-primary-700/50 text-primary-900"
                : "flex items-center gap-x-2 px-2 py-1.5 hover:text-primary-900 hover:bg-primary-100/50 rounded-lg text-secondary-600 transition-all duration-300"
            }
          >
            <HiOutlineCollection />
            <span>پروژه ها </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

// hover:text-primary-900 hover:bg-primary-100/50 rounded-lg text-secondary-600 transition-all duration-300
