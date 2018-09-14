import React, { Component } from 'react';
import { Link } from 'react-router';
import { LogoInfluence } from 'img';
import  './WebsiteHeader.scss';

class WebsiteHeader extends Component {
  constructor() {
    super();
    this.state= {
      toggleicon: '',
      togglebool :  true,
      hoverproduct : false
    };
  }

  togglemenu = () => {
    this.state.togglebool ? (
      this.setState((prevState)=> ({
        toggleicon: 'customtoggleclass',
        togglebool:  !prevState.togglebool
      }))
    ): (
      this.setState((prevState)=> ({
        toggleicon: '',
        togglebool:  !prevState.togglebool
      }))
    );
  }

  onMouseHoverEvent = () => {
    if(this.state.hoverproduct==false) {
      this.setState({hoverproduct:true});
    }
  }

  onMouseOutEvent = () => {
    if(this.state.hoverproduct==true) {
      this.setState({hoverproduct:false});
    }
  }

  close = () => {
    this.setState({
      toggleicon: '',
      togglebool:  false
    });
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
    let { toggleicon, hoverproduct } = this.state;
    const { loggedIn } = this.props;
    return (
      <div className="websiteheader-container" ref={node => this.node = node} onMouseLeave={ this.onMouseOutEvent }>
        <div className="nav-container">
          <div>
            <div className="mainlogo" onMouseOver={ this.onMouseOutEvent }>
              <Link to="/" className={loggedIn?'disabled-link':''}> <img className="logo " alt="logo" src={LogoInfluence} href="/"/> </Link>
            </div>
            <div className="bar bar--sm small-bar sm-bar">
            </div>
            <div  id="hello" className={'hamburger-toggle '+ toggleicon } tabIndex="0" onClick={this.togglemenu} onMouseOver={ this.onMouseOutEvent } >
              <i className="fa fa-bars" ></i>
              <button className="cross"><i className="fa fa-close"></i></button>
            </div>

            <div className='container pr-0 pl-0 bar bar--sm bar-1 hidden-xs  bar--transparent'>

              <div className="row">
                <div className="col-lg-2 col-md-3  pl-0 pr-0">

                </div>
                <div className="col-sm-0 pl-0 pr-0"></div>
                {!loggedIn ?
                  <div className="nav-content col-lg-10 col-md-11 text-right pr-0 pl-0" >
                    <div className="bar__module links">
                      <ul className="menu-horizontal text-left nav-content-links" tabIndex="1">
                        <li className='dropdown dropdown--active' onMouseOver={ this.onMouseHoverEvent } >
                          <span className="dropdown__trigger">Product</span>
                          <div className="dropdown__container" style={{ display: hoverproduct?'block':'none', top: '30px'}}>
                            <div className="container">
                              <div className="row">
                                <div className="dropdown__content">
                                  <ul className="menu-vertical">
                                    <li className="menu-items">
                                      <Link to="/featurepage"><span>Features</span></Link>
                                    </li>
                                    <li className="menu-items">
                                      <Link to="/how-it-works"><span >How It Works</span></Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li onClick={this.close} onMouseOver={ this.onMouseOutEvent }> <Link to="/pricing">PRICING</Link> </li>
                        <li onClick={this.close} onMouseOver={ this.onMouseOutEvent }> <a href="https://blog.useinfluence.co/" target="_blank">BLOG</a></li>
                      </ul>
                    </div>
                    <div className="bar__module btns ">
                      <Link onClick={this.close} className="btn btn--sm type--uppercase loginbtn" to="/login"> <span className="btn__text ">Login</span> </Link>
                      <Link onClick = {this.close} className="btn btn--sm btn--primary type--uppercase signupbtn" to="/signup"> <span className="btn__text ">sign up</span> </Link>
                    </div>
                  </div>
                  :
                  <div className="nav-content col-lg-10 col-md-11 text-right pr-0 pl-0">
                    <div className="bar__module btns ">
                      <Link onClick={() => { this.props.logout(); this.close(); }} className="btn btn--sm type--uppercase loginbtn" to="/dashboard"> <span className="btn__text ">Logout</span> </Link>
                    </div>
                  </div>
                }
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
}

export default WebsiteHeader;
