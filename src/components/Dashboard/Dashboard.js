import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';
import Circle from 'react-circle';
//import { Scrollbars } from 'react-custom-scrollbars';
import { fetchCampaignInfo, successCampaign } from 'ducks/campaign';
import './Dashboard.scss';
//import StatsCard from './Stats';
//import Website from './Website';
import Card from './Card';
import ReactChartJs from 'react-chartjs';


var LineChart = ReactChartJs.Line;

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      render: false,
      arrs: []
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
        user.aggregations.users.buckets.map(bucket => {
          dataContent['label'] = moment(bucket.key_as_string).format('LL');
          dataContent['data'][moment(bucket.key_as_string).day()] = bucket.visitors.sum_other_doc_count;
        });
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

  render() {
    const { campaignInfo } = this.props;

    var chartData = {
      labels: moment.weekdays(),
      datasets: this.getDataset()
    };

    var chartOptions = {
      responsive: true,

      maintainAspectRatio: false,

      ///Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines: true,

      //String - Colour of the grid lines
      scaleGridLineColor: 'rgba(0,0,0,.05)',

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

    return (
      <div className="content">
        <div className="container-fluid">

          <Row>
            <Col md={12}>
              <div className="card-box">
                <h4 className="header-title mb-4">Account Usage Overview</h4>
                <hr/>
                <Row>
                  <div className="col-sm-6 col-lg-6 col-xl-3">
                    <div className="card-box mb-0 widget-chart-two">
                      <div className="float-right">
                        <Circle
                          animate={true} 
                          responsive={false} 
                          size={100}
                          lineWidth={24}
                          progress={campaignInfo? campaignInfo.websiteLive.length : []}//to edit
                          progressColor="cornflowerblue"  
                          bgColor="whitesmoke" 
                          textColor="hotpink"
                          textStyle={{ 
                            font: 'bold 5rem Helvetica, Arial, sans-serif' 
                          }}
                          percentSpacing={10} 
                          roundedStroke={true} 
                          showPercentage={true} 
                          showPercentageSymbol={false} 
                        />
                      </div>
                      <div className="widget-chart-two-content">
                        <span className="text-muted mb-0 mt-2">Active Campaigns</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-6 col-xl-3">
                    <div className="card-box mb-0 widget-chart-two">
                      <div className="float-right">
                        <Circle
                          animate={true} 
                          responsive={false} 
                          size={100}
                          lineWidth={24}
                          progress={1100} //to edit
                          progressColor="cornflowerblue"  
                          bgColor="whitesmoke" 
                          textColor="hotpink"
                          textStyle={{
                            font: 'bold 5rem Helvetica, Arial, sans-serif'
                          }}
                          percentSpacing={10}
                          roundedStroke={true}
                          showPercentage={true}
                          showPercentageSymbol={false}
                        />
                      </div>
                      <div className="widget-chart-two-content">
                        <span className="text-muted mb-0 mt-2">Unique Visitors</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-6 col-xl-3">
                    <div className="card-box mb-0 widget-chart-two">
                      <div className="float-right">
                        <Circle
                          animate={true}
                          responsive={false}
                          size={100}
                          lineWidth={24}
                          progress={campaignInfo ? campaignInfo.notificationCount : 0} //to edit
                          progressColor="cornflowerblue"
                          bgColor="whitesmoke"
                          textColor="hotpink"
                          textStyle={{
                            font: 'bold 5rem Helvetica, Arial, sans-serif'
                          }}
                          percentSpacing={10}
                          roundedStroke={true}
                          showPercentage={true}
                          showPercentageSymbol={false}
                        />
                      </div>
                      <div className="widget-chart-two-content">
                        <span className="text-muted mb-0 mt-2">Notifications Served</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-6 col-xl-3">
                    <div className="card-box mb-0 widget-chart-two">
                      <div className="float-right">
                        <Circle
                          animate={true}
                          responsive={false}
                          size={100}
                          lineWidth={24}
                          progress={campaignInfo ? campaignInfo.uniqueUsers.length : []} //to edit
                          progressColor="cornflowerblue"
                          bgColor="whitesmoke"
                          textColor="hotpink"
                          textStyle={{
                            font: 'bold 5rem Helvetica, Arial, sans-serif'
                          }}
                          percentSpacing={10}
                          roundedStroke={true}
                          showPercentage={true}
                          showPercentageSymbol={false}
                        />
                      </div>
                      <div className="widget-chart-two-content">
                        <span className="text-muted mb-0 mt-2">Total Signups</span>
                      </div>
                    </div>
                  </div>
                </Row>
                {/* <Row className="pl-2">
                  <div className="btn btn-info ml-4 " onClick={() => { browserHistory.push('/campaigns'); }}>Campaign Insights</div>
                </Row> */}
              </div>
            </Col>
          </Row>

         

          <Row>
            <Col md={12}>
              <div className="card-box">
                <h4 className="header-title">Website traffic this week</h4>
                <hr/>
                <Col md={12}>
                  <Card
                    statsIcon="fa fa-history"
                    id="chartHours"
                    stats="Updated 3 minutes ago"
                  
                    content={
                      <div className="ct-chart">
                        <LineChart data={chartData} options={chartOptions} height="250" redraw />
                      </div>
                    }
                  />
                </Col>
              </div>
            </Col>
          </Row>


 


                        

          {/* <Row>
            <Col md={6}>
              <Row>
                <Col lg={6} sm={6}>
                  <Row>
                    <Col lg={12}>
                      <Card title="Active Campaigns" category="" content={<div className="table-full-width" > <Scrollbars style={{
                        height: 150
                      }}>
                        <table className="table">
                          <Website data={campaignInfo ? campaignInfo.websiteLive : []} handleRouteChange={this.handleRouteChange} render={campaignInfo ? true : false} />
                        </table>
                      </Scrollbars>
                      </div>} />
                    </Col>
                  </Row>
                </Col>
                <Col lg={6} sm={6}>

                  <Row>
                    <Col lg={12} sm={12}>
                      <StatsCard statsClass="card card-stats  eqheight" statsText="Unique Visitors" statsValue={profile?profile.uniqueVisitors.toLocaleString():0}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} sm={12}>
                      <StatsCard statsClass="card card-stats  eqheight" statsText="Notifications Shown" statsValue={campaignInfo ? campaignInfo.notificationCount : 0} />
                    </Col>
                  </Row>
                </Col>
              </Row>

            </Col>

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
                      <div className="ct-chart">
                        <LineChart data={chartData} options={chartOptions} height="250" redraw />
                      </div>
                    }
                  />
                </Col>
              </Row>
            </Col>
          </Row> */}
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
