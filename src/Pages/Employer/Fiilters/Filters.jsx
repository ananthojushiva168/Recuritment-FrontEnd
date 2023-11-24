import React, { useState, useContext, useEffect } from "react";
import "./Filters.scss";
import image from "../../../Assets/user.png";
import noresult from "../../../Assets/icon-1.png";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Link } from "react-router-dom";
import { profilesList } from "./Data";
import { Filterstore } from '../../../Contex/filterstore'
import axios from "axios";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
const Filters = () => {
  let dummydata = "XXXXXXXXXXX";
  const { setSimilar, setSimilarlocation } = useContext( Filterstore )

  const [data, setData] = useState();



  const filterdata_backend = async () => {

    const user = JSON.parse( localStorage.getItem( "user" ) )

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/employer/hireemployees`, config
      );
      setData( response.data.data );
    } catch ( error ) {
      console.log( error.response.data.message );
    }
  }

  useEffect( () => {
    filterdata_backend()

  }, [] )














  const [location, setLocation] = useState( null );
  const [value, setValue] = React.useState( [0, 15] );
  const [searchCtc, setsearchCtc] = useState( "" );
  const [searchSkill, setsearchSkill] = useState( "" );
  // const [workmode, setWorkmode] = useState( "" );
  // searching by location
  const onFilterChange = ( event ) => {
    const selectedLocation = event.target.value;
    const filterList = profilesList.filter( ( item ) => {
      return item.location.toLowerCase() === selectedLocation;
    } );

    setData( filterList );
    setLocation( filterList );
    setSimilarlocation( filterList );
  };

  const onRoleFilterChange = ( event ) => {
    const roleDetails = event.target.value;
    const locationDetails = location;
    const roledata = locationDetails.filter( ( item ) => {
      return item.role === roleDetails;
    } );

    setData( roledata );
    setSimilar( roledata );

  };

  const handleCtc = ( event ) => {
    const searchedCtc = event.target.value;
    const locationDetails = location;
    setsearchCtc( searchedCtc );
    const searchCtc = locationDetails.filter( ( item ) => {
      return item.ctc === searchedCtc;
    } );
    // setData( searchCtc );
  };

  const handleSkill = ( event ) => {
    const query = event.target.value;

    setsearchSkill( query );
    const locationDetails = location;
    const searchList = locationDetails.filter( ( item ) => {
      return item.skills.toLowerCase().indexOf( query.toLowerCase() ) !== -1;
    } );

    setData( searchList );
  };

  const handleChange = ( event, newValue ) => {
    const minExp = value[0];
    const maxExp = value[1];
    const locationDetails = location;

    const rangeData = locationDetails.filter(
      ( item ) => item.experience >= minExp && item.experience <= maxExp
    );
    setData( rangeData );
    setValue( newValue );
  };

  //seraching by workmode
  const workmodefilter = ( category ) => {
    const locationDetails = location;

    const workmodeData = locationDetails.filter( ( item ) => {
      return item.workmode === category;
    } );
    setData( workmodeData );
  };
  // searching by job-type
  const jobtypefilter = ( jobtype ) => {
    const locationDetails = location;
    const jobtypedata = locationDetails.filter( ( item ) => {
      return item.jobtype === jobtype;
    } );
    // setData( jobtypedata );
  };
  // seraching for verified  and not verified profiles
  const statusfilter = ( status ) => {
    const locationDetails = location;
    // console.log(locationDetails);
    const statusdata = locationDetails.filter( ( item ) => {
      return item.status === status;
    } );
    setData( statusdata );
    //  console.log(statusdata);
  };
  const noticeperiodfilter = ( period ) => {
    const locationDetails = location;
    const timeperioddata = locationDetails.filter( ( item ) => {
      return item.noticeperiod === period;
    } );
    setData( timeperioddata );
  };
  // sreachinng by using Onrole filters

  return (
    <>
      <div className="mainfilter-container">
        <Navbar index="4" />
        <div className="filtercontainer_wrapper">

          <div className="filters-container">
            <div className="filters-nav">
              <div>
                <h2>Filters</h2>
              </div>
              <div>
                <a href="refresh"> Clear all</a>
              </div>
            </div>
            <div className="allfilters-containers">
              <div className="location-filter">
                <h3>Location</h3>
                <select name="experience" onChange={onFilterChange}>
                  <option value="">Select Location</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="chennai">Chennai</option>
                  <option value="banglore">Banglore</option>
                  <option value="delhi">Delhi</option>
                </select>
              </div>
              <div className="role_filter">
                <h3>Role</h3>
                <select name="role" onChange={onRoleFilterChange}>
                  <option value="">Select Role</option>
                  <option value="Executive">Executive</option>
                  <option value="Associate">Associate</option>
                  <option value="Lead">Lead</option>
                  <option value="Sr.Lead">Sr.Lead</option>
                  <option value="Sr.Engineer">Sr.Engineer</option>
                  <option value="Asst.Manager">Asst.Manager</option>
                  <option value="Manager">Manager</option>
                  <option value="Sr.Manager">Sr.Manager</option>
                  <option value="Head">Head</option>
                </select>
              </div>
              <div>
                <div className="experience_box">


                  {/* <div style={{ display: "flex", alignItems: "center" }}> */}
                  <h3>Experience</h3>
                  {/* <span>(in years)</span> */}

                  {/* </div> */}
                  <Box sx={{ width: 150 }}>
                    <Slider
                      getAriaLabel={() => "Experience range"}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      min={0}
                      max={30}
                    />
                  </Box>
                </div>
              </div>
              {/* ctc filter */}
              <div className="search-container">
                <h3>CTC</h3>
                <input
                  type="text"
                  name="search"
                  placeholder="Search by ctc"
                  value={searchCtc}
                  onChange={handleCtc}
                />
              </div>

              <div className="search-container">
                <h3>Skills</h3>
                <input
                  type="text"
                  name="search"
                  placeholder="Search by skill"
                  value={searchSkill}
                  onChange={handleSkill}
                />
              </div>

              {/* workMode filters */}
              <div className="workmode-buttons-container">
                <h3>Work Mode</h3>
                <div>
                  <button onClick={() => workmodefilter( "onsite" )}>
                    On site
                  </button>
                </div>
                <div>
                  <button onClick={() => workmodefilter( "remote" )}>Remote</button>
                </div>
                <div>
                  <button onClick={() => workmodefilter( "hybrid" )}>Hybrid</button>
                </div>
              </div>
              {/* notice period */}
              <div className="notice-period-buttons-container">
                <h3>Notice Period</h3>
                <div>
                  <button onClick={() => noticeperiodfilter( "immediately" )}>
                    Immediately
                  </button>
                </div>
                <div>
                  <button onClick={() => noticeperiodfilter( "15days" )}>
                    15 Days{" "}
                  </button>
                </div>
                <div>
                  <button onClick={() => noticeperiodfilter( "1month" )}>
                    1 Months{" "}
                  </button>
                </div>
                <div>
                  <button onClick={() => noticeperiodfilter( "2month" )}>
                    2 Months
                  </button>
                </div>
                <div>
                  <button onClick={() => noticeperiodfilter( "3month" )}>
                    More than 2 Months
                  </button>
                </div>
              </div>
              {/* Job type */}
              <div className="job-type-contianers">
                <h3>Job type</h3>
                <div>
                  <button onClick={() => jobtypefilter( "fulltime" )}>
                    Full Time
                  </button>
                </div>
                <div>
                  <button onClick={() => jobtypefilter( "parttime" )}>
                    Part time
                  </button>
                </div>
                <div>
                  <button onClick={() => jobtypefilter( "contract" )}>
                    Contract
                  </button>
                </div>
              </div>
              {/* status */}
              <div className="job-type-contianers">
                <h3>Status</h3>
                <div>
                  {" "}
                  <button onClick={() => statusfilter( "verified" )}>
                    Verified
                  </button>
                </div>
                <div>
                  {" "}
                  <button onClick={() => statusfilter( "notverified" )}>
                    Not Verified
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="profiles-container">

            <h2> Profiles Found</h2>

            {/*  <br /> */}
            <div className="cardmain_container">


              {
                data && data.map( ( item, id ) => {
                  return (
                    <div className="card" key={id}>
                      <div className="internal-container">
                        <div className="image-name-container">
                          <div className="user-profile-image">
                            {/* {
                              item.
                            } */}
                            <img src={item.avatar ? item.avatar.url : image} alt="nouserimage" />
                          </div>
                          <div>
                            <pre>{dummydata}</pre>
                            {/* <pre>{item.full_name}</pre> */}
                            {/* <pre>{dummydata}</pre> */}
                            <pre>{item.role}</pre>
                            <pre>{item.status}</pre>
                          </div>
                        </div>
                        <div className="card_location_data">
                          <pre>Location: {item.location}</pre>
                          <pre>Email:{dummydata}</pre>
                          <pre>PhoneNo:{dummydata}</pre>
                          <pre>LinkedinId:{dummydata}</pre>

                        </div>
                        <div className="view-button-container">
                          <Link to={`/employer/profile/${item._id}`}>{" "}
                            <button><u>View</u></button>
                          </Link>
                        </div>
                      </div>
                    </div>

                  )
                } )
              }
              {/* {data.length < 1 ? (
              <div>
                <img src={noresult} alt="noresult" />
                <h1>sorry, no profiles matches your search</h1>
              </div>
            ) : ( data &&
              data.map( ( item, id ) => {

                return (
                  <div className="card" key={id}>
                    <div className="internal-container">
                      <div className="image-name-container">
                        <div className="user-profile-image">
                          <img src={image} alt="nouserimage" />
                        </div>
                        <div>
                          <pre>{data.name}</pre>
                          <pre>{dummydata}</pre>
                          <pre>{item.status}</pre>
                        </div>
                      </div>
                      <div>
                        <h4>Location : {item.location}</h4>
                        <pre>Email:{dummydata}</pre>
                        <pre>PhoneNo:{dummydata}</pre>
                        <pre>LinkedinId:{dummydata}</pre>
                        <pre>Role:{item.role}</pre>
                      </div>
                      <div className="view-button-container">
                        <Link to={`/employer/profile/${item.id}`}>
                          {" "}
                          <button>View</button>
                        </Link>
                      </div>
                    </div>
                  </div>

                );
              } )
            )} */}



            </div>
          </div>

        </div>
        <Footer />
      </div>
    </>
  );
};

export default Filters;
