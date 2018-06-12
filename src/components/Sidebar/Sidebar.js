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
import logo from 'assets/img/logo.png';
import { Glyphicon } from 'react-bootstrap';
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

    render(){
      const { disableButton } = this.props;
      return (
        <div id="wrapper">
        <div className="left side-menu">
        <div>
         <div className="topbar-left">
                        <Link to="/dashboard" class="logo">
                            <span>
                                <img src="assets/images/influence.png" alt="" height="35" />
                            </span>
                        </Link>
                    </div>
                    <div className="user-box">
                        <h5></h5>
                        <p clasName="text-muted"></p>
                    </div>
                
                    <div id="sidebar-menu">

                         <button type="button" className="btn btn-pink  waves-effect waves-light ml-5 mb-4 w-lg "> <span>+ New</span> </button>

                        <ul className="metismenu" id="side-menu">

                            <li>
                                <Link to="/dashboard">
                                    <i className="fi-air-play"></i> <span> Dashboard </span>
                                </Link>
                            </li>

                            <li>
                                <Link to="javascript: void(0);"><i className="fi-layers"></i> <span> Campaigns </span> </Link>
                                
                            </li>

                           
                            <li>
                                <Link to ="javascript: void(0);"><i className="fi-bar-graph-2"></i><span> Analytics </span> </Link>
                                
                            </li>


                            <li>
                                <Link to="/dashboard">
                                    <i className="fi-command"></i> <span> Integrations </span>
                                </Link>
                            </li>

                            

                            <li className="menu-title">More</li>

                            <li>
                                <Link to="javascript: void(0);"><i className="fi-location-2"></i> <span> Beta Features </span> <span class="menu-arrow"></span></Link>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li><Link to="/dashboard">Live Stream</Link></li>
                                    
                                </ul>
                            </li>

                            

                        </ul>

                    </div>
               

                    <div class="clearfix"></div>

                </div>
       

            </div>
       
         </div>
      );
    }
}

export default Sidebar;
