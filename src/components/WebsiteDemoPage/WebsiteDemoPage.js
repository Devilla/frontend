import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { HelpBlock } from 'react-bootstrap';
import { validateEmail } from 'services/FormUtils';
import { demo, clearDemoError } from 'ducks/auth';
import './WebsiteDemoPage.scss';

const initialState = {
  firstname : '',
  lastname : '',
  email : '',
  phonenumber :'',
  company :'',
  totalEmployee : '',
  department : '',
  error: '',
  fm1 : true,
  fm2 : false,
  fm3 : false,
  name: '',
  isEmailValid: false,
  errorEmail: '',
  errorFirstName: '',
  errorLastName: '',
  errorPhoneNumber: ''

};

class WebsiteDemoPage extends  Component  {

  constructor() {
    super();
    // this states are to be assigned to gather information
    this.state = initialState;
  }
  componentDidMount() {
    window.scrollTo(0,0);
  }
  checkEmailBlur = (event) => {
    const value = event.target.value;
    const isEmailValid = validateEmail(value);
    this.setState({ isEmailValid });
    if (!value)
      this.setState({ errorEmail: 'Email id required' });
    else if (!isEmailValid)
      this.setState({ errorEmail: 'Enter a valid Email id' });
  }

  checkPhoneNumberBlur= (event)=> {
    const value = event.target.value;
    (value === '')?  this.setState({ errorPhoneNumber: 'Enter your Name' }) : (
      (isNaN(value)) ? this.setState({errorPhoneNumber: ''}) : this.setState({ errorPhoneNumber: 'Enter a valid Name' })
    );
  }

  checkFirstNameBlur= (event)=> {
    const value = event.target.value;
    (value === '')?  this.setState({ errorFirstName: 'Enter your Name' }) : (
      (isNaN(value)) ? this.setState({errorFirstName: ''}) : this.setState({ errorFirstName: 'Enter a valid Name' })
    );
  }
  checkLastNameBlur= (event)=> {
    const value = event.target.value;
    (value === '')?  this.setState({ errorLastName: 'Enter your Name' }) : (
      (isNaN(value)) ? this.setState({errorLastName: ''}) : this.setState({ errorLastName: 'Enter a valid Name' })
    );
  }

  handleStateChange = (target, value) => {
    this.setState({[target]: value});
  }


  componentWillUnmount() {
    this.setState(initialState);
  }

  b1StepHandler = () => {
    this.setState( prevState => ({
      fm1: !prevState.fm1,
      fm2: !prevState.fm2
    }));
  }

  b2StepHandler = (e) => {
    e.preventDefault();
    const { firstname, lastname, email, phonenumber, company, totalEmployee, department } = this.state;
    if(!firstname || !lastname || !email || !phonenumber || !company || !totalEmployee || !department)
      return this.setState({error: 'All fields required'});
    const data = {
      'firstname': firstname,
      'lastname': lastname,
      'email': email,
      'phonenumber': phonenumber,
      'company': company,
      'totalEmployee': totalEmployee,
      'department': department
    };
    this.props.demo(data);
    this.props.clearDemoError();
    this.setState({firstname: '',lastname: '',email: '', emailError: ''});

    this.setState( prevState => ({
      fm2: !prevState.fm2,
      fm3: !prevState.fm3
    }));
  }

  render()  {
    const { errorEmail, errorFirstName, errorLastName, errorPhoneNumber } = this.state;
    let { fm1, fm2 , fm3, error }  = this.state;
    return (
      <div className="transition-item main-container demopage-container">
        <section className="imagebg image--light cover cover-blocks bg--secondary">
          <div className="container">
            <div className="col-md-6">
              <form>
                {fm1 &&
                  <div className="row form-details-1" >
                    <div className="col-md-12 col-lg-12 ">
                      <div>
                        <h1>Let’s start the show</h1>
                        <p className="lead">
                          Tell us a little bit about yourself, and we’ll tell you a lot more about us.
                        </p>
                        <hr className="short" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        onBlur={this.checkFirstNameBlur}
                        onChange={(e) => this.handleStateChange(e.target.name, e.target.value)}
                      />
                      <HelpBlock>
                        <p className="website-error">{errorFirstName}</p>
                      </HelpBlock>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        onBlur={this.checkLastNameBlur}
                        onChange={(e) => this.handleStateChange(e.target.name, e.target.value)}
                      />
                      <HelpBlock>
                        <p className="website-error">{errorLastName}</p>
                      </HelpBlock>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onBlur={this.checkEmailBlur}
                        onChange={(e) => this.handleStateChange(e.target.name, e.target.value)}
                      />
                      <HelpBlock>
                        <p className="website-error">{errorEmail}</p>
                      </HelpBlock>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="number"
                        name="phonenumber"
                        placeholder="Phone Number"
                        onBlur={this.checkPhoneNumberBlur}
                        onChange={(e) => this.handleStateChange(e.target.name, e.target.value)}
                      />
                      <HelpBlock>
                        <p className="website-error">{errorPhoneNumber}</p>
                      </HelpBlock>
                    </div>
                    <div className="col-md-8">
                      <button
                        type="button"
                        name="schedule"
                        className="btn btn--primary col-md-12 ml-0"
                        onClick={this.b1StepHandler} >Schedule a demo
                      </button>
                    </div>
                  </div>
                }

                {fm2 &&
                  <div className="row form-details-2">
                    <div className="col-md-12 col-lg-12">
                      <div>
                        <h1>Lets add your company details</h1>
                        <p className="lead">
                          Tell us more about your use case so we can show you the very best of Influence.
                        </p>
                        <hr className="short" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        name="company"
                        onChange={(e) => this.handleStateChange(e.target.name, e.target.value)}
                        placeholder="Company"
                      />
                    </div>
                    <div className="col-md-8">
                      <select  style={{'color': '#A8A8A8','fontSize':'18px'}} className='employees required select' placeholder='Number of employees' type='select' onChange={(e) => this.handleStateChange('totalEmployee', e.target.value)}>
                        <option>Select Number of employees</option>
                        <option value="5000+">5000+</option>
                        <option value="1000-4999">1000-4999</option>
                        <option value="500-999">500-999</option>
                        <option value="250-499">250-499</option>
                        <option value="100-249">100-249</option>
                        <option value="50-99">50-99</option>
                        <option value="10-49">10-49</option>
                        <option value="1-9">1-9</option>
                      </select>
                    </div>
                    <div className="col-md-8">
                      <select className='department required select' id='department' name='department' placeholder='Department'  onChange={(e) => this.handleStateChange('department', e.target.value)}>
                        <option>Select Department</option>
                        <option value="Customer Service">Customer Service</option>
                        <option value="Facilities">Facilities</option>
                        <option value="Finance/Accounting">Finance/Accounting</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="IT">IT</option>
                        <option value="Legal">Legal</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Professional Services/Consulting">Professional Services/Consulting</option>
                        <option value="Shared Service">Shared Service</option>
                      </select>
                    </div>
                    <HelpBlock>
                      <p className="website-error">{error}</p>
                    </HelpBlock>
                    <div className="col-md-8">
                      <button
                        type="button"
                        name="submitdata"
                        className="btn btn--primary col-md-12 ml-0"
                        onClick={this.b2StepHandler}>Submit
                      </button>
                    </div>
                  </div>
                }

                {fm3 &&
                  <div className="row form-details-3">
                    <div className="col-md-12 col-lg-12 ">
                      <div>
                        <h1>Thanks!</h1>
                        <p className="lead">
                          We will be in touch with you shortly. In the meantime, we highly recommend starting a free trial.
                        </p>
                        <hr className="short" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <button
                        type="button"
                        name="trialbtn"
                        className="btn btn--primary col-md-12 ml-0"
                        onClick={() => browserHistory.push('/signup')}>Start your trial
                      </button>
                    </div>
                  </div>
                }
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.getIn(['auth', 'demoError'])
});

const mapDispatchToProps = {
  demo,
  clearDemoError
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(WebsiteDemoPage);
