import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment  from 'moment';
import Popup from 'react-popup';
import ReactChartJs from 'react-chartjs';

import { fetchElastic } from 'ducks/elastic';
import { fetchCampaignInfo, successCampaign } from 'ducks/campaign';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Analytics, AnalyticsProfile } from 'components';
import '../DashboardContainer/asset/scss/style.scss';
import './AnalyticsContainer.scss';

const LineChart = ReactChartJs.Line;

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scaleShowGridLines : true,
  scaleGridLineColor : 'rgba(0,0,0,.05)',
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
      usersList: []
    };
  }

  componentWillMount() {
    if(!this.props.campaignInfo)
      this.props.fetchCampaignInfo();
  }

  componentDidUpdate(e) {
    if (window.innerWidth < 993 && this.props.location.pathname !== e.location.pathname && document.documentElement.className.indexOf('nav-open') !== -1) {
      document.documentElement.classList.toggle('nav-open');
    }
  }
  handleProfileBack = () => {
    this.setState({usersList: []});
  }

  handleViewProfile = (list) => {
    this.setState({usersList: list});
  }

  renderProfileList = () => {
    if(this.state.usersList.length)
      return this.state.usersList.map((user, index) => {
        return <tr className="table-active analytics-tr" key={index}>
          <td>{index + 1}</td>
          <td className="img"><img src={user.profile_pic?user.profile_pic:'https://www.totaldenturecare.com.au/wp-content/uploads/2017/06/default-user-image-female.png'} /></td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.city}</td>
          <td>{user.country}</td>
          <td>{moment(user.timestamp).startOf('day').fromNow()}</td>
          <td>
            <OverlayTrigger
              overlay={
                <Tooltip id={user.email} placement="top">
                  <span>Coming Soon</span>
                </Tooltip>
              }>
              <a>Journey Coming Soon</a>
            </OverlayTrigger>
          </td>
        </tr>;
      });
    else
      return [];
  }

  getDataset = (uniqueUsers, avgCus) => {
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
      uniqueUsers.map(bucket => {
        dataContent['label'] = moment(bucket.key_as_string).format('LL');
        dataContent['data'][moment(bucket.key_as_string).day()] = bucket.visitors.sum_other_doc_count;
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

  showGraph = (name, averageCustomer, uniqueUsers) => {
    const chartData = {
      labels: moment.weekdays(),
      datasets: this.getDataset(uniqueUsers, averageCustomer)
    };

    Popup.create({
      title: `${name.charAt(0).toUpperCase() + name.substr(1)} Traffic`,
      content:
        <div className = "analytics-chart">
          <LineChart data={chartData} options={chartOptions} height="250" redraw/>
        </div>,
      buttons: {
        right: [{
          text: 'Close',
          className: 'default',
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
            visitor = visitor + bucket.visitors.sum_other_doc_count;
          })
          :
          visitor = 0;

        const userDetails = website.signups?website.signups.userDetails:[];
        const uniqueUsers = website.uniqueUsers && website.uniqueUsers.aggregations ?website.uniqueUsers.aggregations.users.buckets:[];
        return <tr className="table-active analytics-tr" key={index}>
          <th scope="row">{index + 1}</th>
          <td className="text-center">{website.websiteUrl}</td>
          <td className="text-center">{visitor}</td>
          <td className="text-center">{userDetails && userDetails.length} <a href="javascript:;" onClick={() => userDetails?this.handleViewProfile(userDetails):null}>&nbsp; Profiles</a></td>
          <td className="text-center">-</td>
          <td className="text-center">
            {
              userDetails && userDetails.length ?((userDetails.length / visitor)   * 100).toFixed(2):0
            } %</td>
          <td className="text-center"><a href="javascript:;" onClick={() => this.showGraph(website.websiteUrl, website.averageCustomer, uniqueUsers)}>Graph</a></td>
        </tr>;
      });
    else
      return <tr><td>Nothing to display</td></tr>;
  }

  render() {
    return (
      <div className="analytics-container">
        {!this.state.usersList.length ?
          <Analytics  renderList={this.renderList} />
          :
          <AnalyticsProfile handleProfileBack={this.handleProfileBack} renderProfileList={this.renderProfileList} />
        }
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsContainer);
