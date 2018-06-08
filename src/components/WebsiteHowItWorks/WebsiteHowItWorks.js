import React, { Component } from 'react';
import { Link } from "react-router";
import Slider from 'react-slick';
import {
  NewIntegrate,
  NewInstall,
  NewGoLive,
  NewAnalyze,
  Easiestsetup
} from 'img';

class WebsiteHowItWorks extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div className="main-container">
        <section className="cover text-center unpad--bottom bg--secondary">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="typed-headline"> <span className="inline-block"><h2>Nothing beats Live Social Proof for&nbsp;</h2></span>
                  <span className="h2 inline-block typed-text typed-text--cursor color--primary"> Businesses!</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg--secondary">
          <Slider {...settings}>
            <div>
              <div className="row">
                <div className="col-lg-2">
                </div>
                <div className="col-lg-2 col-md-4 col-6 text-center">
                  <img className="testimonial__image" alt="Image" src={ NewIntegrate } />
                </div>
                <div className="col-lg-6 col-md-8 col-12">
                  <span className="h3">
                    <p>
                      “We’ve been using Stack to prototype designs quickly and
                      efficiently. Needless to say we’re hugely impressed by the style and value.”
                    </p>
                  </span>
                  <h5>Maguerite Holland</h5> <span>Interface Designer — Yoke</span>
                </div>
                <div className="col-lg-2">
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-lg-2">
                </div>
                <div className="col-lg-2 col-md-4 col-6 text-center">
                  <img className="testimonial__image" alt="Image" src={ NewIntegrate } />
                </div>
                <div className="col-lg-6 col-md-8 col-12">
                  <span className="h3">
                    “I've been using Medium Rare's templates for a couple of years now and Stack is without a doubt their best work yet. It's fast, performant and absolutely stunning.”
                  </span>
                  <h5>Lucas Nguyen</h5> <span>Freelance Designer</span>
                </div>
                <div className="col-lg-2">
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-lg-2">
                </div>
                <div className="col-lg-2 col-md-4 col-6 text-center">
                  <img className="testimonial__image" alt="Image" src={ NewIntegrate } />
                </div>
                <div className="col-lg-6 col-md-8 col-12">
                  <span className="h3">
                    “Variant has been a massive plus for my workflow — I can now get live mockups out in a matter of hours, my clients really love it.”
                  </span>
                  <h5>Rob Vasquez</h5> <span>Interface Designer — Yoke</span>
                </div>
                <div className="col-lg-2">
                </div>
              </div>
            </div>
          </Slider>
        </section>
        <section className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8">
                <h1>Up and running in minutes</h1>
                <p className="lead"> Influence easily connects to your website - no coding required! </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="feature feature-5 boxed boxed--lg boxed--border"> <img className="icon-n2" alt="Image" src={ NewIntegrate } />
                  <div className="feature__body">
                    <h3>1. Install our Pixel</h3>
                    <p> Just copy &amp; paste the pixel inside your the head tag of your website. We recommend you to do it on all of your website's pages.</p> <Link to="#">Learn More</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature feature-5 boxed boxed--lg boxed--border"> <img className="icon-n2" alt="Image" src={ NewInstall } />
                  <div className="feature__body">
                    <h3>2. Create Campaign</h3>
                    <p> Create notification campaign for your connected website. Customize the style & behaviour of your notifications.</p> <Link to="#">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="feature feature-5 boxed boxed--lg boxed--border"> <img className="icon-n2" alt="Image" src={ NewGoLive } />
                  <div className="feature__body">
                    <h3>3. Go Live</h3>
                    <p> Launch your campaign. See the notifications running on your website for more conversions. </p> <Link to="#">Learn More</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature feature-5 boxed boxed--lg boxed--border"> <img className="icon-n2" alt="Image" src={ NewAnalyze } />
                  <div className="feature__body">
                    <h3>4. Analyze & Monitor</h3>
                    <p> Look into your campaign analytics. Monitor the conversion charts, see the conversion charts shoot up! </p> <Link to="#">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="my-auto col-md-6" />
       <section className="cover switchable text-center-xs switchable--switch mb-5">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-6 col-lg-5">
                  <h2>Setup Easily!</h2>
                  <p className="lead"> </p>
                  <Link className="btn btn--primary col-md-7" to="#customise-template">
                    <span className="btn__text">Start your trial</span>
                  </Link>

                </div>
                <div className="col-md-6">
                  <img alt="set up" src={Easiestsetup} />
                </div>
              </div>

            </div>
          </section>
      </div>
    );
  }
}

export default WebsiteHowItWorks;
