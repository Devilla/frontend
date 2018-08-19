import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import { extendMoment } from 'moment-range';
import { Chart } from 'react-google-charts';

import ReactChartJs from 'react-chartjs';
import HeatMap from 'react-heatmap-grid';
import DatePicker from 'react-datepicker';
import Loading from 'react-loading-animation';
import Moment from 'moment';

import { fetchCampaignInfo, successCampaign , fetchCampaign } from 'ducks/campaign';
import { mapGraph, heatMapGraph } from 'ducks/elastic';
import Card from './Card';

import './Dashboard.scss';

var LineChart = ReactChartJs.Line;
let moment = extendMoment(Moment);

const chartEvents = [
  {
    eventName: 'select',
    callback(chartWrapper) {
      console.log('Selected ', chartWrapper.getChart().getSelection());
    }
  }
];

const geooptions = {
  title: 'Country vs. traffic',
  hAxis: { title: 'Country', viewWindow: { min: 0, max: 40 } },
  vAxis: { title: 'traffic', viewWindow: { min: 0, max: 40 } },
  colorAxis: {colors: ['#81d4fa',  '#329fff']},
  defaultColor: '#f5f5f5'
};

const color_list = [
  '#69d217',
  '#69d2e7',
  '#1fda65',
  '#ffda65',
  '#ff2765',
  '#ffd041',
  '#53bbf4',
  '#ff6d74',
  '#ff6e00',
  '#ff0100',
  '#87CEEB',
  '#F5F5F5'
];

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
      selectedCampaign: {},
      mapArray: []
    };
    this.handleRouteChange = this.handleRouteChange.bind(this);
  }


  componentWillMount() {
    this.props.fetchCampaignInfo();
    this.props.fetchCampaign();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.campaigns != nextProps.campaigns) {
      const trackingIds = nextProps.campaigns.map(campaign => campaign.trackingId);
      this.props.mapGraph(trackingIds);
      this.props.heatMapGraph(trackingIds);
    }
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
        fillColor: '#097fff7d',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: '#00aaee94',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [0, 0, 0, 0, 0, 0, 0]
      };

      campaignDetails.map((campaign, index) => {
        let user = campaign.uniqueUsers;
        let tempData = Object.assign({}, dataContent);
        delete tempData['data'];
        delete tempData['fillColor'];
        delete tempData['pointColor'];
        tempData['data']=[0, 0, 0, 0, 0, 0, 0];

        let daysAgo = [];
        for(var i = 7; i >= 0; i--) {
          daysAgo[i] = moment().subtract(i, 'days').date();
        }
        daysAgo = daysAgo.reverse();

        if(user && user.aggregations && user.aggregations.users.buckets.length) {
          user.aggregations.users.buckets.map(bucket => {
            tempData['label'] = campaign.campaignName;
            tempData['data'][daysAgo.indexOf(moment(bucket.key_as_string).date()-1)] = bucket.visitors.sum_other_doc_count + bucket.visitors.buckets.length;
          });
        } else {
          tempData['label'] = campaign.campaignName;
          tempData['data'] = [0, 0, 0, 0, 0, 0, 0];
        }

        tempData['fillColor'] = color_list[index];
        tempData['pointColor'] = color_list[index];
        dataSet.push(tempData);
        tempData = Object.assign({}, {});
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

  getHeatMapHours = () => {
    let start, end , range1, acc  ;

    start  = moment().startOf('day').format('YYYY-MM-DD HH:mm:ss');
    end    = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss');

    range1 = moment.range(start, end);
    acc = Array.from(range1.by('hour', { step: 1 }));
    acc.length = 24;
    acc = acc.map(m => m.format('HH A'));
    return acc;
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

  handleChange = (date) => {
    this.setState({
      startDate : date
    });
  }

  renderDayOption = (value) => {
    return (
      <select className="form-control dates-select text-muted" onChange={(e) => this.displayCustomDate(e)}>
        <option key={7}  value={'7'} onClick={() => this.hide()}  >
          7 days
        </option>
        <option key={14} value={'14'} onClick={() => this.hide()}  >
          14 days
        </option>
        <option key={28}  value={'28'}  onClick={() => this.hide()} >
          28 days
        </option>
        <option key={'today'}  value={'Today'}  onClick={() => this.hide()} >
          Today
        </option>
        <option key={'yesterday'}  value={'Yesterday'}  onClick={()=> this.hide()} >
          Yesterday
        </option>
        <option key={'datePicker'} value={value} >
          Custom
        </option>
      </select>
    );
  }

  displayCustomDate = (event) => {
    this.setState({
      daysClicked:event.target.value,
      datePicker: event.target.value.toString()
    });
  }

  hide = () => {
    this.setState({
      datePicker: ''
    });
  }

  renderCampaignsIconList = (campaignList) => {
    if(campaignList)
      return campaignList.map((campaign, index) => {
        return <li key={campaign.label+index} className="list-inline-item">
          <div className="icon-box" style={{background: campaign.pointColor}}></div>
          <div className="campaign-list-label">{campaign.label}</div>
        </li>;
      });
    else
      return <li/>;
  }


  render() {
    const yLabels = this.getHeatMapHours();
    const xLabels = this.getDays();
    const datas = new Array(yLabels.length)
      .fill(0)
      .map(() => new Array(xLabels.length).fill(0).map(() => 0));

    const { profile, campaigns, campaignInfo, heatmap, map } = this.props;
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
      offsetGridLines: false,

      legendTemplate: '<div>acv/<div>'
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
            visitor = visitor + bucket.visitors.buckets.length + bucket.visitors.sum_other_doc_count;
          });

        let users = website.signups && website.signups.userDetails?website.signups.userDetails:[];
        users = users.filter(user => user.trackingId == website.trackingId);
        userSignUps = userSignUps + users.length;
        campaignActive = campaignActive + 1;
      });
    }

    return (
      <Loading className="transition-item dashboard-transition-container" strokeWidth='2' style={{height: '700px', width: '10%'}} isLoading={!profile || !campaignInfo || !campaigns || !heatmap || !map}>
        <div className="content dashboard-inner-container">
          <div className="container-fluid">
            <Row className="dashboard-boxes">
              <Col md={12}>
                <div className="card-box">
                  <Row>
                    <Col md={12}>
                      <div className="btn-group campaign-dropdown">
                        <button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          {selectedCampaign.campaignName?selectedCampaign.campaignName:'All Campaigns'}
                        </button>
                        <div className="dropdown-menu">
                          <div className="dropdown-item" id={null} onClick={this.selectCampaign}>All Campaigns</div>
                          {this.renderCampaigns()}
                        </div>
                      </div>
                      <div className="card-box pb-0 mb-0 cardbox1">
                        <Row className="account-stats">
                          <hr className="account-stats-cut" />
                          {this.renderCardBox(
                            <div className=" widget-flat card-box  text-muted pb-5 pt-2 pos-vertical-center c2" onClick={()=> browserHistory.push('/campaigns')}>
                              <p className="text-uppercase title m-b-5 fonttitle font-600 mincard-ht">Active Campaign</p>
                              <h3 className="m-b-10 campaign">{campaignActive}</h3>

                            </div>
                          )}
                          {this.renderCardBox(
                            <div className=" widget-flat card-box  text-muted pb-5 pt-2 pos-vertical-center c2" onClick={()=> browserHistory.push('/analytics')}>
                              <p className="text-uppercase title m-b-5 fonttitle font-600 mincard-ht">Total Visitors</p>
                              <h3 className="m-b-10 campaign">{totalUsers?totalUsers:0}</h3>
                            </div>
                          )}
                          {this.renderCardBox(
                            <div className=" widget-flat card-box  text-muted pb-5 pt-2 pos-vertical-center c2" onClick={()=> browserHistory.push('/analytics')}>
                              <p className="text-uppercase title m-b-5 fonttitle font-600 mincard-ht">Unique Visitors</p>
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
                          category="Unique Visitors Log"
                          stats="Updated 3 minutes ago"
                          content={
                            <div className="ct-chart canvas-brdr">
                              <LineChart data={chartData} options={chartOptions} height="250" redraw />
                            </div>
                          }
                        />
                        <div className="d-inline-flex justify-content-center" style={{width:'100%'}}>
                          <ul className="nav navbar-nav d-inline-flex">
                            <li className="nav-item">
                              <ul className="list-inline-mb-0">
                                {this.renderCampaignsIconList(chartData.datasets)}
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <hr/>
                        <div className=" pull-left">
                          { this.state.datePicker == 'd1' ?
                            <div className = "customPicker">
                              <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                              />
                            </div>
                            : ' ' }
                          {this.renderDayOption('d1')}
                        </div>
                        <div className="pull-right audience" onClick={()=>{browserHistory.push('/analytics');}}>
                          Audience Overview &nbsp;<i className="icon-arrow-right mt-1 pt-1"></i>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </Col>
                  </Row>
                  <div className="clearfix"></div>
                </div>
              </Col>
            </Row>
            <Row  className="justify-content-around text-muted mb-5 heat-graph">
              <Col md={5} className="heatmap">
                <HeatMap
                  xLabels={xLabels}
                  yLabels={yLabels}
                  data={(heatmap != undefined && heatmap && heatmap.message.length !== 0)?heatmap.message:datas}
                  height={16}
                />
              </Col>
              <Col className="worldmap">
                <Chart
                  chartType="GeoChart"
                  data={map?map.message:[]}
                  options={geooptions}
                  graphID="GeoChart"
                  width="100%"
                  height="500px"
                  chartEvents={chartEvents}
                />
              </Col>
            </Row>
          </div>
        </div>
      </Loading>

    );
  }
}

const mapStateToProps = state => ({
  elastic: state.getIn(['elastic', 'elastic']),
  profile: state.getIn(['profile', 'profile']),
  campaignInfo: state.getIn(['campaign', 'campaignInfo']),
  campaigns: state.getIn(['campaign', 'campaigns']),
  graph: state.getIn(['graph', 'graph']),
  map: state.getIn(['elastic', 'map']),
  heatmap: state.getIn(['elastic', 'heatmap'])
});

const mapDispatchToProps = {
  successCampaign,
  fetchCampaignInfo,
  fetchCampaign,
  mapGraph,
  heatMapGraph
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Dashboard);
