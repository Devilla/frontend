import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageUploader from 'react-images-upload';
import { updateSubCampaign } from 'ducks/subcampaign';
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
    var reader = new window.FileReader();
    reader.readAsDataURL(picture[0]);
    reader.onload = () => {
      let products = this.state.products;
      const updatedProduct = {
        id: products[index]._id,
        productImage: reader.result
      };
      products[index]['productImage'] = reader.result;
      this.setState({products});
      this.props.updateSubCampaign(updatedProduct);
    };
  }

  render() {
    const { products } = this.state;

    return (
      <Modal
        className="product-images-container"
        id="productImages"
        title="Products Listing"
        content={
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
                          <img src={product.productImage?product.productImage:'http://weggelopen.info/wp-content/uploads/2018/08/jordan-map-images.jpg'} />
                        </div>
                        <div className="td col-md-4">{product.name}</div>

                        <div className="td col-md-4">
                          <a href="javascript:;">
                            <ImageUploader
                              withIcon={true}
                              buttonText='Choose Product image'
                              onChange={(image) => this.onDrop(image, i)}
                              imgExtension={['.jpg', '.jpeg', '.gif', '.png', '.gif', '.tif', '.tiff', '.jif', '.jfif', '.jp2', '.jpx', '.j2k', '.j2c', '.fpx', '.pcd']}
                              maxFileSize={5242880}
                              singleImage={true}
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
        }
      />
    );
  }
}

const mapDispatchToProps = {
  updateSubCampaign
};

export default connect(null, mapDispatchToProps, null, { withRef: true })(ProductImages);
