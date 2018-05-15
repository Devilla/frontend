import React, { Component } from 'react';
import { Link } from "react-router";
// import { LogoInfluence } from 'img';
// import { Link } from "react-router-dom";
// import logo from './logo.svg';
// import './WebsiteFooter.css';

class WebsiteFooter extends Component {
  render() {
    return (
      <div className="main-container">
        <footer className="footer-6 unpad--bottom">
                <div className="container">
                    <div className="row">
                        <div className="menu-vertical col-md-3">
                            <ul className="bar__module">
                            <li className="type--uppercase col-sm-4 col-md-2 h5"><Link to="/"> Company</Link></li>
                            <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/"> About Us </Link> </li>
                            <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/"> Terms &amp; Conditions </Link></li>
                            <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/"> Privacy Policy </Link></li>

                        </ul>
                        </div>
                        <div className="menu-vertical col-md-3">
                            <ul className="bar__module">
                            <li className="type--uppercase col-sm-4 col-md-2 h5"><Link to="/"> Product </Link></li>
                            <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/"> How It Works </Link></li>
                            <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/"> Pricing </Link></li>
                            <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/"> Features </Link></li>
                            <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/"> Signup </Link></li>
                        </ul>
                        </div>

                        <div className="menu-vertical col-md-3">
                            <ul>
                            <li className="type--uppercase col-sm-4 col-md-2 h5"><Link to="/"> Resources </Link></li>
                            <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/"> FAQs </Link></li>
                            <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/"> Help Center </Link></li>
                            <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/"> Blog </Link></li>
                            <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/"> Careers </Link> </li>
                            <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/"> Contact Us </Link></li>
                        </ul>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <h6 className="type--uppercase">Newsletter</h6>
                            <form action="//mrare.us8.list-manage.com/subscribe/post?u=77142ece814d3cff52058a51f&amp;id=f300c9cce8" data-success="Thanks for signing up.  Please check your inbox for a confirmation email." data-error="Please provide your email address."> <input className="validate-required validate-email" type="text" name="EMAIL" placeholder="Email Address" /> <button type="submit" className="btn btn--primary type--uppercase">Subscribe</button>
                                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"> <input type="text" name="b_77142ece814d3cff52058a51f_f300c9cce8" tabindex="-1" value="" /> </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer__lower text-center-xs unpad--bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6"> <span className="type--fine-print">© <span className="update-year">2018 Influence&nbsp;</span>&nbsp;— All Rights Reserved</span>
                            </div>
                            <div className="col-sm-6 text-right text-center-xs">
                                <ul className="social-list list-inline">
                                    <li><Link to="/"><i className="socicon socicon-google icon icon--xs"></i></Link></li>
                                    <li><Link to="/"><i className="socicon socicon-twitter icon icon--xs"></i></Link></li>
                                    <li><Link to="/"><i className="socicon socicon-facebook icon icon--xs"></i></Link></li>
                                    <li><Link to="/"><i className="socicon socicon-instagram icon icon--xs"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
      </div>
    );
  }
}

export default WebsiteFooter;
