import React, { Component } from 'react';
import {
    Grid,
    Row,
    Col,
    Table,
    ControlLabel,
    InputGroup,
    FormControl,
    ButtonToolbar,
    Button,
    Glyphicon
} from 'react-bootstrap';
import CardHeader from 'components/Template/card-with-header'
import FormInputs from 'components/Template/FormTemp';
import Tabs from 'components/Template/tab'
import CardTable from 'components/Template/card-with-page-table'
import {pagethArray,pagetdArray} from 'components/Template/data'
class ConfigLeads extends Component{
  constructor(){
    super();
    this.handleNextState = this.handleNextState.bind(this);
    this.handleBackState = this.handleBackState.bind(this);
    this.activeState = this.activeState.bind(this);
  }

  componentWillMount() {
    this.setActiveState({active: 5});
  }

  activeState(val){
    this.setActiveState(val);
  }

  handleNextState() {
    this.setActiveState({active: 6});
  }

  handleBackState() {
    this.setActiveState({active: 4});
  }

  setActiveState(val) {
    var data = {'tab' : val};
    this.props.callbackFromParent(data);
  }

  render(){
    var  tasks  = []
    for (var i = 0; i < pagetdArray.length; i++) {
        tasks.push(
            <tr key={i}>
               <td className="serial">{i+1}</td>
               <td className="url">{pagetdArray[i].url}</td>
               <td className="status"><span className={pagetdArray[i].class}></span> {pagetdArray[i].status}</td>
               <td><a href="javascript:;"><i className="far fa-trash-alt"></i></a> </td>
            </tr>
        );
    }
    return (
      <div className="content">
        <Grid fluid>
          <Tabs active="2" callbackFromParent ={this.activeState}/>
          <div className="tabscontent">
            <Row>
              <Col md={12}>
                <h4>Details Of Your Lead Capturing Page</h4>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <p>Enter URL of page you are capturing conversions on. </p>
                <small>This page must have:<br/>
                <i className="fas fa-angle-right"></i> An email form field<br/>
                <i className="fas fa-angle-right"></i> Your Pixel installed (if not, Go to Install Pixel)</small>
                <p>&nbsp;</p>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className="input-group">
                  <input type="text" className="form-control txtpageurl" placeholder="Page URL" aria-describedby="urladd"/>
                  <span className="input-group-btn" id="urladd">
                    <a className="btn btn-raised btn-primary blue" href="javascript:;">Add</a>
                  </span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className="status">
                  <ul>
                    <li><span className="green"></span> Active</li>
                    <li><span className="blue"></span> Last seen over 24 hrs ago</li>
                    <li><span className="yellow"></span> Has Never Been Tracked</li>
                    <li><span className="red"></span> Invalid URL</li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <CardTable
                  content ={
                    <div className="text-center centertbl">
                      <Table>
                        <thead>
                          <tr>
                          {
                            pagethArray.map((prop, key) => {
                              return (
                              <th  key={key}>{prop}</th>
                              );
                            })
                          }
                          </tr>
                          </thead>
                          <tbody>
                            {
                              tasks
                            }
                          </tbody>
                      </Table>
                    </div>
                  }
                />
              </Col>
            </Row>

            <Row>
              <div className="text-center">
                <Col md={12}>
                <p>&nbsp;</p> <p>&nbsp;</p>
                Having problems with Auto Lead Capture in your current setup? &nbsp;&nbsp; <a href="javascript:;" className="btn blue btn-sm">Use Webhook Integration</a>
                </Col>
              </div>
            </Row>
            <Row style={{padding: '5% 0%'}}>
              <Col md={6}>
                <div className=" text-left">
                  <Button bsStyle="primary" onClick={this.handleBackState}>
                    <Glyphicon glyph="chevron-left" />
                    Back
                  </Button>
                </div>
              </Col>
              <Col md={6}>
                <div className=" text-right">
                  <Button bsStyle="primary" onClick={this.saveRules}>
                    <Glyphicon glyph="chevron-right" />
                    Next
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    );
  }
}


export default ConfigLeads;
