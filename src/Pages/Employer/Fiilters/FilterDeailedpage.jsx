import React from 'react'
import { useParams } from "react-router-dom"
import { profilesList } from './Data';
import './Detailedpage.scss';
import user from '../../../Assets/icon-1.png';
import { Link } from "react-router-dom";
import Similarprofiles from './Similarprofiles';
const FilterDeailedpage = () => {
  const { id } = useParams();
  const data = profilesList.find( ( profile ) => profile.id === id )

  console.log( data )
  return (


    <div className="main-profile-background">
      <div className='main-profilepage'>
        <div className='image-report-container'>
          <div className='image-details-container'>
            <div className='image-container'><img src={user} alt="noimahe" /></div>
            <div className='image-profile-container'>
              <h2>{data.name}</h2>
              <h3>{data.role}</h3>
              <h4>{data.status}</h4>
            </div>
          </div>
          <div>
            <h2>Report</h2>
          </div>
        </div>
        <div>
          <pre><h3>Location:{data.location}</h3> </pre>
          <pre><h3>Email:{data.email}</h3> </pre>
          <pre><h3>Phone.No:{data.phoneno}</h3> </pre>
          <pre><h3>Linked In:{data.linkedinId}</h3> </pre>
        </div>
        <div className='button-container'>
          <button>View CV</button>
        </div>
        <div className='experience-conatiner'>
          <h2>Experience:</h2>
          <p>{data.experience} Year</p>
        </div>
        <div className='education-container'>
          <h2>Education:</h2>
          <p>Btech</p>
        </div>
        <div className='skills-container'>
          <h2>Skills:</h2>
          <div className='skill-container-box'>{data.skills}</div>
        </div>
        <div className='notice-container'>
          <h2>Notice Period:</h2>
          <p>{data.noticeperiod}</p>
        </div>
        <div className='Job-type'>
          <h2>Job Type:</h2>
          <p>{data.jobtype}</p>
        </div>
        <div className='workmode'>
          <h2>Preferred Work Mode:</h2>
          <p>{data.workmode}</p>
        </div>
        <div className='close-button'>
          <Link to={`/profiles`}><button>close</button></Link>
        </div>
      </div>

      <div>
        {/* <Similarprofiles /> */}
      </div>

    </div>
  )
}

export default FilterDeailedpage