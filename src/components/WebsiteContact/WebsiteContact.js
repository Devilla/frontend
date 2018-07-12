import React, { Component } from 'react';
import { connect } from 'react-redux';

import { contactUs } from 'ducks/auth';
import { toast, ToastContainer } from 'react-toastify';
import './WebsiteContact.scss';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style',

};

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

  handleStateChange = (target, value) => {
    this.setState({[target]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      'name': this.state.name,
      'email': this.state.email,
      'message': this.state.message
    };
    this.props.contactUs(data);
    this.setState({name: '', email: '', message: '', emailError: ''});
    if (! toast.isActive(this.toastId)) {
      this.toastId = toast.info('Thankyou for your Response! ', toastConfig);
    }
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="websitecontact-container">
      <div className="main-container">
        <section className="cover text-center bg--secondary">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Contact us</h2>
                <div className="h3 typed-text typed-text--cursor color--primary"> We sit round the clock <span className="makeitbold">&nbsp;just for you</span> </div>
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
                <form className="form-email row" data-name="Contactus Form" >
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="validate-required"
                      value={name}
                      onChange={(e) => this.handleStateChange(e.target.name, e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={email}
                      className="validate-required validate-email"
                      onBlur={this.checkEmailBlur} onChange={(e) => this.handleStateChange(e.target.name, e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      rows="4"
                      name="message"
                      placeholder="Leave us a message"
                      className="validate-required"
                      value={message}
                      onChange={(e) => this.handleStateChange(e.target.name, e.target.value)}
                    >
                    </textarea>
                  </div>

                  <button type="submit" className="btn btn--primary type--uppercase" onClick={this.handleSubmit}>Send Enquiry</button>
                  <ToastContainer  autoClose={8000}/>
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

const mapStateToProps = state => ({
  error: state.getIn(['auth', 'contactError'])
});

const mapDispatchToProps = {
  contactUs
};

export default connect(null, mapDispatchToProps)(WebsiteContact);
