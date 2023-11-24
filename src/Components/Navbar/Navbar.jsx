import { useState, useEffect } from "react";

//SCSS
import "./Navbar.scss";

//Images
import label from "../../Assets/label.png";

// IMPORTING DEPENDECIS
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = ( props ) => {
  const [users, setusers] = useState( "" );

  const userToken = JSON.parse( localStorage.getItem( "user" ) );

  let token;
  if ( userToken ) {
    token = userToken.token;
    console.log( token )
  } else {
    token = null;
  }

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
      setusers( response.data.data.full_name );
    } catch ( error ) {
      console.log( error );
    }
  };

  // useEffect(() => {
  getemplyeedetails();
  // }, []);

  console.log( users );

  const item = [
    // "home"
    {
      home: "Home",
      work: "Work",
      hire: "Hire",
      wallet: "Wallet",
      aboutus: "AboutUS",
      signin: "1",
      regester: "1",
    },
    // "login"
    {
      home: "Home",
      hire: "Hire",
      wallet: "Wallet",
      aboutus: "AboutUS",
      regester: "1",
    },

    // "regester employeer"
    {
      home: "Home",
      hire: "Hire",
      wallet: "Wallet",
      aboutus: "AboutUS",
      signin: "1",
    },

    // "about us "
    {
      home: "MyProfile",
      work: "Hire",
      wallet: "Wallet",
      aboutus: "AboutUs",
      logout: "1",
      label: "1",
    },

    // "hire "
    {
      home: "MyProfile",
      work: "Hire",
      wallet: "Wallet",
      aboutus: "AboutUs",
      logout: "1",
      label: "1",
    },

    // "login employee"
    {
      home: "MyProfile",
      work: "Referal",
      aboutus: "AboutUs",
      regester: "1",
      // logout: "1",
      // label: "1",
    },

    // "profile "
    {
      home: "MyProfile",
      work: "Referal",
      aboutus: "AboutUs",
      logout: "1",
      label: "1",
    },
    // Company Profile

    {
      home: "MyProfile",
      work: "Hire",
      wallet: "Wallet",
      aboutus: "AboutUs",
      logout: "1",
      label: "1",
      search: "1",

    },

    // referal
    {
      home: "MyProfile",
      work: "Referal",
      aboutus: "AboutUs",
      logout: "1",
      label: "1"
    }
  ];

  // =============================================================================
  const [nav, setNav] = useState( item[props.index] );

  const navigate = useNavigate();

  const [appear, setappear] = useState( 0 );

  const [click, setClick] = useState( false );

  const handleClick = () => {
    setClick( !click );
  };

  const logout = () => {
    localStorage.removeItem( "user" );
    navigate( "/" );
  };



  return (
    <nav className={click ? "mobilenav" : ""}>
      <div className="partone">
        <div className="logo">
          <Link to="/"><h1>Hiretep</h1></Link>
        </div>
        <div className={click ? "menu active" : "menu"}>
          <Link to={nav.home === "Home" ? "/" : nav.home === "MyProfile" ? `/employer/${nav.home}` : `../../${nav.home}`} className={nav.home ? "no" : "none"} >
            {nav.home}
          </Link>

          <Link to={nav.work === "Work" ? "/employee-login" : nav.work === "Referal" ? "/employee/referal" : nav.work === "Hire" ? "/employer/hire" : `../${nav.work}`} className={nav.work ? "no" : "none"}>
            {nav.work}
          </Link>



          <Link to={`../employer/${nav.hire}`} className={nav.hire ? "no" : "none"}>
            {nav.hire}
          </Link>

          <Link to={nav.wallet === "Wallet" ? "/employer/wallet" : `../${nav.wallet}`} className={nav.wallet ? "no" : "none"}>
            {nav.wallet}
          </Link>

          <Link
            to={`../../${nav.aboutus}`}
            className={nav.aboutus ? "no" : "none"}
          >
            {nav.aboutus}
          </Link>
        </div>
      </div>

      <div className={click ? "parttwo position active" : "parttwo position"}>
        <div className={props.index === "0" || "1" || "2" ? "block" : "none"}>
          <button
            className={nav.signin === "1" ? "login" : "none"}
            onMouseOver={() => {
              setappear( 1 );
            }}
          >
            Log In
          </button>
          <div
            className={appear === 1 ? "appear" : "disapear"}
            onMouseLeave={() => {
              setappear( 0 );
            }}
          ><div className="button-box">
              <p>
                <Link to="/employee-login" className="loginemployee">As Employee</Link>
              </p>
              <p>
                <Link to="/employer-login" className="loginemployer">As Employer</Link>
              </p>
            </div>
          </div>
        </div>
        <div>
          <button
            className={nav.regester === "1" ? "register" : "none"}
            onMouseOver={() => {
              setappear( 2 );
            }}
          >
            Register Now
          </button>
          <div
            className={appear === 2 ? "appear" : "disapear"}
            onMouseLeave={() => {
              setappear( 0 );
            }}
          >
            <div className="registerbutton-box">
              <p>
                <Link to="/employee-signup" className="registeremployee">As Employee</Link>
              </p>
              <p><Link to="/employer-signup" className="registeremployer">As Employer</Link></p></div>
          </div>
        </div>

        <div className={nav.logout === "1" ? "name" : "none"}>
          <div className="adjust">
            <div className={nav.search === "1" ? "input" : "none"}>
              <input type="text" placeholder="Designer" />
              <FaSearch style={{ color: "#15358F", cursor: "pointer" }} />
            </div>

            <div className="last">
              <div className={nav.label === "1" ? "label" : "none"}>
                <img src={label} alt="" />
                <p>{users}</p>
              </div>

              <div className={nav.logout === "1" ? "logout" : "none"}>
                <button onClick={logout}>Log Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes style={{ color: "#15358F" }} size={30} />
        ) : (
          <FaBars style={{ color: "#15358F" }} size={30} />
        )}{" "}
      </div>
    </nav>
  );
};

export default Navbar;
