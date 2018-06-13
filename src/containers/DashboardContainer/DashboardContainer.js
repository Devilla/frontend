import React, {Component} from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import { checkTokenExists } from 'ducks/auth';
import { Spinner, Header, Footer, Sidebar } from 'components';

import './DashboardContainer.scss';
import './assets/css/bootstrap.min.scss';
import './assets/css/animate.min.scss';
import './assets/css/demo.scss';
import 'react-select/dist/react-select.css';
import Popup from 'react-popup';
import 'react-popup/style.css';

import './asset/css/style.css';
import './asset/scss/icons.scss';
import './asset/css/bootstrap.min.css';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: true,
      disableButton: false
    };

    this.checkLogin((err) => {
      if(err) {
        browserHistory.push('/login');
      } else {
        this.checkUserDetails(this.props.profile);
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

  componentWillReceiveProps(nextProps) {
    if (!nextProps.profile && nextProps.user.size != 0 && !this.state.disableButton  )
      this.checkUserDetails(nextProps.profile);
    if(this.props.profile != nextProps.profile && nextProps.profile && nextProps.profile.plan)
      this.setState({disableButton: false});
  }

  checkUserDetails(profile) {
    const user = this.props.user;
    if (user && user.size !== 0 && (!profile || !profile.plan)) {
      this.setState({disableButton: true});
      browserHistory.push('getting-started');
    }
  }

  componentDidUpdate(e) {
    if (window.innerWidth < 993 && this.props.history.location.pathname !== e.location.pathname && document.documentElement.className.indexOf('nav-open') !== -1) {
      document.documentElement.classList.toggle('nav-open');
    }
  }

  render() {
    const { loading } = this.props;
    return (
      <div className="dashboard-container">
        <Popup />
        <div className="wrapper">
        <div id="wrapper">
          <Spinner loading={loading} />
          {!this.state.render && <p>Please wait</p>}

          {this.state.render && <Sidebar {...this.props} disableButton={this.state.disableButton} />}
          {
            this.state.render &&
            <div className="content-page">
            <div class="topbar">
              <nav class="navbar-custom">
                <div class="topbar-right-menu float-right mb-0">
                  <Header {...this.props}/>

                  {this.props.children}
                  </div>
                  </nav>
                </div>
                </div>
          }
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  profile: state.getIn(['profile', 'profile']),
  user: state.getIn(['auth', 'user']),
  loading: state.getIn(['loading', 'state']),
});

const mapDispatchToProps = {
  checkTokenExists
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
