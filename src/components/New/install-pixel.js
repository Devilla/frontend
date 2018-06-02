import React, { Component } from 'react';
import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    ButtonToolbar,
    Button,
    Glyphicon
} from 'react-bootstrap';
import { connect } from 'react-redux';
import copy from 'copy-to-clipboard';
import { toast, ToastContainer } from 'react-toastify';
import { fetchElastic, clearElastic } from 'ducks/elastic';

import Tabs from 'components/Template/tab';
import Highlight from 'react-highlight';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000
};

class InstallPixel extends Component{
  constructor(){
    super();
    this.handlePixelCopy = this.handlePixelCopy.bind(this);
    this.handleNextState = this.handleNextState.bind(this);
    this.activeState = this.activeState.bind(this);
    this.verifyPixelStatus = this.verifyPixelStatus.bind(this);
  }

  componentDidMount() {
    this.setActiveState({active: 2});
  }

  activeState(val){
    this.setActiveState(val);
  }

  handleNextState() {
    this.setActiveState({active: 3});
  }

  setActiveState(val) {
    var data = {'tab' : val};
    this.props.callbackFromParent(data);
  }

  verifyPixelStatus() {
    this.props.fetchElastic(`json.value.trackingId:${this.props.campaign.trackingId}`);
  }

  handlePixelCopy() {
    const pixelCode = `<script src="https://cdninfluence.nyc3.digitaloceanspaces.com/influence-analytics.js"></script>
<script>
new Influence({
trackingId:   '${this.props.campaign?this.props.campaign.trackingId:'INF-XXXXXXX'}'
});
</script>`;
    copy(pixelCode, {
      debug: true
    });
    return toast("Pixel copied", toastConfig);
  }

  componentWillUnmount() {
    this.props.clearElastic();
  }

  render(){
    const { elastic } = this.props;
    return (
      <div className="content">
        <Grid fluid>
          <Tabs active="2" callbackFromParent ={this.activeState}/>
          <div className="tabscontent">
            <Row>
              <Col md={12}>
                <h4>Install Pixel to Your Website</h4>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                {/* <small>Follow the instructions below Or Get Our <a href="javascript:;">Expert's Help</a></small><br/>
                <small>If you're using a third-party platform (Wordpress, Squarespace, etc) there are <a href="javascript:;">instructions here</a>.</small>
                <p>&nbsp;</p> */}
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h4>Step 1 </h4>
                <FormGroup controlId="formstep1">
                  <ControlLabel>Please copy your unique script & paste it in the Header of your Website. Add this To every page where you want To track, measure And show notifications.</ControlLabel>
                  <Highlight innerHTML={false}>
                    {`<script src="https://cdninfluence.nyc3.digitaloceanspaces.com/influence-analytics.js"></script>
<script>
  new Influence({
    trackingId:   '${this.props.campaign?this.props.campaign.trackingId:'INF-XXXXXXX'}'
  });
</script>` }
                  </Highlight>
                  <ButtonToolbar>
                    <Button bsStyle={elastic==undefined?"default":elastic.error?"danger":"success"} className="btn-default" bsSize="small" onClick={() => this.verifyPixelStatus()}>
                      Verify Pixel Status
                    </Button>
                    <Button bsSize="small" bsStyle="default" onClick={this.handlePixelCopy}>Copy to clipboard</Button>
                  </ButtonToolbar>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h4>Step 2 </h4>
                <FormGroup controlId="formstep2">
                  <ControlLabel>
                    Wait For Your Pixel To Go LIVE. Check By Clicking On The Button " Verify Pixel Status ".
                    If You're Facing Any Problems With It, Please Contact Our Support By <a href="#">Clicking Here.</a>
                  </ControlLabel>
                </FormGroup>
              </Col>
            </Row>

            <Row style={{margin: '0px auto 10%', padding: '5% 0% 0% 5%' }}>
              <Col md={12}>
                <div className=" text-right">
                  <Button bsStyle="primary" onClick={this.handleNextState}>
                    <Glyphicon glyph="chevron-right" />
                    Next
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
       </Grid>
       <ToastContainer autoClose={8000} />
     </div>
    );
  }
}

const mapStateToProps = state => ({
  elastic: state.getIn(['elastic', 'elastic'])
});

const mapDispatchToProps = {
  fetchElastic,
  clearElastic
};

export default connect(mapStateToProps, mapDispatchToProps)(InstallPixel);
