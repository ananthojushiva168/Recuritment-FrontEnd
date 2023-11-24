import React from 'react'
import { Link } from 'react-router-dom'
import './Adminsidebar.scss'
// import "../../../App.css"
import dashboardimg from '../../../../Assets/Dashboard.png'
import iconemployee from '../../../../Assets/Icon1.png'
import employer from '../../../../Assets/employee.png'
import correct from '../../../../Assets/correct (1).png'
import verificationemployee from '../../../../Assets/user-verification-interface-symbol.png'
import wallet from '../../../../Assets/wallet.png'
import logout from '../../../../Assets/power-off.png'



const Adminsidebar = () => {
   return (
      <div className='sidebaradmin'>
         {/* <div className='sidebarcontainer'> */}
         <div className='adminprofilecontainer'>
            <div className='imagecontainer'>
               {/* <img src={Adminlog} alt="logo" /> */}
            </div>
            <div className='adminheading'>
               <h3>Admin 03</h3>
               <p>Pro User</p>
            </div>
         </div>
         <div className='adminlistdata'>
            <div className='adminlistimgandlink'>
               <img src={dashboardimg} alt="dashboard" />
               <Link to={'/admin/dashboard'}>Dashboard</Link>
            </div>
            <div className='adminlistimgandlink'>
               <img src={iconemployee} alt="employee" />
               <Link to={"/admin/employee"}>All Employee</Link>
            </div>
            <div className='adminlistimgandlink'>
               <img src={employer} alt="employer" />
               <Link to={"/admin/employer"}>All Employer</Link>
            </div>
            <div className='adminlistimgandlink'>
               <img src={correct} alt="correct" />
               <Link to={"/admin/request"}>Verification Request</Link>
            </div>
            <div className='adminlistimgandlink'>
               <img src={verificationemployee} alt="" />
               <Link to={"/admin/verified-employee"}>Verified Employee</Link>
            </div>
            <div className='adminlistimgandlink'>
               <img src={wallet} alt="" />
               <Link to={"/"}>Wallet</Link>
            </div>
         </div>
         <div className='logout'>
            <img src={logout} alt="" />
            <Link to={"/"}>Logout</Link>
         </div>
         {/* </div> */}
      </div>
   )
}

export default Adminsidebar
