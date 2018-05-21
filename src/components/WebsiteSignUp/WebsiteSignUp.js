import React, { Component } from 'react';
import { Link } from "react-router";
import { SignUp } from 'img';

class WebsiteSignUp extends Component {
  render() {
    return (
      <div classNameNameName="main-container">
        <section className="switchable bg--secondary">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-6 col-lg-6">
                <div className="switchable__text">
                  <h2>Your first step towards conversions, Signup here.</h2>
                  <span>Already have an account?&nbsp;
                    <Link to="/login">Sign in</Link>
                  </span>
                  <hr className="short" />
                  <form>
                    <div className="row">
                      <div className="col-12">
                        <input type="text" name="First Name" placeholder="Your Name" />
                      </div>
                      <div className="col-12">
                        <input type="email" name="Email Address" placeholder="Email Address" />
                      </div>
                      <div className="col-12">
                        <input type="password" name="Password" placeholder="Password" />
                      </div>
                      <div className="col-12">
                        <input type="password" name="Password-confirm" placeholder="Confirm Password" />
                      </div>
                      <div className="col-12">
                        <div className="input-checkbox">
                          <input type="checkbox" name="agree" id="input-assigned-1" />
                          <label for="input-assigned-1"></label>
                        </div>
                        <span>Remember Me</span>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn--primary">Create Account</button>
                      </div>
                      <hr />
                      <div className="col-12">
                        <span className="type--fine-print">By signing up, you agree to the&nbsp;
                          <Link to="/terms-and-condtions">Terms of Service</Link>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-8 col-lg-8">
                <img alt="Image" src={ SignUp } />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WebsiteSignUp;
