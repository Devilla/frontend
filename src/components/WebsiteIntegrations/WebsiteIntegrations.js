import { Component } from 'react';
import { Link } from "react-router";
import {
  Integrations1,
  NewRecentPurchases,

} from 'img';

class WebsiteIntegrations extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div className="main-container">
        <section className="cover switchable text-center-xs bg--secondary switchable--switch">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-6 col-lg-6 mt--3">
                <h2>Influence integrations are meant to scale and work everywhere</h2>
                <p className="lead"> Influence integrates with all your favorite platforms to make increasing conversions simple</p>
                <a className="btn btn--primary type--uppercase" href="/signup">
                  <span className="btn__text"> Try influence now</span>
                </a>
                <span className="block type--fine-print">or <a href="/">view the demos</a></span>
              </div>
              <div className="col-md-5"> <img alt="Image" src={ Integrations1 } /> </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Popular integrations</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="feature feature-3 boxed boxed--lg boxed--border">
                  <img className="icon-n" src={ NewRecentPurchases } />
                  <h4>Mailer Integrations</h4>
                  <p>Stack comes with integration for Mail Chimp and Campaign Monitor forms - ideal for modern marketing campaigns </p>
                  <a href="#">Learn More</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature feature-3 boxed boxed--lg boxed--border">
                  <img className="icon-n" src={ NewRecentPurchases } />
                  <h4>Diverse Icons</h4>
                  <p> Including the premium Icons Mind icon kit, Stack features a highly diverse set of icons suitable for all purposes. </p>
                  <span className="label">New</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature feature-3 boxed boxed--lg boxed--border">
                  <img className="icon-n" src={ NewRecentPurchases } />
                  <h4>Modular Design</h4>
                  <p> Combine blocks from a range of categories to build pages that are rich in visual style and interactivity </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>All integrations</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="feature feature-3 boxed boxed--lg boxed--border">
                  <img className="icon-n" src={ NewRecentPurchases } />
                  <h4>Mailer Integrations</h4>
                  <p> Stack comes with integration for Mail Chimp and Campaign Monitor forms - ideal for modern marketing campaigns </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature feature-3 boxed boxed--lg boxed--border">
                  <img className="icon-n" src={ NewRecentPurchases } />
                  <h4>Diverse Icons</h4>
                  <p> Including the premium Icons Mind icon kit, Stack features a highly diverse set of icons suitable for all purposes. </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature feature-3 boxed boxed--lg boxed--border">
                  <img className="icon-n" src={ NewRecentPurchases } />
                  <h4>Modular Design</h4>
                  <p> Combine blocks from a range of categories to build pages that are rich in visual style and interactivity </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="feature feature-3 boxed boxed--lg boxed--border">
                  <img className="icon-n" src={ NewRecentPurchases } />
                  <h4>Mailer Integrations</h4>
                  <p> Stack comes with integration for Mail Chimp and Campaign Monitor forms - ideal for modern marketing campaigns </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature feature-3 boxed boxed--lg boxed--border">
                  <img className="icon-n" src={ NewRecentPurchases } />
                  <h4>Diverse Icons</h4>
                  <p> Including the premium Icons Mind icon kit, Stack features a highly diverse set of icons suitable for all purposes. </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature feature-3 boxed boxed--lg boxed--border">
                  <img className="icon-n" src={ NewRecentPurchases } />
                  <h4>Modular Design</h4>
                  <p> Combine blocks from a range of categories to build pages that are rich in visual style and interactivity </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="feature feature-3 boxed boxed--lg boxed--border">
                  <img className="icon-n" src={ NewRecentPurchases } />
                  <h4>Mailer Integrations</h4>
                  <p> Stack comes with integration for Mail Chimp and Campaign Monitor forms - ideal for modern marketing campaigns </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature feature-3 boxed boxed--lg boxed--border">
                  <img className="icon-n" src={ NewRecentPurchases } />
                  <h4>Diverse Icons</h4>
                  <p> Including the premium Icons Mind icon kit, Stack features a highly diverse set of icons suitable for all purposes. </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature feature-3 boxed boxed--lg boxed--border">
                  <img className="icon-n" src={ NewRecentPurchases } />
                  <h4>Modular Design</h4>
                  <p> Combine blocks from a range of categories to build pages that are rich in visual style and interactivity </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center imagebg" style={{ background: 'linear-gradient(to left, #b721ff,#21d4fd)'}} data-gradient-bg="#b721ff,#21d4fd,#21d4fd,#b721ff">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-lg-6">
                <div className="cta">
                  <a className="btn btn--primary btn--lg type--uppercase" href="#purchase-template">Lets talk</a>
                  <p className="lead"> Don't see your integration if you can help us understanding your requirements we can make it.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WebsiteIntegrations;
