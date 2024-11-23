import { HiHome, HiOutlineCollection } from "react-icons/hi";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";
import AppLayout from "../../ui/AppLayout";

function OwnerLayout({ isActive }) {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="/owner/dashboard" isActive={isActive}>
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink to="/owner/projects" isActive={isActive}>
          <HiOutlineCollection />
          <span>پروژه ها </span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default OwnerLayout;
