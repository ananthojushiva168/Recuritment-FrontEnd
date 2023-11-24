import React from "react";
import { useState, useEffect } from "react";
import { skill_Data } from '../../Topform/skill'

import "./Empstyle.scss";


import AddIcon from '@mui/icons-material/Add';
import CloseIcon from "@mui/icons-material/Close";

// importing 
import axios from "axios";



const EmpSkills = () => {


  const [skillsdata, setskillsdata] = useState( "" );
  const [load, setLoad] = useState( false )
  console.log( skillsdata )

  const userToken = JSON.parse( localStorage.getItem( "user" ) );
  const { token } = userToken;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getskilldata = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/employee/getprofile`,
      config
    );

    setskillsdata( response.data.data );
  };




  const [skill, setskill] = useState( {} );
  console.log( skill )
  const [render, setRender] = useState( false )
  const updatehandlerskill = ( e ) => {
    const { name, value } = e.target;
    setLoad( true )
    setskill( {
      ...skill,
      [name]: value,

    } );
    setRender( true )
  };



  const createskilldata = async ( e ) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/employee/updateSkills`,
        skill,
        config
      );
      const { data } = response
      setskillsdata( { ...skillsdata, data } );

      getskilldata();

      setskill( {
        skill: " ",
      } );
    } catch ( err ) {
      console.log( err );
    }
  };


  useEffect( () => {
    getskilldata();

  }, [] );


  const deleteskilldata = async ( item ) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/employee/deleteSkills/${item}`,
        config
      );
      getskilldata();
    } catch ( err ) {
      console.log( err );
    }
  };

  return (
    <div className="field">
      <h2>Skill</h2>
      <div className="input-field">
        {/* {" "}
        <input
          type="text"
          name="skill"
          placeholder="Skills"
          value={skill.skills}
          onChange={updatehandlerskill}
        /> */}
        <div className="dropdown2">
          <select onChange={updatehandlerskill} name="skill">
              <option>Select skills</option>
           
            {
              skill_Data.map( ( item ) => (
                <option value={item}>{item}</option>
              ) )
            }
          </select>

          <button className="removebg" onClick={createskilldata}>
            <AddIcon
              sx={{ color: "green", marginLeft: "25px", marginTop: "20px", fontSize: "40px" }}
            />
          </button>
        </div>
      </div>


      {/* {
        render ?
          <div className="dropdown">
            <select onChange={updatehandlerskill} name="skill">
              {
                skill_Data.map( ( item ) => (
                  <option value={item}>{item}</option>
                ) )
              }
            </select>
          </div> : ""
      } */}



      {
        skillsdata &&
        skillsdata.skills.map( ( item ) => {
          return (
            <div className="skill-container-styling">
              <div className="container-size-skill">
                <div className="containerof_input">
                  <h1>{item}</h1>
                </div>
              </div>
              <button
                className="removebg"
                onClick={() => {
                  deleteskilldata( item );
                }}
              >

                <CloseIcon
                  sx={{ color: "red", marginLeft: "25px", marginTop: "30px", fontSize: "40px" }}
                />
              </button>
            </div>
          );
        } )
      }
    </div >
  );
};

export default EmpSkills;
