
import React, { Component } from 'react';
import { Link } from 'react-router';
import { LogoInfluence } from 'img';
import  './WebsiteHeader.scss';
class WebsiteHeader extends Component {



  render() {
   
    return (
      <div className="websiteheader-container">
        <div className="nav-container">
          <div>
            <div className="mainlogo">
              <Link to="/"> <img className="logo " alt="logo" src={LogoInfluence} href="/"/> </Link>
            </div>
            <div className="bar bar--sm small-bar">
            </div>
            <div  className="hamburger-toggle">
              <i className="fa fa-bars"></i>
            </div>
            
          
            <nav  className={'bar bar--sm bar-1 hidden-xs bar--transparent'}>
              <div className="container pr-0 pl-0">

                <div className="row">
                  <div className="col-lg-2 col-md-3  pl-0 pr-0">
             
                  </div>
                  <div className="col-sm-0 pl-0 pr-0"></div>
                  <div className="col-lg-10 col-md-11 text-right pr-0 pl-0 text-left-xs text-left-sm">
                    <div className="bar__module ">
                      <ul className="menu-horizontal text-left">
                        <li> <Link to="/how-it-works">How it works</Link> </li>
                        <li> <Link to="/pricing">PRICING</Link> </li>
                        <li> <a href="https://blog.useinfluence.co/" target="_blank" >BLOG</a></li>
                      </ul>
                    </div>
                    <div className="bar__module ml-1">
                      <Link className="btn btn--sm type--uppercase loginbtn" to="/login"> <span className="btn__text ">Login</span> </Link>
                      <Link className="btn btn--sm btn--primary type--uppercase signupbtn" to="/signup"> <span className="btn__text ">sign up</span> </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            
          </div>
        </div>
      </div>
    );
  }
}

export default WebsiteHeader;
