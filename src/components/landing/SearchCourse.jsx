import React, { Component } from "react";

export default class SearchCourse extends Component {
  // state = {
  //   placeholder: ""
  // };
  // onBlur = e => {
  //   const { _placeholder: placeholder } = e.target;
  //   this.setState({ placeholder });
  // };
  // onFocus = e => {
  //   const { _placeholder: placeholder } = e.target;
  //   this.setState({ placeholder });
  //   console.log("pal", placeholder);
  // };

  render() {
    // const { placeholder } = this.state;
    return (
      <section className="search-course-area relative">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6 search-course-left">
              <h1 className="text-white">Search Universities</h1>
              <p>
                7 Regions. 30 Cities. 10+ Universities. US$7m Scholarship Fund
              </p>
              <div className="row details-content" />
            </div>
            <div className="col-lg-4 col-md-6 search-course-right section-gap">
              <form className="form-wrap">
                <h4 className="text-white pb-20 text-center mb-30">
                  Search for Universities
                </h4>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  // placeholder={placeholder}
                  placeholder="Your Name"
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                />
                <input
                  type="phone"
                  className="form-control"
                  name="phone"
                  // placeholder={placeholder}
                  placeholder="Your Phone Number"
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                />
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  // placeholder={placeholder}
                  placeholder="Your Email Address"
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                />
                <div className="form-select" id="service-select">
                  <select>
                    <option datd-display="">Study Level</option>
                    <option value="1">All levels</option>
                    <option value="2">Postgraduate</option>
                    <option value="3">Undergraduate</option>
                  </select>
                </div>

                <div className="form-select" id="service-select">
                  <select>
                    <option datd-display="">Subject of interest</option>
                    <option value="1">Information technology</option>
                    <option value="2">Agriculture</option>
                    <option value="3">Business</option>
                    <option value="4">Art and design</option>
                    <option value="1">Information technology</option>
                    <option value="2">Agriculture</option>
                    <option value="3">Business</option>
                    <option value="4">Art and design</option>
                  </select>
                </div>
                <div className="form-select" id="service-select">
                  <select>
                    <option datd-display="">Study destination</option>
                    <option value="1">Kathmandu</option>
                    <option value="2">Pokhara</option>
                    <option value="3">Biratnagar</option>
                    <option value="4">Palpa</option>
                    <option value="1">Lalitpur</option>
                    <option value="2">Bhaktapur</option>
                    <option value="3">Nuwakot</option>
                  </select>
                </div>
                <button className="primary-btn text-uppercase">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
