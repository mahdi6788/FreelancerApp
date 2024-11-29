import React from 'react'
import AppLayout from '../../ui/AppLayout'
import Sidebar from '../../ui/Sidebar'
import CustomNavLink from '../../ui/CustomNavLink'
import { HiHome, HiOutlineCollection } from 'react-icons/hi'

function FreelancerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="/freelancer/dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink to="/freelancer/projects">
          <HiOutlineCollection />
          <span>پروژه ها </span>
        </CustomNavLink>
        <CustomNavLink to="/freelancer/proposals">
          <HiOutlineCollection />
          <span>پروپوزال ها </span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  )
}

export default FreelancerLayout