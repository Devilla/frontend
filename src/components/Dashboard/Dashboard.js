import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import StatsCard from './Stats'
import Website from './Website'
import Card from './Card';

import { Scrollbars } from 'react-custom-scrollbars';
import { fetchElastic } from 'ducks/elastic';
import { fetchCampaignInfo, successCampaign } from 'ducks/campaign';
import ReactChartJs from 'react-chartjs';
import './Dashboard.scss';

var LineChart = ReactChartJs.Line;

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      render: false,
      arrs: [],
    }
    this.handleRouteChange = this.handleRouteChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchCampaignInfo();
  }

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i}></i>);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  handleRouteChange(campaign) {
    this.props.successCampaign(campaign);
    browserHistory.push('/new');
  }

  getDataset() {
    if(this.props.campaignInfo && this.props.campaignInfo.uniqueUsers.length) {
      let dataSet = [];
      let dataContent = {
    			label: "My First dataset",
    			fillColor: "rgba(220,220,220,0.2)",
    			strokeColor: "rgba(220,220,220,1)",
    			pointColor: "rgba(220,220,220,1)",
    			pointStrokeColor: "#fff",
    			pointHighlightFill: "#fff",
    			pointHighlightStroke: "rgba(220,220,220,1)",
    			data: [0, 0, 0, 0, 0, 0, 0]
    		}
      this.props.campaignInfo.uniqueUsers.map(user => {
        user.aggregations.users.buckets.map(bucket => {
          dataContent['label'] = moment(bucket.key_as_string).format('LL');
          dataContent['data'][moment(bucket.key_as_string).day()] = bucket.visitors.sum_other_doc_count;
        });
        dataSet.push(dataContent);
      });
      return dataSet;
    } else {
      return [{
    			label: "",
    			fillColor: "rgba(220,220,220,0.2)",
    			strokeColor: "rgba(220,220,220,1)",
    			pointColor: "rgba(220,220,220,1)",
    			pointStrokeColor: "#fff",
    			pointHighlightFill: "#fff",
    			pointHighlightStroke: "rgba(220,220,220,1)",
    			data: [0, 0, 0, 0, 0, 0, 0]
    		}];
    }
  }

  render() {
    const { campaignInfo, successCampaign, profile } = this.props;

    var chartData = {
    	labels: moment.weekdays(),
    	datasets: this.getDataset()
    };

    var chartOptions = {
      responsive: true,

      maintainAspectRatio: false,

    	///Boolean - Whether grid lines are shown across the chart
    	scaleShowGridLines : true,

    	//String - Colour of the grid lines
    	scaleGridLineColor : "rgba(0,0,0,.05)",

    	//Number - Width of the grid lines
    	scaleGridLineWidth : 1,

    	//Boolean - Whether to show horizontal lines (except X axis)
    	scaleShowHorizontalLines: true,

    	//Boolean - Whether to show vertical lines (except Y axis)
    	scaleShowVerticalLines: true,

    	//Boolean - Whether the line is curved between points
    	bezierCurve : true,

    	//Number - Tension of the bezier curve between points
    	bezierCurveTension : 0.4,

    	//Boolean - Whether to show a dot for each point
    	pointDot : true,

    	//Number - Radius of each point dot in pixels
    	pointDotRadius : 4,

    	//Number - Pixel width of point dot stroke
    	pointDotStrokeWidth : 1,

    	//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    	pointHitDetectionRadius : 20,

    	//Boolean - Whether to show a stroke for datasets
    	datasetStroke : true,

    	//Number - Pixel width of dataset stroke
    	datasetStrokeWidth : 2,

    	//Boolean - Whether to horizontally center the label and point dot inside the grid
    	offsetGridLines : false
    };

    let userSignUps = 0;

    if(campaignInfo) {
      campaignInfo.websiteLive.map(website => {
        let users = website.signups && website.signups.userDetails?website.signups.userDetails.length:0;
        userSignUps = userSignUps + users;
      });
    }

    return (
      <div className="content">
        <div className="container-fluid">
          <Row className="dashboard-boxes">
            <Col md={12}>
              <div className="card-box pb-0 mb-0">
                <h4 className="header-title mb-4">Account Usage Overview</h4>
                <hr/>
                <Row className="account-stats">
                  <div className="col-sm-12 col-lg-6 col-xl-3 box ">
                    <div>
                      <div className="text-center mt-4 mb-4">

                        <div className="col-md-12 h-50">
                          <div className=" widget-flat card-box  text-muted pr-4 pl-4 pb-5 pt-2 pos-vertical-center">

                            <p className="text-uppercase title m-b-5 font-13 font-600">Active Campaigns</p>

                            <h3 className="m-b-10 campaign">{campaignInfo? campaignInfo.websiteLive.length : []}</h3>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-lg-6 col-xl-3 box ">
                    <div>
                      <div className="text-center mt-4 mb-4">

                        <div className="col-md-12 h-50">
                          <div className=" widget-flat card-box  text-muted pr-4 pl-4 pb-5 pt-2 pos-vertical-center">

                            <p className="text-uppercase title m-b-5 font-13 font-600">Unique Visitors</p>

                            <h3 className="m-b-10 profile">{profile? Number(profile.uniqueVisitors) :0 }</h3>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-lg-6 col-xl-3 box ">
                    <div>
                      <div className="text-center mt-4 mb-4">

                        <div className="col-md-12 h-50">
                          <div className=" widget-flat card-box  text-muted pr-4 pl-4 pb-5 pt-2 pos-vertical-center">

                            <p className="text-uppercase title m-b-5 font-13 font-600">Total Notifications</p>

                            <h3 className="m-b-10 notify">{campaignInfo ? campaignInfo.notificationCount : 0}</h3>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-lg-6 col-xl-3 box">
                    <div>
                      <div className="text-center mt-4 mb-4">

                        <div className="col-md-12 h-50">
                          <div className="  widget-flat card-box  text-muted pr-4 pl-4 pb-5 pt-2 pos-vertical-center">

                            <p className="text-uppercase title m-b-5 font-13 font-600">Total Signups</p>

                            <h3 className="m-b-10 usersignup">{userSignUps}</h3>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="card-box">
                <hr/>
                <Row>
                  <Col lg={12}>
                    <Card title="Active Campaigns" category="" content={<div className = "table-full-width" > <Scrollbars style={{
                          height: 150
                        }}>
                        <table className="table">
                          <Website data={campaignInfo?campaignInfo.websiteLive:[]} handleRouteChange={this.handleRouteChange} render={campaignInfo?true:false}/>
                        </table>
                      </Scrollbars>
                    </div>}/>
                  </Col>
                  <Col md={4}>
                    <div className=" pull-right">
                      <select className="form-control text-muted" onChange={(e) =>  this.setState({daysClicked:e.target.value})}>
                        <option key={7} value={'7'}>
                          7 days
                        </option>
                        <option key={14} value={'14'} >
                            14 days
                        </option>
                        <option key={28} value={'28'} >
                            28 days
                        </option>
                        <option key={'today'+1} value={'Today'} >
                            Today
                        </option>
                        <option key={'yesterday'+1} value={'Yesterd ay'} >
                            Yesterday
                        </option>
                      </select>
                    </div>
                    <div className="clearfix"></div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} sm={12}>
                    <StatsCard statsClass="card card-stats  eqheight" statsText="Notifications Shown" statsValue={campaignInfo?campaignInfo.notificationCount:0}/>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Col md={6}>
            <Row>
              <Col lg={12}>
                <Card
                  statsIcon="fa fa-history"
                  id="chartHours"
                  title="Website Traffic this week"
                  category="24 Hours performance"
                  stats="Updated 3 minutes ago"
                  content={
                    <div className = "ct-chart">
                      <LineChart data={chartData} options={chartOptions} height="250" redraw/>
                    </div>
                  }
                />
              </Col>
            </Row>
          </Col>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  elastic: state.getIn(['elastic', 'elastic']),
  profile: state.getIn(['profile', 'profile']),
  campaignInfo: state.getIn(['campaign', 'campaignInfo']),
});

const mapDispatchToProps = {
  fetchElastic,
  successCampaign,
  fetchCampaignInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
