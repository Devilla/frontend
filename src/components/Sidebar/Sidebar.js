import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Popup from 'react-popup';
import {
  Radio,
  Row,
  FormGroup,
  FormControl
} from 'react-bootstrap';
import HeaderLinks from '../Header/HeaderLinks';
import logo from '../../containers/DashboardContainer/asset/images/influence.png';
import { Glyphicon } from 'react-bootstrap';
import appRoutes from 'routes/app';
import './Sidebar.scss';


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    }
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  }

  renderHelp() {
    Popup.create({
      title: 'How can we help you today',
      content: <div className="help-container">
        <FormGroup>
          <Row className="help-form-fields">
            <Radio name="radioGroup" inline="inline">
              I need help setting up my team
              </Radio>
          </Row>
          <Row className="help-form-fields">
            <Radio name="radioGroup" inline="inline">
              I want to know how to use flock
              </Radio>
          </Row>
          <Row className="help-form-fields">
            <Radio name="radioGroup" inline="inline">
              Something is not working
              </Radio>
          </Row>
          <Row className="help-form-fields">
            <Radio name="radioGroup" inline="inline">
              I have feedback / feature request
              </Radio>
          </Row>
          <Row className="help-form-fields">
            <Radio name="radioGroup" inline="inline">
              I need help with something else
              </Radio>
          </Row>
        </FormGroup>
        <Row>
          <h4>Tell us more</h4>
          <textarea className="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Briefly explain what happened and steps to replicate the issue."></textarea>
        </Row>
      </div>,
      buttons: {
        left: [{
          text: 'Cancel',
          className: 'warning',
          action: function () {
            Popup.close();
          }
        }],
        right: [{
          text: 'Submit',
          className: 'primary',
          action: function () {
            Popup.close();
          }
        }]
      }
    }, true);
  }

  render() {
    const { disableButton } = this.props;
    return (

      <div className="left side-menu">
        <div>
          <div className="user-box">
            <h5></h5>
            <p clasName="text-muted"></p>
          </div>
          <div className="topbar-left mt-5">
            <Link to="/dashboard" class="logo ">
              <span>
                <img src={logo} alt="influence-img" height="35" />
              </span>
            </Link>
          </div>


          <div id="sidebar-menu">

            <Link to="/new"><button type="button" className="btn btn-primary  waves-effect waves-light ml-5 p-3 pt-0 pb-0 mb-4 w-lg "><i className="fi-file-add"></i>&nbsp; <span>New</span> </button></Link>

            <ul className="metismenu" id="side-menu">

              {this.state.width <= 991 ? (<HeaderLinks />) : null}
              {
                appRoutes.map((prop, key) => {
                  if (!prop.redirect)
                    return (
                      <li className={prop.upgrade ? "active newbtn" : this.activeRoute(prop.path)} key={key}>
                        {prop.name === 'Help' ?
                          <Link onClick={this.renderHelp} className={disableButton ? 'disabled-link' : "nav-link"} disabled={disableButton} activeClassName="active">
                            <i className={prop.icon}></i>
                            <span>{prop.upgrade}{prop.name}</span>
                          </Link>
                          :
                          <Link to={prop.path} className={prop.upgrade && disableButton ? "new disabled-link" : disableButton ? 'disabled-link' : prop.upgrade ? "new nav-link" : "nav-link"} disabled={disableButton} activeClassName="active">
                            {
                              prop.upgrade ? "" : <i className={prop.icon}></i>
                            }
                            <span>{prop.upgrade}{prop.name}</span>
                          </Link>
                        }
                      </li>
                    );
                  return null;
                })
              }


            </ul>

          </div>


          <div class="clearfix"></div>

        </div>


      </div>


    );
  }
}

export default Sidebar;
