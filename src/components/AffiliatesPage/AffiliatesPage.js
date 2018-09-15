import React, {Component} from 'react';
import copy from 'copy-to-clipboard';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import {
  Row,
  Col
} from 'react-bootstrap';
import './AffiliatesPage.scss';


const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};

class AffiliatesPage extends Component {

  componentWillMount () {
    
  }


  handleReferralUrlCopy = (campaign) => {
    copy(campaign?campaign.trackingId:'INF-XXXXXXX', {
      debug: true
    });
    return toast('Tracking ID copied', toastConfig);
  }

  

  render() {
    console.log(this.props);
    return (
      <div className="m-5">
        <Row className="pt-3">
          <Col md={6} className="">
            <div className="m-1">
              <div className="affiliates-heading"> Affiliates Program</div>
              <div className="affiliates-sub-heading"> Earn <span className="bold-text">&nbsp; 30% monthly commission &nbsp;</span> for every paying customer referred by your unique link</div>
            </div>
          </Col>
          <Col md={6}> 
            <div>
              <div className="copy-url">
                <button className="btn btn-primary mt-3">Copy </button>
                <div className="row ml-1" style={{width: '75%'}}><div className="mt-3 col-md-12 url-field">Unique URL</div></div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="affiliatespage-performance mt-5">
              <div className="performance-heading mb-2 mt-2">Your Performance</div> <hr/>
              <div className="row">
                <div className="col-md-3 performance-text">
                  <h3 className="performance-text-1"> 23 </h3>
                  <div className="performance-text-2  m-3"> Total Signups</div>
                </div>
                <div className="col-md-3">
                  <h3 className="performance-text-1"> 23 </h3>
                  <div className="performance-text-2 m-3"> Paying Accounts</div>
                </div>
                <div className="col-md-3">
                  <h3 className="performance-text-1"> 23 </h3>
                  <div className="performance-text-2 m-3"> Monthly Revenue</div>
                </div>
                <div className="col-md-3">
                  <h3 className="performance-text-1"> 23 </h3>
                  <div className="performance-text-2 m-3"> Total Paid</div>
                </div>                
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="affiliatespage-performance mt-5">
              <div className=" mb-2 mt-2 perf-head">
                <div className="performance-heading">  Your Payouts </div>
                <div className="msg-icon1 mr-1"><i className="fa fa-clock-o"></i> Processing time: 24 hours</div>
                <div className="msg-icon2 mr-1"><i className="fa fa-credit-card"></i> Minimum payout: $25</div>
              </div> 
              <hr/>
              <div className="row">
                <div className="payout-amt">
                  <h3 className="performance-text-1"> $23 </h3>
                  <div className="performance-text-2  m-3"> Balance</div>
                </div>
                <div className=" payout-fields">
                  <h3 className="performance-text-1"> 23 </h3>
                  <div className="performance-text-2 m-3"> Paying Accounts</div>
                </div>               
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = {

};

const mapStateToProps = state => ({
  loading: state.getIn(['loading', 'state']),
  campaigns: state.getIn(['campaign', 'campaigns'])
});


export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(AffiliatesPage);
