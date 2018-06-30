import React, { Component } from 'react';
import { connect } from 'react-redux';
import { validateEmail } from 'services/FormUtils';
import { contactSuccess } from 'ducks/auth';
import './WebsiteContact.scss';



function validate(password, authEmail) {
  return {
    password: password.length === 0,
    authEmail: authEmail === false
  };
}

class WebsiteContact extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      authEmail: false,
      emailError: '',
      name:'',
      message:''
    };
  }
  componentDidMount() {
    let scrollElm = document.scrollingElement;
    scrollElm.scrollTop = 0;
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (!this.canBeSubmitted()) {
      return;
    } else {
      const data = {
        'name': this.state.name,
        'email': this.state.email,
        'message': this.state.message
      };
      this.props.contactSuccess(data);
      this.setState({name: '', email: '', message: '', emailError: ''});
    }
  }

  canBeSubmitted() {
    const errors = validate(this.state.email, this.state.authEmail);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
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

  checkEmail(evt) {
    /* eslint-disable */
    var Emailexpr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      /* eslint-disable */
    if (!Emailexpr.test(evt.target.value)) {
      this.setState({emailError: 'Enter a valid Email id'});
    } else {
      const data = {
        'email': this.state.email
      };
    }
  }

  handleChange = (target, value) => {
    this.setState({[target]: value});
  }

  render() {
    return (
      <div className="websitecontact-container">
      <div className="main-container">
        <section className="cover text-center bg--secondary">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Contact us</h2>
                <div className="h3 typed-text typed-text--cursor color--primary"> We sit round the clock <span className="makeitbold">just for you</span> </div>
              </div>
            </div>
          </div>
        </section>
        <section className="switchable contact-content">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6">
                <p className="lead">
                  E:&nbsp;<a href="#">info@useinfluence.co</a>
                  <br />
                </p>
                <p className="lead">
                  Drop a mail anytime, we endeavour to answer all enquiries within 24 hours.
                </p>
                <p className="lead"></p>
              </div>
              <div className="col-md-6">
                <form onSubmit={this.handleSubmit} className="form-email row" method="POST" data-name="Contactus Form" >
                  <div className="col-md-12">
                    <input type="text" name="name" placeholder="Name" className="validate-required" onChange={(e) => this.handleChange('name', e.target.value)}  />
                  </div>
                  <div className="col-md-12">
                    <input type="email" name="email" placeholder="Email Address" className="validate-required validate-email" onBlur={this.checkEmailBlur} onChange={(e) => this.handleChange('email', e.target.value)} />
                  </div>
                  <div className="col-md-12">
                    <textarea rows="4" name="message" placeholder="Leave us a message" className="validate-required" onChange={(e) => this.handleChange('message', e.target.value)}></textarea>
                  </div>
                  <button type="submit" className="btn btn--primary type--uppercase">Send Enquiry</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  contactSuccess
};

export default connect(null, mapDispatchToProps)(WebsiteContact);
