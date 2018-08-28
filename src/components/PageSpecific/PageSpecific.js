import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './PageSpecific.scss';

class PageSpecific extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages : []
    };
  }

  handleChange = (e, index) => {
    let pages = this.state.pages;
    pages[index][e.target.id] = e.target.value;
    this.setState({pages});
  }

  deletePage = (pageIndex) => {
    let pages = this.state.pages;
    pages = pages.filter((page, index) => index !== pageIndex );
    this.setState({pages});
  }

  renderPages = () => {
    return this.state.pages.map((page, index) => {
      return (
        <Row key={index}>
          <form className="product-details-form">
            <Col md={4} className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input type="text" className="form-control" id="productName" value={page.productName} aria-describedby="productName" placeholder="Enter Product Name" onChange={(e) => this.handleChange(e, index)} />
            </Col>
            <Col md={4} className="form-group">
              <label htmlFor="productUrl">Product Url</label>
              <input type="text" className="form-control" id="productUrl" value={page.productUrl} placeholder="Enter Product Url" onChange={(e) => this.handleChange(e, index)} />
            </Col>
            <Col md={4} className="form-group">
              <label htmlFor="captureUrl">Capture Url</label>
              <input type="password" className="form-control" id="captureUrl" value={page.captureUrl} placeholder="Enter Capture Url" onChange={(e) => this.handleChange(e, index)} />
            </Col>
            <Col md={1} className="page-trash-button">
              <a href="javascript:;"><i className="ml-3 icon-trash" data-toggle="modal" data-target="#1"  onClick={() => this.deletePage(index)}></i></a>
            </Col>
          </form>
        </Row>
      );
    });
  }

  addpage = () => {
    const initialData = {
      productName: '',
      productUrl: '',
      captureUrl: ''
    };
    let pages = this.state.pages;
    pages.push(initialData);
    this.setState({ pages });
  }

  render() {
    const { handleNextButton } = this.props;
    
    console.log(this.state.pages, '============pages');
    return (
      <div className="page-specific-container">
        <h4 className="header-title">Page Specific</h4>
        <div className="page-specific-content">
          {this.renderPages()}
          <Row className="page-specific-buttons">
            <button className="btn btn-primary addpagepopup-btn newcamp-btn" onClick={()=> this.addpage()}><i className="fi-plus"></i> &nbsp;Add Page</button>
            <button
              type="submit"
              htmlFor="campaignForm"
              className="btn btn-primary waves-light waves-effect newcamp-btn"
              onClick={handleNextButton}
            >
              Create Your Campaign
            </button>
          </Row>
        </div>
      </div>
    );
  }
}

export default PageSpecific;
