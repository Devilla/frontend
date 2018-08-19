import React from 'react';
import {
  Row,
  Col,
  HelpBlock
} from 'react-bootstrap';
import './CouponPage.scss';

const CouponPage = ({
  error,
  handleStateChange,
  submitCoupon,
  couponDetails
}) => {
  return (
    <div className="coupon-page">
      <form>
        <Row className="coupon-row-padding">
          <Col md={12}>
            <input
              type="text"
              onChange={(e) => handleStateChange(e.target.value, e.target.id)}
              placeholder="Enter coupon code"
              defaultValue={couponDetails?couponDetails.code:''}
              id="coupon"
            />
            <HelpBlock>
              <p className="error-text">{error}</p>
            </HelpBlock>
          </Col>
        </Row>
        <Row className="apply-coupon-button">
          <Col md={12}>
            <input
              className="btn btn-primary apply"
              type="submit"
              value={couponDetails?'Applied':'Apply Coupon'}
              onClick={submitCoupon}
              disabled={couponDetails?true:false}
            />
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default CouponPage;
