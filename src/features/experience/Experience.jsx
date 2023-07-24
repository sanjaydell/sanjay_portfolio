import React from "react";
import "./experience.scss";

function Experience() {
  return (
    <div className="timeline" id="experience">
      <div className="details-container left-container">
        <div className="text-box">
          <div className="comapny">
            <img src="/vamstar.png" alt="image" className="logo" />
            <div className="company-title">
              <h3 style={{ paddingLeft: "10px" }}>
                vamstar 
              </h3>
              <h5  style={{ paddingLeft: "10px", marginTop: '25px' }}>(2022 May - present)</h5>
            </div>
          </div>
          <p style={{ margin: 0 }}>
            Software Engineer, Enhanced the buyer-side user interface (UI) of
            the application, resulting in increased buyer engagement and
            transforming the application into a thriving B2B Healthcare
            marketplace.
          </p>
          <span className="left-arrow" />
        </div>
      </div>
      <div className="details-container right-container">
        <div className="text-box">
          <div className="comapny">
            <img src="/infosys.jpg" alt="image" className="logo" />
            <div className="company-title">
            <h3 style={{ paddingLeft: "10px" }}>Infosys</h3>
            <h5  style={{ paddingLeft: "10px", marginTop: '25px' }}>(2021 Mar - 2022 Apr)</h5>
            </div>
          </div>
          <p style={{ margin: 0 }}>
            Software Engineer, Enhanced the buyer-side user interface (UI) of
            the application, resulting in increased buyer engagement and
            transforming the application into a thriving B2B Healthcare
            marketplace.
          </p>
          <span className="right-arrow"></span>
        </div>
      </div>
      <div className="details-container left-container">
        <div className="text-box">
          <div className="comapny">
            <img src="/srkr.jpg" alt="image" className="logo" />
            <div className="company-title">
            <h3 style={{ paddingLeft: "10px" }}>SRKR</h3>
            <h5  style={{ paddingLeft: "10px", marginTop: '25px' }}>(2016 Jul - 2020 Nov)</h5>
            </div>
          </div>
          <p style={{ margin: 0 }}>
            Software Engineer, Enhanced the buyer-side user interface (UI) of
            the application, resulting in increased buyer engagement and
            transforming the application into a thriving B2B Healthcare
            marketplace.
          </p>
          <span className="left-arrow" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
