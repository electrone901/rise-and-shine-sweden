import React from "react";

import Banner from '../img/banner.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row ">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <img src={Banner} className="footer__banner" alt="Banner" /> 
          </div>
        </div>
        <hr className="footer-line" />
        <div className="row ">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
            <div className="footer-widget ">
              <div className="footer-title">Company</div>
              <ul className="list-unstyled">
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Support</a>
                </li>
                <li>
                  <a href="/">Press</a>
                </li>
                <li>
                  <a href="/">Legal & Privacy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
            <div className="footer-widget ">
              <div className="footer-title">Quick Links</div>
              <ul className="list-unstyled">
                <li>
                  <a href="/">News</a>
                </li>
                <li>
                  <a href="/">Contact us</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
            <div className="footer-widget ">
              <div className="footer-title">Social</div>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <a href="/">Google +</a>
                </li>
                <li>
                  <a href="/">Linked In</a>
                </li>
                <li>
                  <a href="/">Facebook</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-6 col-6 ">
            <div className="footer-widget ">
              <h3 className="footer-title">Subscribe Newsletter</h3>
              <form>
                <div className="newsletter-form">
                  <input
                    className="form-control"
                    placeholder="Enter Your Email address"
                    type="text"
                  />
                  <button class="btn-default" type="submit">
                    Go
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center ">
            <div className="tiny-footer">
              <p>
                Copyright © All Rights Reserved 2020 to{" "}
                <a
                  href="https://www.facebook.com/riseandshinesweden/"
                  target="_blank"
                  className="copyrightlink"
                  rel="noopener noreferrer"
                >
                  Rise and Shine Sweden.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
