import React, { Component } from 'react';
import {
    Grid,
    Row,
    Col,
    Table,
    Button,
    Glyphicon
} from 'react-bootstrap';
import { connect } from 'react-redux';
import Tabs from 'components/Template/tab'
import CardTable from 'components/Template/card-with-page-table'
import { pagethArray } from 'components/Template/data'
import { fetchPageUrl, createPageUrl, clearPageUrl, removePageUrl } from 'ducks/pageurl';
import { fetchOneRules, clearRules } from 'ducks/rules';
import { validatePath } from 'components/Common/function';
import { ToastContainer, toast } from 'react-toastify';
import { css, checked } from 'glamor';
import $ from 'jquery';

class CaptureLeads extends Component{
  constructor(){
    super();
    this.state= {
      error: '',
      lead: {
        url: '',
        status: '',
        class: '',
        type: ''
      }
    };
    this.handleNextState = this.handleNextState.bind(this);
    this.handleBackState = this.handleBackState.bind(this);
    this.activeState = this.activeState.bind(this);
    this.addPageUrl = this.addPageUrl.bind(this);
    this.handlePageUrl = this.handlePageUrl.bind(this);
    this.deleteLead = this.deleteLead.bind(this);
  }

  componentWillMount() {
    this.setActiveState({active: 5});
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
    this.props.fetchPageUrl('lead', rule._id);
  }

  activeState(val){
    this.setActiveState(val);
  }

  handleNextState() {
    this.setActiveState({active: 6});
  }

  handleBackState() {
    this.setActiveState({active: 4});
  }

  setActiveState(val) {
    var data = {'tab' : val};
    this.props.callbackFromParent(data);
  }

  addPageUrl() {
    if(this.state.lead.url == '' || !validatePath(this.state.lead.url))
      return this.setState({error: "Please enter a valid path"});
    let lead = this.state.lead;
    // lead['rule'] = this.props.rules._id;
    this.props.createPageUrl(lead);
    this.setState({lead: {
      url: '',
      status: '',
      class: '',
      type: ''
    }});
  }

  handlePageUrl(e) {
    const lead = {
      url: e.target.value,
      status: 'undefined',
      class: 'warning',
      type: 'lead'
    };
    this.setState({lead: lead});
  }
  handleWebsiteAuth(evt) {
    if (! validatePath(evt.target.value)) {
      checkUrl:true
      toast("Enter valid path", {
        position: toast.POSITION.BOTTOM_LEFT,
        className: css({background: "#dd5258", color: '#fff'}),
        autoClose: 2000
      });

    } else {
      $('.error-bg').fadeOut().html('')
    }
  }

  deleteLead(id, index) {
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
    var leads = this.props.leads?this.props.leads:[];
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
            leads.map((lead, i) => {
              return <tr>
                 <td className="serial">{i+1}</td>
                 <td className="url">{lead.url}</td>
                 <td className="status"><span style={{backgroundColor:this.renderColor(lead.class)}}></span></td>
                 <td><a href="#" onClick={() => this.deleteLead(lead._id, i)}><Glyphicon glyph="trash" /></a></td>
              </tr>
            })
          }
        </tbody>
      </Table>
    )
  }

  render(){
    return (
      <div className="content">
        <Grid fluid>
          <Tabs active="5" callbackFromParent={this.activeState}/>
          <div className="tabscontent">
            <Row>
              <Col md={12}>
                <h4>Details Of Your Lead Capturing Page</h4>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <p>Enter URL of page you are capturing conversions on. </p>
                <small>This page must have:<br/>
                <i className="fas fa-angle-right"></i> An email form field<br/>
                <i className="fas fa-angle-right"></i> Your Pixel installed (if not, Go to Install Pixel)</small>
                <p>&nbsp;</p>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <form className="input-group">
                  <input type="text"
                   className="form-control txtpageurl" 
                   placeholder="Path URL  (For eg. /mypage, /register, /products, /design/front etc."
                   aria-describedby="urladd" 
                   value={this.state.lead.url} 
                   onChange={this.handlePageUrl} 
                   onBlur={this.handleWebsiteAuth.bind(this)}
                   onKeyUp={(e) => e.keyCode === 13?this.addPageUrl():null}

                  />
                  <span className="input-group-btn"
                   id="urladd">
                    <a className="btn btn-raised btn-primary blue" 
                    href="#" onClick={this.addPageUrl}>Add</a>
                  </span>
                </form>
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
            <Row>
              <div className="text-center">
                <Col md={12}>
                <p>&nbsp;</p> <p>&nbsp;</p>
                Having problems with Auto Lead Capture in your current setup? &nbsp;&nbsp; <a 
                href="#" className="btn blue btn-sm">Use Webhook Integration</a>
                </Col>
              </div>
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
                    Next
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Grid>
        <ToastContainer hideProgressBar={true}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rules: state.getIn(['rules', 'rule']),
  leads: state.getIn(['pageurl', 'pageurls']),
  campaign: state.getIn(['campaign', 'campaign']),
});

const mapDispatchToProps = {
  fetchOneRules,
  fetchPageUrl,
  createPageUrl,
  removePageUrl,
  clearRules
};

export default connect(mapStateToProps, mapDispatchToProps)(CaptureLeads);
