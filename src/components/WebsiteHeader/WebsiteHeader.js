
import React, { Component } from 'react';
import { Link } from 'react-router';
import { LogoInfluence } from 'img';
import  './WebsiteHeader.scss';
class WebsiteHeader extends Component {

  togglemenu = () => {
    document.getElementById('hello').classList.toggle('customtoggleclass');
  }
  close = () => {
    document.getElementById('hello').classList.remove('customtoggleclass');
  }

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
            <div  id="hello" className="hamburger-toggle" tabIndex="0" onClick={this.togglemenu}  >
              <i className="fa fa-bars" ></i>
              <button className="cross"><i className="fa fa-close"></i></button>
            </div>
            
          
            <nav  id="menu1" className='bar bar--sm bar-1 hidden-xs  bar--transparent'>
              <div className="container pr-0 pl-0">

                <div className="row">
                  <div className="col-lg-2 col-md-3  pl-0 pr-0">
             
                  </div>
                  <div className="col-sm-0 pl-0 pr-0"></div>
                  <div className="nav-content col-lg-10 col-md-11 text-right pr-0 pl-0">
                    <div className="bar__module ">
                      <ul className="menu-horizontal text-left nav-content-links" tabIndex="1">
                        <li onClick={this.close}> <Link to="/how-it-works">How it works</Link> </li>
                        <li onClick={this.close}> <Link to="/pricing">PRICING</Link> </li>
                        <li onClick={this.close}> <a href="https://blog.useinfluence.co/" target="_blank" >BLOG</a></li>
                      </ul>
                    </div>
                    <div className="bar__module ml-1">
                      <Link onClick={this.close} className="btn btn--sm type--uppercase loginbtn" to="/login"> <span className="btn__text ">Login</span> </Link>
                      <Link onClick = {this.close} className="btn btn--sm btn--primary type--uppercase signupbtn" to="/signup"> <span className="btn__text ">sign up</span> </Link>
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
