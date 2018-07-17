import React, { Component } from 'react';
import './NotificationSettingPopup.scss';
import { Row, Col } from 'react-bootstrap';


class NotificationSettingPopup  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayField: false
    };
    this.renderField =  this.renderField.bind(this);
  }


  renderField()  {
    <div>
      <Row>
        <Col md={6}>
          <input type="text" placeholder="Campaign Name" />
        </Col>
        <Col md={6}>
          <input type="text" placeholder="Product Name" />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <input type="text" placeholder="Page URL" />   
        </Col>     
      </Row>
      <Row>
        <span className="sub-text">Choose Your Notification Type</span>
      </Row>
      <Row>
        <Col md={4}><span className="btn btn-outline-primary n-btn"> Recent</span></Col>
        <Col md={4}><span className="btn btn-outline-primary n-btn"> Live</span></Col>
        <Col md={4}><span className="btn btn-outline-primary n-btn"> Bulk</span></Col>
      </Row>
    </div>;
  }

  
  render() {
    return (
      <div className="popuppage-container">
        <button type="button" className="btn btn-outline-primary  addpage" data-toggle="modal" data-target="#myModal" onClick={()=>{}} ><i className="fi-plus"></i>&nbsp;Set Page Specifc Notifications</button>
        <div className="modal fade show-modal" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content align-modal">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Customize the Notification Display</h4>
              </div>
              <div className="modal-body">
                <span className="btn btn-primary addpagepopup-btn"><i className="fi-plus"></i>Add Page</span>
                {this.renderField()}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary close-btn" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } 
}

export default NotificationSettingPopup;