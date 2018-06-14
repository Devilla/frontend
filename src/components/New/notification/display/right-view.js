import React from 'react';
import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';

const RightView = ({
  handleStateChange,
  initialDelay,
  displayTime,
  delayBetween,
  displayPosition,
  popupAnimationIn,
  popupAnimationOut,
  handleAnimation
}) => {
  return (
    <div className="pnl np-border">
      <Row>
        <Col md={8}>
          <span className="mt-5">Initial delay in starting first notification</span>
        </Col>
        <Col md={2}>
          <FormGroup>
            <FormControl
              type="number"
              value={initialDelay}
              bsSize="sm"
              onChange={(e) => handleStateChange('initialDelay', e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <span className="mt-5">seconds</span>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <span className="mt-5">Display time for each notification</span>
        </Col>
        <Col md={2}>
          <FormGroup>
            <FormControl
              type="number"
              value={displayTime}
              bsSize="sm"
              onChange={(e) => handleStateChange('displayTime', e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <span className="mt-5">seconds</span>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <span className="mt-5">Delay between subsequent notifications</span>
        </Col>
        <Col md={2}>
          <FormGroup>
            <FormControl
              type="number"
              value={delayBetween}
              bsSize="sm"
              onChange={(e) => handleStateChange('delayBetween', e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <span className="mt-5">seconds</span>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <span className="mt-5">
            Select Position for Popup Notification
          </span>
        </Col>
        <Col md={4}>
          <FormGroup>
            <FormControl value={displayPosition} onChange={(e) => handleStateChange('displayPosition', e.target.value)} componentClass="select" bsSize="sm" placeholder="select">
              <option value="Bottom Left">Bottom Left</option>
              <option value="Bottom Right">Bottom Right</option>
              <option value="Bottom Center">Bottom Center</option>
              <option value="Top Left">Top Left</option>
              <option value="Top Right">Top Right</option>
              <option value="Top Center">Top Center</option>
            </FormControl>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <span className="mt-5">
            Select Popup Notification Animation
          </span>
        </Col>
        <Col md={4}>
          <FormControl value={popupAnimationIn} onChange={(e) => { handleStateChange('popupAnimationIn', e.target.value); handleAnimation(e.target.value);  }} componentClass="select" bsSize="sm" placeholder="select" >
            <option value="fadeIn">Fade In</option>
            <option value="fadeInUp">Fade In Up</option>
            <option value="fadeInLeft">Fade In Left</option>
            <option value="fadeInRight">Fade In Right</option>
            <option value="bounceInUp">Bounce In Up</option>
            <option value="bounceInLeft">Bounce In Left</option>
            <option value="bounceInRight">Bounce In Right</option>
            <option value="bounceInDown">Bounce In Down</option>
          </FormControl>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <span className="mt-5">
            Select Popout Notification Animation
          </span>
        </Col>
        <Col md={4}>
          <FormControl value={popupAnimationOut} onChange={(e) => { handleStateChange('popupAnimationOut', e.target.value); handleAnimation(e.target.value);  }} componentClass="select" bsSize="sm" placeholder="select" >
            <option value="fadeOut">Fade Out</option>
            <option value="fadeOutDown">Fade Out Down</option>
            <option value="fadeOutLeft">Fade Out Left</option>
            <option value="fadeOutRight">Fade Out Right</option>
            <option value="bounceOutDown">Bounce Out Down</option>
            <option value="bounceOutLeft">Bounce Out Left</option>
            <option value="bounceOutRight">Bounce Out Right</option>
            <option value="bounceOutUp">Bounce Out Up</option>
          </FormControl>
        </Col>
      </Row>
    </div>
  );
};

export default RightView;
