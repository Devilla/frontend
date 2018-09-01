import React , { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { Modal } from 'components';
import { fetchCampaign } from 'ducks/campaign';

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
      footerLink: '',
      selectedTrackingId: '',
      campaignRender: false
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

  componentWillMount() {
    this.props.fetchCampaign();
  }

  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value});
  }

  renderCampaigns = () => {
    let { campaigns } = this.props;

    if(campaigns) {
      return campaigns.map(campaign => {
        this.setState({campaignRender: true});
        return <div key={campaign._id} className="dropdown-item" id={campaign._id} onClick={() => this.setState({selectedCampaign: campaign})}>{campaign.campaignName}</div>;
      });

    }
  }

  renderShopifyModal = (selectedInteragtion, displayModal) => {
    const { selectedCampaign } = this.state;
    // const { campaigns } = this.props;
    const api_key = selectedInteragtion.clientId;
    const scopes = selectedInteragtion.scopes;
    const redirect_uri = selectedInteragtion.redirectUrl;
    const nonce = selectedCampaign? selectedCampaign.trackingId:'123456';

    this.setState({
      modalId: 'shopifyModal',
      modalTitle: 'Shopify',
      modalContent: (
        <div className="modal-body">
          <input id="shopName" placeholder="Enter Shop Name" onChange={this.handleChange}/>
          <div className="btn-group campaign-dropdown">
            <button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {selectedCampaign && selectedCampaign.campaignName?selectedCampaign.campaignName:'Select Campaign'}
            </button>
            <div className="dropdown-menu">
              {this.renderCampaigns()}
            </div>
          </div>
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
      )
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
      nextState.campaignRender != this.state.campaignRender ||
      nextState.modalId != this.state.modalId ||
      nextState.selectedCampaign != this.state.selectedCampaign ||
      nextProps.campaigns != this.props.campaigns
    )
      return true;
    else
      return false;
  }

  render() {
    const { modalId, modalTitle, modalContent, modalFooter, modalStyle, shopName } = this.state;
    const { type, campaigns } = this.props;
    return (
      <div>
        {(!modalId || shopName || campaigns) && this.renderIntegration(type)}
        { modalId &&
          <Modal
            id={modalId}
            title={modalTitle}
            content={modalContent}
            footer={modalFooter}
            style={modalStyle}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  campaigns: state.getIn(['campaign', 'campaigns'])
});

const mapDispatchToProps = {
  fetchCampaign
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(OauthIntegrations);
