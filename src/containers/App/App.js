import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { checkTokenExists } from 'ducks/auth';
import { load, loaded } from 'ducks/loading';
import { WebsiteHeader, WebsiteFooter } from 'components';
import { ToastContainer } from 'react-toastify';
import Popup from 'react-popup';
import Loading from 'react-loading-animation';

import 'react-popup/style.css';
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
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  componentWillMount() {
    this.props.load();
    document.body.style = 'background-color:white';
    this.checkLogin();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.location.pathname != this.props.location.pathname)
      this.checkLogin();
  }

  componentDidMount() {
    this.props.loaded();
  }

  checkLogin = () => {
    const cookie = localStorage.getItem('authToken');
    const authToken = cookie
      ? JSON.parse(cookie)
      : null;
    if (authToken) {
      this.props.checkTokenExists(authToken);
      this.setState({loggedIn: true});
    } else {
      if(this.props.location.pathname == '/checkout')
        browserHistory.push('/login');
      this.setState({loggedIn: false});
    }
  }

  logout = () => {
    localStorage.removeItem('authToken');
  }

  render() {
    return (
      <div className="website-app">
        <div className="basic-gradient-light" data-smooth-scroll-offset="77">
          <WebsiteHeader loggedIn={this.state.loggedIn} logout={this.logout} />
          <Popup  />
          <Loading isLoading={this.props.loading} />
          <div className="content">
            {this.props.children}
          </div>
          <WebsiteFooter loggedIn={this.state.loggedIn} />
        </div>
        <ToastContainer hideProgressBar={true} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.getIn(['loading', 'state'])
});

const mapDispatchToProps = {
  checkTokenExists,
  load,
  loaded
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
