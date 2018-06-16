import React, { Component } from 'react';
import { Link } from "react-router";

class WebsiteCustomPay extends Component {


    render() {
        return (
            <div className="main-container">
            <section className="switchable switchable--switch bg--secondary">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-sm-12 col-md-7 col-lg-5">
                    <div className="">
                      <h2>Welcome back!</h2>
                      <div>
                        <h2>Confirm Your Account&nbsp;</h2>
                          <p className="lead">Try any plan free for 14 days and cancel anytime. </p>
                      </div>
                      <hr className="short" />
    
                      <form className="loginfrm" >
                        <div className="row">
                          <div className="col-9 ">
                            <input 
                            name="text"
                            className="field w-input"
                            placeholder="Chuck Norris"
                            type="name"
                            />
                           
                          </div>
                          <div className="col-9">
                          <select  style={{"color": "#A8A8A8","fontSize":"16px"}} className="required select"  placeholder="Select Plans" type="select">
                                        <option value="" selected="">Select the plans</option>
                                        <option value="134">Enterprise - $134</option>
                                        <option value="67">Advanced - $67</option>
                                        <option value="45">Small - $45</option>
                                        <option value="16">Startups - $16</option>
                                    </select>     
                          
                          </div>
    
                          <div className="col-9 frmcntl">
                            <input
                             className="button submit-button w-button btn btn--primary ml-0"
                             type="submit"
                             value="Start FREE trial"
                              />
                          </div>
                          <div></div>
                        </div>
                      </form>
                    </div>
                  </div>
    
                <div className="vristrue">
                </div>
    
           
                </div>
              </div>
            </section>
          </div>
        );
    };
};


export default  WebsiteCustomPay;