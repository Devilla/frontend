import React from 'react';
import { Row, Col, HelpBlock } from 'react-bootstrap';

const SubCampaignFields = ({
  name,
  productName,
  productUrl,
  captureUrl,
  isActive,
  errorName,
  errorProductUrl,
  errorProductName,
  errorCaptureUrl,
  selectedSubCampaign,
  displaynotifbuttons,
  handleStateChange,
  show,
  handleToggleChange,
  submitSubCampaign,
  duplicateSubCampaign,
  setNotification,
  errorCommon
}) => {
  return (
    <div className="sub-campaign-fields">
      <Row className="justify-content-around">
        <input
          type="text"
          id="name"
          placeholder="Sub Campaign Name"
          className="col-md-5 camp-text form-control"
          value={name}
          onChange={handleStateChange}
          style={errorName?{borderColor:'red'}:{}}
        />
        <i className="fa fa-info-circle" data-toggle="tooltip"  data-delay='{"show":"0", "hide":"100"}' title="Mention your Campaign name"> </i>
        <input
          type="text"
          id="productName"
          placeholder="Product Name"
          className="col-md-5 prod-text form-control"
          value={productName}
          onChange={handleStateChange}
          style={errorProductName?{borderColor:'red'}:{}}
        />
        <i className="fa fa-info-circle" data-toggle="tooltip" data-delay='{"show":"0", "hide":"100"}' title="Your Product name will be displayed on notifications"> </i>
      </Row>
      <Row className="pt-4 ">
        <input
          type="text"
          id="productUrl"
          placeholder="Product Page URL"
          className="col-md-11 prourl-text form-control"
          value={productUrl}
          onChange={handleStateChange}
          style={errorProductUrl?{borderColor:'red'}:{}}
        />
      </Row>
      <Row className="pt-4 ">
        <input
          type="text"
          id="captureUrl"
          placeholder="Capture Page URL"
          className="col-md-11 capurl-text form-control"
          value={captureUrl}
          onChange={handleStateChange}
          style={errorCaptureUrl?{borderColor:'red'}:null}
        />
        <i className="fa fa-info-circle capture" data-toggle="tooltip" data-delay='{"show":"0", "hide":"100"}' title="Your Product name will be displayed on notifications"> </i>
        <HelpBlock>
          <p className="website-error">{errorCommon}</p>
        </HelpBlock>
      </Row>
      <Row className="toggle-btn-custom">
        {selectedSubCampaign &&
          <div>
            <span
              className="btn btn-outline-primary n-btn"
              onClick={() => setNotification(selectedSubCampaign.journey, 'Recent Activity', 'journey')}>
              <i className=" mdi mdi-account-multiple"></i>
              &nbsp;Recent
            </span>
            <span
              className="btn btn-outline-primary n-btn"
              onClick={() => setNotification(selectedSubCampaign.live, 'Live Visitor Count', 'live')}>
              <i className=" mdi mdi-adjust"></i>
              &nbsp;Live
            </span>
            <span
              className="btn btn-outline-primary n-btn"
              onClick={() => setNotification(selectedSubCampaign.identification, 'Bulk Activity', 'identification')}>
              <i className="mdi mdi-fire"></i>
              &nbsp;Bulk
            </span>
          </div>
        }

        {show !== 'hidden' && <span className="info-text"  onClick={() => show()}>  <i className={displaynotifbuttons?'icon-arrow-up pl-2':'icon-arrow-down pl-2'}></i></span>}
        <div className="toggle-btn">
          <input className="tgl tgl-ios" id="cb2" type="checkbox"  defaultChecked={isActive}/>
          <label className="tgl-btn toggleId"  htmlFor="cb2"  onClick={() => handleToggleChange(!isActive)}>ON</label>
        </div>
      </Row>
      <Row className="justify-content-center">
        {(displaynotifbuttons || show == 'hidden') &&
          <Row className="toggle-area" style={show == 'hidden'? { width: '100%', marginTop: '0px', justifyContent: 'flex-end' }: {}}>
            <Col md={2} className="toggle-save">
              <button  className="btn btn-primary" onClick={submitSubCampaign}>Save </button>
            </Col>
            {show !== 'hidden' &&
              <Col md={4} className="toggle-save">
                <button className="btn btn-primary" onClick={duplicateSubCampaign}>Duplicate Settings</button>
              </Col>
            }
            {/* <Col md={4} className="toggle-save">
              <button className="btn btn-primary" onClick={() => deleteSubCampaign(selectedSubCampaign._id)}>Delete</button>
            </Col> */}
          </Row>
        }
      </Row>
    </div>
  );
};

export default SubCampaignFields;
