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
              <h2 class="align-center">Become an Influence Affiliate</h2>
              <div className="col-md-6">
                <form className="row">
                  <div className="mt-3 col-md-12">
                    <input type="text" name="name" placeholder="First / Last Name" className="ml-0 validate-required" />
                  </div>
                  <div className="mt-3 col-md-12">
                    <input type="email" name="email" placeholder="you@something.com" className="ml-0 validate-required" />
                  </div>
                  <div className="mt-3 col-md-12">
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
