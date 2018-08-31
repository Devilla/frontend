import React, { Component } from 'react';
import {
  Row,
  Col,
  HelpBlock
} from 'react-bootstrap';
import { connect } from 'react-redux';

import { Modal } from 'components';
import { pagethArray } from 'components/Template/data';
import { fetchDisplayUrl, createPageUrl, clearPageUrl, removePageUrl } from 'ducks/pageurl';

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
        error: '',
        campaignName: ''
      },
      domain: [],
      count: 0,
      showField: false,
      openClose: false,
      domainError: ''
    };
  }

  componentWillUnmount() {
    this.props.setActiveState(1);
    this.props.clearPageUrl();
  }

  componentDidMount() {
    window.scrollTo(0,0);
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
    if(this.state.displayUrl.url == '') {
      this.state.displayUrl.url='/';
      this.state.displayUrl.status = 'unverified';
      this.state.displayUrl.class = 'warning';
      this.state.displayUrl.type = 'display';
    }

    if(this.state.displayUrl.url[0]!=='/')
      this.state.displayUrl.url='/'+this.state.displayUrl.url;

    let displayUrl = this.state.displayUrl;
    displayUrl['rule'] = this.props.rules._id;
    displayUrl['domain'] = this.props.campaign.websiteUrl;
    displayUrl['campaignName'] = this.props.campaign.campaignName;

    this.props.createPageUrl(displayUrl);
    this.setState({displayUrl: {
      url: '',
      status: '',
      class: '',
      type: '',
      campaignName: ''
    }});
  }

  addDomainUrl = (domainUrl, index) => {
    if(this.state.domain[index].url == ''){
      if(this.state.count<1)
        this.state.domain[index].url='/';
      else {
        return this.setState({error: 'Please enter a valid path'});
      }
      this.state.count++;
    }

    if(this.state.domain[index].url[0]!=='/')
      this.state.domain[index].url='/'+this.state.domain[index].url;
    let domain = this.state.domain[index];
    domain['rule'] = this.props.rules._id;
    domain['domain'] = domainUrl;
    domain['campaignName'] = this.props.campaign.campaignName;
    this.props.createPageUrl(domain);
    domain = {
      url: '',
      status: '',
      class: '',
      type: '',
      rule: '',
      domain: '',
      campaignName: ''
    };
    this.setState({domain});
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

  handleDomainUrl = (e, index) => {
    const domainValue = {
      url: e.target.value,
      status: 'unverified',
      class: 'warning',
      type: 'display'
    };
    const domain = this.state.domain;
    domain[index] = domainValue;
    this.setState({domain, error: ''});
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
    let displayUrls = this.props.displayUrls?this.props.displayUrls.filter(lead => lead.type == 'display'):[];
    let { campaign } = this.props;
    return (
      <div className="Table table-striped">
        <div className="thead table-header flex">
          <div className="tr tab-row">
            {
              pagethArray.map((prop, key) => {
                return (
                  <div className="th col-md-2"  key={key}>{prop}</div>
                );
              })
            }
          </div>
        </div>
        <div>
          {
            displayUrls.map((displayUrl, i) => {
              return <div className="display-td tr" key={i}>
                <div className="display-url td col-md-2">{displayUrl.url}</div>
                <div className="td col-md-2">{displayUrl.domain === campaign.websiteUrl?'Domain':'Sub Domain'}</div>
                <div className="td col-md-2">{displayUrl.campaignName}</div>
                <div className="pl-4 status td col-md-2">
                  <span className="dot display" style={{backgroundColor: this.renderColor(displayUrl.status) }}>
                  </span>
                </div>
                <div className="td col-md-2"><a href="javascript:;"><i className="ml-3 icon-trash" onClick={() => this.deleteDisplayUrl(displayUrl._id, i, displayUrl.type)}></i></a></div>
              </div>;
            })
          }
        </div>
      </div>
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
      type: 'display'
    };

    addSubdomain(newDomain);
    this.openCloseModal();
    this.setState({newDomain:''});
  }

  openCloseModal = () => {
    this.setState({openClose: !this.state.openClose});
  }

  showModalDisplay= () => {
    const { openClose } = this.state;
    return (
      <Modal
        id='subdomainModal'
        title='Add Subdomain'
        modalSize='modal-md'
        openCloseModal={this.openCloseModal}
        style={
          {
            modalStyle: {
              display: openClose?'block':'none',
              opacity: openClose?1:0
            },
            alignModalStyle: {
              top: '100px'
            }
          }
        }
        content={
          <div className="modal-body row">
            <div className="col-md-8 pl-5">
              <input type="text"
                className="form-control"
                placeholder="Add your subdomain"
                onChange={this.handleSubdomain}
                onKeyUp={(e) => e.keyCode === 13?this.submitSubdomain():null}
              />
            </div>
            <div className="col-md-4">
              <span className="btn btn-primary  addsubdomain" onClick={this.submitSubdomain}>
               Add
              </span>
            </div>
          </div>
        }
      />
    );
  }

  renderSubDomain = () => {
    const { subdomain, campaign, removeSubDomain } = this.props;

    if(subdomain && subdomain.length)
      return subdomain.map((domain, index) => {
        return (
          <div key={domain.domainUrl} className="pl-4 input-group col-md-12">
            <label className="pt-2 pl-1 pr-3 text-muted url-field">{campaign
              ? 'http://'+domain.domainUrl
              : 'http://localhost:3000'}/</label>
            <input type="text"
              className="form-control"
              placeholder="eg. /mypage, /register, /products"
              aria-describedby="urladd"
              value={this.state.domain[index]?this.state.domain[index].url:''}
              onChange={(e) => this.handleDomainUrl(e, index)}
              onKeyUp={(e) => e.keyCode === 13?this.addDomainUrl(domain.domainUrl, index):null}
            />
            <span className="input-group-btn col-md-3" id="urladd">
              <span className="btn btn-primary nav nav-pills waves-light waves-effect addpath-btn pl-5 pr-5" onClick={() => this.addDomainUrl(domain.domainUrl, index)}>
                Add
              </span>
              <i className=" icon-trash trash ml-3" onClick={()=>{removeSubDomain(domain._id);}}></i>
            </span>
          </div>
        );
      });
    else
      return <div/>;
  }

  handleDisplayChange = (e) => {
    let newRule = this.props.rules;
    newRule['displayOnAllPages'] = e.target.checked;
    newRule['id'] = this.props.rules._id;
    delete newRule['_id'];

    this.props.updateRules(newRule);
  }

  render(){
    const { error, displayUrl } = this.state;
    const { rules } = this.props;

    return (
      <div className="display-container">

        <div className="tabscontent">
          <Row className="display-page-row">
            <Col md={12} className="display-page-header">
              <h4 className="lead text-center m-b-30 m-t-20">Where do you want to show notifications?</h4>
            </Col>
          </Row>
          <Row style={{justifyContent: 'center'}}>
            <Col md={10}>
              <div className="pl-4 input-group col-md-12">
                <label className="pt-2 pl-1 pr-3 text-muted url-field">{this.props.campaign
                  ? 'http://'+this.props.campaign.websiteUrl
                  : 'http://localhost:3000'}/</label>
                <input type="text"
                  className="form-control txtpageurl"
                  placeholder="eg. /mypage, /register, /products"
                  aria-describedby="urladd"
                  value={displayUrl.url}
                  onChange={this.handlePageUrl}
                  onKeyUp={(e) => e.keyCode === 13?this.addPageUrl():null}
                />
                <span className="input-group-btn col-md-3"
                  id="urladd">
                  <div className="btn-group campaign-dropdown">
                    <button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Add &nbsp;
                    </button>
                    <div className="dropdown-menu">
                      <div className="dropdown-item" id={1} onClick={this.addPageUrl} >
                        Add Path
                      </div>
                      <div className="dropdown-item" id={1} onClick={this.openCloseModal} >

                        Add SubDomain
                      </div>
                      <div className="dropdown-item" id={2} >
                        Add to All pages
                        <label className="checkbox-container">
                          <input type="checkbox" defaultChecked={rules.displayOnAllPages} onChange={this.handleDisplayChange} />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </Col>
          </Row>
          <Row style={{justifyContent: 'center'}}>
            <Col md={10}>
              {this.renderSubDomain()}
            </Col>
          </Row>
          {this.showModalDisplay()}
          <Row className="pt-2 pb-2 mb-2 path-error">
            <HelpBlock>
              <p className="website-error">{error}</p>
            </HelpBlock>
          </Row>
          <Row className="mb-3">
            <Col md={3}></Col>
            <Col md={6}>
              <div className="status">
                <ul className="mb-0">
                  <li>
                    <span className="dot success"></span>
                    <span className="status-name">Active</span>
                  </li>
                  <li>
                    <span className="dot primary"></span>
                    <span className="status-name">Seen 24hrs ago</span>
                  </li>
                  <li>
                    <span className="dot unverified"></span>
                    <span className="status-name">Never Been Tracked</span>
                  </li>
                  <li>
                    <span className="dot danger"></span>
                    <span className="status-name">Invalid URL</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3}></Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="centertbl">
                {this.renderLeads()}
              </div>
            </Col>
          </Row>

        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  displayUrls: state.getIn(['pageurl', 'display']),
  subdomain: state.getIn(['campaign', 'subdomain']),
  rules: state.getIn(['rules', 'rule'])
});

const mapDispatchToProps = {
  fetchDisplayUrl,
  createPageUrl,
  removePageUrl,
  clearPageUrl
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(DisplayPage);
