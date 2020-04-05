/******************************************************************************
Title           : LeftArrow.js
Description     : is the left arrow of our carousel  using font-awesome 
******************************************************************************/

import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class TextSlider extends Component {
  constructor() {
    super();
    this.state = {
      auth: false,
    };
  }

  render() {
    return (
      <div className="tParent">
        <div className="row">
          <div className="col text-center">
            <h1 className="textSliderTitle">Discover events for all the</h1>
            <h2 className="textSliderTitle">things you love </h2>
            <p className="tParent__items__subTittle">We do more together</p>
            {this.state.auth ? null : (
              <Link to="/register" className="tParent__items__sign">
                Join now
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TextSlider;
