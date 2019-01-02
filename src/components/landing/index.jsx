import React, { Component, Fragment } from "react";
import Banner from "./Banner";
import Freature from "./Feature";
import PopularCourse from "./PopularCourse";
import SearchCourse from "./SearchCourse";
import Carosole from "./Carosule";
import UpCommingEvents from "./UpCommingEvents";
import Review from "./Review";
import Scholarship from "./Scholarship";
import Blogs from "./Blogs";
import NotYet from "./NotYet";

export default class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <Freature />
        <PopularCourse />
        <SearchCourse />
        <Carosole />
        <UpCommingEvents />
        <Review />
        <Scholarship />
        <Blogs />
        <NotYet />
      </Fragment>
    );
  }
}
