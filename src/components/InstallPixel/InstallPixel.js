import React from 'react';
import './InstallPixel.scss';

const InstallPixel = ({ elastic, loaderActive, setActiveState, campaign, verifyPixelStatus, handlePixelCopy }) => {
  return (
    <div className="install-pixel">
      <h4 className="lead text-center m-b-30 m-t-20">Install Pixel to Your Website</h4>
      <p className="text-muted text-left">Please copy your unique script & paste it in the Header of your Website. Add this
        To every page where you want To track, measure And show notifications.</p>
      <div className="bgcolor text-monospace border-dark">
        <p className="m-l-30 p-3">script src="https://cdninfluence.nyc3.digitaloceanspaces.com/influence-analytics.js">
          /script
        <br/> script
        <br/> new Influence(
        <br/> trackingId: '${campaign?campaign.trackingId:'INF-XXXXXXX'}'
        <br/> );
        <br/> script
        <br/>
        </p>
      </div>
      <div className="float-left custom-width align-install-btn">
        <button type="button" className="btn btn-custom waves-light waves-effect number" onClick={handlePixelCopy}>Copy</button>
        <button type="button" style={elastic==undefined?{backgroundColor:'#097fff'}:elastic.message.hits.total === 0?{backgroundColor:'#0acf97'}:{backgroundColor:'#f9bc0b'}} className="btn btn-custom  waves-light waves-effect number" onClick={() => verifyPixelStatus()}>
          {loaderActive &&
            <i className="fa fa-spinner fa-spin"></i>
          }
          Verify Pixel
        </button>
      </div>
      <p className="m-t-30 pb-5">
        <br/>
      </p>
      {/* The radio buttons for warning, success */}
      <span className="radio radio-warning ml-2 pr-4">
        <input type="radio" name="radio8" id="radio8" value="option8" checked/>
        <label htmlFor="radio8">
          Unverified
        </label>
      </span>

      {/* The radio buttons for success */}
      <span className="radio radio-success">
        <input type="radio" name="radio9" id="radio9" value="option9" checked/>
        <label htmlFor="radio9">
           Verified
        </label>
      </span>
      <hr />
      <p className="m-t-30">
        <br/>
      </p>
      <div className="float-right mr-0 pr-2">
        <button type="button" className="btn btn-custom waves-light waves-effect number  pl-3 pr-3" onClick={() => setActiveState(2)}> Next<i className="icon-arrow-right pl-2"></i> </button>
      </div>
      <div className="clearfix"></div>
    </div>
  );
};

export default InstallPixel;
