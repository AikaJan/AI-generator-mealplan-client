import React from "react";
import "./footer.css";
import instagram from "./../../img/instagram.svg";
import github from "./../../img/gitHub.svg";
import linkedIn from "./../../img/linkedIn.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="https://docs.google.com/document/d/1J6mRJ1_-S-Oxbide3x1jGznyimsC44RY/edit?usp=sharing&ouid=101872187518886694702&rtpof=true&sd=true">
                  <img src={instagram} alt="Link" />
                </a>
              </li>

              <li className="social__item">
                <a href="https://github.com/AikaJan">
                  <img src={github} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://www.linkedin.com/in/aigerim-dzhanyshpekova">
                  <img src={linkedIn} alt="Link" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2024 AI-Recipe-Generator</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
