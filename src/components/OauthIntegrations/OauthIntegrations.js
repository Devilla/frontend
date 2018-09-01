import React , { Component } from 'react';
import { Link } from 'react-router';

import { Modal } from 'components';

class OauthIntegrations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedInteragtion: '',
      shopName: '',
      modalId: '',
      modalTitle: '',
      modalContent: '',
      modalFooter: '',
      modalStyle: '',
      modalSize: '',
      footerLink: '',
      displayModal: ''
    };

    this.plugins = [
      {
        name: 'shopify',
        clientId: '5a071151e69836040802ccfa8cca93e1',//process.env.SHOPIFY_CLIENT_ID
        clientSecret: 'b9e738cc827a0f6d2a6193368de653e6',//process.env.SHOPIFY_CLIENT_SECRET
        redirectUrl: 'http://localhost:3000/oauth-integration/verification/shopify/',
        type: 'modal',
        scopes: 'read_script_tags,write_script_tags',
        method: this.renderShopifyModal
      }
    ];
  }

  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value});
  }

  renderShopifyModal = (selectedInteragtion, displayModal) => {
    const { campaign } = this.props;
    const api_key = selectedInteragtion.clientId;
    const scopes = selectedInteragtion.scopes;
    const redirect_uri = selectedInteragtion.redirectUrl;
    const nonce = campaign? campaign.trackingId:'123456';

    this.setState({
      modalId: 'shopifyModal',
      modalTitle: 'Shopify',
      modalContent: (
        <div className="modal-body">
          <input
            type="text"
            className="form-control"
            id="shopName"
            placeholder="Enter Shop Name"
            onChange={this.handleChange}
          />
        </div>
      ),
      modalFooter: (
        <div className="modal-footer">
          <Link className="btn btn-primary" href={this.state.shopName?`https://${this.state.shopName}.myshopify.com/admin/oauth/authorize?client_id=${api_key}&scope=${scopes}&redirect_uri=${redirect_uri}&state=${nonce}`:''}>Continue</Link>
        </div>
      ),
      modalStyle: (
        {
          modalStyle: {
            display: displayModal?'block':'none',
            opacity: displayModal?'1':'0'
          }
        }
      ),
      modalSize: 'modal-md'
    });
  }

  renderIntegration = (type) => {
    const selectedInteragtion = this.plugins.filter(plugin => plugin.name == type)[0];
    if(selectedInteragtion && selectedInteragtion.name == 'shopify') {
      selectedInteragtion.method(selectedInteragtion, true);
    } else {
      <h1>Not found</h1>;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.shopName !== this.state.shopName ||
      (nextState.modalFooter && this.state.modalFooter && nextState.modalFooter.props.children.props.href != this.state.modalFooter.props.children.props.href) ||
      nextState.modalId != this.state.modalId ||
      nextProps.campaign != this.props.campaign
    )
      return true;
    else
      return false;
  }

  closeModal = () => {
    this.props.setIntegrationType(null);
  }

  render() {
    const { modalId, modalTitle, modalContent, modalFooter, modalStyle, modalSize, shopName } = this.state;
    const { type } = this.props;
    return (
      <div>
        {(!modalId || shopName) && this.renderIntegration(type)}
        {modalId &&
          <Modal
            id={modalId}
            title={modalTitle}
            content={modalContent}
            footer={modalFooter}
            style={modalStyle}
            modalSize={modalSize}
            closeModal={this.closeModal}
          />
        }
      </div>
    );
  }
}

export default OauthIntegrations;
