import React, { Component } from 'react';
import './NotificationSettingPopup.scss';
import { Row,Col } from 'react-bootstrap';


class NotificationSettingPopup  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayField: false,
      displaynotifbuttons : false,
      externalValue:  false,
      arrayForm : []
    };
    this.renderField =  this.renderField.bind(this);

  }

  show = () => {
    this.setState((prevState) => {
      return { displaynotifbuttons : !prevState.displaynotifbuttons };
    });
  }

  addpage = () => {
    this.setState((prevState) => {
      return {displayField : !prevState.displayField };
    });
  }

  handleSwitchChange = () =>  {
    //code to be written
  }

  renderField()  {
    return (<div>
      <Row className="justify-content-around">
        <input type="text" placeholder="Campaign Name"  className="col-md-5 camp-text form-control"/> <i className="fa fa-info-circle" data-toggle="tooltip"  data-delay='{"show":"0", "hide":"100"}' title="Mention your Campaign name"> </i>
        <input type="text" placeholder="Product Name" className="col-md-5 prod-text form-control" /> <i className="fa fa-info-circle" data-toggle="tooltip" data-delay='{"show":"0", "hide":"100"}' title="Your Product name will be displayed on notifications"> </i>
      </Row>
      <Row className="pt-4 ">
        <input type="text" placeholder="Product Page URL"  className="col-md-11 prourl-text form-control"/>
      </Row>
      <Row className="pt-4 ">
        <input type="text" placeholder="Capture Page URL"  className="col-md-11 capurl-text form-control"/><i className="fa fa-info-circle capture" data-toggle="tooltip" data-delay='{"show":"0", "hide":"100"}' title="Your Product name will be displayed on notifications"> </i>
      </Row>
      <Row className="justify-content-center">
        <span className="btn btn-outline-primary n-btn"> <i className=" mdi mdi-account-multiple"></i>&nbsp;Recent</span>
        <span className="btn btn-outline-primary n-btn"> <i className=" mdi mdi-adjust"></i>&nbsp;Live</span>
        <span className="btn btn-outline-primary n-btn"> <i className="mdi mdi-fire"></i>&nbsp;Bulk</span>
        <span className="info-text"  onClick={() => this.show()}>  <i className={this.state.displaynotifbuttons?'icon-arrow-up pl-2':'icon-arrow-down pl-2'}></i></span>
        <div className="toggle-btn">
          <input className="tgl tgl-ios" id="cb2" type="checkbox"  defaultChecked={this.state.externalValue}/>
          <label className="tgl-btn toggleId"  htmlFor="cb2"  onClick={() => this.handleSwitchChange(!this.state.externalValue)}></label>
        </div>
      </Row>
      <Row className="justify-content-center">
        { this.state.displaynotifbuttons ?
          <Row className="toggle-area">

            <Col md={4} className="toggle-save">
              <button  className="btn btn-primary ">Save </button>
            </Col>
            <Col md={4} className="toggle-settings">
              <button className="btn btn-primary">Duplicate Settings</button>
            </Col>

          </Row>

          : ' '}
      </Row>
    </div>);
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
                <span className="btn btn-primary addpagepopup-btn mb-4" onClick={()=> this.addpage()}><i className="fi-plus"></i> &nbsp;Add Page</span>
                {this.state.displayField ?
                  this.renderField()
                  : ' '}
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotificationSettingPopup;
