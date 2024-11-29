import { useEffect } from "react";
import useAuthorize from "../feature/authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  
  //  1. load the authenticated user
  const { isLoading, isAuthenticated, isAuthorized, isAverified } = useAuthorize();
  
  useEffect(() => {
    //  2. check if it is authenticated or not:
    if (!isAuthenticated && !isLoading) navigate("/auth");
    // check if it is not verified
    if(!isAverified && !isLoading){
      toast.error("پروفایل شما هنوز تایید نشده است")
      navigate("/")
    } 
    // check if it is autherized or not
    if (!isAuthorized && !isLoading) navigate("/not-access"); /// route to * and the NotFound page
  }, [isAuthenticated, isAuthorized, isLoading, navigate]);

  //  3. while loading => show a loading
  if(isLoading) return (
    <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
    </div>
  )

  //  4. if user isAuthenticated and isAutherized => render the app
  if(isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
