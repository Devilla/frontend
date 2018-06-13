import React, { Component } from 'react';
import { Animated } from "react-animated-css";

export default class Banner extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <header className="header  h-fullscreen">
        <div id="stripes">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="overlay opacity-95" >
          <div className="hero-container w-container">
            <div className="hero-text-block">
              <Animated className="hero-title word sm" animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
                Increase Your Website Conversions Using
              </Animated >
              <Animated className="hero-title word" animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>Social Proof Notifications</Animated>

              <Animated className="hero-title title-2" animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>Influence helps you in converting more customers on your website by showing recent customer activity on your web pages</Animated>
              <Animated className="hero-buttons-wrapper" animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                <form className="getfrm">
                  <input type="text" placeholder="Enter your email" />
                  <input type="submit" className="_2 hero-button" value="Start your free trial" />
                </form>
              </Animated>
            </div>

          </div>
        </div>
      </header>
    );
  }
}
