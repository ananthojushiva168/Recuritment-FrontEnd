//SCSS
import "./jobcard.scss";

//ASSETS
import development from "../../../Assets/development.png";
import design from "../../../Assets/design.png";
import marketing from "../../../Assets/marketting.png";
import accounts from "../../../Assets/accounts.png";

// IMPORTING DEPENDECIS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";

const Cards = [
  {
    img: development,
    text: "Development",
  },
  {
    img: design,
    text: "Design",
  },
  {
    img: marketing,
    text: "Marketting",
  },
  {
    img: accounts,
    text: "Accounts",
  },
];

const JobCategories = () => {
  return (
    <div className="Jobcard-container">
      <p className="event-head">Popular Job Categories</p>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768:{
            slidesPerView: 2,
            spaceBetween: 40,
          },

          900: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        // className="color-arrows"
      >
        {Cards.map((events) => (
          <SwiperSlide>
            <div className="cardd-container" key={events}>
              <div className="cardd-box">
                <div className="cardd-data">
                  <img src={events.img} alt="" />
                  <p>{events.text}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default JobCategories;
