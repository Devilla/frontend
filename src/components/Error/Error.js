import { Component } from 'react';
import { browserHistory } from 'react-router';
import './Error.css';

class Error extends Component {

  constructor() {
    super();
    this.routeToHome = this.routeToHome.bind(this);
  }

  routeToHome() {
    browserHistory.goBack();
  }

  render() {
    return (
      <div className="unknown-error">
        <div className="content-wrap">
          <div className="shadow-overlay">
            <div className="error_head">
              <h1> Oops!</h1>
              <div className="line">
                <hr />
              </div>
            </div>
            <div className="error_body">
              <h1> Something went wrong. </h1>
              <p> Oooops! Looks like something went wrong at this location. </p>
              {this.props.error &&
                <p className="error">{this.props.error.message}</p>}
            </div>
            <div className="error_button">
              <button type="button" onClick={this.routeToHome}>Go Back</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
