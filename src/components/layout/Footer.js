import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className="footer">
      <div class="container">
        <div class="row ">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
            
          </div>
        </div>
        <hr class="footer-line" />
        <div class="row ">
          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
            <div class="footer-widget ">
              <div class="footer-title">Company</div>
              <ul class="list-unstyled">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Legal & Privacy</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
            <div class="footer-widget ">
              <div class="footer-title">Quick Links</div>
              <ul class="list-unstyled">
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
            <div class="footer-widget ">
              <div class="footer-title">Social</div>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Google +</a>
                </li>
                <li>
                  <a href="#">Linked In</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-12 col-sm-6 col-6 ">
            <div class="footer-widget ">
              <h3 class="footer-title">Subscribe Newsletter</h3>
              <form>
                <div class="newsletter-form">
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
        <div class="row ">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center ">
            <div class="tiny-footer">
              <p>
                Copyright © All Rights Reserved 2020 to{" "}
                <a
                  href="https://www.facebook.com/riseandshinesweden/"
                  target="_blank"
                  class="copyrightlink"
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
