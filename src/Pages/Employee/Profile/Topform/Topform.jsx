import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import "./Topform.scss";
import editiamge from "../../../../Assets/Icon feather-edit.png";
import profilepic from "../../../../Assets/user.png";
import { Locations } from './location.js'
const Topform = () => {
  const [toggle, setToggle] = useState( false );
  const [readInput, setReadInput] = useState( true );
  const [isDisabled, setIsDisabled] = useState( true );
  const [empdata, setempdata] = useState( "" );
  const [image, setImage] = useState( null );

  const userToken = JSON.parse( localStorage.getItem( "user" ) );
  const { token } = userToken;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getemplyeedetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/employee/getprofile`,
        config
      );
      setImage( response.data.data.avatar );
      setempdata( response.data.data );
    } catch ( error ) {
      console.log( error );
    }
  };

  useEffect( () => {
    getemplyeedetails();
  }, [] );

  console.log( empdata );

  const uploadFile = async ( e ) => {
    e.preventDefault();
    const file = document.getElementById( "file-input" ).files[0];

    // console.log(file)
    const formData = new FormData();
    formData.append( "image", file );

    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_API_URL}/employee/updateimg`,
        formData,
        config
      );

      // console.log(response.data.data);
      getemplyeedetails();
    } catch ( err ) {
      console.log( err );
    }
  };

  // const uri = image.avatar;
  const [empform, setempform] = useState( {
    profilename: "",
    profilerole: "",
    profilecompany: "",
    profileloaction: "",
    profileemail: "",
    profilephonenumber: "",
  } );
  const updatehandleremp = ( e ) => {
    const { name, value } = e.target;
    setempform( {
      ...empform,
      [name]: value,
    } );
    setempdata( e.target.value );
  };
  const handleformSubmit = () => {
    setTimeout( () => {
      setReadInput( true );
      setIsDisabled( true );
    }, 200 );
    alert( "Data is saved" );
  };
  const handleformUpdate = () => {
    if ( readInput === true ) {
      setReadInput( false );
    }
    setIsDisabled( false );
    alert( "Data is editable" );
  };
  const formSubmit = async ( e ) => {
    e.preventDefault();
    await axios
      .patch(
        `${process.env.REACT_APP_API_URL}/employee/updateprofile`,
        empform,
        config
      )
      .then( ( res ) => {
        console.log( res.data.message );
        console.log( empform );
      } );
    getemplyeedetails();
  };

  const togglehandler = () => {
    setToggle( !toggle );
    console.log( toggle );
  };


  return (
    <div className="main-container">
      <div>
        <h1>Upload Your Profile Here</h1>
      </div>
      <div className="main-container-top-form">
        <div>
          <div className="profilepic">
            <div >
              <img src={image ? image.url : profilepic} alt=""></img>
            </div>
            <div className="input-file-style">
              <input type="file" id="file-input" onChange={uploadFile}></input>
            </div>
          </div>
        </div>
        <div className="form-style">
          <form className="admission" onSubmit={formSubmit}>
            <div className="image-profile-editbutton">
              <div className="image-profile-container">
                <div className="fullname-jobrole-inner-container">
                  <div>
                    <input
                      type="text"
                      name="full_name"
                      value={empdata.full_name || empform.full_name}
                      placeholder="FullName"
                      onChange={updatehandleremp}
                      readOnly={readInput}
                    />
                  </div>
                  <div className="fullname-jobrole-inner-container-second">
                    <input
                      type="text"
                      name="role"
                      value={empdata.role || empform.role}
                      placeholder="Job Role"
                      onChange={updatehandleremp}
                      readOnly={readInput}
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  className="edit-button-styles"
                  onClick={handleformUpdate}
                >
                  <img src={editiamge} alt="noeditimage" />
                </button>
              </div>
            </div>
            <br />

            <div className="small-toggle-container">
              <div>
                <FormControlLabel
                  onClick={togglehandler}
                  control={<Switch defaultChecked />}
                />
              </div>
              <div className="header-toggle">
                {toggle ? <h4>Active</h4> : <h4>Inactive</h4>}
              </div>
            </div>
            <div className="pre-details-container">
              <div className="profile-left" >
                <p>Company </p>
                <p>Location</p>
                <p>Email</p>
                <p>Phone No</p>
              </div>
              <div className="profile-middle">
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className="profile-right">
                <p>
                  <input
                    type="text"
                    name="company"
                    value={empdata.company || empform.company}
                    placeholder="Current Company"
                    onChange={updatehandleremp}
                    readOnly={readInput}
                  />
                </p>
                <p>


                  {/* <input
                    type="text"
                    name="location"
                    value={empdata.location || empform.location}
                    placeholder="Location"
                    onChange={updatehandleremp}
                    readOnly={readInput}
                  /> */}
                  <select name="location" onChange={updatehandleremp}>
                    <option>Select Location</option>
                    {
                      Locations.map( ( item ) => (
                        <option value={item}>{item}</option>
                      ) )
                    }
                  </select>
                </p>
                <p>
                  <input
                    className="address"
                    type="email"
                    name="email"
                    value={empdata.email || empform.email}
                    placeholder="profileemail"
                    onChange={updatehandleremp}
                    readOnly={true}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="phone"
                    value={empdata.phone || empform.phone}
                    placeholder="Phone"
                    onChange={updatehandleremp}
                    readOnly={readInput}
                  />
                </p>
              </div>
            </div>
            <br />
            <div className="admission-button">
              {!isDisabled && (
                <button className="save-button"
                  style={{ backgroundColor: "white", border: "1px solid black", color: "black" }}
                  type="submit"
                  disabled={isDisabled}
                  onClick={handleformSubmit}>Save
                </button>
              )}
              <button className="verify-button">Verify</button>
            </div>
            {/* <div className="save-button">  
             {!isDisabled && (
              <button
                type="submit"
                disabled={isDisabled}
                onClick={handleformSubmit}>Save
              </button>
            )} 
            </div>
            <div className="admission-button">
              <div >  
               <button >Verify</button>
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Topform;
