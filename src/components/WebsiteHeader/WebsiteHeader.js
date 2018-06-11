
import { Component } from 'react';
import { LogoInfluence } from 'img';

class WebsiteHeader extends Component {
  render() {
    return (

      <div className="nav-container">
        <div>
          <div className="bar bar--sm visible-xs">
            <div className="container">
              <div className="row">
                <div className="col-3 col-md-2">
                  <Link to="/"> <img className="logo logo-light" alt="logo" src={LogoInfluence} /> </Link>
                </div>
                <div className="col-9 col-md-10 text-right">
                  <Link to="/" className="hamburger-toggle" data-toggle-class="#menu1;hidden-xs">
                    <i className="icon icon--sm stack-interface stack-menu"></i> </Link>
                </div>
              </div>
            </div>
          </div>


          <nav id="menu1" className="bar bar--sm bar-1 hidden-xs bar--transparent">
            <div className="container pr-0 pl-0">

              <div className="row">
                <div className="col-lg-2 col-md-3 hidden-xs pl-0 pr-0">
                  <div className="bar__module">
                    <Link to="/"> <img className="logo logo-light" alt="logo" src={LogoInfluence} /> </Link>
                  </div>
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
                    <Link className="btn btn--sm type--uppercase" to="/login"> <span className="btn__text">Login</span> </Link>
                    <Link className="btn btn--sm btn--primary type--uppercase" to="/signup"> <span className="btn__text">sign up</span> </Link>
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
