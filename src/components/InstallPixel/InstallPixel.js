import React from 'react';
import {Animated} from 'react-animated-css';
import { browserHistory } from 'react-router';
import { Row, Col } from 'react-bootstrap';

import { OauthIntegrations } from 'components';
import './InstallPixel.scss';
import Webhook from './Webhook';

const InstallPixel = ({
  elastic,
  loaderActive,
  campaign,
  verifyPixelStatus,
  handlePixelCopy,
  toggleWebhook,
  displayWebhookIntegration,
  breadcrumb,
  setBreadCrumbs,
  setIntegrationType,
  integrationType
}) => {
  const verifyStatus = elastic==undefined?undefined:(elastic.error || (elastic.message.hits.total === 0))?false:true;
  const verifyPixelClass =`btn btn-primary waves-light waves-effect pixel-btn ${elastic==undefined?'warning-elastic':(elastic.error || (elastic.message.hits.total === 0))?'error-elastic':'success-elastic'}`;
  const integrations = () => {
    let breadcrumbs = breadcrumb;
    breadcrumbs.push({
      name: 'Integrations',
      path: '/integrations'
    });
    setBreadCrumbs(breadcrumbs);
    browserHistory.push('/integrations');
  };

  return (
    <div className="install-pixel">
      <p className="text-muted text-left">Copy your unique script & paste it in the Header of your Website. Add this
        to every page where you want to track, measure and show notifications.</p>
      <div className="bgcolor text-monospace border-dark">
        <p className="m-l-30 p-3">{`<script src="https://storage.googleapis.com/influence-197607.appspot.com/influence-analytics.js">
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
        <button type="button" className="btn btn-primary waves-effect copy-btn ml-0 mr-0" onClick={() => { this.buttonDOM.blur(); handlePixelCopy(); }} ref={(buttonDOM) => this.buttonDOM = buttonDOM}>Copy Pixel</button>
        {/* <button type="button" className="btn btn-primary waves-effect copy-btn" onClick={() => { this.trackingDOM.blur(); handleTrackingIdCopy(); }} ref={(trackingDOM) => this.trackingDOM = trackingDOM}>Copy Tracking Id</button> */}
        {elastic!==undefined && elastic=='verified'}
        <button type="button" className={verifyPixelClass} onClick={() => verifyPixelStatus()}>
          <Animated className="leftwrap center" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            {verifyStatus==undefined?'Verify':!verifyStatus?'Unverified':'Verified'} Pixel
          </Animated>
        </button>
        <div className="loader-icon">
          <i className={loaderActive ? 'fa fa-circle-o-notch fa-spin': ''}></i>
        </div>
      </div>
      <p className="m-t-30 pb-3">
        <br/>
      </p>

      {/* The radio buttons for warning, success */}
      <span className="radio radio-warning ml-1 pr-4">
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

      <div className="row">
        <h4 className="lead col-md-12 text-center m-b-30 m-t-20">UseInfluence Integrates Easily</h4>
      </div>
      <Row className="integration-row">
        <Col md={3} className=" mr-0 pr-2">
          <button
            type="button"
            className="btn btn-outline-primary waves-light waves-effect webhook-btn  pl-3 pr-3"
            onClick={() => { this.toggleDOM.blur(); toggleWebhook(); window.scrollTo(0,window.outerHeight);}}
            ref={(toggleDOM) => this.toggleDOM = toggleDOM}
          >
          Webhook Integrations
            <i className={displayWebhookIntegration?'icon-arrow-up pl-2':'icon-arrow-down pl-2'}></i>
          </button>
        </Col>

        <Col md={3}>
          <a href="https://useinfluence.freshdesk.com/support/solutions/articles/36000080637-integrate-with-google-tag-manager" target="_blank"><span className="btn btn-outline-primary tagmanager "> Google Tag Manager</span></a>
        </Col>
        <Col md={3}>
          <span className="btn btn-outline-primary integrations" onClick={() => integrations()}>Integrations</span>
        </Col>
        <Col md={3}>
          <span className="btn btn-outline-primary integrations" onClick={() => setIntegrationType('shopify')}>Shopify</span>
        </Col>

        {displayWebhookIntegration &&
          <Webhook campaign={campaign} />
        }
      </Row>
      {integrationType && <OauthIntegrations campaign={campaign} type={integrationType} setIntegrationType={setIntegrationType} /> }
    </div>


  );
};

export default InstallPixel;
