import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { fetchCampaignInfo, successCampaign , fetchCampaign } from 'ducks/campaign';
import './Dashboard.scss';
import Card from './Card';
import ReactChartJs from 'react-chartjs';
import 'react-datepicker/dist/react-datepicker.css';

var LineChart = ReactChartJs.Line;
let moment = extendMoment(Moment);

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      userCount: 0,
      render: false,
      arrs: [],
      daysClicked: '',
      startDate:  moment(),
      datePicker: '',
      selectedCampaign: {}
    };
    this.handleRouteChange = this.handleRouteChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchCampaignInfo();
    this.props.fetchCampaign();
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
      let campaignDetails = this.props.campaignInfo.websiteLive.filter(campaign => {
        if(this.state.selectedCampaign.id)
          return campaign._id == this.state.selectedCampaign.id;
        else
          return campaign;
      });

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

      campaignDetails.map(campaign => {
        let user = campaign.uniqueUsers;
        (user && user.aggregations) ? user.aggregations.users.buckets.map(bucket => {
          dataContent['label'] = Moment(bucket.key_as_string).format('LL');
          dataContent['data'][Moment(bucket.key_as_string).day()] = bucket.visitors.sum_other_doc_count + bucket.visitors.buckets.length;
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
        start  = moment().subtract(6,'d').format('YYYY-MM-DD');
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
        start  = moment().subtract(6,'d').format('YYYY-MM-DD');
        end    = new Date();
        range1 = moment.range(start, end);
        acc = Array.from(range1.by('day', { step: 1 }));
        acc = acc.map(m => m.format('DD MMM'));
        break;
    }
    return acc;
  }

  renderCardBox = (content) => {
    return <div className="col-sm-12 col-lg-6 col-xl-2 box cards">
      <div>
        <div className="text-center mt-4 mb-4">
          <div className="col-md-10 h-50 card-content-width">
            {content}
          </div>
        </div>
      </div>
    </div>;
  }

  handleChange = (date) => {
    this.setState({
      startDate : date
    });
  }

  displayCustomDate = (event) => {
    this.setState({
      datePicker: event.target.id.toString()
    });
  }

  hide = () => {
    this.setState({
      datePicker: ''
    });
  }

  usersCount() {
    let userCount = 0, totalUsers = 0;
    if(this.props.campaignInfo && this.props.campaignInfo.uniqueUsers.length) {
      let campaignDetails = this.props.campaignInfo.websiteLive.filter(campaign => {
        if(this.state.selectedCampaign.id)
          return campaign._id == this.state.selectedCampaign.id;
        else
          return campaign;
      });

      campaignDetails.map(campaign => {
        let user = campaign.uniqueUsers;
        (user && user.aggregations) ? user.aggregations.users.buckets.map(bucket => {
          userCount = userCount + bucket.visitors.sum_other_doc_count + bucket.visitors.buckets.length;
        }) : 0;
        (user && user.hits) ? totalUsers = totalUsers + user.hits.total : 0;
      });
      return {userCount: userCount, totalUsers: totalUsers};
    } else
      return {userCount: userCount, totalUsers: totalUsers};
  }

  selectCampaign = (e) => {
    this.setState({selectedCampaign: {
      id: e.target.id,
      campaignName: e.target.innerHTML
    }});
  }

  renderCampaigns = () => {
    let campaignInfo = this.props.campaignInfo;
    if(campaignInfo) {
      return campaignInfo.websiteLive.map(campaign => {
        return <div key={campaign._id} className="dropdown-item" id={campaign._id} onClick={this.selectCampaign}>{campaign.campaignName}</div>;
      });
    }
  }

  render() {
    const { campaignInfo } = this.props;
    const { selectedCampaign } = this.state;
    const { userCount, totalUsers } = this.usersCount();
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
    let visitor = 0;
    let campaignActive = 0;

    if(campaignInfo) {
      let campaignDetails = campaignInfo.websiteLive.filter(campaign => {
        if(selectedCampaign.id)
          return campaign._id === selectedCampaign.id;
        else
          return campaign;
      });

      campaignDetails.map((website) => {
        website.uniqueUsers && website.uniqueUsers.aggregations &&
          website.uniqueUsers.aggregations.users.buckets.map((bucket) => {
            visitor = visitor + bucket.visitors.sum_other_doc_count;
          });


        let users = website.signups && website.signups.userDetails?website.signups.userDetails:[];
        users = users.filter(user => user.trackingId == website.trackingId);
        userSignUps = userSignUps + users.length;
        if(website.isActive)
          campaignActive = campaignActive + 1;

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
                    <div className="btn-group campaign-dropdown">
                      <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {selectedCampaign.campaignName?selectedCampaign.campaignName:'Campaigns'}
                      </button>
                      <div className="dropdown-menu">
                        <div className="dropdown-item" id={null} onClick={this.selectCampaign}>All</div>
                        {this.renderCampaigns()}
                      </div>
                    </div>
                    <div className="card-box pb-0 mb-0 cardbox1">
                      <Row className="account-stats">

                        {this.renderCardBox(
                          <div className=" widget-flat card-box  text-muted pb-5 pt-2 pos-vertical-center c2" onClick={()=> browserHistory.push('/campaigns')}>
                            <p className="text-uppercase title m-b-5 fonttitle font-600 mincard-ht">Active Campaign</p>
                            <h3 className="m-b-10 campaign">{campaignActive}</h3>

                          </div>
                        )}
                        {this.renderCardBox(
                          <div className=" widget-flat card-box  text-muted pb-5 pt-2 pos-vertical-center c2" onClick={()=> browserHistory.push('/analytics')}>
                            <p className="text-uppercase title m-b-5 fonttitle font-600">Total Visitors</p>
                            <h3 className="m-b-10 campaign">{totalUsers?totalUsers:0}</h3>
                          </div>
                        )}
                        {this.renderCardBox(
                          <div className=" widget-flat card-box  text-muted pb-5 pt-2 pos-vertical-center c2" onClick={()=> browserHistory.push('/analytics')}>
                            <p className="text-uppercase title m-b-5 fonttitle font-600">Unique Visitors</p>
                            <h3 className="m-b-10 profile">{userCount? Number(userCount) :0 }</h3>
                          </div>
                        )}

                        {this.renderCardBox(
                          <div className=" widget-flat card-box  text-muted pb-5 pt-2 pos-vertical-center c2" onClick={()=> browserHistory.push('/analytics')}>
                            <p className="text-uppercase title m-b-5 fonttitle font-600 mincard-ht">Total &nbsp; Signups</p>
                            <h3 className="m-b-10 usersignup">{userSignUps}</h3>
                          </div>
                        )}
                        {this.renderCardBox(
                          <div className=" widget-flat card-box  text-muted pb-5 pt-2 pos-vertical-center c2" onClick={()=> browserHistory.push('/analytics')}>
                            <p className="text-uppercase title m-b-5 fonttitle font-600">Conversion &nbsp; %</p>
                            <h3 className="m-b-10 notify">{userCount && (userSignUps/userCount)*100 ? ((userSignUps/userCount)*100).toFixed(2) : 0}</h3>
                          </div>
                        )}
                      </Row>
                    </div>
                    <div className="graph-card">
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
                <div className="clearfix"></div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-around">
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
  campaigns: state.getIn(['campaign', 'campaigns']),
  graph: state.getIn(['graph', 'graph'])

});

const mapDispatchToProps = {
  successCampaign,
  fetchCampaignInfo,
  fetchCampaign
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
