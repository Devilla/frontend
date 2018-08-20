import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {LogoInfluence} from 'img';
// import './ComingSoon.scss';


class AuthorizationDialog extends Component {

  constructor() {
    super();
    this.routeToHome = this.routeToHome.bind(this);
  }
  routeToHome() {
    browserHistory.goBack();
  }
  render() {
    return (
      <div>
        <div className="card">
          <div className="wrapper">
            <div className="mt-3 ml-4">
              <div className="">
                <div className="card-box p-5">
                  <h2 className="text-uppercase text-center pb-4">
                    <a href="index.html" className="text-success">
                      <span><img src={LogoInfluence} height="26"/></span>
                    </a>
                  </h2>
                  <div className="text-center">
                    <form className="row" onSubmit='' method="POST">
                      <div className="mt-3 col-md-12">
                        <input
                          name="email"
                          ref="email"
                          className="field w-input"
                          placeholder="Johndoe@example.com"
                          type="email"
                        />
                      </div>
                      <div className="mt-3 col-md-12">
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Enter Email"
                          className="ml-0 validate-required"
                        />
                      </div>
                      <div className="mt-3 col-md-12">
                        <input
                          className="button submit-button w-button btn btn--primary ml-0"
                          type="submit"
                          value="Sign In"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorizationDialog;
