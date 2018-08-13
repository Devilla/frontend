import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { checkTokenExists } from 'ducks/auth';
import { OauthLogin, Spinner, OauthAuthorization } from 'components';
import { ToastContainer } from 'react-toastify';
import Popup from 'react-popup';
import 'react-popup/style.css';
import '../App/scss/stack-interface.scss';
import '../App/scss/socicon.css';
import '../App/scss/iconsmind.scss';
import '../App/scss/bootstrap.scss';
import '../App/scss/theme.scss';
import '../App/scss/custom.scss';
import '../App/scss/font-raleway.scss';
import '../App/scss/flickity.scss';
import '../App/scss/font-sourcesanspro.scss';
import '../App/App.scss';

class OauthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  componentWillMount() {
    document.body.style = 'background-color:white';
    this.checkLogin();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.location.pathname != this.props.location.pathname)
      this.checkLogin();
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
    console.log(this.props);
    return (
      <div className="transition-item oauth-transition-container website-app" style={{backgroundColor: 'whitesmoke'}}>
        <div className="basic-gradient-light" data-smooth-scroll-offset="77">
          <Popup  />
          <Spinner loading={this.props.loading} />
          <div className="content" style={{padding: '80px'}}>
            {this.props.params.type == 'authorize'?
              <OauthAuthorization />
              :
              <OauthLogin />
            }
          </div>
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
  checkTokenExists
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(OauthContainer);
