import React, { Component } from 'react';

export default class AffiliateRegister extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="main-container">
        <section>
          <div className="container">
            <div className="row justify-content-around">
              <h2 class="align-center">Become a Influence Affiliate</h2>
              <div className="col-md-6">
                <form className="row">
                  <div className="col-md-12">
                    <label className="mb-2">Your Name:</label>
                    <input type="text" name="name" placeholder="First / Last Name" className="ml-0 validate-required" />
                  </div>
                  <div className="col-md-12">
                    <label className="mt-3 mb-2">Email Address:</label>
                    <input type="email" name="email" placeholder="you@something.com" className="ml-0 validate-required" />
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="btn btn--primary ml-0">BECOME AN AFFILIATE</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
