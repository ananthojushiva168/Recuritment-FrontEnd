import React from "react";
import { useState, useEffect } from "react";
import { Role_Of_data,Experienceof_employee } from "./Roleandexperience";
//scss
import "./Empstyle.scss";

// mui icons
// import CheckIcon from "@mui/icons-material/Check";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from "@mui/icons-material/Close";

// importing 
import axios from "axios";

const EmpExperience = () => {
  const [formdata, setFormdata] = useState( "" );
  const userToken = JSON.parse( localStorage.getItem( "user" ) );
  const { token } = userToken;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // get request for data in backend
  const getFormdata = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/employee/getprofile`,
        config
      );
      setFormdata( response.data.data );
    } catch ( error ) {
      console.log( error );
    }
  };

  useEffect( () => {
    getFormdata();
  }, [] );

  //   post request FIRST FORM DATA
  const [forme, setForme] = useState( {
    company: "",
    role: "",
    duration: "",
  } );

  const updatehandler = ( e ) => {
    const { name, value } = e.target;
    setForme( {
      ...forme,
      [name]: value,
    } );
  };

  //createing form
  const createdataform = async ( e ) => {
    e.preventDefault();
    try {
      console.log( forme );
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/employee/addExperince`,
        forme,
        config
      );
      console.log( response );
      setFormdata( ...formdata, response.data );
      // const updatedFormdata = { ...formdata };
      // if (updatedFormdata.hasOwnProperty("experience")) {
      //   updatedFormdata.experience.push(response.data);
      //   setFormdata(updatedFormdata);
      // }
      setForme( {
        company: "",
        role: "",
        duration: "",
      } );
      getFormdata();
      console.log( forme );
    } catch ( err ) {
      console.log( err );
    }
  };

  // deleting formdata
  const deleteformdata = async ( _id ) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/employee/deleteExperince/${_id}`,
        config
      );
      getFormdata();
    } catch ( err ) {
      console.log( err );
    }
  };
  return (
    <>
      <div className="main-container-exprerience">
        <h2>Experience</h2>
        <div className="experience-input-fields">
          <div className="input-field">
            <input
              type="text"
              placeholder="Company"
              name="company"
              value={forme.company}
              onChange={updatehandler}
            />
          </div>

          <div className="input-field dropdown2">
            {/* <input
              type="text"
              name="role"
              placeholder="Role"
              value={forme.role}
              onChange={updatehandler}
            /> */}


            <select name="role" onChange={updatehandler}>
              <option>Select Role</option>
              {
                Role_Of_data.map( ( item ) => (
                  <option value={item}>{item}</option>
                ) )
              }
            </select>
          </div>

          <div className="experinece-field">
            <div className="input-field dropdown2">
              {/* <input
                type="text"
                name="duration"
                placeholder="Experience"
                value={forme.duration}
                onChange={updatehandler}
              /> */}
              <select name="duration" onChange={updatehandler}>
                <option>Select Experience</option>
                {
                  Experienceof_employee.map( ( item ) => (
                    <option value={item}>{item}</option>
                  ) )
                }
              </select>
            </div>
            <div>
              <button
                className="removebg"
                type="submit"
                onClick={createdataform}
              >
                {/* <CheckIcon sx={{color:"green", marginLeft:"10px",fontSize:"40px"}}/> */}
                <AddIcon sx={{ color: "green", marginLeft: "25px", fontSize: "40px" }} />
              </button>
            </div>
          </div>
        </div>
        {formdata &&
          formdata.experience.map( ( item ) => {
            return (
              <React.Fragment key={item._id}>
                <div className="experience-input-fields">
                  {/* <div className="container-size">
                    {/* <h1>{item.company}</h1> */}
                  {/* <input type="text" value={item.company} />
                  </div> */}

                  <div className="">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Company"
                        name="company"
                        value={item.company}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Company"
                        name="company"
                        value={item.role}
                      />
                    </div>
                  </div>
                  <div className="" style={{ display: "flex", alignItems: "center" }}>
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Company"
                        name="company"
                        value={item.duration}
                      />
                    </div>
                    <div>
                      <button
                        className="removebg"
                        onClick={() => {
                          deleteformdata( item._id );
                        }}
                      >
                        <CloseIcon sx={{ color: "red", marginLeft: "25px", fontSize: "40px" }} />
                      </button>
                    </div>
                  </div>



                  {/* <div className="container-size">
                      <h1>{item.role}</h1>
                    </div>
                    <div className="experinece-field">
                      <div className="container-size">
                        <h1>{item.duration}</h1>
                      </div>
                      <div>
                        <button
                          className="removebg"
                          onClick={() => {
                            deleteformdata(item._id);
                          }}
                        >
                          <CloseIcon sx={{ color: "red", marginLeft: "10px", fontSize: "40px" }} />
                        </button>
                      </div>
                    </div> */}
                </div>
              </React.Fragment>
            );
          } )}
      </div>
    </>
  );
};

export default EmpExperience;