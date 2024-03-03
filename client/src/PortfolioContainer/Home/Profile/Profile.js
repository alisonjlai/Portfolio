import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/laijy/">
                <i className="fa fa-linkedin-square" />
              </a>
              <a href="https://github.com/alisonjlai">
                <i className="fa fa-github-square" />
              </a>
              <a href="https://www.instagram.com/alisonpplai/">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Alison Lai</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  // loop={Infinity}
                  steps={[
                    "Full stack Developer 💻",
                    2000,
                    // "Coding Artist 🖌️",
                    // 2000,
                    // "Cloud Navigator ☁️",
                    // 2000,
                    // "Innovative Thinker 💡",
                    // 2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Front-End Creativity Meets Back-End Reliability: Crafting
                Exceptional Web Applications.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire me
            </button>
            <a href="Jiaying Lai_Resume.pdf" download="Jiaying Lai_Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
