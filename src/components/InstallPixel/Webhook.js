import React, { Component } from 'react';
import Popup from 'react-popup';

class Webhook extends Component {
  constructor() {
    super();
    this.state = {
      selectHook: null,
      campaignWebhook: null
    };
  }

  clearHook = () => {
    this.setState({campaignWebhook: null});
  }

  selectWebhook = (e) => {
    this.setState({campaignWebhook: e.target.value});
  }

  selectHookType = (target) => {
    this.setState({
      selectHook: target,
      campaignWebhook: null
    });
  }

  addWebhook(e) {
    e.preventDefault();

    Popup.create({
      title: 'Add New Webhook',
      content: <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
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
            Popup.close();
          }
        }]
      }
    });
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
              <button className="btn btn-primary" onClick={() => this.selectHookType('Zapier')} >Zapier</button>
              <button className="btn btn-primary" onClick={() => this.selectHookType('Custom')} >Custom</button>
            </div>
          </div>
          {selectHook && campaignWebhook &&
            <div className="card-body">
              <h5 className="card-title">Selected {selectHook} Webhook</h5>
              <div>
                <div className="input-group mb-3">
                  <select className="custom-select" id="inputGroupSelect02" disabled>
                    <option selected>{campaignWebhook}</option>
                  </select>
                  <div className="input-group-append" onClick={this.clearHook}>
                    <label className="input-group-text" htmlFor="inputGroupSelect02">Select Different Webhook</label>
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
                    <option selected>Choose webhook...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
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

export default Webhook;
