import React, { Component } from 'react';
import Slider from 'react-slick';

export default class Brands extends Component {
  componentDidMount() {

  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false
    };
    return (
      <div className="section brand">
        <div className="centered container w-container">
          <div className="centered section-title-block2">
            <div className="section-title">We work with the finest brands!</div>
            <div className="section-divider-line"></div>
          </div>

          <Slider {...settings} className="brand-slider">
            <div> <img className="brand-logo" src={process.env.PUBLIC_URL + 'images/carpathy.png'} /></div>
            <div><img className="brand-logo" src="images/ipleaders.png" /></div>
            <div><img className="brand-logo" src="images/carpathy.png" /></div>
            <div><img className="brand-logo" src="images/ipleaders.png" /></div>
            <div><img className="brand-logo" src="images/carpathy.png" /></div>
            <div><img className="brand-logo" src="images/ipleaders.png" /></div>
            <div><img className="brand-logo" src="images/carpathy.png" /></div>
          </Slider>

        </div>
      </div>

    );
  }
}
