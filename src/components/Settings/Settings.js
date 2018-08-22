import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Settings.scss';

const Settings = () => {
  return (
    <div className="settings-container">
      <Row>
        <Col md={2}>
          <h3>Setup</h3>
        </Col>
        <Col md={10}>

        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <h3>Configure</h3>
        </Col>
        <Col md={10}>

        </Col>
      </Row>
    </div>
  );
};

export default Settings;
