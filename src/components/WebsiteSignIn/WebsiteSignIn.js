import React, { Component } from 'react';
import { Link } from "react-router";

class WebsiteSignIn extends Component {
  render() {
    return (
      <div classNameName="main-container">
        <section className="switchable switchable--switch bg--secondary">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-lg-6">
                <div className="">
                  <h2>Welcome back!</h2>
                  <p className="lead">
                    <span>Don't have an account yet?&nbsp;
                      <Link to="/signup">Sign up</Link>
                    </span>
                  </p>
                  <hr className="short" />
                  <form>
                    <div className="row">
                      <div className="col-9">
                        <input type="email" name="Email Address" placeholder="Email Address" />
                      </div>
                      <div className="col-9">
                        <input type="password" name="Password" placeholder="Password" />
                      </div>
                      <div className="col-12">
                        <div className="input-checkbox">
                          <input type="checkbox" name="agree" id="input-assigned-1" />
                          <label for="input-assigned-1"></label>
                        </div>
                        <span>Remember Me</span>
                      </div>
                      <div className="col-4">
                        <button type="submit" className="btn btn--primary">Login</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-3">
                <p> <br /> </p>
                <p> <br /> </p>
                <h3 className="mt--2"> &nbsp; &nbsp; Or, <br />You can </h3>
              </div>
              <div className="col-md-6 col-lg-5">
                <p> <br /></p>
                <p> <br /></p>
                <div className="mt--3">
                  <Link className="btn btn--icon bg--facebook" to="">
                    <span className="btn__text">
                      <i className="socicon socicon-facebook"></i>
                      Login with Facebook
                    </span>
                  </Link>
                  <p></p>
                  <Link className="btn btn--icon bg--googleplus" to="">
                    <span className="btn__text">
                      <i className="socicon socicon-google"></i>
                      Login with Google
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WebsiteSignIn;
