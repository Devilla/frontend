import React, { Component } from 'react';
import {
  Grid, Row, Col, Button, Glyphicon, FormGroup,
  ControlLabel, FormControl
} from 'react-bootstrap';
import { Animated } from "react-animated-css";
import {browserHistory} from 'react-router';
import { connect } from 'react-redux';
import './Upgrade.css';

import CardHeader from 'components/Template/card-with-header'
import FormInputs from 'components/Template/FormTemp';
import { ToastContainer, toast } from 'react-toastify';
import Label from 'react-flexible-switch/lib/Label';
import Switch from 'react-flexible-switch';
import Footer from '../_common/Footer';
import PaymentPage from '../LoginFlow/PaymentPage';
import PricePage from 'components/PricePage';
import { Elements, injectStripe } from 'react-stripe-elements';
import axios from 'axios';

export default class Upgrade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,

    };
  }

  handleCheckChange(checked, value, state) {
    this.setState({plan: checked?value:null})
  }

  renderPlan() {
    const { planList, selectedPlan, handleCheckChange } = this.props;
    return planList?planList.map(plans => {

      
      return <div className="card" style={{ width: '50%', padding: '5%', margin: '0 1%'}}>
        <div className="card-body">
          <h5 className="card-title">{plans.planName}</h5>
          <span className="card-text">
            {plans.planType}
          </span>
          <p className="card-text">
            <h5>{this.returnRates(plans.amount)}</h5>
          </p>
          <input
            type="radio"
            value={plans._id}
            checked={
              plans._id == selectedPlan ?
                "checked"
              :
                false
              }
            id="plan"
            name="plan"
            onChange={(e) => handleCheckChange(e.target, e.target.value)}
          />
        </div>
      </div>
      })
    :
      <div>No Plan to select</div>
  }
  render() {
    // const { planList, selectedPlan, handleCheckChange } = this.props;
    const { plan, selectedPlan, planList, stripeError, handleCheckChange, handleStateChange, handleSubmit,renderPlan } = this.props;
    return (
      <div className="content fill ">
        <Grid fluid="fluid">
          <Row className="inlineclr">
            <Col md={30}>
              <CardHeader title="Upgrade Your current plan" content={
                <div> 
                  <div className="frmcntl" style={{display: 'flex', color:'white', justifyContent: 'center', width: '90%', paddingBottom: '25px',paddingLeft:'200px'}}>
                    <PricePage
                      paymentPage={true}
                      selectedPlan={selectedPlan}
                      handleCheckChange={handleCheckChange}
                    />
                  </div>
                  <Row id="togglemy" style={{paddingLeft:'200px'}}>
                  <Col md={1} id="leftmg"><div><strong>Monthly</strong></div></Col>
                <Col md={1}>  <div className="notification-toggle">
                    <Switch
                      circleStyles={{ onColor: 'green', offColor: 'blue', diameter: 18 }}
                      switchStyles={{ width: 50 }}
                      cssClass="alignCenter"
                      value=""
                    // onChange={(e) => e != notification.activity ? handleActivityChange(e, notification._id, notification.configurationId) : null}
                    />
                  </div>
                  </Col>
                  <Col md={1}>
                  <div><strong>Yearly</strong></div>
                  </Col>
                </Row>
                <div id="Footer"><p>Note : We use prorating process for subscriptions.<a href="#">Learn More</a></p></div>
                <div  className="Previous"> <Button onClick={()=> browserHistory.push('/Profile')}
                      pullLeft
                      fill
                      type="button"
                      icon="arrow-left"
                      >
                        Previous
                    </Button>
                    </div>
                </div>
              } />
            </Col>
          </Row>
        </Grid>
        <ToastContainer hideProgressBar={true} />
      </div>
    )
  }
}

