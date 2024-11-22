import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";

function Logout() {
  const { isPending, logout } = useLogout();
  return isPending ? (
    <Loading />
  ) : (
    <button onClick={logout} className="w-5 h-5 text-secondary-600 hover:text-error">
      <HiArrowLeftStartOnRectangle />
    </button>
  );
}

export default Logout;
