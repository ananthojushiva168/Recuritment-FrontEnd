import React, { useState } from 'react'
import './Scheduled.scss'
import { IoAddCircleSharp } from 'react-icons/io5'
import { Box } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Checkbox from '@mui/material/Checkbox';
// const columns = [

// ];

const row = [
  { id: 1, candidateName: "Rahul", meetinglink: "www.meeting.com", time: "2.30PM" },
  { id: 2, candidateName: "Rahul", meetinglink: "www.meeting.com", time: "2.30PM" },
  { id: 3, candidateName: "Rahul", meetinglink: "www.meeting.com", time: "2.30PM" },
  { id: 4, candidateName: "Rahul", meetinglink: "www.meeting.com", time: "2.30PM" },
  { id: 5, candidateName: "Rahul", meetinglink: "www.meeting.com", time: "2.30PM" },


];

const headstyle = {
  fontSize: "24px"
}



const Scheduled = () => {

  const [schedule, setSchedule] = useState( row )
  console.log( schedule )
  return (
    <div className='scheduledmaincontainer'>
      <div className='adminloginnavbar'>
      </div>
      <div className='schedulecontainer'>
        <div className='schedulenameand_interviewheading'>
          <div className='schedule_name_heading'>
            <h1>Hello,name!</h1>
          </div>
          <div className='schedule_interview'>
            <div className='schedule_interview_heading'>
              <h2>Scheduled Interviews</h2>
            </div>
            <div className='schedule_add_interview'>
              <button>
                <span><IoAddCircleSharp /></span>
                Add
              </button>
            </div>
          </div>
        </div>
        <Box>
          <div className='schedule_interview_data'>

            <TableContainer className='main'>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell ><Checkbox /></TableCell>
                    <TableCell style={headstyle}>Candidate Name</TableCell>
                    <TableCell >Meeting Link</TableCell>
                    <TableCell >Time</TableCell>
                    <TableCell >&nbsp;</TableCell>
                    <TableCell >&nbsp;</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {


                    schedule.map( ( row ) => (
                      <TableRow
                        key={schedule.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell >{<Checkbox />}</TableCell>
                        <TableCell >{row.candidateName}</TableCell>
                        <TableCell >{row.meetinglink}</TableCell>
                        <TableCell >{row.time}</TableCell>
                        <TableCell >
                          <button style={{ backgroundColor: "#16378D", fontSize: "16px", width: "120px", height: "30px", color: "white", borderRadius: "20px" }}>Join</button>
                        </TableCell>
                        <TableCell >
                          <button style={{ backgroundColor: "#16378D", fontSize: "16px", padding: "5px 40px", color: "white", borderRadius: "20px" }}>Edit</button>
                        </TableCell>


                      </TableRow>
                    ) )}
                </TableBody>
              </Table>
            </TableContainer>



          </div>
        </Box>
      </div >

    </div >
  )
}

export default Scheduled








