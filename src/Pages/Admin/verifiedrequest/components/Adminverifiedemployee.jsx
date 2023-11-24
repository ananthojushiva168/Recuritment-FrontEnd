import React from "react";

import './Adminverifiedemployee.scss';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { GoSearch } from 'react-icons/go';


import data from '../bodydata';
import { useState } from 'react';
import Adminsidebar from "../../components/Adminsidebar/Adminsidebar";


const Vemployee = () => {

    const [employee, setEmployee] = useState( data );
    const [searchemployee, setSearchemployee] = useState( "" );
    const style = {
        color: "#7D8FB3",
        font: "normal 600 17px  Poppins",
        textAlign: "center",
        backgroundColor: "#F7F8FA"
    }

    const datas = {
        textAlign: "center",
        letterSpacing: "0px",
        color: "#888888",
        padding: "19px",
        opacity: 1,
        backgroundColor: "FCFCFC",
        boxShadow: "0px 8px 5px #26334D08",
        borderRadius: "5px",


    }

    return (
        <>

            <div className="admincontainer_app">
                <Adminsidebar />
                <div className="vemployee_bodyv">
                    <div className="vemployee_containerv">
                        <div className="adminheadingbar">
                            <h1>Verification Request</h1>
                        </div>
                    </div>
                    <div className="tabledataaa">
                        <div className="top_searche">
                            <div className="search_logo">
                                <input type="search" placeholder='Search Employee'
                                    value={searchemployee}
                                    onChange={( e ) => setSearchemployee( e.target.value )} />
                                {
                                    searchemployee === "" &&
                                    <span><GoSearch /></span>
                                }
                            </div>
                            <div className="serach_employee_data">
                                <p className='employee_roles'>Role</p>
                                <p className='employee_locations'>Location</p>
                                <p className='employee_roles'>Experience</p>
                            </div>
                        </div>


                        <div className="scrollbar">

                            <TableContainer className='main'>
                                <Table stickyHeader>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={style}><p>Profile</p> </TableCell>
                                            <TableCell style={style}> <p>Name </p> </TableCell>
                                            <TableCell style={style}><p> Email&nbsp;ID</p> </TableCell>
                                            <TableCell style={style}><p>Designation</p> </TableCell>
                                            <TableCell style={style}> <p>Company Name</p> </TableCell>
                                            <TableCell style={style}><p>Experience</p> </TableCell>
                                            <TableCell style={style}><p>Assign Interviewer</p> </TableCell>
                                            <TableCell style={style}> <p> Assign Slot</p> </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            employee.filter( ( item ) => {
                                                if ( searchemployee === "" ) {
                                                    return item
                                                }
                                                else if ( item.designation.toLowerCase().includes( searchemployee.toLowerCase() ) ) {
                                                    return item

                                                }
                                                // else if (item.location.toLowerCase().includes(searchemployee.toLowerCase())) {
                                                //     return item

                                                // }
                                                else if ( item.experience.toLowerCase().includes( searchemployee.toLowerCase() ) ) {
                                                    return item
                                                }
                                                else if ( item.name.toLowerCase().includes( searchemployee.toLowerCase() ) ) {


                                                    return item
                                                }

                                            } )
                                                .map( ( row ) => (
                                                    <TableRow className="dataemployees"
                                                        key={row.id}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell style={datas}>{<img src={row.img} alt="profile img" />}</TableCell>
                                                        <TableCell style={datas}><p>{row.name}</p></TableCell>
                                                        <TableCell style={datas}> <p>{row.email}</p> </TableCell>
                                                        <TableCell style={datas}> <p>{row.designation} </p> </TableCell>
                                                        <TableCell style={datas}><p>{row.companyname}</p></TableCell>
                                                        <TableCell style={datas}><p>{row.experience} </p> </TableCell>
                                                        <TableCell style={datas}>  <div className="select-container">
                                                            <select name="select" className="select-box">
                                                                <option value="Hyandvi">Hyandvi</option>
                                                                <option value="Bhargavi">Bhargavi</option>
                                                                <option value="Jay">Jay</option>
                                                                <option value="Kiran">Kiran</option>
                                                            </select>
                                                        </div></TableCell>
                                                        <TableCell style={datas}><button>Schedule slot</button></TableCell>
                                                        {/* <TableCell style={datas}>{row.interviewname}</TableCell> */}
                                                    </TableRow>
                                                ) )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
};

export default Vemployee;
