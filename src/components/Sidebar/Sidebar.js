import React, { Component } from 'react';
import logo from 'assets/img/logo.png';
import appRoutes from 'routes/app';
import { browserHistory } from 'react-router';
import HeaderLinks from '../Header/HeaderLinks';
import { Link } from 'react-router';
import { Glyphicon } from 'react-bootstrap';
import './Sidebar.scss';


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  }

  render() {
    const { disableButton } = this.props;
    return (
      <div id="sidebar" className="sidebar" data-color="gray">
        <div className="logo" style={{ cursor: 'pointer' }} onClick={() => browserHistory.push('/dashboard')}>
          <img src={logo} alt="logo_image" />
        </div>



        <div className="sidebar-wrapper">
          <ul className="nav">


            {this.state.width <= 991 ? (<HeaderLinks />) : null}
            {
              appRoutes.map((prop, key) => {
                if (!prop.redirect)
                  return (
                    <li className={prop.upgrade ? 'active  newbtn' : this.activeRoute(prop.path)} key={key}>
                      <Link to={prop.path} className={prop.upgrade && disableButton ? 'new disabled-link' : disableButton ? 'disabled-link' : prop.upgrade ? 'new nav-link' : 'nav-link'} disabled={disableButton} activeClassName="active">
                        {
                          prop.upgrade ? '' : <i className={prop.icon}></i>
                        }
                        <p>{prop.upgrade && <Glyphicon glyph="plus" />}{prop.name}</p>
                      </Link>
                    </li>
                  );
                return null;
              })
            }
            <Link to="/help" ><Help /></Link>
          </ul>
        </div>
        <div >

        </div>
      </div>
    );
  }
}

export default Sidebar;
