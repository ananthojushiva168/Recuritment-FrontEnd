import React from "react";

import './VemployeeStyle.scss';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FaUserAlt } from 'react-icons/fa';
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
        font: "normal normal medium 14px Poppins",
        letterSpacing: "0px",
        color: "#888888",
        padding: "20px",
        opacity: 1,
        backgroundColor: "FCFCFC",
        boxShadow: "0px 8px 5px #26334D08",
        borderRadius: "5px"

    }

    return (
        <>
            <div className="admincontainer_app ">
                <Adminsidebar />
                <div className="vemployee_body">
                    <div className="adminheadingbar">
                        <h3>Verified Employee</h3>
                    </div>
                    <div className="containerof_table">
                        <div className="top_search">
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
                                <p className='employee_role'>Role</p>
                                <p className='employee_location'>Location</p>
                                <p className='employee_role'>Experience</p>
                            </div>
                        </div>

                        <TableContainer className='main'>
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={style}>Profile</TableCell>
                                        <TableCell style={style}>Name</TableCell>
                                        <TableCell style={style}>Email&nbsp;ID</TableCell>
                                        <TableCell style={style}>Designation</TableCell>
                                        <TableCell style={style}>Experience</TableCell>
                                        <TableCell style={style}>Score</TableCell>
                                        <TableCell style={style}>Location</TableCell>
                                        <TableCell style={style}>Interview Name</TableCell>
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
                                            else if ( item.location.toLowerCase().includes( searchemployee.toLowerCase() ) ) {
                                                return item
                                            }
                                            else if ( item.experience.toLowerCase().includes( searchemployee.toLowerCase() ) ) {
                                                return item
                                            }
                                            else if ( item.name.toLowerCase().includes( searchemployee.toLowerCase() ) ) {
                                                return item
                                            }

                                        } )
                                            .map( ( row ) => (
                                                <TableRow
                                                    key={row.id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell style={datas}>{<FaUserAlt size={20} />}</TableCell>
                                                    <TableCell style={datas}>{row.name}</TableCell>
                                                    <TableCell style={datas}>{row.email}</TableCell>
                                                    <TableCell style={datas}>{row.designation}</TableCell>
                                                    <TableCell style={datas}>{row.experience}</TableCell>
                                                    <TableCell style={datas}>{row.score}</TableCell>
                                                    <TableCell style={datas}>{row.location}</TableCell>
                                                    <TableCell style={datas}>{row.interviewname}</TableCell>
                                                </TableRow>
                                            ) )}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </div>
                </div>
            </div>
        </>
    )
};

export default Vemployee;
