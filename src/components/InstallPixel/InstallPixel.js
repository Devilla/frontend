import React from 'react';
import './InstallPixel.scss';
import Webhook from './Webhook';

const InstallPixel = ({
  elastic,
  loaderActive,
  setActiveState,
  campaign,
  verifyPixelStatus,
  handlePixelCopy,
  toggleWebhook,
  displayWebhookIntegration
}) => {
  return (
    <div className="install-pixel">
      <h4 className="lead text-center m-b-30 m-t-20">Install Pixel to Your Website</h4>
      <p className="text-muted text-left">Please copy your unique script & paste it in the Header of your Website. Add this
        To every page where you want To track, measure And show notifications.</p>
      <div className="bgcolor text-monospace border-dark">
        <p className="m-l-30 p-3">{`<script src="https://storage.cloud.google.com/influence-197607.appspot.com/influence-analytics.js">
      </script>`}
        <br/> {'<script>'}
        <br/> {'new Influence({'}
        <br/> trackingId: '{campaign?campaign.trackingId:'INF-XXXXXXX'}'
        <br/> {'});'}
        <br/> {'</script>'}
        <br/>
        </p>
      </div>
      <div className="float-left custom-width align-install-btn">
        <button type="button" className="btn btn-primary waves-effect copy-btn" onClick={() => { this.buttonDOM.blur(); handlePixelCopy(); }} ref={(buttonDOM) => this.buttonDOM = buttonDOM}>Copy</button>
        <button type="button" style={elastic==undefined?{backgroundColor:'#097fff'}:(elastic.error || (elastic.message.hits.total === 0))?{backgroundColor:'#f9bc0b'}:{backgroundColor:'#0acf97'}} className="btn btn-primary waves-light waves-effect pixel-btn" onClick={() => verifyPixelStatus()}>
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
        <input type="radio" name="radio8" id="radio8" value="option8" defaultChecked/>
        <label htmlFor="radio8">
          Unverified
        </label>
      </span>

      {/* The radio buttons for success */}
      <span className="radio radio-success">
        <input type="radio" name="radio9" id="radio9" value="option9" defaultChecked/>
        <label htmlFor="radio9">
           Verified
        </label>
      </span>
      <hr />
      <p className="m-t-30">
        <br/>
      </p>
      <div className="float-left integration mr-0 pr-2">
        <button
          type="button"
          className="btn btn-outline-primary waves-light waves-effect webhook-btn  pl-3 pr-3"
          onClick={() => { this.toggleDOM.blur(); toggleWebhook(); }}
          ref={(toggleDOM) => this.toggleDOM = toggleDOM}
        >
          Webhook Integrations
          <i className={displayWebhookIntegration?'icon-arrow-up pl-2':'icon-arrow-down pl-2'}></i>
        </button>
      </div>
      <div className="float-right mr-0 pr-2">
        <button
          type="button"
          className="btn btn-primary waves-light waves-effect pixelnext-btn  pl-3 pr-3"
          onClick={() => setActiveState(2)}
        >
          Next
          <i className="icon-arrow-right pl-2"></i>
        </button>
      </div>
      <div className="clearfix"></div>
      {displayWebhookIntegration &&
        <Webhook campaign={campaign} />
      }
    </div>
  );
};

export default InstallPixel;
