import { HiHome, HiOutlineCollection } from "react-icons/hi";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";
import AppLayout from "../../ui/AppLayout";

function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="/owner/dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink to="/owner/projects">
          <HiOutlineCollection />
          <span>پروژه ها </span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default OwnerLayout;
