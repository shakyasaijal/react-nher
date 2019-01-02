import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <header id="header">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-8 header-top-left no-padding">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-behance" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-sm-6 col-4 header-top-right no-padding">
                <a href="tel:+953 012 3654 896">
                  <span className="lnr lnr-phone-handset" />{" "}
                  <span className="text">+977 9808967550</span>
                </a>
                <a href="mailto:support@colorlib.com">
                  <span className="lnr lnr-envelope" />{" "}
                  <span className="text">support@nher.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container main-menu">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <a href="index.html">
                <img
                  src="/img/logo.png"
                  style={{ height: "60px", width: "60px" }}
                  alt="logo"
                />
                NHER
              </a>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="courses.html">Ranking Form</a>
                </li>
                <li className="menu-has-children">
                  <a href="/">News</a>
                  <ul>
                    <li>
                      <a href="blog-home.html">Blog Home</a>
                    </li>
                    <li>
                      <a href="blog-single.html">Blog Single</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-has-children">
                  <a href="/">Events</a>
                  <ul>
                    <li>
                      <a href="course-details.html">Course Details</a>
                    </li>
                    <li>
                      <a href="event-details.html">Event Details</a>
                    </li>
                    <li>
                      <a href="elements.html">Elements</a>
                    </li>
                    <li className="menu-has-children">
                      <a href="/">Level 2 </a>
                      <ul>
                        <li>
                          <a href="#a">Item One</a>
                        </li>
                        <li>
                          <a href="#a">Item Two</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
