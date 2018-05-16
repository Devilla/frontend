import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux';
import { Spinner } from '../../components/index.js';
import { WebsiteHeader, WebsiteFooter } from 'components';
import '../../css/stack-interface.css';
import '../../css/socicon.css';
import '../../css/iconsmind.css';
import '../../css/bootstrap.css';
import '../../css/theme.css';
import '../../css/custom.css';
import '../../css/font-raleway.css';
import './App.css';

class App extends Component {
  render(){
    return (
        <div className="basic-gradient-light" data-smooth-scroll-offset="77">
           <WebsiteHeader />
           <Spinner loading={this.props.loading} />
           <div className="content">
             {this.props.children}
           </div>
           <WebsiteFooter />
        </div>
    );
  }

}

// App.propTypes = {
//   children: PropTypes.node,
// };
//
// const mapStateToProps = state => ({
//   loading: state.getIn(['loading', 'state']),
// });

// export default connect(mapStateToProps)(App);

export default App;
