// SCSS
import "./Sharecode.scss";

//IMPORT DEPENDECIS
import {
  // EmailIcon,
  WhatsappIcon,
  EmailShareButton,
  WhatsappShareButton,
} from "react-share";

import emailimage from "../../../../../Assets/gmail@2x.png";
const Sharecode = () => {
  // let code = 'vinay12';
  return (
    <div className="mainsocialmediareferal">
      <div>
        <h3>Share Code:</h3>
      </div>
      <div className="social-media-referal">
        <div>
          <WhatsappShareButton url={`PLEASE PASTE YOUR REFERAL CODE HERE: `}>
            <WhatsappIcon size={45} round={true} />
          </WhatsappShareButton>
        </div>

        <div>
          <EmailShareButton url={`PLEASE PASTE YOUR REFERAL CODE HERE: `}>
            <img src={emailimage} alt="email" width={50} height={50} round={true} />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
};

export default Sharecode;
