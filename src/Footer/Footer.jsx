import React from "react";
import "./footer.css";
import instagram from "../images/instagram.png"
import twitter from "../images/twitter.png"
import youtube from "../images/youtube.png"
const Footer = () => {
  return (
    <footer>
      <div className="footer_Container">
        <div className="copyright_Container">
          © 2023 filmous All rights reserved.
        </div>
        <div className="footer_logo ">
          {/* <p> */}
            Film<span className="footer_span">M</span>ouse
          {/* </p> */}
        </div>
        <div className="socials">
            <div className="isntagram"><img src={instagram} alt="" /></div> 
            <div className="twitter"><img src={twitter} alt="" /></div> 
            <div className="isntagram"><img src={youtube} alt="" /></div> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
