import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Spinner } from '../../components/index.js';
import { WebsiteHeader, WebsiteFooter } from 'components';

import { checkTokenExists } from 'ducks/auth';

import './scss/stack-interface.scss';
import './scss/socicon.css';
import './scss/iconsmind.scss';
import './scss/bootstrap.scss';
import './scss/theme.scss';
import './scss/custom.scss';
import './scss/font-raleway.scss';
import './scss/flickity.scss';
import './scss/font-sourcesanspro.scss';
import './App.scss';

class App extends Component {
  componentWillMount() {
    this.checkLogin((err) => {
      if(!err) {
        browserHistory.push('/dashboard');
      }
    });
  }

  checkLogin(callback) {
    const cookie = localStorage.getItem('authToken');
    const authToken = cookie
      ? JSON.parse(cookie)
      : null;
    if (authToken) {
      this.props.checkTokenExists(authToken);
      callback()
    } else {
      callback("not logged in")
    }
  }

  render(){
    return (
      <div className="website-app">
        <div className="basic-gradient-light" data-smooth-scroll-offset="77">
           <WebsiteHeader />
           <Spinner loading={this.props.loading} />
           <div className="content">
             {this.props.children}
           </div>
           <WebsiteFooter />
        </div>
        <ToastContainer hideProgressBar={true} />
      </div>
    );
  }

}

const mapDispatchToProps = {
  checkTokenExists
};

export default connect(null, mapDispatchToProps)(App);
