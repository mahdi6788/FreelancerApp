import { Outlet } from "react-router-dom"

function AppLayout() {
  return (
    <div>
       <div>header</div>        
       <div>sidebar</div>
       <div> <Outlet/> </div>
    </div>
  )
}

export default AppLayout