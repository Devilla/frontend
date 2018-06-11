import { Component } from 'react';
import {
    Grid,
    Row,
    Col,
    Table,
    Button,
    Glyphicon,
    HelpBlock
} from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Tabs from 'components/Template/tab'
import CardTable from 'components/Template/card-with-page-table'
import { pagethArray } from 'components/Template/data'
import { fetchPageUrl, createPageUrl, clearLeads, removePageUrl } from 'ducks/pageurl';
import { fetchOneRules, clearRules } from 'ducks/rules';
import { validatePath } from 'components/Common/function';
import { css } from 'glamor';
import $ from 'jquery';
import Popup from 'react-popup';

import './DisplayPage.scss';

class DisplayPage extends Component{
  constructor(){
    super();
    this.state= {
      error: '',
      displayUrl: {
        url: '',
        status: '',
        class: '',
        type: '',
        error: ''
      },
    };
    this.handleNextState = this.handleNextState.bind(this);
    this.handleBackState = this.handleBackState.bind(this);
    this.activeState = this.activeState.bind(this);
    this.addPageUrl = this.addPageUrl.bind(this);
    this.handlePageUrl = this.handlePageUrl.bind(this);
    this.deleteDisplayUrl = this.deleteDisplayUrl.bind(this);
  }

  componentWillMount() {
    this.setActiveState({active: 6});
  }

  componentDidMount() {
    if(this.props.campaign)
      this.props.fetchOneRules(this.props.campaign._id);
    if(this.props.rules)
      this.fetchPathUrls(this.props.rules);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.rules != nextProps.rules)
      this.fetchPathUrls(nextProps.rules);
  }

  fetchPathUrls(rule) {
    this.props.fetchPageUrl('display', rule._id);
  }

  activeState(val){
    this.setActiveState(val);
  }

  handleNextState() {
    console.log(this.props.displayUrls, "=============>");
    if(!this.props.displayUrls.length)
      return this.setState({error: "Add a display path"});
    // if()
    // Popup.create({
    //   title: "Campaign is Live",
    //   // content: 'Campaign is Live',
    //   buttons: {
    //     right: [{
    //       text: 'Finish',
    //       className: 'default',
    //       action: function () {
    //         browserHistory.push('/dashboard');
    //         Popup.close();
    //       }
    //     }]
    //   }
    // });
  }

  handleBackState() {
    this.setActiveState({active: 5});
  }

  setActiveState(val) {
    var data = {'tab' : val};
    this.props.callbackFromParent(data);
  }

  addPageUrl(e) {
    if(this.state.displayUrl.url == '' || !validatePath(this.state.displayUrl.url))
      return this.setState({error: "Please enter a valid path"});
    let displayUrl = this.state.displayUrl;
    displayUrl['rule'] = this.props.rules._id;
    this.props.createPageUrl(displayUrl);
    this.setState({displayUrl: {
      url: '',
      status: '',
      class: '',
      type: '',
      checkUrl:false
    }});
  }

  handlePageUrl(e) {
    const displayUrl = {
      url: e.target.value,
      status: 'warning',
      class: 'warning',
      type: 'display'
    };
    this.setState({displayUrl: displayUrl, error: ''});
  }

  handleWebsiteAuth(evt) {
    if (! validatePath(evt.target.value))
      return this.setState({error: "Please enter a valid path"});
  }

  deleteDisplayUrl(id, index) {
    this.props.removePageUrl(id, index);
  }

  renderColor(classname) {
    switch (classname) {
      case 'warning':
        return '#FFEB3B';
        break;
      case 'primary':
        return '#2196F3';
        break;
      case 'danger':
        return '#F44336';
        break;
      case 'success':
        return '#4CAF50';
        break;
      default:
        return '#ddd';
    }
  }

  renderLeads() {
    var displayUrls = this.props.displayUrls?this.props.displayUrls:[];
    return (
      <Table>
        <thead>
          <tr>
          {
            pagethArray.map((prop, key) => {
              return (
              <th  key={key}>{prop}</th>
              );
            })
          }
          </tr>
        </thead>
        <tbody>
          {
            displayUrls.map((displayUrl, i) => {
              return <tr>
                 <td className="serial">{i+1}</td>
                 <td className="url">{displayUrl.url}</td>
                 <td className="status"><span style={{backgroundColor:this.renderColor(displayUrl.class)}}></span></td>
                 <td><a href="javascript:;" onClick={() => this.deleteDisplayUrl(displayUrl._id, i)}><Glyphicon glyph="trash" /></a></td>
              </tr>
            })
          }
        </tbody>
      </Table>
    )
  }

  render(){
    const { error, displayUrl } = this.state;
    return (
      <div className="content display-page">
        <Grid fluid>
          <Tabs active="6" callbackFromParent={this.activeState}/>
          <div className="tabscontent">
            <Row>
              <Col md={12}>
                <h4>Details Of Your Notification Display Page</h4>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <p>Enter URL of page you display notifications on. </p>
                <small>This page must have:<br/>
                <i className="fas fa-angle-right"></i> Your Pixel installed (if not, Go to Install Pixel)</small>
                <p>&nbsp;</p>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div>
                  <div className="input-group">
                    <input
                    type="text"
                    className="form-control txtpageurl"
                    placeholder="Path URL  (For eg. /mypage, /register, /products, /design/front etc."
                    aria-describedby="urladd"
                    value={displayUrl.url}
                    onChange={this.handlePageUrl}
                    onBlur={this.handleWebsiteAuth.bind(this)}
                    onKeyUp={(e) => e.keyCode === 13?this.addPageUrl():null}/>
                    <span className="input-group-btn" id="urladd">
                      <Button
                      className="btn btn-raised btn-primary blue"
                      href="javascript:;"
                      onClick={this.addPageUrl}
                      type="submit"
                      >
                      Add
                      </Button>
                    </span>
                  </div>
                  <HelpBlock>
                    <p className="website-error">{error}</p>
                  </HelpBlock>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className="status">
                  <ul>
                    <li><span className="green"></span> Active</li>
                    <li><span className="blue"></span> Last seen over 24 hrs ago</li>
                    <li><span className="yellow"></span> Has Never Been Tracked</li>
                    <li><span className="red"></span> Invalid URL</li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <CardTable
                  content ={
                    <div className="text-center centertbl">
                      {this.renderLeads()}
                    </div>
                  }
                />
              </Col>
            </Row>
            <Row style={{padding: '5% 0%'}}>
              <Col md={6}>
                <div className=" text-left">
                  <Button bsStyle="primary" onClick={this.handleBackState}>
                    <Glyphicon glyph="chevron-left" />
                    Back
                  </Button>
                </div>
              </Col>
              <Col md={6}>
                <div className=" text-right">
                  <Button bsStyle="primary" onClick={this.handleNextState}>
                    <Glyphicon glyph="chevron-right" />
                    Finish
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rules: state.getIn(['rules', 'rule']),
  displayUrls: state.getIn(['pageurl', 'pageurls']),
  campaign: state.getIn(['campaign', 'campaign']),
});

const mapDispatchToProps = {
  fetchOneRules,
  fetchPageUrl,
  createPageUrl,
  removePageUrl,
  clearRules
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPage);
