import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux';
import { Spinner } from '../../components/index.js';
import { WebsiteHeader, WebsiteFooter } from 'components';
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
