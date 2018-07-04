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
        <Row>
          <Col md={6}>
            <input
              type="text"
              onChange={(e) => handleStateChange(e.target.value, e.target.id)}
              placeholder="Enter coupon code"
              id="coupon"
            />
          </Col>
          <Col md={4}>
            <input
              className="btn btn-primary apply"
              type="submit"
              value={couponDetails?'Applied':'Apply Coupon'}
              onClick={submitCoupon}
              disabled={couponDetails?true:false}
            />
          </Col>
          {error &&
          <HelpBlock>
            <p className="error-text">{error}</p>
          </HelpBlock>
          }
        </Row>
      </form>
    </div>
  );
};

export default CouponPage;
