import React from 'react';
import {
  Row,
  Col,
  FormGroup,
  FormControl,
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
          <Col md={12}>
            <FormGroup className="card-holder">
              <FormControl
                type="text"
                onChange={(e) => handleStateChange(e.target.value, e.target.id)}
                placeholder="Enter Coupon Code"
                id="coupon"
              />
            </FormGroup>
          </Col>
          {error &&
          <HelpBlock>
            <p className="error-text">{error}</p>
          </HelpBlock>
          }
        </Row>
        <Row style={{margin: '0% 30%'}}>
          <Col>
            <div className="frmcntl">
              <input className="btn btn-primary coupon-payment-button"
                type="submit"
                value={couponDetails?'Applied':'Apply Coupon'}
                onClick={submitCoupon}
                disabled={couponDetails?true:false}
              />
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default CouponPage;
