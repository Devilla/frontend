import React, {Component} from 'react';
import copy from 'copy-to-clipboard';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchCampaign } from 'ducks/campaign';


const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};

class WordpressPluginPage extends Component {

  componentWillMount () {
    this.props.fetchCampaign();
  }


  handleTrackingIdCopy = (campaign) => {
    copy(campaign?campaign.trackingId:'INF-XXXXXXX', {
      debug: true
    });
    return toast('Tracking ID copied', toastConfig);
  }

  getTrackingIdRows = () => {
    const { campaigns } = this.props;
    if(campaigns)
      return campaigns.map((campaign, index) =>
        <div className="auth-td tr" key={index}>
          <div scope="row" className="th col-md-2 text-center">{index+1}</div>
          <div className="td col-md-3 text-center">{campaign.campaignName}</div>
          <div className="td col-md-4 text-center">{campaign.trackingId}</div>
          <div className="td col-md-3 text-center">
            <button className="btn btn-primary btn-sm" href="javascript:;" onClick={() => this.handleTrackingIdCopy(campaign)}><i className="fa fa-copy">&nbsp; Copy</i></button>
          </div>
        </div>
      );
    else
      return <div></div>;
  }

  render() {
    console.log(this.props);
    return (
      <div className="oauth-container">
        <div className="content">
          <div className="card-box">
            <h4 className="oauthheader mt-3">Campaign Keys</h4>
            <hr/>

            <div className="table table-striped">
              <div className="thead table-header flex">
                <div className="tr tab-row">
                  <div className="th col-md-2 text-center">#</div>
                  <div className="th col-md-3 text-center">Campaign Name</div>
                  <div className="th col-md-4 text-center">Tracking ID</div>
                  <div className="th col-md-3 text-center">Action</div>
                </div>
              </div>
              <div className="tbody">
                {this.getTrackingIdRows()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchCampaign,
};

const mapStateToProps = state => ({
  loading: state.getIn(['loading', 'state']),
  campaigns: state.getIn(['campaign', 'campaigns'])
});


export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(WordpressPluginPage);
