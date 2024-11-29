import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout({ children }) {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr] h-screen ">
      <Header />
      {children}
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-md flex flex-col gap-y-12">
          <Outlet /> {/* use router dom to use different routes */}
        </div>
      </div>
    </div>
  );
}

export default AppLayout;

//// Note //// 
/* Applayout contains four sections header, footer, sidebar and main content. Header and footer are constant for all users so place here into the component. But sidebar is a child of AppLayout, containing different parts like dashboard, projects and proposals may have different parts for owner, freelancer and admin. so, we call AppLayout and Sidebar into OwnerLayout, FreelancerLayout, AdminLayout and put relative parts into that. 
In the main section, there is the main content that differs for users. this part is DashboardLayout*/
