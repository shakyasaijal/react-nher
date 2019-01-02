import React, { Component } from "react";

export default class Freature extends Component {
  render() {
    return (
      <section className="feature-area">
        <div className="container">
          <div className="row">
            <div id="saijal" />
            <div className="col-lg-4">
              <div className="single-feature">
                <div className="title">
                  <h4>Best Colleges</h4>
                </div>
                <div className="desc-wrap">
                  <p>
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology.
                  </p>
                  <a href="#a">Join Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-feature">
                <div className="title">
                  <h4>No.1 of universities</h4>
                </div>
                <div className="desc-wrap">
                  <p>
                    For many of us, our very first experience of learning about
                    the celestial bodies begins when we saw our first.
                  </p>
                  <a href="#a">Join Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-feature">
                <div className="title">
                  <h4>Huge Library</h4>
                </div>
                <div className="desc-wrap">
                  <p>
                    If you are a serious astronomy fanatic like a lot of us are,
                    you can probably remember that one event.
                  </p>
                  <a href="#a">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
