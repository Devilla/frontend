import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Table,
  HelpBlock
} from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import CardTable from 'components/Template/card-with-page-table';
import { pagethArray } from 'components/Template/data';
import { fetchDisplayUrl, createPageUrl, clearPageUrl, removePageUrl } from 'ducks/pageurl';
import { validatePath } from 'components/Common/function';
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
    this.addPageUrl = this.addPageUrl.bind(this);
    this.handlePageUrl = this.handlePageUrl.bind(this);
    this.deleteDisplayUrl = this.deleteDisplayUrl.bind(this);
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

  fetchPathUrls(rule) {
    this.props.fetchDisplayUrl('display', rule._id);
  }

  handleNextState() {
    if(!this.props.displayUrls.length)
      return this.setState({error: 'Add a display path'});
    Popup.create({
      title: 'Campaign is Live',
      buttons: {
        right: [{
          text: 'Finish',
          className: 'default',
          action: function () {
            browserHistory.push('/dashboard');
            Popup.close();
          }
        }]
      }
    });
  }

  handleBackState() {
    this.props.setActiveState(4);
  }

  addPageUrl() {
    if(this.state.displayUrl.url == '')
      return this.setState({error: 'Please enter a valid path'});
    if(this.state.displayUrl.url[0]!=='/')
      this.state.displayUrl.url='/'+this.state.displayUrl.url;

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
      return this.setState({error: 'Please enter a valid path'});
  }

  deleteDisplayUrl(id, index, type) {
    this.props.removePageUrl(id, index, type);
  }

  renderColor(classname) {
    switch (classname) {
      case 'warning':
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

  renderLeads() {
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
                <td className="url">{displayUrl.url}</td>
                <td className="pl-4 status">
                  <span className="dot"><i className="p-1 fi-check"></i></span>
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
              <Col md={1}></Col>
              <Col md={11}>
                <div className="ml-5 pl-4 input-group col-md-8">
                  <label className="pt-2 pl-1 pr-3 text-muted">google.com/</label>
                  <input type="text"
                    className="form-control txtpageurl"
                    placeholder="eg. /mypage, /register, /products"
                    aria-describedby="urladd"
                    value={displayUrl.url}
                    onChange={this.handlePageUrl}
                    onBlur={this.handleWebsiteAuth.bind(this)}
                    onKeyUp={(e) => e.keyCode === 13?this.addPageUrl():null}
                  />
                  <span className="input-group-btn col-md-2"
                    id="urladd">
                    <span className="btn btn-raised btn-primary blue pl-5 pr-5"
                      onClick={this.addPageUrl}>Add</span>
                  </span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={2}></Col>
              <Col md={10}>
                <label className="ml-4 pl-5 pt-1 label-url text-muted">(Enter URL where you want to show notifications) </label>
              </Col>
            </Row>
            <Row>
              <HelpBlock>
                <p className="website-error">{error}</p>
              </HelpBlock>
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
              <button type="button" className="btn btn-custom waves-light waves-effect number " onClick={this.handleBackState}><i className="icon-arrow-left pr-2"></i>Back</button>
            </div>
            <div className="float-right">
              <button type="button" className="btn btn-custom waves-light waves-effect number ml-2 pl-4 pr-4" onClick={this.handleNextState}>Next<i className="icon-arrow-right pl-2"></i> </button>
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
