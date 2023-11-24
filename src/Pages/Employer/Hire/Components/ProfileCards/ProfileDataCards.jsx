//SCSS
import "./profileDataCards.scss";

// ASSESTS
import user from "../../../../../Assets/user.png";
import Verifyicon from "../../../../../Assets/verify.png";

// IMPORTING DEPENDECIS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";

// IMPORTING DIFFERENT COMPONENTS
import Data from "./invest.json";
import { Link } from "react-router-dom";

const ProfileDataCards = () => {
  return (
    <div className="profile-container">
      <p className="event-head">Job Profiles</p>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
          },

          900: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        keyboard={{
          enabled: true,
        }}
        // loop={true}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        // className="color-arrows"
      >
        {Data.map((events) => (
          <SwiperSlide>
            <div className="events-container" key={events}>
              <div className="event-box">
                <div className="events-data">
                  <div className="card">
                    <div className="box1">
                      <div className="usericon">
                        <img src={user} alt="" />
                      </div>

                      <div className="content">
                        <div className="identity">
                          <div>
                          <h6>{events.name}</h6> 
                          <p>Designer</p>
                          </div>
                          <div className="verified">
                          <img src={Verifyicon} alt="" />
                          <p>Verified</p>
                        </div>
                        </div>

                        {/* <div className="verified">
                          <img src={Verifyicon} alt="" />
                          <p>Verified</p>
                        </div> */}
                      </div>
                    </div>
                    <div className="box2">
                      <div className="left">
                        <p>Location</p>
                        <p>Email</p>
                        <p>Phone</p>
                      </div>
                      <div className="middle">
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                      </div>
                      <div className="right">
                        <p>Hyderabad</p>
                        <p>XXXXXXXXX</p>
                        <p>XXXXXXXXX</p>
                      </div>
                    </div>

                    <div className="box3">
                      <Link to="/employer/filter">
                        <u>View</u>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProfileDataCards;
