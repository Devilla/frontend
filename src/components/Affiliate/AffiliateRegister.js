import React, { Component } from 'react';
import { validateEmail } from 'services/FormUtils';
import { HelpBlock } from 'react-bootstrap';

export default class AffiliateRegister extends Component {
  constructor() {
    super();
    this.state= {
      name: '',
      email: '',
      isEmailValid: false,
      errorEmail: '',
      errorName: ''
    };
  }

  checkEmailBlur= (event) => {
    const value = event.target.value;
    const isEmailValid = validateEmail(value);
    this.setState({ isEmailValid });
    if (!value)
      this.setState({ errorEmail: 'Email id required' });
    else if (!isEmailValid)
      this.setState({ errorEmail: 'Enter a valid Email id' });
  }

  
  handleEmailChange = (event) => {
    const { name, value } = event.target;
    const isEmailValid = validateEmail(value);
    this.setState({ [name]: value, isEmailValid, errorEmail: '' });
  };

  checkNameBlur= (event)=> {
    const value = event.target.value;
    (value === '')?  this.setState({ errorName: 'Enter your Name' }) : (
      (isNaN(value)) ? this.setState({errorName: ''}) : this.setState({ errorName: 'Enter a valid Name' })
    );
  }
  
  handleNameChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  render() {
    const { errorEmail,errorName,isEmailValid } = this.state;
    const mousepoint = {
      cursor: 'pointer'
    };
    return (
      <div className="main-container">
        <section>
          <div className="container">
            <div className="row justify-content-around">
              <h2 class="align-center">Become an Influence Affiliate</h2>
              <div className="col-md-6">
                <form className="row">
                  <div className="mt-3 col-md-12">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="First / Last Name" 
                      className="ml-0 validate-required"    
                      id= "name"
                      onBlur={this.checkNameBlur} 
                      onChange={this.handleNameChange}
                    />
                    <HelpBlock>
                      <p className="website-error">{errorName}</p>
                    </HelpBlock>
                  </div>
                  <div className="mt-3 col-md-12">
                    <input 
                      name="email"
                      ref="email"
                      className="field w-input"
                      id="email"
                      onBlur={this.checkEmailBlur}
                      onChange={this.handleEmailChange}
                      placeholder="Johndoe@example.com"
                      type="email"
                    />
                    <HelpBlock>
                      <p className="website-error">{errorEmail}</p>
                    </HelpBlock>
                  </div>
                  <div className="mt-3 col-md-12">
                    <button
                      className="button submit-button w-button btn btn--primary ml-0"
                      type="submit"
                      id = "affiliatesubmit"
                      style={mousepoint}
                      disabled={!isEmailValid}
                    >
                    BECOME A AFFILIATE
                    </button>
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