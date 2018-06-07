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
                        <th  key={key}>{prop}</th>
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
            <p className="text-center">
            Get one of our experts to do it all for you!
            &nbsp;
             <a href="javascript:;">Click here</a></p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Analytics;
