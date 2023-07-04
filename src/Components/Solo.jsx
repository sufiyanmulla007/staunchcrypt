import React from "react";
import companyLogo from '../assets/Logo.png';
import separator from '../assets/separators.png'
import competition from "../assets/competition.png";
import pricing from "../assets/pricing.png";
import engineering from '../assets/engineering.png';
import delivering from "../assets/delivering.png";
import extended from "../assets/extended-workbench.png";
import project from '../assets/project-based.png';
import cto from '../assets/cto.png';
import nwgpower from "../assets/nwgpower.jpg";
import simi_logo from '../assets/simi_logo_flat_4c_rms-large.svg';
import DLA_Piper from '../assets/DLA_Piper_logo.svg.png';
import universtiy from '../assets/universtiy.png';
import all4labels from '../assets/all4labels-logo-triton-website.png';
import Footer from "./Footer";
const Solo = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light pt-3">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="nav navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">
                  About us
                </a>
                <a className="nav-link" href="#">
                  Our Services
                </a>
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </div>
            </div>

            <a className="navbar-brand mx-auto" href="#">
            <img className="logo" src={companyLogo} alt="Logo" />
            </a>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="nav navbar-nav ms-auto">
                <button
                  className="nav-link btn solomia-btn"
                  aria-current="page"
                  href="#"
                >
                  REGISTER YOUR INTEREST
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section className="banner">
        <div className="card-overlay-banner">
          <div className="container ">
            <div className="banner-container">
              <div className="banner-content">
                <h1 className="banner-text">The antidote to skills shortage.</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* header Section  */}
      <section className="about mt-100">
        <div className="solomea-container">
        <div className="solomea-head text-center">
          <span className="blue">Solving IT skills shortage through</span> <br />
          <span className="red">managed, international expert teams.</span>
        </div>
        <div className="separator">
          <img
            className="separator-img"
            src={separator}
            alt="separator"
          />
        </div> 
        <div className="about-text">
          <p className="solomea-para text-center">
            it's paradox when hundreds of thousands of software engineering jobs
            are staying vacant in germany alone when the job is so
            remote-comatible.but near-and offshoring come with well-khow
            disadvantages.we solve those on behalf of our cliennts, connecting
            them with a sheer unlimited workforce.
          </p>
          <p className="solomea-para text-center">
            we bridge the compatibility gap to clients, we feel like a
            regular,German IT solution provider,engineer benefit from our
            credibillity and can focus on their job,our rigorous QA approach &
            exprience maintains trust and continuity
          </p>
        </div>
        <div className="about-box mt-100">
          <div className="row">
            <div className="col-lg-5">
              <div className="blue-box">
                <div className="advantage-text">
                  The <br />cutting edge advantage, you get with us.
                </div>
              </div>
              <div className="red-box">
                <div className="covid-text">
                  Since COVID,working with highly distributed,international
                  software engineering teams has been developing into a
                  mega-trend - we make sure you won't miss out.
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="achivements">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="achivements-box">
                      <img
                        className="aicon"
                        src={competition}
                        alt=""
                    
                      />
                      <div className="ahead">3 years of competitve advantage</div>

                      <div className="apara">
                        we already know what it takes to make international
                        teams work while others are just starting to get the
                        ball rolling.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="achivements-box">
                      <img
                        className="aicon"
                        src={pricing}
                        alt=""
                        
                      />
                      <div className="ahead">Very attractive pricing model</div>

                      <div className="apara">
                        No native german It solution provider beats our bang for
                        the buck
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="achivements-box">
                      <img
                        className="aicon"
                        src={engineering}
                        alt=""
                      
                      />
                      <div className="ahead">Exceptional engineering teams</div>

                      <div className="apara">
                        Our rigorous vetting process and international network
                        accumlated amazing talents
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="achivements-box">
                      <img
                        className="aicon"
                        src={delivering}
                        alt=""
                        style={{width: "70px",padding: "5px"}}
                      />
                      <div className="ahead">Delivering end-to-end</div>

                      <div className="apara">
                        From design to software engineering, Al or security
                        penetration tests.we got you covered
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      {/* End about section */}
      {/* start our services */}
      <section className="services mt-100">
        <div className="solomea-container">
        <div className="solomea-head">
          Our three <br />
          service models...
        </div>
        <div className="separator">
          <img
            className="separator-img"
            src={separator}
            alt=""
            srcset=""
          />
        </div>
        <div className="solomea-para">
          No matter what technology or project we are delivering, we offer our
          clients <br />
          three working modes that can be mixed and matched as needed.
        </div>
        
        <div className="service-models">
          <div className="service-img">
            <img src={extended} alt=""/>
          </div>
          <div className="service-text">
            <div className="ahead">Extended workbench or whitelabel</div>
            <div className="apara">
              Existing engineering teams of partner firms may want to extend
              their engineering <br />
              power or service offering.we vet the right engineers and provide
              management<br />support & guarantees as needed.
            </div>
          </div>

          <div className="ribbon">Best for: Partners</div>
        </div>
        <div className="service-models">
          <div className="service-img">
            <img src={project} alt=""/>
          </div>
          <div className="service-text">
            <div className="ahead">Project-based</div>
            <div className="apara">
              The classic. we offer a technically skilled key-account to manage
              the delivery of <br />
              project requirments through our engineering workforce.
            </div>
          </div>
          <div className="ribbon">Best for: Flexible</div>
        </div>
        <div className="service-models">
          <div className="service-img">
            <img src={cto} alt="img"/>
          </div>
          <div className="service-text">
            <div className="ahead">CTO-as-a-servce & company building</div>
            <div className="apara">
              A highly capable engineer and leader will act as a part of the
              founders-team. <br />
              Engineers can be provided by us; after some time, we help
              searching for a full-time <br />
              CTO and do a hand over.
            </div>
          </div>
          <div className="ribbon">Best for: Startup</div>
        </div>
        </div>
      </section>
      {/* logo section */}
      <section className="client-logo">
      <div className="solomea-container">
        <img
          className="clients-img"
          src={nwgpower}
          alt=""
          width="100%"
          height="auto"
        />
        <img
          className="clients-img"
          src={simi_logo}
          alt=""
          width="100%"
          height="auto"
         
        />
        <img
          className="clients-img"
          src={DLA_Piper}
          alt=""
          width="100%"
          height="auto"
        />
        <img
          className="clients-img"
          src={universtiy}
          alt=""
          width="100%"
          height="auto"
        />
        <img
          className="clients-img"
          src={all4labels}
          alt=""
          width="100%"
          height="auto"
        />
      </div>
      </section>
     {/* map & Register section */}
      <section className="map" id="contact">
      <div style={{width:"100%"}}>
      <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2127528507717!2d79.12327981424737!3d21.14392988921404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c75d0df94527%3A0x8dc34080a61558ab!2sEkart%20Logistics%20Wardhman%20Nagar%20Hub!5e0!3m2!1sen!2sin!4v1667639573197!5m2!1sen!2sin" 
    width="100%" height="400" 
    style={{border:0}} allowFullScreen=""
     loading="lazy" 
     title="mymap"
     referrerPolicy="no-referrer-when-downgrade">
    </iframe>
    </div>
    {/* ragetation */}
    <div className="contacts">
        <div className="solomea-head">
          Register Your <br />
          Interest
        </div>

        <div className="separator">
          <img
            className="separator-img"
            src={separator}
            alt=""
            srcset=""
          />
        </div>

        <form className="solomea-form" action="">
          <div className="from-group mb-3">
            <input
              type="text"
              class="form-control"
              id="fullName"
              placeholder="Full Name"
            />
          </div>
          <div className="from-group mb-3">
            <input
              type="text"
              class="form-control"
              id="mobileNo"
              placeholder="Mobile Number"
            />
          </div>
          <div className="from-group mb-3">
            <input
              type="text"
              className="form-control"
              id="emailId"
              placeholder="Email Id"
            />
          </div>

          <div className="form-group mb-3">
            <textarea
              className="form-control"
              id="textArea"
              rows="3"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button className="btn submit-btn mt-4">Submit</button>
        </form>
      </div>
      </section>
      {/* footer section */}
      <Footer/>
    </>
  );
};

export default Solo;
