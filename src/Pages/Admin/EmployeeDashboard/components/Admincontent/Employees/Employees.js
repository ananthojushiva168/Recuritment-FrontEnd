
import './Employees.scss'

// react icon for search symbol
import { GoSearch } from 'react-icons/go'

// user logo symbol
import { CgProfile } from 'react-icons/cg'

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EmployeesDetails from './EmployeeApi';



const style = {
   color: "#7D8FB3",
   font: "normal 600 17px Poppins",
   textAlign: "center",
   backgroundColor: "#F7F8FA"


}
const data = {
   textAlign: "center",
   font: " normal normal medium 16px/45px Poppins",
   letterSpacing: " 0px",
   color: "#888888",
   opacity: 1,
   padding: "20px",
   background: "#FCFCFC 0% 0 % no - repeat padding- box",
   boxShadow: "0px 2px 5px #26334D08",
   borderRadius: "5px",


}


export default function BasicTable () {
   const [employees, setEmployees] = React.useState( EmployeesDetails )

   const [search, setSearch] = React.useState( '' )



   return (
      <>
         <div>
            <div className="searchbarin">
               <div className='search-logo'>
                  <input type="search" placeholder='Search Employees' value={search} onChange={( e ) => setSearch( e.target.value )} />

                  {
                     search === "" &&
                     <span><GoSearch /></span>
                  }
               </div>
               <div className='role-company'>
                  <p className='se'>Role</p>
                  <p className='se'>Company</p>
                  <p className='se'>Experience</p>
               </div>

            </div>
         </div>
         <div>
            <TableContainer className='main' >
               <Table stickyHeader>
                  <TableHead >
                     <TableRow >
                        <TableCell style={style}> Profile</TableCell>
                        <TableCell style={style}>Name</TableCell>
                        <TableCell style={style}>Email ID</TableCell>
                        <TableCell style={style}>Designation</TableCell>
                        <TableCell style={style}>Company Name</TableCell>
                        <TableCell style={style}>Location</TableCell>
                        <TableCell style={style}>Experience</TableCell>

                     </TableRow>
                  </TableHead>


                  <TableBody className='main2'>



                     {
                        employees.filter( ( item ) => {
                           if ( search === "" ) {
                              return item
                           }
                           else if ( item.designation.toLowerCase().includes( search.toLowerCase() ) ) {
                              return item
                           }
                           else if ( item.name.toLowerCase().includes( search.toLowerCase() ) ) {
                              return item
                           }
                           else if ( item.location.toLowerCase().includes( search.toLowerCase() ) ) {
                              return item
                           }
                           else if ( item.experience.toLowerCase().includes( search.toLowerCase() ) ) {
                              return item
                           }

                           else if ( item.company.toLowerCase().includes( search.toLowerCase() ) ) {
                              return item
                           }
                        } ).map( ( row ) => (
                           <TableRow
                              key={row.id}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                              <TableCell style={data}>{<CgProfile size={25} />}</TableCell>
                              <TableCell style={data}> {row.name}</TableCell>
                              <TableCell style={data}>{row.email}</TableCell>
                              <TableCell style={data}>{row.designation}</TableCell>
                              <TableCell style={data}>{row.company}</TableCell>
                              <TableCell style={data}>{row.location}</TableCell>
                              <TableCell style={data}>{row.experience}</TableCell>

                           </TableRow>
                        ) )

                     }

                  </TableBody>


               </Table>
            </TableContainer>
         </div>
      </>
   );
}
