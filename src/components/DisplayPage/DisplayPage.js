import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Table,
  HelpBlock
} from 'react-bootstrap';
import { connect } from 'react-redux';
import CardTable from 'components/Template/card-with-page-table';
import { pagethArray } from 'components/Template/data';
import { fetchDisplayUrl, createPageUrl, clearPageUrl, removePageUrl } from 'ducks/pageurl';
import { validatePath } from 'components/Common/function';

import './DisplayPage.scss';

class DisplayPage extends Component {
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
      count: 0,
    };
  }

  componentWillUnmount() {
    this.props.setActiveState(1);
    this.props.clearPageUrl();
  }

  componentDidMount() {
    if(this.props.rules)
      this.fetchPathUrls(this.props.rules);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.rules != nextProps.rules)
      this.fetchPathUrls(nextProps.rules);
  }

  fetchPathUrls = (rule) => {
    this.props.fetchDisplayUrl('display', rule._id);
  }

  handleNextState = () => {
    if(!this.props.displayUrls.length)
      return this.setState({error: 'Add a display path'});
    this.props.setActiveState(5);
  }

  handleBackState = () => {
    this.props.setActiveState(3);
  }

  addPageUrl = () => {

    if(this.state.displayUrl.url == ''){
      if(this.state.count<1)
        this.state.displayUrl.url='/';
      else {
        return this.setState({error: 'Please enter a valid path'});
      }
    }
    if(this.state.displayUrl.url[0]!=='/')
      this.state.displayUrl.url='/'+this.state.displayUrl.url;

    let displayUrl = this.state.displayUrl;
    displayUrl['rule'] = this.props.rules._id;
    this.props.createPageUrl(displayUrl);
    this.setState({displayUrl: {
      url: '',
      status: '',
      class: '',
      type: ''
    }});
  }

  handlePageUrl = (e) => {
    const displayUrl = {
      url: e.target.value,
      status: 'unverified',
      class: 'warning',
      type: 'display'
    };
    this.setState({displayUrl: displayUrl, error: ''});
  }

  handleWebsiteAuth = (evt) => {
    if (! validatePath(evt.target.value))
      return this.setState({error: 'Please enter a valid path'});
  }

  deleteDisplayUrl = (id, index, type) => {
    this.props.removePageUrl(id, index, type);
  }

  renderColor(classname) {
    switch (classname) {
      case 'unverified':
        return '#FFEB3B';
      case 'primary':
        return '#2196F3';
      case 'danger':
        return '#F44336';
      case 'success':
        return '#4CAF50';
      default:
        return '#ddd';
    }
  }

  renderLeads = () => {
    var displayUrls = this.props.displayUrls?this.props.displayUrls.filter(lead => lead.type == 'display'):[];
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
              return <tr key={i}>
                <td className="display-url">{displayUrl.url}</td>
                <td className="pl-4 status">
                  <span className="dot display" style={{backgroundColor: this.renderColor(displayUrl.status) }}>
                  </span>
                </td>
                <td><a href="javascript:;"><i className="ml-3 icon-trash" onClick={() => this.deleteDisplayUrl(displayUrl._id, i, displayUrl.type)}></i></a></td>
              </tr>;
            })
          }
        </tbody>
      </Table>
    );
  }

  render(){
    const { error, displayUrl } = this.state;
    return (
      <div>
        <Grid fluid>
          <div className="tabscontent">
            <Row>
              <Col md={12}>
                <h4 className="lead text-center m-b-30 m-t-20">Where do you want to show notifications?</h4>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <div className="ml-5 pl-4 input-group col-md-12">
                  <label className="pt-2 pl-1 pr-3 text-muted">{this.props.campaign
                    ? 'http://'+this.props.campaign.websiteUrl
                    : 'http://localhost:3000'}/</label>
                  <input type="text"
                    className="form-control txtpageurl"
                    placeholder="eg. /mypage, /register, /products"
                    aria-describedby="urladd"
                    value={displayUrl.url}
                    onChange={this.handlePageUrl}
                    onBlur={this.handleWebsiteAuth.bind(this)}
                    onKeyUp={(e) => e.keyCode === 13?this.addPageUrl():null}
                  />
                  <span className="input-group-btn col-md-3"
                    id="urladd">
                    <span className="btn btn-primary nav nav-pills waves-light waves-effect addpath-btn pl-5 pr-5"
                      onClick={this.addPageUrl}>Add</span>
                  </span>
                </div>
              </Col>
              <Col md={4}>
                <i className=" mdi mdi-plus-circle-outline"></i>
                <span className="btn btn-primary  subdomain">
                  Add SubDomain
                </span>
              </Col>
            </Row>

            <Row className="pt-2 path-error">
              <HelpBlock>
                <p className="website-error">{error}</p>
              </HelpBlock>
            </Row>
            <Row>
              <Col md={12}>
                <div className="status">
                  <ul>
                    <li>
                      <span className="dot success"></span>
                      <span className="status-name">Active</span>
                    </li>
                    <li>
                      <span className="dot primary"></span>
                      <span className="status-name">Last seen over 24 hrs ago</span>
                    </li>
                    <li>
                      <span className="dot unverified"></span>
                      <span className="status-name">Has Never Been Tracked</span>
                    </li>
                    <li>
                      <span className="dot danger"></span>
                      <span className="status-name">Invalid URL</span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <CardTable
                  content ={
                    <div className="centertbl">
                      {this.renderLeads()}
                    </div>
                  }
                />
              </Col>
            </Row>
            <div className="float-left">
              <button type="button" className="btn btn-primary waves-effect number displaybtn-back" onClick={this.handleBackState}><i className="icon-arrow-left pr-2"></i>Back</button>
            </div>
            <div className="float-right">
              <button type="button" className="btn btn-primary  waves-effect number pl-4 pr-3 displaybtn-finish" onClick={this.handleNextState}>Next<i className="icon-arrow-right pl-2"></i> </button>
            </div>
            <div className="clearfix"></div>
          </div>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  displayUrls: state.getIn(['pageurl', 'display'])
});

const mapDispatchToProps = {
  fetchDisplayUrl,
  createPageUrl,
  removePageUrl,
  clearPageUrl
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPage);
