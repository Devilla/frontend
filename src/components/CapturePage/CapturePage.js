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
import './CapturePage.scss';

class CapturePage extends Component {
  constructor(){
    super();
    this.state= {
      error: '',
      domainError: '',
      lead: {
        url: '',
        status: '',
        class: '',
        type: '',
        error: ''
      },
      domain: {
        url: '',
        status: '',
        class: '',
        type: '',
        error: '',
        domain: ''
      },
      openClose: false
    };
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

  fetchPathUrls = (rule) => {
    this.props.fetchLeadUrl('lead', rule._id);
  }

  handleNextState = () => {
    if(!this.props.leads.length)
      return this.setState({error: 'Add a capture path'});
    this.props.setActiveState(4);
  }

  handleBackState = () => {
    this.props.setActiveState(2);
  }

  addPageUrl = () => {
    if(this.state.lead.url == ''){
      if(this.state.count<1)
        this.state.lead.url='/';
      else {
        return this.setState({error: 'Please enter a valid path'});
      }
      this.state.count++;
    }

    if(this.state.lead.url[0]!=='/')
      this.state.lead.url='/'+this.state.lead.url;

    let lead = this.state.lead;
    lead['rule'] = this.props.rules._id;
    lead['domain'] = this.props.campaign.websiteUrl;
    this.props.createPageUrl(lead);
    this.setState({lead: {
      url: '',
      status: '',
      class: '',
      type: ''
    }});
  }

  addDomainUrl = (domainUrl) => {
    if(this.state.domain.url == ''){
      if(this.state.count<1)
        this.state.domain.url='/';
      else {
        return this.setState({error: 'Please enter a valid path'});
      }
      this.state.count++;
    }

    if(this.state.domain.url[0]!=='/')
      this.state.domain.url='/'+this.state.domain.url;
    let domain = this.state.domain;
    domain['rule'] = this.props.rules._id;
    domain['domain'] = domainUrl;
    this.props.createPageUrl(domain);
    this.setState({domain: {
      url: '',
      status: '',
      class: '',
      type: ''
    }});
  }

  handlePageUrl = (e) => {
    const lead = {
      url: e.target.value,
      status: 'unverified',
      class: 'warning',
      type: 'lead'
    };
    this.setState({lead: lead, error: ''});
  }

  handleDomainUrl = (e) => {
    const domain = {
      url: e.target.value,
      status: 'unverified',
      class: 'warning',
      type: 'lead'
    };
    this.setState({domain: domain, error: ''});
  }

  handleWebsiteAuth = (evt) => {
    if (! validatePath(evt.target.value))
      return this.setState({error: 'Please enter a valid path'});
  }

  deleteLead = (id, index, type) => {
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
                <td className="url">{lead.url}</td>
                <td className="ml-4 status">
                  <span className="dot ml-3" style={{backgroundColor: this.renderColor(lead.status) }}>
                  </span>
                </td>
                <td><a href="javascript:;"><i className="ml-3 icon-trash" onClick={() => this.deleteLead(lead._id, i, lead.type)}></i></a></td>
              </tr>;
            })
          }
        </tbody>
      </Table>
    );
  }

  handleSubdomain = (e) => {
    this.setState({newDomain: e.target.value, domainError: ''});
  }

  submitSubdomain = () => {
    const { addSubdomain, campaign, validatewebsite } = this.props;
    if(!this.state.newDomain)
      return this.setState({domainError: 'Enter subdomain url'});
    if(!validatewebsite(this.state.newDomain))
      return this.setState({domainError: 'Domain not valid'});
    const newDomain = {
      domainUrl: this.state.newDomain,
      trackingId: campaign.trackingId,
      campaign: campaign._id,
      type: 'lead'
    };
    addSubdomain(newDomain);
    this.openCloseModal();
  }

  openCloseModal = () => {
    this.setState({openClose: !this.state.openClose});
  }

  showModaCapture = () => {
    const { domainError, openClose } = this.state;
    return (
      <div className="modal fade show-modal" role="dialog" style={{ display: openClose?'block':'none', opacity: openClose?1:0 }}>
        <div className="modal-dialog">
          <div className="modal-content align-modal">
            <div className="modal-header">
              <h4 className="modal-title">Add SubDomain</h4>
            </div>
            <div className="modal-body row">
              <div className="col-md-9">
                <input type="text"
                  className="form-control"
                  placeholder="Add your subdomain url"
                  onChange={this.handleSubdomain}
                />
                <HelpBlock className="text-center">
                  <p className="website-error">{domainError}</p>
                </HelpBlock>
              </div>
              <div>
                <span className="btn btn-primary addsubdomain" data-dismiss="modal" onClick={this.submitSubdomain}>
                 Add
                </span>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary close-btn" data-dismiss="modal" onClick={this.openCloseModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderSubDomain = () => {
    if(this.props.subdomain && this.props.subdomain.length)
      return this.props.subdomain.map(domain => {
        return (
          <div key={domain.domainUrl} className="pl-4 input-group col-md-12">
            <label className="pt-2 pl-1 pr-3 text-muted url-field">{this.props.campaign
              ? 'http://'+domain.domainUrl
              : 'http://localhost:3000'}/</label>
            <input type="text"
              className="form-control"
              placeholder="eg. /mypage, /register, /products"
              aria-describedby="urladd"
              value={this.state.domain.url}
              onChange={this.handleDomainUrl}
              onBlur={this.handleWebsiteAuth.bind(this)}
              onKeyUp={(e) => e.keyCode === 13?this.addPageUrl():null}
            />
            <span className="input-group-btn col-md-3" id="urladd">
              <span className="btn btn-primary nav nav-pills waves-light waves-effect number pl-5 pr-5" onClick={() => this.addDomainUrl(domain.domainUrl)}>
                Add
              </span>
              <i className=" icon-trash trash"></i>
            </span>
          </div>
        );
      });
    else
      return <div/>;
  }

  render() {
    const { error, lead } = this.state;
    return (
      <div className="CapturePage-container">
        <Grid fluid>
          <div className="tabscontent">
            <Row>
              <Col md={12}>
                <h4 className="lead text-center m-b-30 m-t-20">Submit your conversion page</h4>
              </Col>
            </Row>
            <Row>
              <Col md={10}>
                <div className="pl-4 input-group col-md-12">
                  <label className="pt-2 pl-1 pr-3 text-muted url-field">{this.props.campaign
                    ? 'http://'+this.props.campaign.websiteUrl
                    : 'http://localhost:3000'}/</label>
                  <input type="text"
                    className="form-control"
                    placeholder="eg. /mypage, /register, /products"
                    aria-describedby="urladd"
                    value={lead.url}
                    onChange={this.handlePageUrl}
                    onBlur={this.handleWebsiteAuth.bind(this)}
                    onKeyUp={(e) => e.keyCode === 13?this.addPageUrl():null}
                  />
                  <span className="input-group-btn col-md-3" id="urladd">
                    <span className="btn btn-primary nav nav-pills waves-light waves-effect number pl-5 pr-5" onClick={this.addPageUrl}>
                      Add
                    </span>
                  </span>
                </div>
              </Col>
              <Col md={2}>
                <span className="btn btn-primary  subdomain" onClick={this.openCloseModal} >
                  <i className=" mdi mdi-plus-circle-outline"></i>&nbsp;Add SubDomain
                </span>
              </Col>
            </Row>
            <Row>
              <Col md={10}>
                {this.renderSubDomain()}
              </Col>
            </Row>
            {this.showModaCapture()}
            <Row className="pt-2  path-error">
              <HelpBlock className="text-center">
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

            <div className=" float-left ">
              <button type="button" className="btn btn-primary  waves-effect  capturebtn-back" onClick={this.handleBackState}><i className="icon-arrow-left pr-2"></i>Back</button>
            </div>
            <div className=" float-right ">
              <button type="button" className="btn btn-primary waves-effect ml-2 pl-4 pr-3 capturebtn-next" onClick={this.handleNextState}>Next<i className="icon-arrow-right pl-2"></i> </button>
            </div>
            <div className="clearfix"></div>
          </div>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.getIn(['pageurl', 'lead']),
  subdomain: state.getIn(['campaign', 'subdomain'])
});

const mapDispatchToProps = {
  fetchLeadUrl,
  createPageUrl,
  removePageUrl,
  clearPageUrl
};
export default connect(mapStateToProps, mapDispatchToProps)(CapturePage);
