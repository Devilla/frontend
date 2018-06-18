import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Table,
  HelpBlock
} from 'react-bootstrap';
import CardTable from 'components/Template/card-with-page-table';
import { pagethArray } from 'components/Template/data';
import { validatePath } from 'components/Common/function';

class CapturePage extends Component{
  constructor(){
    super();
    this.state= {
      error: '',
      lead: {
        url: '',
        status: '',
        class: '',
        type: '',
        error: ''
      }
    };
    this.handleNextState = this.handleNextState.bind(this);
    this.handleBackState = this.handleBackState.bind(this);
    this.addPageUrl = this.addPageUrl.bind(this);
    this.handlePageUrl = this.handlePageUrl.bind(this);
    this.deleteLead = this.deleteLead.bind(this);
  }

  componentWillUnmount() {
    this.props.setActiveState(1);
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
    this.props.fetchLeadUrl('lead', rule._id);
  }

  handleNextState() {
    if(!this.props.leads.length)
      return this.setState({error: 'Add a display path'});
    this.props.setActiveState(5);
  }

  handleBackState() {
    this.props.setActiveState(3);
  }


  addPageUrl() {
    if(this.state.lead.url == '' || !validatePath(this.state.lead.url))
      return this.setState({error: 'Please enter a valid path'});
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
      class: 'warning',
      type: 'lead'
    };
    this.setState({lead: lead, error: ''});
  }

  handleWebsiteAuth(evt) {
    if (! validatePath(evt.target.value))
      return this.setState({error: 'Please enter a valid path'});
  }

  deleteLead(id, index, type) {
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
    var leads = this.props.leads?this.props.leads.filter(lead => lead.type == 'lead'):[];
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
              return <tr key={i}>
                <td className="serial">{i+1}</td>
                <td className="url">{lead.url}</td>
                <td className="status"><span style={{backgroundColor:this.renderColor(lead.class)}}></span></td>
                <td><a href="javascript:;"><i className="ml-3 icon-trash" onClick={() => this.deleteLead(lead._id, i, lead.type)}></i></a></td>
              </tr>;
            })
          }
        </tbody>
      </Table>
    );
  }

  render(){
    const { error, lead } = this.state;
    return (
      <div className="content">
        <Grid fluid>
          <div className="tabscontent">
            <Row>
              <Col md={12}>
                <h4 className="lead text-center m-b-30 m-t-20">Details Of Your Lead Capturing Page</h4>
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
                  <input type="text"
                    className="form-control txtpageurl"
                    placeholder="Path URL  (For eg. /mypage, /register, /products, /design/front etc."
                    aria-describedby="urladd"
                    value={lead.url}
                    onChange={this.handlePageUrl}
                    onBlur={this.handleWebsiteAuth.bind(this)}
                    onKeyUp={(e) => e.keyCode === 13?this.addPageUrl():null}
                  />
                  <span className="input-group-btn"
                    id="urladd">
                    <a className="btn btn-raised btn-primary blue"
                      href="#" onClick={this.addPageUrl}>Add</a>
                  </span>
                </div>
                <HelpBlock>
                  <p className="website-error">{error}</p>
                </HelpBlock>
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
            <div className="m-t-50 float-right align-install-btn">
              <button type="button" className="btn btn-custom  waves-light waves-effect number " onClick={this.handleBackState}>Previous</button>
              <button type="button" className="btn btn-custom  waves-light waves-effect number ml-2 pl-4 pr-4" onClick={this.handleNextState}>Next </button>
            </div>
            <div className="clearfix"></div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default CapturePage;
