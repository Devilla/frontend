import React, { Component } from 'react';
import { connect } from 'react-redux';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import { fetchWebhook, createWebhook, deleteWebhook, clearWebhook } from 'ducks/webhooks';
import { updateCampaign } from 'ducks/campaign';
import './Webhook.scss';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};

class Webhook extends Component {
  constructor() {
    super();
    this.state = {
      selectHook: null,
      campaignWebhook: null,
      webhookName: ''
    };
  }

  componentWillMount() {
    this.props.fetchWebhook(this.props.campaign._id);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.campaign && nextProps.campaign.webhooks && this.state.campaignWebhook !== undefined)
      this.setState({campaignWebhook: nextProps.campaign.webhooks.name});
  }

  clearHook = () => {
    this.setState({campaignWebhook: undefined});
  }

  selectWebhook = (e) => {
    this.setState({campaignWebhook: e.target.value});
    this.props.updateCampaign({
      id: this.props.campaign._id,
      webhooks: e.target.value,
      singleCampaign: true
    });
  }

  selectHookType = (target) => {
    this.setState({
      selectHook: target
    });
  }

  saveWebhook = () => {
    const { campaign } = this.props;
    const { webhookName, selectHook } = this.state;
    const webhook = {
      name: webhookName,
      type: selectHook,
      trackingId: campaign.trackingId,
      campaign: campaign._id
    };
    this.props.createWebhook(webhook);
    this.setState({campaignWebhook: undefined});
  }

  popupContent = () => {
    return (
      <div className="modal fade show-modal" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content align-modal">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Add new Webhook</h4>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Webhook Name"
                  aria-label="Webhook Name"
                  aria-describedby="basic-addon1"
                  onChange={(e) => this.setState({webhookName: e.target.value})}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary save-btn" data-dismiss="modal" onClick={() => this.saveWebhook()}>Save Webhook</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderWebhooks = () => {
    return this.props.webhooks.map(webhook => {
      return <option key={webhook._id} value={webhook._id}>{webhook.name}</option>;
    });
  }

  copyEndpoint = (value) => {
    copy(value, {
      debug: true
    });
    return toast('Endpoint copied', toastConfig);
  }

  render() {
    const { campaignWebhook, selectHook } = this.state;
    const { campaign } = this.props;
    return (
      <div className="webhooks-container">
        <div className="card webhook-section col-md-8">
          <div className="card-header">
            Webhook Integrations
          </div>
          <div className="card-body ">
            <h5 className="card-title">What type of Webhook would you like to use?</h5>
            <div className="webhooks-types">
              <button className="btn btn-primary" onClick={() => this.selectHookType('Custom')} ><i className="fi-shuffle"></i>&nbsp;Custom Webhook</button>
            </div>
          </div>
          {selectHook && campaignWebhook &&
            <div className="card-body">
              <h5 className="card-title">Selected {selectHook} Webhook</h5>
              <div className="row">
                <div className="input-group mb-3 col-md-12">
                  <select className="custom-select" id="inputGroupSelect02" disabled>
                    <option>{campaign.webhooks?campaign.webhooks.name:null}</option>
                  </select>
                  <div className="input-group-append col-md-4" onClick={this.clearHook}>
                    <span className="btn btn-primary input-group-text custom-pointer" htmlFor="inputGroupSelect02">Choose Another</span>
                  </div>
                </div>
                <div className="input-group mb-3 pl-3 col-md-11">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Webhook Endpoint"
                    aria-label="Webhook Endpoint"
                    aria-describedby="basic-addon2"
                    value={campaign.webhooks?campaign.webhooks.endpoint:null}
                    readOnly
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary copyicon-btn " type="button" onClick={() => this.copyEndpoint(campaign.webhooks?campaign.webhooks.endpoint:null)}>
                      <i className="mdi mdi-content-copy"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          }
          { selectHook && !campaignWebhook &&
            <div className="card-body ">
              <p className="card-text">With supporting webhook below you can capture client data.</p>
              <div className="row">
                <div className="input-group mb-3 col-md-12">
                  <select className="custom-select" id="inputGroupSelect02" onChange={this.selectWebhook}>
                    <option>Choose webhook...</option>
                    {this.renderWebhooks()}
                  </select>
                  <div className="input-group-append col-md-4">
                    <button type="button" className="btn btn-primary addchannel"  htmlFor="inputGroupSelect02" data-toggle="modal" data-target="#myModal" ><i className="fi-plus"></i>&nbsp;Add Channels</button>
                    {this.popupContent()}
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  webhooks: state.getIn(['webhooks', 'webhooks'])
});

const mapDispatchToProps = {
  fetchWebhook,
  createWebhook,
  deleteWebhook,
  updateCampaign,
  clearWebhook
};

export default connect(mapStateToProps, mapDispatchToProps)(Webhook);
