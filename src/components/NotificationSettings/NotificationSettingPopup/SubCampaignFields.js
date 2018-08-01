import React from 'react';
import { Row, Col } from 'react-bootstrap';

const SubCampaignFields = ({
  name,
  productName,
  productUrl,
  captureUrl,
  errorName,
  errorProductUrl,
  errorProductName,
  errorCaptureUrl,
  selectedSubCampaign,
  displaynotifbuttons,
  externalValue,
  handleStateChange,
  show,
  handleSwitchChange,
  submitSubCampaign
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
      </Row>
      <Row className="justify-content-center">
        {selectedSubCampaign &&
          <div>
            <span className="btn btn-outline-primary n-btn"> <i className=" mdi mdi-account-multiple"></i>&nbsp;Recent</span>
            <span className="btn btn-outline-primary n-btn"> <i className=" mdi mdi-adjust"></i>&nbsp;Live</span>
            <span className="btn btn-outline-primary n-btn"> <i className="mdi mdi-fire"></i>&nbsp;Bulk</span>
          </div>
        }

        <span className="info-text"  onClick={() => show()}>  <i className={displaynotifbuttons?'icon-arrow-up pl-2':'icon-arrow-down pl-2'}></i></span>
        <div className="toggle-btn">
          <input className="tgl tgl-ios" id="cb2" type="checkbox"  defaultChecked={externalValue}/>
          <label className="tgl-btn toggleId"  htmlFor="cb2"  onClick={() => handleSwitchChange(!externalValue)}></label>
        </div>
      </Row>
      <Row className="justify-content-center">
        {displaynotifbuttons &&
          <Row className="toggle-area">

            <Col md={4} className="toggle-save">
              <button  className="btn btn-primary" onClick={submitSubCampaign}>Save </button>
            </Col>
            <Col md={4} className="toggle-settings">
              <button className="btn btn-primary">Duplicate Settings</button>
            </Col>

          </Row>
        }
      </Row>
    </div>
  );
};

export default SubCampaignFields;
