import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageUploader from 'react-images-upload';

import './ProductImages.scss';

const pagethArray = [
  'Product Image',
  'Product Name',
  'Upload'
];

class ProductImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentWillMount() {
    this.setState({products: this.props.products});
  }

  onDrop = (picture, index) => {
    let products = this.state.products;
    products[index]['productImage'] = picture[0];
    this.setState({products});
  }

  getBase64 = (file, index) => {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let products = this.state.products;
      products[index]['productImage'] = reader.result;
      this.setState({products});
    };
  }

  render() {
    const { products } = this.state;

    return (
      <div className="modal fade show-modal product-images-container" id="productImages" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content align-modal">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <i className="fa fa-close"></i>
              </button>
              <h4 className="modal-title">Products Listing</h4>
            </div>
            <div className="modal-body">
              <div>
                <div className="Table table-striped">
                  <div className="thead table-header flex">
                    <div className="tr tab-row">
                      {
                        pagethArray.map((prop, key) => {
                          return (
                            <div className="th col-md-4"  key={key}>{prop}</div>
                          );
                        })
                      }
                    </div>
                  </div>
                  <div>
                    {
                      products.map((product, i) => {
                        return (
                          <div className="display-td tr" key={i}>
                            <div className="td col-md-4">
                              <img src={product.productImage? typeof product.productImage.name == 'string'?this.getBase64(product.productImage, i):product.productImage:'http://weggelopen.info/wp-content/uploads/2018/08/jordan-map-images.jpg'} />
                            </div>
                            <div className="td col-md-4">{product.name}</div>

                            <div className="td col-md-4">
                              <a href="javascript:;">
                                <ImageUploader
                                  withIcon={true}
                                  buttonText='Choose images'
                                  onChange={(image) => this.onDrop(image, i)}
                                  imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                  maxFileSize={5242880}
                                />
                              </a>
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              </div>
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
