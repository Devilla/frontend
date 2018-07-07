
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



  handleScroll = () => {
    let navnode = this.node;
    let sticky = navnode.offsetTop;
    (window.pageYOffset >  sticky) ? (
      navnode.classList.add('sticky')
    ):(
      navnode.classList.remove('sticky')
    );
  
  }
  componentDidMount() {
    document.addEventListener('scroll',this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll',this.handleScroll);
  }

  render() {
   
    return (
      <div className="websiteheader-container " ref={node => this.node = node}>
        <div className="nav-container">
          <div>
            <div className="mainlogo">
              <Link to="/"> <img className="logo " alt="logo" src={LogoInfluence} href="/"/> </Link>
            </div>

            <div  id="hello" className="hamburger-toggle" tabIndex="0" onClick={this.togglemenu}  >
              <i className="fa fa-bars" ></i>
              <button className="cross"><i className="fa fa-close"></i></button>
            </div>

            <div className="container pr-0 hidden-xs pl-0">
              <div className="row">
                <div className="nav-content">
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

            
          </div>
        </div>
      </div>
    );
  }
}

export default WebsiteHeader;
