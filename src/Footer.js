import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="top-footer">
        <img style={{marginLeft:"40vh", marginTop:"40vh"}} src="images/prophet.png" alt="" />
        <p style={{marginLeft:"40vh", marginTop:"5vh", color:"#194D37"}}>
          "When Allah wishes good for someone, He bestows upon him the<br/>
          Understanding of Deen"
        </p>  
        <p style={{marginTop:"8vh", marginLeft:"40vh", color:"#194D37"}}>"من يرد الله به خيرًا يفقه في الدين"</p>
        <p style={{marginTop:"5vh", marginLeft:"40vh", color:"#194D37"}}>Prophet Muhammad صلى الله عليه وعلى آله وسلم</p>

        
      </div>
     
      <div className="bottom-footer">
       
        <div className="regular-courses" style={{paddingTop: "110vh"}}>
          <h2 style={{marginLeft:"4.5vh",color:"#194D37", width:"35vh"}}>Regular Courses</h2>
          <ul>
            <li>
              <a href="/">TarteeleQuran Qaida</a>
            </li>
            <li>
              <a href="/">Learn Qirat</a>
            </li>
            <li>
              <a href="/">Quran memorization</a>
            </li>
          </ul>
        </div>
        <div className="advance-courses" style={{paddingTop: "110vh"}}>
          <h2 style={{marginLeft:"4.5vh",color:"#194D37", width:"35vh"}}>Advance Courses</h2>
          <ul>
            <li>
              <a href="/">Arabic Language Course</a>
            </li>
            <li>
              <a href="/">Tafsir Course</a>
            </li>
            <li>
              <a href="/">Ijazah Courses</a>
            </li>
          </ul>
        </div>
        <div className="links" style={{paddingTop: "110vh"}}>
          <h2 style={{marginLeft:"4.5vh",color:"#194D37", width:"12vh"}}>Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>
        <div className="admissions" style={{paddingTop: "110vh"}}>
          <h2 style={{marginLeft:"4.5vh",color:"#194D37", width:"35vh"}}>Admissions</h2>
          <ul>
            <li>
              <a href="/">Tution & Financial Aid</a>
            </li>
            <li>
              <a href="/">How to Apply</a>
            </li>
            <li>
              <a href="/">Fee Payment</a>
            </li>
          </ul>
        </div>
        {/* <div className="social-links"> 
            <FaInstagram className="mx-2" />
            <FaLinkedin className="mx-2" />
            <FaXTwitter className="mx-2"  />
            <p>All Rights Reserved | 2024</p>
        </div> */}
      </div>
      <div style={{marginTop:"-30vh", marginLeft:"16vh",color:"#194D37", width:"35vh",height:"10vh"}}className="social-links"> 
            <FaInstagram className="mx-2" />
            <FaLinkedin className="mx-2" />
            <FaXTwitter className="mx-2"  />
            <div className="socialPara">All Rights Reserved | 2024</div>
        </div>
    </div>
  );
};

export default Footer;