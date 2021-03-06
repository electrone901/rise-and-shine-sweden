/******************************************************************************
Title           : Slider.js
Description     : React component that contains all components for the carousel
******************************************************************************/
import React, { Component } from "react";
import Slide from "./Slide";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import TextSlider from "./TextSlider";
// import test from "../../images/b1.jpg";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "images/_1.png",
        "images/_4.jpg",
        "images/_01.gif",
        "images/_9.gif",
        "images/000.gif",
        "images/_3.jpg",
        "images/_4.jpg",
        "images/_6.png",
        "images/_2.jpg",
      ],
      currentIndex: 0,
      translateValue: 0,
      autoplay: true,
    };
  }

  componentDidMount = () => {
    if (this.state.autoplay) {
      const interval = window.setInterval(() => {
        this.goToNextSlide();
      }, 4000);
      this.setState({ interval });
    }
  };

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;

    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth(),
    }));
  };

  goToNextSlide = () => {
    // Exiting the method early if we are at the end
    // We also want to reset currentIndex & translateValue so we return the first image
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }

    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth(),
    }));
  };

  // calculate the with of current slide and returns it so that translateValue can setState for the next image
  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s",
            animationDelay: "0.45s",
          }}
        >
          {this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))}
        </div>
        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <TextSlider />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}
