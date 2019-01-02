import React from "react";

export default function Footer() {
  return (
    <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h4>News</h4>
              <ul>
                <li>
                  <a href="#">Managed Website</a>
                </li>
                <li>
                  <a href="#">Manage Reputation</a>
                </li>
                <li>
                  <a href="#">Power Tools</a>
                </li>
                <li>
                  <a href="#">Marketing Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h4>Events</h4>
              <ul>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Brand Assets</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">Guides</a>
                </li>
                <li>
                  <a href="#">Research</a>
                </li>
                <li>
                  <a href="#">Experts</a>
                </li>
                <li>
                  <a href="#">Agencies</a>
                </li>
              </ul>
            </div>
          </div>{" "}
          -->
          <div className="col-lg-4  col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h4>Newsletter</h4>
              <p>Stay update with our latest</p>
              <div className="" id="mc_embed_signup">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      name="EMAIL"
                      placeholder="Enter Email Address"
                      required=""
                      type="email"
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-default" type="submit">
                        <span className="lnr lnr-arrow-right" />
                      </button>
                    </div>
                    <div className="info" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom row align-items-center justify-content-between">
          <p className="footer-text m-0 col-lg-6 col-md-12">
            Copyright &copy;{new Date().getFullYear()} All rights reserved |
            NHER
          </p>
          <div className="col-lg-6 col-sm-12 footer-social">
            <a href="#a">
              <i className="fa fa-facebook" />
            </a>
            <a href="#a">
              <i className="fa fa-twitter" />
            </a>
            <a href="#a">
              <i className="fa fa-youtube" />
            </a>
            <a href="#a">
              <i className="fa fa-dribbble" />
            </a>
            <a href="#a">
              <i className="fa fa-behance" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
