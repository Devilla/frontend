import React, { Component } from 'react';
import { Link } from "react-router";
import { LogoInfluence } from 'img';

class WebsiteHeader extends Component {
  render() {
    return (
        <div className="nav-container">
            <div className="via-1525204262136" via="via-1525204262136" vio="Influencenav">
                <div className="bar bar--sm visible-xs">
                    <div className="container">
                        <div className="row">
                            <div className="col-3 col-md-2">
                                <Link to="/"> <img className="logo logo-light" alt="logo" src={ LogoInfluence } /> </Link>
                            </div>
                            <div className="col-9 col-md-10 text-right">
                                <Link to="/" className="hamburger-toggle" data-toggle-class="#menu1;hidden-xs hidden-sm"> <i className="icon icon--sm stack-interface stack-menu"></i> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <nav id="menu1" className="bar bar-1 hidden-xs bar--absolute bar--transparent">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-md-2 hidden-xs">
                                <div className="bar__module">
                                    <Link to="/"> <img className="logo logo-light" alt="logo" src={ LogoInfluence } /> </Link>
                                </div>
                            </div>
                            <div className="col-lg-11 text-right text-left-xs text-left-sm">
                                <div className="bar__module">
                                    <ul className="menu-horizontal text-left">
                                        <li> <Link to="how.html">How it works</Link> </li>
                                        <li> <Link to="integrations.html">INTEGRATIONS</Link> </li>
                                        <li> <Link to="pricing.html">PRICING</Link> </li>
                                        <li className="dropdown"> <span className="dropdown__trigger">ABOUT US</span>
                                            <div className="dropdown__container">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="dropdown__content col-lg-2">
                                                            <ul className="menu-vertical">
                                                                <li> <Link to="/">Single Link</Link> </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bar__module">
                                    <Link className="btn btn--sm type--uppercase" to="customise-template"> <span className="btn__text">Login</span> </Link>
                                    <Link className="btn btn--sm btn--primary type--uppercase" to="purchase-template"> <span className="btn__text">sign up</span> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    );
  }
}

export default WebsiteHeader;
