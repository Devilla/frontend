import React from 'react';
import {
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap';

const CouponPage = ({coupon, error, handleStateChange, submitCoupon}) => {
  return (
    <div className="coupon-page">
      <form>
        <Row>
          <Col md={12}>
            <FormGroup className="card-holder">
              <FormControl
                type="text"
                onChange={(e) => handleStateChange(e.target.value, e.target.id)}
                defaultValue={coupon}
                placeholder="Enter Coupon Code"
                id="coupon"
                key={coupon}
              />
            </FormGroup>
          </Col>
          <HelpBlock>
            <p className="error-text">{error}</p>
          </HelpBlock>
        </Row>
        <Row>
          <Col>
            <div className="frmcntl">
              <input className="btn btn-primary coupon-payment-button"
                type="submit"
                value="Apply Coupon"
                onClick={submitCoupon}
              />
            </div>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default CouponPage;
