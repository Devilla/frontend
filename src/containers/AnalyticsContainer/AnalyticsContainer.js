import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import Popup from 'react-popup';
import ReactChartJs from 'react-chartjs';
import { Animated } from 'react-animated-css';
import Loading from 'react-loading-animation';

import { fetchElastic } from 'ducks/elastic';
import { fetchCampaignInfo, successCampaign } from 'ducks/campaign';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Analytics, AnalyticsProfile } from 'components';
import '../DashboardContainer/asset/scss/style.scss';
import './AnalyticsContainer.scss';

const LineChart = ReactChartJs.Line;
let moment = extendMoment(Moment);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scaleShowGridLines : true,
  scaleGridLineColor : 'rgba(100,0,0,.1)',
  scaleGridLineWidth : 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve : true,
  bezierCurveTension : 0.4,
  pointDot : true,
  pointDotRadius : 4,
  pointDotStrokeWidth : 1,
  pointHitDetectionRadius : 20,
  datasetStroke : true,
  datasetStrokeWidth : 2,
  offsetGridLines : false
};

class AnalyticsContainer extends Component {

  constructor(){
    super();
    this.state = {
      usersList: [],
      count:0
    };
  }
  componentWillMount() {
    this.props.fetchCampaignInfo();
  }

  componentDidUpdate(e) {
    if (window.innerWidth < 993 && this.props.location.pathname !== e.location.pathname && document.documentElement.className.indexOf('nav-open') !== -1) {
      document.documentElement.classList.toggle('nav-open');
    }
  }

  /*handleProfileBack = () => {
    this.setState({usersList: []});
  }*/

  handleViewProfile = (list) => {
    this.setState({usersList: list});
  }

  renderProfileList = () => {
    if(this.state.usersList.length)
      return this.state.usersList.map((user, index) => {
        return <div className="table-active analytics-tr tr row" key={index}>
          <div className="text-center td col-md-1">{index + 1}</div>
          <div className="img text-center td col-md-2"><img src={user.profile_pic?user.profile_pic:'https://www.totaldenturecare.com.au/wp-content/uploads/2017/06/default-user-image-female.png'}/></div>
          <div className="text-center td col-md-1">{user.username}</div>
          <div className="text-center td col-md-4">{user.email}</div>
          <div className="text-center td col-md-1">{user.city}</div>
          <div className="text-center td col-md-1">{user.country}</div>
          <div className="text-center td col-md-1">{moment(user.timestamp).fromNow()}</div>
          <div className="text-center td col-md-1">
            <OverlayTrigger
              overlay={
                <Tooltip id={user.email} placement="top">
                  <span>Coming Soon</span>
                </Tooltip>
              }>
              <a>-</a>
            </OverlayTrigger>
          </div>
        </div>;
      });
    else
      return [];
  }

  getDataset = (uniqueUsers, avgCus, campaignName) => {
    if(uniqueUsers && uniqueUsers.length) {
      let dataSet = [];

      let dataContent = {
        label: '',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [0, 0, 0, 0, 0, 0, 0]
      };

      let daysAgo = [];
      for(var i = 7; i >= 0; i--) {
        daysAgo[i] = moment().subtract(i, 'days').date();
      }
      daysAgo = daysAgo.reverse();

      uniqueUsers.map(bucket => {
        dataContent['label'] = `${campaignName}`;
        dataContent['data'][daysAgo.indexOf(moment(bucket.key_as_string).date()-1)] = bucket.visitors.sum_other_doc_count + bucket.visitors.buckets.length;
      });

      dataSet.push(dataContent);
      dataSet.push({
        label: 'Average User Signups',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [avgCus, avgCus, avgCus, avgCus, avgCus, avgCus, avgCus]
      });

      return dataSet;
    } else {
      return [{
        label: 'Average User Signups',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [avgCus, avgCus, avgCus, avgCus, avgCus, avgCus, avgCus]
      }];
    }
  }

  showGraph = (name, averageCustomer, uniqueUsers, campaignName) => {
    const chartData = {
      labels: moment.weekdays(),
      datasets: this.getDataset(uniqueUsers, averageCustomer, campaignName)
    };

    Popup.create({
      title: `${name.charAt(0).toUpperCase() + name.substr(1)} Traffic`,
      content:
      <Animated className="center" animationIn="fadeInDown" animationOut="fadeOutUp" isVisible={true}>
        <div className = "analytics-chart">
          <LineChart data={chartData} options={chartOptions} height="250" width="500" redraw/>
        </div>
      </Animated>,
      buttons: {
        right: [{
          text: 'Close',
          className: 'danger',
          action: function () {
            Popup.close();
          }
        }]
      }
    });
  }

  renderList = () => {
    if(this.props.campaignInfo && this.props.campaignInfo.websiteLive.length)
      return this.props.campaignInfo.websiteLive.map((website, index) => {
        let visitor = 0;
        website.uniqueUsers && website.uniqueUsers.aggregations ?
          website.uniqueUsers.aggregations.users.buckets.map(bucket => {
            visitor = visitor + bucket.visitors.sum_other_doc_count + bucket.visitors.buckets.length;
          })
          :
          visitor = 0;

        let userDetails = website.signups && website.signups.userDetails ?website.signups.userDetails:[];
        userDetails = userDetails.filter(user => user.trackingId == website.trackingId);

        const uniqueUsers = website.uniqueUsers && website.uniqueUsers.aggregations ?website.uniqueUsers.aggregations.users.buckets:[];
        return <div className="table-active analytics-tr tr row" key={index}>
          <div scope="row" className="text-center td col-md-1">{index + 1}</div>
          <div className="text-center td col-md-3">{website.websiteUrl}</div>
          <div className="text-center td-2 col-md-2">{visitor}</div>
          <div className="text-center td-3 col-md-2">{userDetails && userDetails.length} <a onClick={() =>  {/*browserHistory.push('analytics/profile') && */ userDetails?this.handleViewProfile(userDetails):null;} }>&nbsp; Profiles</a></div>
          <div className="text-center td-4 col-md-1">-</div>
          <div className="text-center td-5 col-md-2">
            {
              userDetails && userDetails.length ?((userDetails.length / visitor)   * 100).toFixed(2):0
            } %</div>
          <div className="text-center td-6 col-md-1"><a href="javascript:;" onClick={() => this.showGraph(website.websiteUrl, website.averageCustomer, uniqueUsers, website.campaignName)}>Graph</a></div>
        </div>;
      });
    else
      return <div><div>Nothing to display</div></div>;
  }

  render() {
    return (
      <Loading className="transition-item analytics-transition-container" isLoading={!this.props.campaignInfo}>
        <div className="analytics-container mt-5">
          {!this.state.usersList.length ?
            <Analytics  renderList={this.renderList} />
            :
            <AnalyticsProfile handleProfileBack={this.handleProfileBack} renderProfileList={this.renderProfileList} />
          }
        </div>
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  campaignInfo: state.getIn(['campaign', 'campaignInfo']),
});

const mapDispatchToProps = {
  fetchElastic,
  successCampaign,
  fetchCampaignInfo
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(AnalyticsContainer);
