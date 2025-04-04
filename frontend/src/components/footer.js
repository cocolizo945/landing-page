import React from "react";
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter} from "react-icons/ti";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="container-foot">
      <div className="left-side">
        <div className="bigtext-foot">
          Snowquest.io
          <div className="text-foot">
          Developing high-quality, reliable and affordable software according to your needs
          </div>
        </div>
      </div>
      <hr style={{width: "1px", height: "25vh", margin: "15vh 2vw "}} />
      <div className="right-side">
        <ul>
            <li><h2>Follow us</h2></li>
            <li><TiSocialInstagram/> Instgram</li>
            <li><TiSocialFacebook/> Facebook</li>
            <li><TiSocialTwitter/> Twitter</li>            
        </ul>
      </div>
    </div>
  );
}
