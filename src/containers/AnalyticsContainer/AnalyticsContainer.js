import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment  from 'moment';
import Popup from 'react-popup';
import ReactChartJs from 'react-chartjs';

import { fetchElastic } from 'ducks/elastic';
import { fetchCampaignInfo, successCampaign } from 'ducks/campaign';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Analytics, AnalyticsProfile } from 'components';
import './AnalyticsContainer.scss';
import '../DashboardContainer/asset/scss/style.scss';

const LineChart = ReactChartJs.Line;

const chartOptions = {
  responsive: true,

  maintainAspectRatio: false,

  ///Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines : true,

  //String - Colour of the grid lines
  scaleGridLineColor : 'rgba(0,0,0,.05)',

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

class AnalyticsContainer extends Component {

  constructor(){
    super();
    this.state = {
      usersList: []
    };
    this.handleViewProfile = this.handleViewProfile.bind(this);
    this.renderList = this.renderList.bind(this);
    this.renderProfileList = this.renderProfileList.bind(this);
    this.handleProfileBack = this.handleProfileBack.bind(this);
    this.showGraph = this.showGraph.bind(this);
  }

  componentWillMount() {
    if(!this.props.campaignInfo)
      this.props.fetchCampaignInfo();
  }

  handleProfileBack(){
    this.setState({usersList: []});
  }

  handleViewProfile(list){
    this.setState({usersList: list});
  }

  renderProfileList() {
    if(this.state.usersList.length)
      return this.state.usersList.map((user, index) => {
        return <tr key={index}>;
          <td className="img"><img src={user.profile_pic?user.profile_pic:'https://www.totaldenturecare.com.au/wp-content/uploads/2017/06/default-user-image-female.png'} /></td>
          <td className="name">{user.username}</td>
          <td className="email">{user.email}</td>
          <td className="location">{user.city}</td>
          <td className="country">{user.country}</td>
          <td className="lastseen">{moment(user.timestamp).startOf('day').fromNow()}</td>
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

  getDataset(uniqueUsers) {
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

  showGraph(name, uniqueUsers) {
    const chartData = {
      labels: moment.weekdays(),
      datasets: this.getDataset(uniqueUsers)
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

  renderList() {
    if(this.props.campaignInfo && this.props.campaignInfo.websiteLive.length)
      return this.props.campaignInfo.websiteLive.map((website, index) => {
        let visitor = 0;
        website.uniqueUsers?
          website.uniqueUsers.aggregations.users.buckets.map(bucket => {
            visitor = visitor + bucket.visitors.sum_other_doc_count;
          })
          :
          visitor = 0;

        const userDetails = website.signups?website.signups.userDetails:[];
        const uniqueUsers = website.uniqueUsers?website.uniqueUsers.aggregations.users.buckets:[];
        return <tr  className = { index % 2 === 0 ? 'text-center ' : 'text-center table-info '} key={index}>
          <td className="website"> <a href={website.websiteUrl} target="_blank">{website.websiteUrl}</a></td>
          <td className="vistor">{visitor}</td>
          <td><a href="javascript:;" onClick={() => this.handleViewProfile(userDetails)} className="pname">
            <b>{userDetails && userDetails.length} </b> <span>View Profile</span></a>
          </td>
          <td className="liveuser">-</td>
          <td className="conversion">
            {
              userDetails?((userDetails.length / visitor)   * 100).toFixed(2):0
            } %
          </td>
          <td>
            <a href="javascript:;" onClick={() => this.showGraph(website.websiteUrl, uniqueUsers)}><i className="fas fa-chart-area"></i> Show Graph</a>
          </td>
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
