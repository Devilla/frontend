import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  '../assets/stylesheets/slick.css'
import  '../assets/stylesheets/slick-theme.css'
import  '../assets/stylesheets/style.css'

import Header from './_common/Header';
import Footer from './_common/Footer';
import { Spinner } from './index.js';

class App extends Component {
  render(){
    return (
        <div className="app-container">
          <Header />

          <Spinner loading={this.props.loading} />
          <div className="content">
            {this.props.children}
          </div>
          <Footer />
        </div>
    );
  }
};

App.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = state => ({
  loading: state.getIn(['loading', 'state'])
});

export default connect(mapStateToProps)(App);
