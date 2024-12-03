import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../feature/authentication/Logout";
import useUser from "../feature/authentication/useUser";

function HeaderMenu() {
  const { user } = useUser();
  return (
    <ul className="flex items-center gap-x-4">
      <li className="flex">
        {(user?.status===2 && user?.role==="FREELANCER") &&
        (
          <Link to="/freelancer/dashboard">
            <HiOutlineUser className="w-5 h-5 text-primary-900" />
          </Link>
        )}
        {(user?.status===2 && user?.role==="OWNER") &&
        (
          <Link to="/owner/dashboard">
            <HiOutlineUser className="w-5 h-5 text-primary-900" />
          </Link>
        )}
      </li>
      <li className="flex">
        <DarkModeToggle />
      </li>
      <li className="flex">
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
