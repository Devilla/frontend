import React, { Component } from 'react';
import { Gdpr } from 'img';
import { Link } from 'react-router';
import './WebsiteFooter.scss';

class WebsiteFooter extends Component {
  render() {
    return (
      <div className="websitefooter-container">
        {!this.props.loggedIn &&
          <div className="main-container">
            <footer className="footer-6 pb-5">
              <div className="container mt-1 footer__upper">
                <div className="row">
                  <div className="menu-vertical col-md-3 col-sm-6 foot2">
                    <ul className="bar__module">
                      <li className="type--uppercase col-sm-12 col-md-12 h5 foo-t2"><Link to=""> <b>Product</b> </Link></li>
                      <li className="type--uppercase col-sm-12 col-md-12 h6"><Link to="/how-it-works"> How It Works </Link></li>
                      <li className="type--uppercase col-sm-12 col-md-12 h6"><Link to="/pricing"> Pricing </Link></li>
                      <li className="type--uppercase col-sm-12 col-md-12 h6"><Link to="/signup"> Signup </Link></li>
                      <li className="type--uppercase col-sm-12 col-md-12 h6"><Link to="/login"> Login (Already a user?) </Link></li>
                      <li className="type--uppercase col-sm-12 col-md-12 h6"><Link to="/demopage"> SCHEDULE A DEMO </Link></li>
                      <li className="type--uppercase col-sm-12 col-md-12 h6"><Link to="/featurepage">Features</Link></li>
                      <li className="type--uppercase col-sm-12 col-md-12 h6"> <Link to="/integration" target='_blank'>INTEGRATIONS</Link> </li>
                    </ul>
                  </div>

                  <div className="menu-vertical col-md-3 col-sm-6 foot1">
                    <ul className="bar__module">
                      <li className="type--uppercase col-sm-12 col-md-12 h5 foo-t1"><Link className="footer-menu-link" to=""> <b>Company</b></Link></li>
                      <li className="type--uppercase col-sm-12 col-md-12 h6"><Link className="footer-menu-link" to="/about"> About Us </Link> </li>
                      <li className="type--uppercase col-sm-12 col-md-12 h6"><Link className="footer-menu-link" to="/terms-and-condtions"> Terms &amp; Conditions </Link></li>
                      <li className="type--uppercase col-sm-12 col-md-12 h6"><Link className="footer-menu-link" to="/privacy-policy"> Privacy Policy </Link></li>
                    </ul>
                  </div>


                  <div className="menu-vertical col-md-3 col-sm-6 foot3">
                    <ul>
                      <li className="type--uppercase col-sm-12 col-md-12 h5 foo-t3"><Link to=""> <b>Resources</b> </Link></li>
                      <li className="type--uppercase col-sm-12 col-md-12 h6"><Link href="https://useinfluence.freshdesk.com/support/home" target='_blank'> FAQs </Link></li>
                      <li className="type--uppercase col-sm-12 col-md-12 h6"><Link href="https://blog.useinfluence.co/"> Blog </Link></li>
                      <li className="type--uppercase col-sm-12 col-md-12 h6"><Link href="https://angel.co/influence-8/jobs" target='_blank'> Careers </Link> </li>
                      <li className="type--uppercase col-sm-12 col-md-12 h6"><Link to="/contact"> Contact Us </Link></li>
                    </ul>
                  </div>

                  <div className="menu-vertical col-md-3  col-sm-6 text-center foot4">
                    <ul>
                      <Link to="/privacy-policy"> <img alt="GDPR" src={Gdpr} width="100px" height="100px" className="mr-3" /></Link>
                    </ul>
                  </div>
                </div>
              </div>
              <p> <br /></p>
              <div className="footer__lower text-center-xs unpad--bottom">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6"> <span className="type--fine-print">© <span className="update-year">2018 Influence&nbsp;</span>&nbsp; All Rights Reserved</span>
                    </div>
                    <div className="col-sm-6 text-right text-center-xs">
                      <ul className="social-list list-inline">
                        <li><Link href="https://www.facebook.com/groups/215429202366620/" target="_blank"><i className="socicon socicon-facebook bg--facebook icon icon--xs"></i></Link></li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        }
      </div>
    );
  }
}

export default WebsiteFooter;
