import React from "react";
import "./style.scss";
import { ReactComponent as LinkedIn } from "assets/linkedin.svg";

export default function Footer() {
  return (
    <>
      <div id="footer" className="footer">
        <div className="footer-sub">
          <div className="footer_data">
            <div className="footer_made_by">
              <p>
                Using{" "}
                <a rel="noreferrer" href="https://opentdb.com/" target="_blank">
                  Open Trivia DataBase
                </a>
              </p>
            </div>
            <div className="linkedin_footer">
              <p>
                Connect with us on{" "}
                <LinkedIn style={{ height: "20px", marginLeft: "5px" }} />
              </p>
              <p className="profile">
                <a
                  href="https://www.linkedin.com/in/vishal345"
                  target="_default"
                >
                  Vishal Sharma
                </a>
              </p>
              <p className="profile">
                <a
                  href="https://www.linkedin.com/in/priya-jain-90066bb3"
                  target="_default"
                >
                  Priya Jain
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
