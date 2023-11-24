// SCSS
import "./Section.scss";

// IMAGES
import abouthero from "../../../Assets/abouthero.png";

const Section = () => {
  return (
    <div className="abouthero">
      <div className="content">
        <h1>Our Story</h1>
        <p>
          We aimed to develop a hiring platform that is straightforward and easy
          for both recruiters and candidates to use. Our filters and verified
          candidate profiles help you in finding the specific employee you're
          looking for.
        </p>
      </div>

      <div className="img">
        <img src={abouthero} alt="" />
      </div>
    </div>
  );
};

export default Section;
