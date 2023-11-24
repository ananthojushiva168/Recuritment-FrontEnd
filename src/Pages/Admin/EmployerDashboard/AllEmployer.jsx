import React, { useEffect } from 'react'

// AllEmployer scss file
import './AllEmployer.scss'

import { GoSearch } from 'react-icons/go'

// user logo symbol
import { FaUserAlt } from 'react-icons/fa'

import { useState } from 'react';

// import { MdCancel } from 'react-icons/md'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


// employer details 
import EmployerDetails from './EmployerDetailsApi';
import Adminsidebar from '../components/Adminsidebar/Adminsidebar';
// import { borderRadius } from '@mui/system';

const AllEmployer = () => {

    const [employer, setEmployer] = useState( EmployerDetails )

    const [search, setSearch] = useState( '' )


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

    const handleFocus = () => {
        document.getElementById( "mytext" ).focus();
    }
    useEffect( () => {
        setEmployer( employer )
    }, [employer] )
    return (

        <div className='admincontainer_app'>
            <Adminsidebar />
            <div className='Allemployer'>
                <div className='employer-background'>
                    <div className="allemployers">
                        <div className='adminheadingbar'>
                            <h3>All Employers</h3>
                        </div>
                    </div>

                    {/*  Search bar and Employee Details */}

                    <>
                        <div className='happy'>
                            <div className="searchbar">
                                <div className='search-logo'>
                                    <input type="search" id="mytext" placeholder='Search Employees' value={search} onChange={( e ) => setSearch( e.target.value )} />

                                    {
                                        search === "" && <span className='focus' onClick={handleFocus}><GoSearch /></span>
                                    }


                                </div>
                                <div className='role-company'>
                                    <p className='role' >Role</p>
                                    <p className='company'>Company</p>
                                </div>

                            </div>


                            {/*  employer details in table format */}
                            <div >
                                <TableContainer className='main'>
                                    <Table stickyHeader>
                                        <TableHead  >
                                            <TableRow  >
                                                <TableCell style={style}>Company Profile</TableCell>
                                                <TableCell style={style}>Name</TableCell>
                                                <TableCell style={style}>Email ID</TableCell>
                                                <TableCell style={style}>Designation</TableCell>
                                                <TableCell style={style}>Company Name</TableCell>
                                                <TableCell style={style}>Location</TableCell>
                                            </TableRow>
                                        </TableHead>

                                        <TableBody>

                                            {
                                                employer.filter( ( item ) => {
                                                    if ( search === "" ) {
                                                        return item
                                                    }
                                                    else if ( item.designation.toLowerCase().includes( search.toLowerCase() ) ) {
                                                        return item
                                                    }
                                                    else if ( item.name.toLowerCase().includes( search.toLowerCase() ) ) {
                                                        return item
                                                    }
                                                    else if ( item.company.toLowerCase().includes( search.toLowerCase() ) ) {
                                                        return item
                                                    }
                                                } )

                                                    .map( ( row ) => (

                                                        <TableRow
                                                            key={row.id}

                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                            <TableCell style={data}>{<FaUserAlt size={20} />}</TableCell>
                                                            <TableCell style={data}> {row.name}</TableCell>
                                                            <TableCell style={data}>{row.email}</TableCell>
                                                            <TableCell style={data}>{row.designation}</TableCell>
                                                            <TableCell style={data}>{row.company}</TableCell>
                                                            <TableCell style={data}>{row.location}</TableCell>
                                                        </TableRow>

                                                    ) )}

                                        </TableBody>

                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                    </>


                </div>
            </div>
        </div>
    )
}

export default AllEmployer