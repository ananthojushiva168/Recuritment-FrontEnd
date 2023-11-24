import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//SCSS
import "./Companyprofilepage.scss";

//ASSETS
import companyimage from "../../../Assets/Companyicon.png";
import editimg from "../../../Assets/editing.png";
//IMPORTING DIFFERENT COMPONENTS
import Modalpage from "./Components/Modal/Modalpage";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";

const Companyprofilepage = () => {
  const userToken = JSON.parse( localStorage.getItem( "user" ) );
  const { token } = userToken;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [cmp, setCmp] = useState( '' )

  const getemplyerdetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/employer/getprofile`,
        config
      );
      setCmp( response.data.data );
    } catch ( error ) {
      console.log( error );
    }
  };

  useEffect( () => {
    getemplyerdetails();
  }, [] );

  const [openModal, setOpenModal] = useState( false );
  const [readInput, setReadInput] = useState( true );
  const [isDisabled, setIsDisabled] = useState( true );
  const [students, setStudents] = useState( "" );

  const companydata = [
    {
      id: "1",
      imagecomp: companyimage,
      companyname: "GOOGLE",
      location: "Hyderabad",
      website: "www.google.com",
    },
  ];
  const [newDetail, setnewDetail] = useState( {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident.",
  } );
  const formField = ( e ) => {
    const { name, value } = e.target;
    setnewDetail( {
      ...newDetail,
      [name]: value,
    } );
    setStudents( e.target.value );
  };
  const handleformSubmit = () => {
    setTimeout( () => {
      setReadInput( true );
      setIsDisabled( true );
      console.log( newDetail );
    }, 200 );
  };
  const handleformUpdate = () => {
    if ( readInput === true ) {
      setReadInput( false );
    }
    setIsDisabled( false );
  };

  return (
    <>
      <Navbar index={7} className="companyprofilenavbar" />
      <div className="company-main-container">
        {/* top container */}
        <div>
          {companydata.map( ( user ) => (
            <div className="image-data-full-container">
              <div className="image-data-container">
                <div>
                  <img src={user.imagecomp} alt="noimagefound" />
                </div>
                <div className="userdetails">
                  <div>
                    <h3>{cmp.company_}</h3>
                  </div>
                  <div>
                    <h3>{user.location}</h3>
                  </div>
                  <div>
                    <p>Website:{user.website}</p>
                  </div>
                </div>
              </div>
              <div className="editimage">
                {readInput && (
                  <img
                    src={editimg}
                    onClick={handleformUpdate}
                    style={{ width: "40px" }}
                    alt="noeditimage"
                  />
                )}
              </div>
            </div>
          ) )}
        </div>
        {/* discription-container */}
        <div>
          {companydata.map( ( user ) => (
            <div className="description-container">
              <div>
                <h2>Description</h2>
              </div>
              <div>
                <textarea
                  name="description"
                  onChange={formField}
                  readOnly={readInput}
                  value={students.description || newDetail.description}
                >
                  The cat was playing in the garden.
                </textarea>

                {/* <input
                type="text"
                
              /> */}
              </div>
              <span className="savebutton-element">
                {!readInput && (
                  <button
                    type="submit"
                    disabled={isDisabled}
                    onClick={handleformSubmit}
                  >
                    save
                  </button>
                )}
              </span>
            </div>
          ) )}
        </div>

        {/* horizontal-line */}
        <div>
          <span>
            <hr className="hrstyle" />
          </span>
        </div>
        <div className="account-settings">
          <h2>Account Settings</h2>
          {/* <button onClick={() => setOpenModal( true )}>Change Password</button> */}
          <Link to="/employer/change-password"><button>Change Password</button>
</Link>
          <Modalpage open={openModal} onclose={() => setOpenModal( false )} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Companyprofilepage;
