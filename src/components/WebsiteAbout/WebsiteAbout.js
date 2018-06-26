import React, { Component } from 'react';

class WebsiteAbout extends Component {
  componentDidMount() {
    //window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="main-container">
        <section className="text-center bg--secondary">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8">
                <h2>About Influence&nbsp;</h2>
                <p className="lead"> ..... </p>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="boxed boxed--border boxed--lg">
                  <p> We started Influence with one mission: to cut down the advertising cost and to convert more customers on your website. We use your existing customers’ data on your website and show it to your visitors so that they are socially influenced by buying behavior of people on the website. Using this tool we’ve been able to help a lot of businesses in increasing their money making and get more conversions. Social influence is the next big thing in marketing for influencing buyers to buy more. Let’s start with your free to start trial and get making more money for you. </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WebsiteAbout;
