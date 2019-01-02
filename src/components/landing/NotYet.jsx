import React, { Component } from "react";

export default class NotYet extends Component {
  render() {
    return (
      <section className="cta-two-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 cta-left">
              <h1>Not Yet Satisfied with our Trend?</h1>
            </div>
            <div className="col-lg-4 cta-right">
              <a className="primary-btn wh" href="#a">
                view our blog
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
