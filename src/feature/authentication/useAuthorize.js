import { useLocation } from "react-router-dom"
import useUser from "./useUser"

function useAuthorize() {
const { user, isLoading } = useUser()
const {pathname} = useLocation()

let isAuthenticated = false
if (user) isAuthenticated = true

let isAuthorized = false

let isAverified = false
if(user && Number(user.status) === 2) isAverified = true

// if(pathname.includes("owner")){
//     if (user && user.role ==="OWNER") isAuthorized = true
// }
// if(pathname.includes("freelancer")){
//     if (user && user.role ==="FREELANCER") isAuthorized = true
// }
// if(pathname.includes("admin")){
//     if (user && user.role ==="ADMIN") isAuthorized = true
// }

/// dynamic approach, instead of the above way:
const ROLES = {
    admin: "ADMIN",
    owner: "OWNER",
    freelancer: "FREELANCER"
}

const desiredRole = pathname.split("/").at(1)  /// admin, owner, or freelancer

if(Object.keys(ROLES).includes(desiredRole)) {
    if (user && user.role === ROLES[desiredRole]) isAuthorized = true
}

return {isLoading, isAuthenticated, isAuthorized, isAverified, user}

}

export default useAuthorize