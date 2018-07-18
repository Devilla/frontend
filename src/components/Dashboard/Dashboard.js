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
import { countryVisitors } from 'ducks/elastic';

var LineChart = ReactChartJs.Line;
let moment = extendMoment(Moment);

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      render: false,
      arrs: [],
      daysClicked: '',
      startDate:  moment(),
      datePicker: ''
    };
    this.handleRouteChange = this.handleRouteChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchCampaignInfo();
    this.props.fetchCampaign();
    let response =  this.props.countryVisitors();
    console.log(response);
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
    return <div className="col-sm-12 col-lg-6 col-xl-3 box pr-0 cards">
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



  render() {
    const { campaignInfo, profile } = this.props;

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
                        {this.renderCardBox(
                          <div className=" widget-flat card-box  text-muted pr-4 pl-4 pb-5 pt-2 pos-vertical-center c2">
                            <p className="text-uppercase title m-b-5 fonttitle font-600">Active Campaigns</p>
                            <h3 className="m-b-10 campaign">{campaignInfo? campaignInfo.websiteLive.length : []}</h3>
                          </div>
                        )}
                        {this.renderCardBox(
                          <div className=" widget-flat card-box  text-muted pr-4 pl-4 pb-5 pt-2 pos-vertical-center c2">
                            <p className="text-uppercase title m-b-5 fonttitle font-600">Unique Visitors</p>
                            <h3 className="m-b-10 profile">{profile? Number(profile.uniqueVisitors) :0 }</h3>
                          </div>
                        )}
                        {this.renderCardBox(
                          <div className=" widget-flat card-box  text-muted pr-4 pl-4 pb-5 pt-2 pos-vertical-center c2">
                            <p className="text-uppercase title m-b-5 fonttitle font-600">Conversion %</p>
                            <h3 className="m-b-10 notify">{(profile && userSignUps/profile.uniqueVisitors)*100 ? (userSignUps/profile.uniqueVisitors)*100 : 0}</h3>
                          </div>
                        )}
                        {this.renderCardBox(
                          <div className=" widget-flat card-box  text-muted pr-4 pl-4 pb-5 pt-2 pos-vertical-center c2">
                            <p className="text-uppercase title m-b-5 fonttitle font-600">Total Signups</p>
                            <h3 className="m-b-10 usersignup">{userSignUps}</h3>
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
          <Row className="new-graphs justify-content-around">
            <Col md={12} className="g2">

              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                content={
                  <div className=" canvas-brdr">
                    <iframe src="http://35.202.85.190:5601/app/kibana#/visualize/edit/0d5b74d0-880d-11e8-929b-418c233f6851?embed=true&_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-7d,mode:quick,to:now))&_a=(filters:!(),linked:!f,query:(language:lucene,query:''),uiState:(mapCenter:!(18.97902595325528,27.24609375),mapZoom:2),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Unique+Visitors',field:json.value.visitorId),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(field:json.value.geo.country,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderAgg:(enabled:!t,id:'2-orderAgg',params:(field:json.value.visitorId),schema:orderAgg,type:cardinality),orderBy:custom,otherBucket:!f,otherBucketLabel:Other,size:100),schema:segment,type:terms)),params:(addTooltip:!t,colorSchema:Blues,isDisplayWarning:!t,legendPosition:bottomright,mapCenter:!(0,0),mapZoom:2,outlineWeight:1,selectedJoinField:(description:'Country+name',name:name),selectedLayer:(attribution:'',created_at:'2017-04-26T17:12:15.978370',fields:!((description:'Two+letter+abbreviation',name:iso2),(description:'Country+name',name:name),(description:'Three+letter+abbreviation',name:iso3)),format:(type:geojson),id:5659313586569216,layerId:'elastic_maps_service.World+Countries',name:'World+Countries',tags:!(),url:'https:%2F%2Fvector.maps.elastic.co%2Fblob%2F5659313586569216%3Felastic_tile_service_tos%3Dagree%26my_app_version%3D6.2.4%26license%3D2d555df5-96c7-4a4f-8992-71f3cf979597',weight:1),showAllShapes:!t,wms:(baseLayersAreLoaded:(_c:!(),_d:!t,_h:0,_n:!f,_s:1,_v:!t),enabled:!f,options:(format:image%2Fpng,transparent:!t),selectedTmsLayer:(attribution:'',id:road_map,maxZoom:10,minZoom:0,subdomains:!(),url:'https:%2F%2Ftiles.maps.elastic.co%2Fv2%2Fdefault%2F%7Bz%7D%2F%7Bx%7D%2F%7By%7D.png%3Felastic_tile_service_tos%3Dagree%26my_app_name%3Dkibana%26my_app_version%3D6.2.4%26license%3D2d555df5-96c7-4a4f-8992-71f3cf979597'),tmsLayers:!((attribution:'',id:road_map,maxZoom:10,minZoom:0,subdomains:!(),url:'https:%2F%2Ftiles.maps.elastic.co%2Fv2%2Fdefault%2F%7Bz%7D%2F%7Bx%7D%2F%7By%7D.png%3Felastic_tile_service_tos%3Dagree%26my_app_name%3Dkibana%26my_app_version%3D6.2.4%26license%3D2d555df5-96c7-4a4f-8992-71f3cf979597')))),title:'Unique+Visitors+by+Country',type:region_map))" height="450" width="1150"></iframe>
                  </div>
                }
              />

              <hr className="border-hr"/>
              <div className="clearfix"></div>
            </Col>
          </Row>
          <Row>
            {/* <Col md={6} className="g3">
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                content={
                  <div className=" canvas-brdr">
                 <iframe src="http://35.202.85.190:5601/app/kibana#/visualize/edit/644184c0-8929-11e8-929b-418c233f6851?embed=true&_g=(refreshInterval%3A(display%3AOff%2Cpause%3A!f%2Cvalue%3A0)%2Ctime%3A(from%3A'2018-07-16T18%3A30%3A00.000Z'%2Cmode%3Aabsolute%2Cto%3A'2018-07-22T18%3A05%3A10.903Z'))" height="600" width="800"></iframe>
                  </div>
                }
              />

              <hr className="border-hr"/>
              <div className="clearfix"></div>
            </Col>

            <Col md={6} className="g4">
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                content={
                  <div className=" canvas-brdr">
                    <iframe src="http://35.202.85.190:5601/app/kibana#/visualize/edit/bbe888e0-8983-11e8-929b-418c233f6851?embed=true&_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-24h,mode:quick,to:now))&_a=(filters:!(),linked:!f,query:(language:lucene,query:''),uiState:(),vis:(aggs:!((enabled:!t,id:'2',params:(customLabel:Users),schema:metric,type:count),(enabled:!t,id:'3',params:(customLabel:Pages,field:json.value.url.pathname,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'2',otherBucket:!f,otherBucketLabel:Other,size:20),schema:segment,type:terms),(enabled:!t,id:'4',params:(customLabel:Users,field:apache2.access.geoip.location),schema:radius,type:cardinality)),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),grid:(categoryLines:!f,style:(color:%23eee)),legendPosition:right,radiusRatio:51,seriesParams:!((data:(id:'2',label:Users),drawLinesBetweenPoints:!t,mode:stacked,show:!t,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),times:!(),type:histogram,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:Users),type:value))),title:'Visitor+Pathname',type:histogram))" height="600" width="800"></iframe>

                  </div>
                }
              />
              <hr className="border-hr"/>
              <div className="clearfix"></div>
            </Col> */}

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
  fetchCampaign,
  countryVisitors
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
