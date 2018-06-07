import React, { Component } from 'react';


class WebsiteFeature extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        return (
            <section className="bar bar-3 bar--sm bg--secondary">
                <div className="container">

                    <div className="main-container">
                    <section className="text-center height-50">
                        <div className="container pos-vertical-center">
                            <div className="row">
                                <div className="col-md-8">
                                    <h1>Full-service Design &amp; Development</h1>
                                    <p className="lead">
                                        From a team of passionate creators working side-by-side with our partners to deliver engaging digital and physical campaigns.
                                    </p>
                                </div>
                            </div>
                           
                        </div>
    
                    </section>
                        <section className="switchable feature-large">
                            <div className="container">
                                <div className="row justify-content-around">
                                    <div className="col-md-5">
                                        <img alt="Image" className="border--round box-shadow-wide" src="img/education-1.jpg" />
                                    </div>
                                    <div className="col-md-7 col-lg-5">
                                        <div className="mt--2">
                                            <h2>Graphic Design</h2>
                                            <p className="lead">
                                                Launching an attractive and scalable website quickly and affordably is important for modern startups &mdash; Stack offers massive value without looking 'bargain-bin'.
                                            </p>
                                            <a href="#">Enquire Now &raquo;</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="switchable feature-large">
                            <div className="container">
                                <div className="row justify-content-around">
                                    <div className="col-md-5">
                                        <img alt="Image" className="border--round box-shadow-wide" src="img/inner-5.jpg" />
                                    </div>
                                    <div className="col-md-7 col-lg-5">
                                        <div className="mt--2">
                                            <h2>Brand Marketing</h2>
                                            <p className="lead">
                                                Launching an attractive and scalable website quickly and affordably is important for modern startups &mdash; Stack offers massive value without looking 'bargain-bin'.
                                            </p>
                                            <a href="#">Enquire Now &raquo;</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="switchable feature-large">
                            <div className="container ">
                                <div className="row justify-content-around">
                                    <div className="col-md-5">
                                        <img alt="Image" className="border--round box-shadow-wide" src="img/inner-6.jpg" />
                                    </div>
                                    <div className="col-md-7 col-lg-5">
                                        <div className="mt--2">
                                            <h2>Digital Development</h2>
                                            <p className="lead">
                                                Launching an attractive and scalable website quickly and affordably is important for modern startups &mdash; Stack offers massive value without looking 'bargain-bin'.
                                            </p>
                                            <a href="#">Enquire Now &raquo;</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                 </div>
            </section>
         );
     }
}


export default WebsiteFeature;