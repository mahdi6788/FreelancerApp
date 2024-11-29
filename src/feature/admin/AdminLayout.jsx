import AppLayout from "../../ui/AppLayout";
import Sidebar from "../../ui/Sidebar";
import CustomNavLink from "../../ui/CustomNavLink";
import { HiHome, HiOutlineCollection, HiUser, HiViewGrid } from "react-icons/hi";

function AdminLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="/admin/dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink to="/admin/projects">
          <HiViewGrid />
          <span>پروژه ها </span>
        </CustomNavLink>

        <CustomNavLink to="/admin/proposals">
          <HiOutlineCollection />
          <span>پروپوزال ها </span>
        </CustomNavLink>

        <CustomNavLink to="/admin/users">
          <HiUser />
          <span>کاربران</span>
        </CustomNavLink>

      </Sidebar>
    </AppLayout>
  );
}

export default AdminLayout;
