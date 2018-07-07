import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popup from 'react-popup';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';

import { fetchWebhook, createWebhook, deleteWebhook, clearWebhook } from 'ducks/webhooks';
import { updateCampaign } from 'ducks/campaign';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000
};

class Webhook extends Component {
  constructor() {
    super();
    this.state = {
      selectHook: null,
      campaignWebhook: null
    };
  }

  componentWillMount() {
    this.props.fetchWebhook(this.props.campaign._id);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, '================>nextProps');
    if(nextProps.campaign && nextProps.campaign.webookId) {
      this.setState({campaignWebhook: nextProps.campaign.webookId.name});
    }
  }

  clearHook = () => {
    this.setState({campaignWebhook: null});
  }

  selectWebhook = (e) => {
    this.setState({campaignWebhook: e.target.value});
    this.props.updateCampaign({
      id: this.props.campaign._id,
      webookId: e.target.value,
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
      campaignId: campaign._id
    };
    this.props.createWebhook(webhook);
  }

  addWebhook = (e) => {
    e.preventDefault();
    const that = this;
    Popup.create({
      title: 'Add New Webhook',
      content: <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Webhook Name"
          aria-describedby="basic-addon1"
          onChange={(e) => that.setState({webhookName: e.target.value})}
        />
      </div>,
      buttons: {
        left: [{
          text: 'Close',
          className: 'default',
          action: function () {
            Popup.close();
          }
        }],
        right: [{
          text: 'Save Webhook',
          className: 'primary save-webhook',
          action: function () {
            that.saveWebhook();
            Popup.close();
          }
        }]
      }
    });
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
    return (
      <div className="webhooks-container">
        <div className="card">
          <div className="card-header">
            Webhook Integrations
          </div>
          <div className="card-body">
            <h5 className="card-title">Type of Webhook Integration</h5>
            <div className="webhooks-types">
              <button className="btn btn-primary" onClick={() => this.selectHookType('Custom')} >Custom</button>
            </div>
          </div>
          {selectHook && campaignWebhook &&
            <div className="card-body">
              <h5 className="card-title">Selected {selectHook} Webhook</h5>
              <div>
                <div className="input-group mb-3">
                  <select className="custom-select" id="inputGroupSelect02" disabled>
                    <option>{this.props.campaign.webookId?this.props.campaign.webookId.name:null}</option>
                  </select>
                  <div className="input-group-append" onClick={this.clearHook}>
                    <label className="input-group-text custom-pointer" htmlFor="inputGroupSelect02">Select Different Webhook</label>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Webhook Endpoint"
                    aria-label="Webhook Endpoint"
                    aria-describedby="basic-addon2"
                    value={this.props.campaign.webookId?this.props.campaign.webookId.endpoint:null}
                    readOnly
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={() => this.copyEndpoint(this.props.campaign.webookId?this.props.campaign.webookId.endpoint:null)}>
                      <i className="mdi mdi-content-copy"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          }
          { selectHook && !campaignWebhook &&
            <div className="card-body">
              <h5 className="card-title">{selectHook} Webhooks</h5>
              <p className="card-text">With supporting webhook below you can capture client data.</p>
              <div>
                <div className="input-group mb-3">
                  <select className="custom-select" id="inputGroupSelect02" onChange={this.selectWebhook}>
                    <option>Choose webhook...</option>
                    {this.renderWebhooks()}
                  </select>
                  <div className="input-group-append" onClick={this.addWebhook}>
                    <label className="input-group-text" htmlFor="inputGroupSelect02">Add Webhook</label>
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
