import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import { fetchElastic, clearElastic } from 'ducks/elastic';


const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000
};

class InstallPixel extends Component{
  constructor(){
    super();
    this.handlePixelCopy = this.handlePixelCopy.bind(this);
    this.verifyPixelStatus = this.verifyPixelStatus.bind(this);
  }

  verifyPixelStatus() {
    this.props.fetchElastic(`json.value.trackingId:${this.props.campaign.trackingId}`);
  }

  handlePixelCopy() {
    const pixelCode = `<script src="https://cdninfluence.nyc3.digitaloceanspaces.com/influence-analytics.js"></script>
<script>
new Influence({
trackingId:   '${this.props.campaign?this.props.campaign.trackingId:'INF-XXXXXXX'}'
});
</script>`;
    copy(pixelCode, {
      debug: true
    });
    return toast('Pixel copied', toastConfig);
  }

  componentWillUnmount() {
    this.props.clearElastic();
  }

  render(){
    const { elastic, setActiveState, campaign } = this.props;
    return (
      <div className="install-pixel">
        <h4 className="lead text-center m-b-30 m-t-20">Install Pixel to Your Website</h4>
        <button type="button" className="btn btn-outline-info btn-rounded waves-light waves-effect m-b-30">Step 1</button>
        <p className="text-muted text-left">Please copy your unique script & paste it in the Header of your Website. Add this
          To every page where you want To track, measure And show notifications.</p>
        <div className="bg-custom text-monospace text-white border-dark ">
          <p className="m-l-30">script src="https://cdninfluence.nyc3.digitaloceanspaces.com/influence-analytics.js">
            /script
          <br/> script
          <br/> new Influence(
          <br/> trackingId: '${campaign?campaign.trackingId:'INF-XXXXXXX'}'
          <br/> );
          <br/> script
          <br/>
          </p>
        </div>
        <button type="button" style={elastic==undefined?{backgroundColor:'#02c0ce'}:elastic.error?{backgroundColor:'#f12c0b'}:{backgroundColor:'#e68f1f'}} className="btn btn-custom  waves-light waves-effect number p-l-r-10" onClick={() => this.verifyPixelStatus()}>Verify Pixel Status</button>
        <button type="button" className="btn btn-custom  waves-light waves-effect number" onClick={this.handlePixelCopy}>Copy to Clipboard</button>
        <p className="m-t-30">
          <br/>
          <hr />
        </p>
        <p className="m-t-30">
          <br/>
        </p>
        <button type="button" className="btn btn-outline-info btn-rounded waves-light waves-effect m-b-30">Step 2</button>
        <p className="text-muted text-left">Wait For Your Pixel To Go LIVE. Check By Clicking On The Button " Verify Pixel Status
          ". If You're Facing Any Problems With It, Please Contact Our Support By
        <a href="#">Clicking Here.</a>
        </p>

        <div className="m-t-50 float-right align-install-btn">
          <button type="button" className="btn btn-custom  waves-light waves-effect number " onClick={() => browserHistory.push('/campaigns')}>Previous</button>
          <button type="button" className="btn btn-custom  waves-light waves-effect number ml-2 pl-4 pr-4" onClick={() => setActiveState(2)}>Next </button>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  elastic: state.getIn(['elastic', 'elastic'])
});

const mapDispatchToProps = {
  fetchElastic,
  clearElastic
};

export default connect(mapStateToProps, mapDispatchToProps)(InstallPixel);
