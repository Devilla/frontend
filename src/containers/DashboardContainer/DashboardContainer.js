import React, {Component} from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import { checkTokenExists } from 'ducks/auth';
import { Spinner, Header, Footer, Sidebar } from 'components';

import './DashboardContainer.scss';
import './assets/css/bootstrap.min.scss';
import './assets/css/animate.min.scss';
import './assets/css/demo.scss';
import './assets/css/pe-icon-7-stroke.css';
import 'react-select/dist/react-select.css';


class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);

    this.state = {
      render: true
    };

    this.checkLogin((err) => {
      if(err) {
        yield browserHistory.push('/login');
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
    if (this.props.profile != nextProps.profile || !nextProps.profile)
      this.checkUserDetails(nextProps.profile);
  }

  componentDidMount() {
    this.setState({_notificationSystem: this.refs.notificationSystem});
  }

  checkUserDetails(profile) {
    const user = this.props.user;
    if (user && user.size !== 0 && (!profile || !profile.plan)) {
      browserHistory.push('getting-started')
    }
  }

  componentDidUpdate(e) {
    if (window.innerWidth < 993 && e.history.location.pathname !== e.location.pathname && document.documentElement.className.indexOf('nav-open') !== -1) {
      document.documentElement.classList.toggle('nav-open');
    }
  }

  render() {
    const { loading } = this.props;
    return (
      <div className="dashboard-container">
        <div className="wrapper">
          <Spinner loading={loading} />
          {!this.state.render && <p>Please wait</p>}
          {this.state.render && <Sidebar {...this.props}/>}
          {
            this.state.render && <div id="main-panel" className="main-panel" style={{width: 'calc(100% - 195px)', marginTop: '-.5%', marginRight: '-1%'}}>
                <Header {...this.props}/>
                {this.props.children}
                {/* <Footer/> */}
              </div>
          }
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
