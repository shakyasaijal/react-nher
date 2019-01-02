import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <section className="banner-area relative" id="home">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="row fullscreen d-flex align-items-center justify-content-between">
            <div className="banner-content col-lg-9 col-md-12">
              <h1 className="text-uppercase">
                We Ensure better ranking for a better education
              </h1>
              <p className="pt-10 pb-10" style={{ color: "antiquewhite" }}>
                In the history of modern astronomy, there is probably no one
                greater leap forward than the building and launch of the space
                telescope known as the Hubble.
              </p>
              <a href="#saijal" className="primary-btn text-uppercase">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
