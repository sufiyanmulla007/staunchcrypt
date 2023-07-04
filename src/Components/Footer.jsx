import React from 'react'
import Logo from "../assets/Logo.png";
import arrow from '../assets/footer-arrow.png';
import call from '../assets/call.png';
import mail from "../assets/mail.png";
const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="solomea-container">
        <img className="logo" src={Logo} alt="" srcset="" width="100%" />

        <div className="footer-content">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-head">
                READ <br />
                ABOUT US
              </div>
              <img
                className="footer-arrow"
                src={arrow}
                alt=""
                srcset=""
              />

              <div className="footer-text">
                We are happy to discuss <br />
                how we can be of help.
              </div>

              <div className="footer-contact">
                <div className="call mb-2">
                  <img src={call} alt="call"/>
                  0162 754 0000
                </div>
                <div className="mail">
                  <img src={mail} alt="" srcset="" />
                  info.solsol.io
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="footer-head">
                Our <br />
                Services
              </div>
              <img
                className="footer-arrow"
                src={arrow}
                alt=""
                srcset=""
              />
              <ul>
                <li>About</li>
                <li>Our Services</li>
                <li>Our Models</li>
                <li>Case Studies</li>
                <li>Testimonials</li>
              </ul>
            </div>

            <div className="col-lg-4">
              <div className="footer-head how-can-we-held">
                How Can <br />
                We held ?
              </div>
              <img
                className="footer-arrow"
                src={arrow}
                alt=""
                srcset=""
              />
              <ul>
                <li>Register your Interest</li>
                <li>Contact Us</li>
                <li>News</li>
                <li>Disclaimer</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
