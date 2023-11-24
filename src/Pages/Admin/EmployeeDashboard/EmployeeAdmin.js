import React from 'react'
import './EmployeeAdmin.scss'
import Admincontent from './components/Admincontent/Admincontent'
import Adminheadingbar from './components/Adminheadingbar/Adminheadingbar'
import Adminsidebar from '../components/Adminsidebar/Adminsidebar'

const Admin = () => {
  return (
    <div className='admincontainer_app'>
      <Adminsidebar />
      <div className='mainadmincontainer'>
        <Adminheadingbar />
        <Admincontent />
      </div>
    </div>
  )
}

export default Admin
