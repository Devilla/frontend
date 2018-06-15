import React from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import Card from '../utils/card'
import { thArray } from './data';

const Analytics = ({ renderList }) => {
  return (
    <div className="content fill">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card
              plain
              title="Analytics"
              category=""
              ctTableFullWidth ctTableResponsive
              content={
                <div className="text-center centertbl">
                <Table hover>
                  <thead>
                    <tr>
                     {
                      thArray.map((prop, key) => {
                        return (
                        <th  key={key}><span className="h6 text-muted">{prop === "Connected Website" ? <i className="icon-globe"></i> : ""}&nbsp;{prop}</span></th>
                        );
                      })
                      }
                    </tr>
                  </thead>
                  <tbody>
                    {renderList()}
                  </tbody>
                </Table>
                </div>
              }
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p className="text-center h5 mt-5">
            Get one of our experts to do it all for you!
            &nbsp;
            <button type="button" className="btn btn-info waves-effect  ml-1 ">Click here</button> </p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Analytics;
