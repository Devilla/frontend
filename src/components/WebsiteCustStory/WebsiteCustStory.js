import React, { Component } from 'react';
import './WebsiteCustStory.scss';


class WebsiteCustStory extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {



    return (

      <section className="bar bar-3 bar--sm bg--secondary">
        <div className="container">
          <div className="main-container">
            <div className="container ">
              <div className="row">
                <div className="col-md-12">
                  <div className="height-50 imagebg border--round" data-overlay="2">
                    <div className="imagebg">
                      <div className="background-image-holder">
                        <img alt="background" src="img/3.jpg" />
                      </div>
                    </div>
                    <div className="pos-vertical-center col-md-5 col-lg-6 ">
                      <h2>The featured customer stories is being shown here</h2>
                      <p className="lead">
                         Meet Alexa , offers unique voice for inquiry of digital goods, Image will be shown in the background
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <section className="space--sm">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-md-12">
                    <div className="masonry masonry--tiles">
                      <div className="masonry-filter-container d-flex align-items-center">
                        <span>Category:</span>
                        <div className="masonry-filter-holder">
                          <div className="masonry__filters" data-filter-all-text="All Categories">
                            <ul>
                              <li className="active" data-masonry-filter="*">All Categories</li>
                              <li data-masonry-filter="accessories">Accessories</li>
                              <li data-masonry-filter="audio">Audio</li>
                              <li data-masonry-filter="computing">Computing</li>
                              <li data-masonry-filter="creative">Creative</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="masonry__container row masonry--active justify-content-between ">
                        <div className="masonry__item col-md-4  hover-shadow filter-accessories " data-masonry-filter="Accessories">
                          <div className="product product--tile bg--secondary text-center">

                            <a href="#">
                              <img alt="Image" src="img/1.jpg" />
                            </a>
                            <div className="headline text-left">

                              <div>
                                <h3 className="type--bold">Ample Restaurant</h3>
                                <p>Meet Jason and see how he updated his business and has gained
                                                                thousands of customers</p>
                              </div>
                              <div className="mt-3 text-center hover-shadow">
                                <a className="block p-2 color--primary bg--secondary h4" href="#">Read full story</a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="masonry__item col-md-4  hover-shadow filter-creative" data-masonry-filter="Creative">
                          <div className="product product--tile bg--secondary text-center">
                            <a href="#">
                              <img alt="Image" src="img/2.jpg" />
                            </a>
                            <div className="headline text-left">

                              <div>
                                <h3 className="type--bold">Fitness freak</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniamloribus
                                                                ipsa libero iste numquam.</p>
                              </div>
                              <div className="mt-3 text-center hover-shadow ">
                                <a className="block p-2 color--primary bg--secondary h4" href="#">Read full story</a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="masonry__item col-md-4  hover-shadow filter-accessories" data-masonry-filter="Accessories">
                          <div className="product product--tile bg--secondary text-center">
                            <a href="#">
                              <img alt="Image" src="img/3.jpg" />
                            </a>
                            <div className="headline text-left">

                              <div>
                                <h3 className="type--bold">Travelling job</h3>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur
                                                            veritatis error ipsum nihil dignissimos.</p>
                              </div>
                              <div className="mt-3 text-center hover-shadow">
                                <a className="block p-2 color--primary bg--secondary h4" href="#">Read full story</a>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="masonry__container row masonry--active mt-4">

                        <div className="masonry__item col-md-4  hover-shadow filter-accessories" data-masonry-filter="Accessories">
                          <div className="product product--tile bg--secondary text-center">
                            <a href="#">
                              <img alt="Image" src="img/4.jpg" />
                            </a>
                            <div className="headline text-left">

                              <div>
                                <h3 className="type--bold">Brick amd Mortar</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
                                                                quisquam debitis recusandae magni</p>
                              </div>
                              <div className="mt-3 text-center hover-shadow">
                                <a className="block p-2 color--primary bg--secondary h4" href="#">Read full story</a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="masonry__item col-md-4  hover-shadow filter-audio" data-masonry-filter="Audio">
                          <div className="product product--tile bg--secondary text-center">
                            <a href="#">
                              <img alt="Image" src="img/5.jpg" />
                            </a>
                            <div className="headline text-left">

                              <div>
                                <h3 className="type--bold">Coding Bootcamp</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                                                                atque exercitationem neque maxime, beatae </p>
                              </div>
                              <div className="mt-3 text-center  hover-shadow">
                                <a className="block p-2 color--primary bg--secondary h4" href="#">Read full story</a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="masonry__item col-md-4   hover-shadow filter-audio" data-masonry-filter="Audio">
                          <div className="product product--tile bg--secondary text-center">
                            <a href="#">
                              <img alt="Image" src="img/6.jpg" />
                            </a>
                            <div className="headline text-left">

                              <div>
                                <h3 className="type--bold">Sportsmanship hood</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                                                                totam illum. Eos distinctio maxime veritatis</p>
                              </div>
                              <div className="mt-3 text-center hover-shadow">
                                <a className="block p-2 color--primary bg--secondary h4" href="#">Read full story</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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


export default WebsiteCustStory;
