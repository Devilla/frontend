import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import HeaderLinks from '../Header/HeaderLinks';
import logo from 'assets/img/logo.png';
import { Glyphicon } from 'react-bootstrap';
import Help from '../Billing/Help';
import appRoutes from 'routes/app';
import './Sidebar.scss';

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth
        }
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
    }

    // updateDimensions(){
    //     this.setState({width:window.innerWidth});
    // }

    componentDidMount() {
        // this.updateDimensions();
        // window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    render(){
      const { disableButton } = this.props;
      return (
        <div id="sidebar" className="sidebar" data-color="gray">
          <div className="logo" style={{cursor: 'pointer'}} onClick={() => browserHistory.push('/dashboard')}>
            <img src={logo} alt="logo_image"/>
          </div>

      

          <div className="sidebar-wrapper">
            <ul className="nav">

           
              { this.state.width <= 991 ? (<HeaderLinks />):null }
              {
                appRoutes.map((prop,key) => {
                  if(!prop.redirect)
                    return (
                      <li className={prop.upgrade ? "active  newbtn":this.activeRoute(prop.path)} key={key}>
                        <Link to={prop.path} className={prop.upgrade && disableButton ? "new disabled-link" : disableButton ? 'disabled-link' : prop.upgrade ? "new nav-link" :  "nav-link"} disabled={disableButton} activeClassName="active">
                          {
                            prop.upgrade ? "" : <i className={prop.icon}></i>
                          }
                          <p>{prop.upgrade && <Glyphicon glyph="plus" />}{prop.name}</p>
                        </Link>
                      </li>
                    );
                  return null;
                })
              }
             
            </ul>
          </div>
          <div >

          </div>
        </div>
      );
    }
}

export default Sidebar;
