import { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import moment from 'moment';
import { fetchElastic } from 'ducks/elastic';
import { fetchCampaignInfo, successCampaign } from 'ducks/campaign';
import './Dashboard.scss';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      render: false,
      arrs: [],
      UniqueVisitor: 0
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

  getUniqueUsers(users) {
    let sum = 0;
    users.map(user => {
      user.aggregations.users.buckets.map(bucket => {
        sum = sum + bucket.visitors.sum_other_doc_count;
      });
    });
    return sum;
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
    const { campaignInfo} = this.props;

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

    return (<div className="content">
      <Grid fluid="fluid">

        <Row>
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
                {/* <Row>
                  <Col lg={12}>
                    <div className="card card-stats ga-connect">
                      <div className="content">
                        <Row>
                          <Col xs={12}>
                            <div className="icon-big text-center">
                              <i className="pe-7s-lock"></i>
                            </div>
                            <div className="txt">
                              <a href="#">Connect to GA for more</a>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row> */}
              </Col>
              <Col lg={6} sm={6}>

                <Row>
                  <Col lg={12} sm={12}>
                    <StatsCard statsClass="card card-stats  eqheight" statsText="Unique Visitors" statsValue={campaignInfo && campaignInfo.uniqueUsers.length ? this.getUniqueUsers(campaignInfo.uniqueUsers) : 0} />
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
        </Row>
        {/* <Row>
          <Col md={12}>
            <p className="text-center">
              Get one of our experts to do it all for you! &nbsp;
              <a href="javascript:;">Click here</a>
            </p>
          </Col>
        </Row> */}
      </Grid>
    </div>);
  }
}

const mapStateToProps = state => ({
  elastic: state.getIn(['elastic', 'elastic']),
  campaignInfo: state.getIn(['campaign', 'campaignInfo']),
});

const mapDispatchToProps = {
  fetchElastic,
  successCampaign,
  fetchCampaignInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
