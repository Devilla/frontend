import React, { Component } from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';
import {
  NewIntegrate,
  NewInstall,
  NewGoLive,
  NewAnalyze,
  Easiestsetup,
  Lawsikho,
  Carpathy,
  Stagephod
} from 'img';
import './WebsiteHowitWorks.scss';
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
      <div className="websitehowitworks-container ">
        <div className="main-container">
          <section className="cover text-center unpad--bottom ">
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



          <section className="col-md-12 pl-0 pt-3 pr-0 slider-card  "  >
            <div className="container pt-5 pb-5">

              <Slider {...settings}>
                <div>
                  <div className="row ">
                    <div className="col-md-4 text-left pt-5 pb-5  ">
                      <img src={Carpathy} alt="img" className="slider-image"/>
                    </div>
                    <div className="col-md-8 text-left pt-5 pb-5 slider-text">
                      <p className="h3 slider-title"> “We wanted a solution that could help us in increasing our conversions on our portal. We got an instant conversions boost after using Influence on our main portal ”  </p>
                      <p className="h5 lead slider-author"> – Carpathy, Akshat Lavania</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row ">
                    <div className="col-md-4 text-left pt-5 pb-5  ">
                      <img src={Stagephod} alt="img" className="slider-image"/>
                    </div>
                    <div className="col-md-8 text-left pt-5 pb-5 slider-text">
                      <p className="h3 slider-title"> “ We got an instant boost of 84% in our landing page conversions after using influence ”  </p>
                      <p className="h5 lead slider-author"> – Stagephod, Nikhilesh Tayal</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row ">
                    <div className="col-md-4 text-left pt-5 pb-5  ">
                      <img src={Lawsikho} alt="img"className="slider-image"/>
                    </div>
                    <div className="col-md-8 text-left pt-5 pb-5 slider-text">
                      <p className="h3 slider-title"> “Great Tool. Gave us instant boost of 36% on our landing pages on an average ”  </p>
                      <p className="h5 lead slider-author"> – LawSikho, Abhyudya Aggarwal </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </section>
          <section className="text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-lg-8">
                  <h1 className="second-title">Up and running in minutes</h1>
                  <p className="lead"> Influence easily connects to your website - no coding required! </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="row">
                <div className="col-md-6 justify-content-center">
                  <div className="feature feature-5 boxed  boxed--border"> <img className="icon-n2" alt="Image" src={NewIntegrate} />
                    <div className="feature__body">
                      <h3>1. Install our Pixel</h3>
                      <p className="lead"> Just copy &amp; paste the pixel inside your the head tag of your website. We recommend you to do it on all of your website's pages.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature feature-5 boxed boxed--border"> <img className="icon-n2" alt="Image" src={NewInstall} />
                    <div className="feature__body">
                      <h3>2. Create Campaign</h3>
                      <p className="lead"> Create notification campaign for your connected website. Customize the style & behaviour of your notifications.</p>
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
                  <div className="feature feature-5 boxed boxed--border"> <img className="icon-n2" alt="Image" src={NewGoLive} />
                    <div className="feature__body">
                      <h3>3. Go Live</h3>
                      <p className="lead"> Launch your campaign. See the notifications running on your website for more conversions. </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature feature-5 boxed  boxed--border"> <img className="icon-n2" alt="Image" src={NewAnalyze} />
                    <div className="feature__body">
                      <h3>4. Analyze & Monitor</h3>
                      <p className="lead"> Look into your campaign analytics. Monitor the conversion charts, see the conversion charts shoot up! </p>
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
                <div className="col-md-8 col-lg-6">
                  <h2>Set it up in 15 seconds ! </h2>
                  <p className="lead"> </p>
                  <Link className="btn btn--primary col-md-7 freebtn" to="/">
                    <span className="btn__text">Try Free </span>
                  </Link>
                </div>
                <div className="col-md-4">
                  <img alt="set up" src={Easiestsetup} />
                </div>
              </div>

            </div>
          </section>
          <hr className="my-auto col-md-6" />
        </div>
      </div>
    );
  }
}

export default WebsiteHowItWorks;
