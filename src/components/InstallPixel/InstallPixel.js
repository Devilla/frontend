import React from 'react';
// import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
// import copy from 'copy-to-clipboard';
// import { fetchElastic, clearElastic } from 'ducks/elastic';




const InstallPixel = ({ elastic, setActiveState, campaign, verifyPixelStatus, handlePixelCopy }) => {
  return (
    <div className="install-pixel">
<<<<<<< HEAD
      <h4 className="lead text-center m-b-30 m-t-20">Install Pixel to Your Website</h4>
=======
      <h4 className="lead m-b-30 m-t-50">Install Pixel to Your Website</h4>
>>>>>>> 7203155c6ce47a88fe7dc93cfae105124320f434
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
      <button type="button" style={elastic==undefined?{backgroundColor:'#02c0ce'}:elastic.error?{backgroundColor:'#f12c0b'}:{backgroundColor:'#e68f1f'}} className="btn btn-custom  waves-light waves-effect number p-l-r-10" onClick={() => verifyPixelStatus()}>Verify Pixel Status</button>
      <button type="button" className="btn btn-custom  waves-light waves-effect number" onClick={handlePixelCopy}>Copy to Clipboard</button>
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
};

export default InstallPixel;
// const mapStateToProps = state => ({
//   elastic: state.getIn(['elastic', 'elastic'])
// });
//
// const mapDispatchToProps = {
//   fetchElastic,
//   clearElastic
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(InstallPixel);
