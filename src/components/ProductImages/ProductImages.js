import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ProductImages.scss';

class ProductImages extends Component {

  render() {
    return (
      <div className="modal fade show-modal" id="productImages" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content align-modal">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <i className="fa fa-close"></i>
              </button>
              <h4 className="modal-title">Products Listing</h4>
            </div>
            <div className="modal-body">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  campaign: state.getIn(['campaign', 'campaign'])
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(ProductImages);
