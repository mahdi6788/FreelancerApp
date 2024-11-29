import { HiHome } from "react-icons/hi"
import UserAvatar from "../feature/authentication/UserAvatar"
import useUser from "../feature/authentication/useUser"
import HeaderMenu from "./HeaderMenu"
import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()
  /// use blur when is loading causes better performance
  const {isLoading} = useUser()
  return (
    <div className="bg-secondary-0 py-4 px-4">
      <div className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8
        ${isLoading && "blur-sm"}
        `}>
        <UserAvatar />
        <HeaderMenu disabled={true}/>
        <button onClick={() => navigate('/')}>
        <HiHome className="text-secondary-900"/>
        </button>
      </div>
    </div>
  )
}

export default Header