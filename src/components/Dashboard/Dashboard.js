import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { fetchCampaignInfo, successCampaign } from 'ducks/campaign';
import './Dashboard.scss';
import Card from './Card';
import ReactChartJs from 'react-chartjs';

var LineChart = ReactChartJs.Line;
let moment = extendMoment(Moment);

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      render: false,
      arrs: [],
      daysClicked: ''
    };
    this.handleRouteChange = this.handleRouteChange.bind(this);
  }
  componentWillMount() {
    this.props.fetchCampaignInfo();
  }
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json['names'].length; i++) {
      var type = 'fa fa-circle text-' + json['types'][i];
      legend.push(<i className={type} key={i}></i>);
      legend.push(' ');
      legend.push(json['names'][i]);
    }
    return legend;
  }

  handleRouteChange(campaign) {
    this.props.successCampaign(campaign);
    browserHistory.push('/new');
  }

  getDataset() {
    if (this.props.campaignInfo && this.props.campaignInfo.uniqueUsers.length) {
      let dataSet = [];
      let dataContent = {
        label: 'My First dataset',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [0, 0, 0, 0, 0, 0, 0]
      };
      this.props.campaignInfo.uniqueUsers.map(user => {
        console.log(user);
        (user && user.aggregations) ? user.aggregations.users.buckets.map(bucket => {
          dataContent['label'] = Moment(bucket.key_as_string).format('LL');
          dataContent['data'][Moment(bucket.key_as_string).day()] = bucket.visitors.sum_other_doc_count;
        }) : '';
        dataSet.push(dataContent);
      });
      return dataSet;
    } else {
      return [{
        label: '',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [0, 0, 0, 0, 0, 0, 0]
      }];
    }
  }

  getDays = () => {
    let start, end , range1, acc  ;
    switch(this.state.daysClicked)  {
      case '7' :
        start  = moment().subtract(7,'d').format('YYYY-MM-DD');
        end    = new Date();
        range1 = moment.range(start, end);
        acc = Array.from(range1.by('day', { step: 1 }));
        acc = acc.map(m => m.format('DD MMM'));
        break;


      case '14' :
        start  = moment().subtract(14,'d').format('YYYY-MM-DD');
        end    = new Date();
        range1 = moment.range(start, end);
        acc = Array.from(range1.by('day', { step: 2 }));
        acc = acc.map(m => m.format('DD MMM'));
        break;

      case '28' :
        start  = moment().subtract(28,'d').format('YYYY-MM-DD');
        end    = new Date();
        range1 = moment.range(start, end);
        acc = Array.from(range1.by('day', { step: 4 }));
        acc = acc.map(m => m.format('DD MMM'));
        break;

      case 'Today' :
        start  = moment().startOf('day').format('YYYY-MM-DD HH:mm:ss');
        end    = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss');

        range1 = moment.range(start, end);
        acc = Array.from(range1.by('hour', {   step:4}));
        acc.length =6;
        acc = acc.map(m => m.format('HH:mm A'));
        break;

      case 'Yesterday' :
        start  = moment().subtract(1,'d').startOf('day').format('YYYY-MM-DD HH:mm:ss');
        end    = moment().subtract(1,'d').endOf('day').format('YYYY-MM-DD HH:mm:ss');

        range1 = moment.range(start, end);
        acc = Array.from(range1.by('hour', {   step:4}));
        acc.length =6;
        acc = acc.map(m => m.format('HH:mm A'));
        break;


      default :
        start  = moment().subtract(7,'d').format('YYYY-MM-DD');
        end    = new Date();
        range1 = moment.range(start, end);
        acc = Array.from(range1.by('day', { step: 1 }));
        acc = acc.map(m => m.format('DD MMM'));
        break;
    }
    return acc;
  }

  render() {
    const { campaignInfo,profile } = this.props;


    var chartData = {
      labels:   this.getDays(),
      datasets: this.getDataset()
    };

    var chartOptions = {
      responsive: true,

      maintainAspectRatio: false,

      ///Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines: true,

      //String - Colour of the grid lines
      scaleGridLineColor: 'rgba(100,0,0,.1)',

      //Number - Width of the grid lines
      scaleGridLineWidth: 1,

      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,

      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines: true,

      //Boolean - Whether the line is curved between points
      bezierCurve: true,

      //Number - Tension of the bezier curve between points
      bezierCurveTension: 0.4,

      //Boolean - Whether to show a dot for each point
      pointDot: true,

      //Number - Radius of each point dot in pixels
      pointDotRadius: 4,

      //Number - Pixel width of point dot stroke
      pointDotStrokeWidth: 1,

      //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius: 20,

      //Boolean - Whether to show a stroke for datasets
      datasetStroke: true,

      //Number - Pixel width of dataset stroke
      datasetStrokeWidth: 2,

      //Boolean - Whether to horizontally center the label and point dot inside the grid
      offsetGridLines: false
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
              <div className="card-box">

                <Row className="mb-5">
                  <Col md={12}>
                    <div className="card-box pb-0 mb-0 cardbox1">

                      <Row className="account-stats">
                        <div className="col-sm-12 col-lg-6 col-xl-2 box pr-0 cards">
                          <div>
                            <div className="text-center mt-4 mb-4">

                              <div className="col-md-10 h-50">
                                <div className=" widget-flat card-box  text-muted pr-4 pl-4 pb-5 pt-2 pos-vertical-center c1">

                                  <p className="text-uppercase title m-b-5 fonttitle font-600">Active Campaigns</p>

                                  <h3 className="m-b-10 campaign">{campaignInfo? campaignInfo.websiteLive.length : []}</h3>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="col-sm-12 col-lg-6 col-xl-2 box pr-0 cards">
                          <div>
                            <div className="text-center mt-4 mb-4">

                              <div className="col-md-10 h-50">
                                <div className=" widget-flat card-box  text-muted pr-4 pl-4 pb-5 pt-2 pos-vertical-center c2">

                                  <p className="text-uppercase title m-b-5 fonttitle font-600">Unique Visitors</p>

                                  <h3 className="m-b-10 profile">{profile? Number(profile.uniqueVisitors) :0 }</h3>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-12 col-lg-6 col-xl-2 box pr-0 cards">
                          <div>
                            <div className="text-center mt-4 mb-4">

                              <div className="col-md-10 h-50">
                                <div className=" widget-flat card-box  text-muted pr-4 pl-4 pb-5 pt-2 pos-vertical-center c3">

                                  <p className="text-uppercase title m-b-5 fonttitle font-600">Total Notifications</p>

                                  <h3 className="m-b-10 notify">{campaignInfo ? campaignInfo.notificationCount : 0}</h3>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="col-sm-12 col-lg-6 col-xl-2 box pr-0 cards">
                          <div>
                            <div className="text-center mt-4 mb-4">

                              <div className="col-md-10 h-50">
                                <div className="  widget-flat card-box  text-muted pr-4 pl-4 pb-5 pt-2 pos-vertical-center c4">

                                  <p className="text-uppercase title m-b-5 fonttitle font-600">Total Signups</p>

                                  <h3 className="m-b-10 usersignup">{userSignUps}</h3>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </Row>
                    </div>
                    <div   className="graph-card">
                      <Card
                        statsIcon="fa fa-history"
                        id="chartHours"
                        stats="Updated 3 minutes ago"
                      
                        content={
                          <div className="ct-chart canvas-brdr">
                            <LineChart data={chartData} options={chartOptions} height="250" redraw />
                          </div>
                        }
                      />
                    </div>
                  </Col>
                </Row>
                <div className=" pull-right days">
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

              </div>
            </Col>
          </Row>
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
  successCampaign,
  fetchCampaignInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
