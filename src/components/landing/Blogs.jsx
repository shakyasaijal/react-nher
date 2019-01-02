import React, { Component } from "react";

export default class Blogs extends Component {
  render() {
    return (
      <section className="blog-area section-gap" id="blog">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-8">
              <div className="title text-center">
                <h1 className="mb-10">Latest posts from our Blog</h1>
                <p>In the history of modern astronomy there is.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 single-blog">
              <div className="thumb">
                <img className="img-fluid" src="img/b1.jpg" alt="" />
              </div>
              <p className="meta">
                25 April, 2018 | By <a href="#">Mark Wiens</a>
              </p>
              <a href="blog-single.html">
                <h5>Addiction When Gambling Becomes A Problem</h5>
              </a>
              <p>
                Computers have become ubiquitous in almost every facet of our
                lives. At work, desk jockeys spend hours in front of their.
              </p>
              <a
                href="#"
                className="details-btn d-flex justify-content-center align-items-center"
              >
                <span className="details">Details</span>
                <span className="lnr lnr-arrow-right" />
              </a>
            </div>
            <div className="col-lg-3 col-md-6 single-blog">
              <div className="thumb">
                <img className="img-fluid" src="img/b2.jpg" alt="" />
              </div>
              <p className="meta">
                25 April, 2018 | By <a href="#">Mark Wiens</a>
              </p>
              <a href="blog-single.html">
                <h5>Computer Hardware Desktops And Notebooks</h5>
              </a>
              <p>
                Ah, the technical interview. Nothing like it. Not only does it
                cause anxiety, but it causes anxiety for several different
                reasons.
              </p>
              <a
                href="#"
                className="details-btn d-flex justify-content-center align-items-center"
              >
                <span className="details">Details</span>
                <span className="lnr lnr-arrow-right" />
              </a>
            </div>
            <div className="col-lg-3 col-md-6 single-blog">
              <div className="thumb">
                <img className="img-fluid" src="img/b3.jpg" alt="" />
              </div>
              <p className="meta">
                25 April, 2018 | By <a href="#">Mark Wiens</a>
              </p>
              <a href="blog-single.html">
                <h5>Make Myspace Your Best Designed Space</h5>
              </a>
              <p>
                Plantronics with its GN Netcom wireless headset creates the next
                generation of wireless headset and other products such as
                wireless.
              </p>
              <a
                href="#"
                className="details-btn d-flex justify-content-center align-items-center"
              >
                <span className="details">Details</span>
                <span className="lnr lnr-arrow-right" />
              </a>
            </div>
            <div className="col-lg-3 col-md-6 single-blog">
              <div className="thumb">
                <img className="img-fluid" src="img/b4.jpg" alt="" />
              </div>
              <p className="meta">
                25 April, 2018 | By <a href="#">Mark Wiens</a>
              </p>
              <a href="blog-single.html">
                <h5>Video Games Playing With Imagination</h5>
              </a>
              <p>
                About 64% of all on-line teens say that do things online that
                they wouldn’t want their parents to know about. 11% of all adult
                internet
              </p>
              <a
                href="#"
                className="details-btn d-flex justify-content-center align-items-center"
              >
                <span className="details">Details</span>
                <span className="lnr lnr-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
