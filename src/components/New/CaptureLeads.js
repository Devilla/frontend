import React, { Component } from 'react';
import {
    Grid,
    Row,
    Col,
    Table,
    ControlLabel,
    InputGroup,
    FormControl,
    ButtonToolbar,
    Button,
    Glyphicon
} from 'react-bootstrap';
import { connect } from 'react-redux';
import CardHeader from 'components/Template/card-with-header'
import FormInputs from 'components/Template/FormTemp';
import Tabs from 'components/Template/tab'
import CardTable from 'components/Template/card-with-page-table'
import { pagethArray, pagetdArray } from 'components/Template/data'
import { fetchPageUrl, createPageUrl, clearPageUrl, removePageUrl } from 'ducks/pageurl';
import { fetchOneRules, clearRules } from 'ducks/rules';


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
    if(!this.state.lead && !this.state.lead.url)
      return this.setState({error: "Please enter a valid url"});
    let lead = this.state.lead;
    lead['rule'] = this.props.rules._id;
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
      class: '',
      type: 'lead'
    };
    this.setState({lead: lead});
  }

  deleteLead(id, index) {
    this.props.removePageUrl(id, index);
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
                 <td className="status"><span className={leads.class}></span> {leads.status}</td>
                 <td><a href="javascript:;" onClick={() => this.deleteLead(lead._id, i)}><Glyphicon glyph="trash" /></a></td>
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
          <Tabs active="2" callbackFromParent ={this.activeState}/>
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
                <div className="input-group">
                  <input type="text" className="form-control txtpageurl" placeholder="Page URL" aria-describedby="urladd" value={this.state.lead.url} onChange={this.handlePageUrl}/>
                  <span className="input-group-btn" id="urladd">
                    <a className="btn btn-raised btn-primary blue" href="javascript:;" onClick={this.addPageUrl}>Add</a>
                  </span>
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

            <Row>
              <div className="text-center">
                <Col md={12}>
                <p>&nbsp;</p> <p>&nbsp;</p>
                Having problems with Auto Lead Capture in your current setup? &nbsp;&nbsp; <a href="javascript:;" className="btn blue btn-sm">Use Webhook Integration</a>
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
                  <Button bsStyle="primary" onClick={this.saveRules}>
                    <Glyphicon glyph="chevron-right" />
                    Next
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
