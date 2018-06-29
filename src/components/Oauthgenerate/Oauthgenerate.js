import React , { Component } from 'react';
import './Oauthgenerate.scss';
import { Row,Col } from 'react-bootstrap';
// import { Link } from 'react-router';
import moment from 'moment';
import {
  FormGroup,
  FormControl
} from 'react-bootstrap';


class Oauthpage extends Component {
  constructor() {
    super();
    this.state = {
      clientId: '65790-18281682901',
      clientSecret: 'JSKSGDAGD6RHHUIGR'
    };
  }
  
  getClientInfoList = () => {
    return (
      <div className="clientinfolist">
        <span className="text h6"> Client ID </span><span className="data">{this.state.clientId}</span> <br/>
        <span className="text h6"> Client Secret </span><span className="data">{this.state.clientSecret}</span> <br/>
        <span className="text h6"> Creation Date </span><span className="data">{moment().format('DD-MM-YYYY HH:mm:ss')}</span>
      </div>
    );
  }


  render() {
    return (
      
      <div className="oauthgen-container">
        <div className="content">
          <div className="card-box">

            <span className="header-title h4"><i className="icon-arrow-left mr-3"></i>Client ID for Web application</span>
            <button type="button" className="btn btn-outline-primary  waves-light waves-effect pl-1 float-right h6" onClick={()=>{}}><i className="ml-3 mdi mdi-delete"></i>&nbsp;DELETE</button>
            <button type="button" className="btn btn-outline-primary  waves-light waves-effect pl-1 float-right h6" onClick={()=>{}}><i className="ml-3 mdi mdi-lock-reset"></i>&nbsp;RESET SECRET</button>
        
            <span className="clearfix"></span>           
            <hr/>
            <Row className="mb-4">
              <Col md={12}>
                {this.getClientInfoList()}
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <span className="text-muted h6">Name</span>
                  <FormControl
                    type="text"
                    bsClass="form-control ml-3"
                    id="clientname"
                    placeholder="example: Ray-101, John doe"
                    onChange={()=>{}}
                    onBlur={()=>{}}
                    required={true}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="outer">
                  <p className="text-muted h6">Restrictons</p>
                  <p className="text-muted ml-3">Enter Javascript origins, Redirect URIs or both</p>
                </div>
                <div  className="inner">
                  <FormGroup className="mb-5">
                    <span className="text-muted ml-3 h6">Authorized javascript origins</span>
                    <p className="text-muted ml-3"> For use with request from a web browser.</p>
                    <FormControl
                      type="text"
                      bsClass="form-control ml-3"
                      id="URI"
                      placeholder="https://www.example.com"
                      onChange={()=>{}}
                      onBlur={()=>{}}
                      required={true}
                    />
                  </FormGroup>
                  <FormGroup>
                    <span className="text-muted ml-3 h6">Authorized redirect URIs</span>
                    <p className="text-muted ml-3"> For use with request from a web server.</p>
                    <FormControl
                      type="text"
                      bsClass="form-control ml-3"
                      id="redirectURI"
                      placeholder="https://www.example.com/callback"
                      onChange={()=>{}}
                      onBlur={()=>{}}
                      required={true}
                    />
                  </FormGroup>
                
                </div>
              </Col>
           
            </Row>
            <Row className="mt-3">
              <span type="button" className="btn btn-primary waves-effect saveClient">Save</span>
            </Row>
          </div>
        </div>
      </div>
      
    );
  }
}
  
  
export default Oauthpage;