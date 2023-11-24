//scss
import "./Job.scss";

// assets
import development from "../../../Assets/development.png";
import design from "../../../Assets/design.png";
import marketting from "../../../Assets/marketting.png";
import accounts from "../../../Assets/accounts.png";

const Job = () => {
  return (
    <div className="job">
      <div className="job1">
        <div className="para">
          <p>Popular Job Categories</p>
        </div>

        <div className="boxes">
          <div className="box1">
            <div className="img">
              <img src={development} alt="" />
            </div>
            <p>Development</p>
          </div>

          <div className="box1">
            <div className="img">
              <img src={design} alt="" />
            </div>
            <p>Design</p>
          </div>

          <div className="box1">
            <div className="img">
              <img src={marketting} alt="" />
            </div>
            <p>Marketing</p>
          </div>

          <div className="box1">
            <div className="img">
              <img src={accounts} alt="" />
            </div>
            <p>Accounts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
