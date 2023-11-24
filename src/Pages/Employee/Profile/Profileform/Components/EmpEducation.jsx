import React from "react";
import { useState, useEffect } from "react";

//scss
import "./Empstyle.scss";

// mui icons
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from "@mui/icons-material/Close";

// importing 
import axios from "axios";

const EmpEducation = () => {
  const [educationformdata, seteducationformdata] = useState( "" );
  const userToken = JSON.parse( localStorage.getItem( "user" ) );
  const { token } = userToken;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const geteducationFormdata = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/employee/getprofile`,
        config
      );
      seteducationformdata( response.data.data );
    } catch ( error ) {
      console.log( error );
    }
  };
  useEffect( () => {
    geteducationFormdata();
  }, [] );

  const [eduform, seteduform] = useState( {
    degree: "",
    university: "",
    yearofPassing: "",
  } );

  const updatehandleredu = ( e ) => {
    const { name, value } = e.target;
    seteduform( {
      ...eduform,
      [name]: value,
    } );
  };

  const createedudataform = async ( e ) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/employee/addEducation`,
        eduform,
        config
      );
      console.log( response );
      console.log( eduform );
      seteducationformdata( [...educationformdata, response.data] );
      seteduform( {
        degree: "",
        university: "",
        yearofPassing: "",
      } );
      geteducationFormdata();
      console.log( eduform );
    } catch ( err ) {
      console.log( err );
    }
  };

  const deleteeduformdata = async ( _id ) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/employee/deleteEducation/${_id}`,
        config
      );
      geteducationFormdata();
    } catch ( err ) {
      console.log( err );
    }
  };
  return (
    <div className="main-container-exprerience ">
      <div>
        <h2>Education:</h2>
        <div>
          <div className="experience-input-fields">
            <div className="input-field dropdown2">
              {/* <input
                type="text"
                placeholder="Degree"
                name="degree"
                value={eduform.degree}
                onChange={updatehandleredu}
              /> */}

              <select name="role" onChange={updatehandleredu}>
                <option>Select Education</option>
                <option>X</option>
                <option>XII</option>
                <option>Diploma & Degree</option>
                <option>Btech & Be</option>
                <option>MBA</option>
                <option>MCA</option>
                <option>ITI</option>
                <option>MS</option>
                <option>Others</option>







              </select>
            </div>

            <div className="input-field">
              <input
                type="text"
                name="university"
                placeholder="University"
                value={eduform.university}
                onChange={updatehandleredu}
              />
            </div>

            <div className="experinece-field">
              <div className="input-field">
                <input
                  type="date"
                  name="passingYear"
                  placeholder="Passing"
                  value={eduform.passingYear}
                  onChange={updatehandleredu}
                />
              </div>
              <div>
                <button
                  className="removebg"
                  type="submit"
                  onClick={createedudataform}
                >
                  <AddIcon sx={{ color: "green", marginLeft: "25px", fontSize: "40px" }} />
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        {educationformdata &&
          educationformdata.education.map( ( item ) => {
            return (
              <div key={item._id} className="experience-input-fields">

                {/* <div className="container-size">
                  <h1>{item.degree}</h1>
                </div> 
                 */}
                <div className="">
                  <div className="input-field">
                    <input
                      type="text"
                      placeholder="Company"
                      name="company"
                      value={item.degree}
                    />
                  </div>
                </div>
                {/* <div className="container-size">
                  <h1>{item.university}</h1>
                </div> */}
                <div className="">
                  <div className="input-field">
                    <input
                      type="text"
                      placeholder="Company"
                      name="company"
                      value={item.university}
                    />
                  </div>
                </div>
                <div className="experinece-field">
                  {/* <div className="container-size">
                    <h1>{item.passingYear.split("T")[0]}</h1>
                  </div> */}
                  <div className="">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Company"
                        name="company"
                        value={item.passingYear.split( "T" )[0]}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      className="removebg"
                      id="removebg"
                      onClick={() => {
                        deleteeduformdata( item._id );
                      }}
                    >
                      <CloseIcon sx={{ color: "red", marginLeft: "25px", fontSize: "40px" }} />
                    </button>
                  </div>
                </div>
              </div>
            );
          } )}
      </div>
    </div>
  );
};

export default EmpEducation;
