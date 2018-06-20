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
import { fetchLeadUrl, createPageUrl, clearPageUrl, removePageUrl } from 'ducks/pageurl';
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
      <div className="">
        <Grid fluid>
          <div className="tabscontent">
            <Row>
              <Col md={12}>
                <h4 className="lead text-center m-b-30 m-t-20">Details Of Your Lead Capturing Page</h4>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <label className="text-muted">Enter URL of page you are capturing conversions on. </label>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className="input-group col-md-12">
                  <input type="text"
                    className="form-control txtpageurl"
                    placeholder="Path URL  (For eg. /mypage, /register, /products, /design/front etc."
                    aria-describedby="urladd"
                    value={lead.url}
                    onChange={this.handlePageUrl}
                    onBlur={this.handleWebsiteAuth.bind(this)}
                    onKeyUp={(e) => e.keyCode === 13?this.addPageUrl():null}
                  />
                  <span className="input-group-btn col-md-6"
                    id="urladd">
                    <span className="btn btn-raised btn-primary blue pl-5 pr-5"
                      onClick={this.addPageUrl}>Add</span>
                  </span>
                </div>
                <HelpBlock>
                  <p className="website-error">{error}</p>
                </HelpBlock>
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
                <Col md={12} className="text-muted">
                  <p>&nbsp;</p> <p>&nbsp;</p>
                Having problems with Auto Lead Capture in your current setup? &nbsp;&nbsp; <a
                    href="#" className="btn blue btn-sm">Use Webhook Integration</a>
                </Col>
              </div>
            </Row>
            <div className=" float-left ">
              <button type="button" className="btn btn-custom  waves-light waves-effect number " onClick={this.handleBackState}><i className="icon-arrow-left pr-2"></i>Back</button>
            </div>
            <div className=" float-right ">
              <button type="button" className="btn btn-custom nav nav-pills  waves-light waves-effect number ml-2 pl-4 pr-4" onClick={this.handleNextState}>Next<i className="icon-arrow-right pl-2"></i> </button>
            </div>
            <div className="clearfix"></div>
          </div>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.getIn(['pageurl', 'lead'])
});

const mapDispatchToProps = {
  fetchLeadUrl,
  createPageUrl,
  removePageUrl,
  clearPageUrl
};

export default connect(mapStateToProps, mapDispatchToProps)(CapturePage);
