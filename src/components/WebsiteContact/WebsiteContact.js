import React, { Component } from 'react';
import './WebsiteContact.scss';

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

  handleSubmit(evt){
    evt.stopPropagation();
    evt.preventDefault();
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
  handleEmailChange(evt) {
   
    this.setState({email: evt.target.value, emailError: ''});
  }
  handleNameChange(evt) {

    this.setState({name: evt.target.value});
  }
  handleMessageChange(evt) {

    this.setState({message: evt.target.value});
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
                <form onSubmit={this.handleSubmit.bind(this)} className="form-email row" data-recaptcha-theme="light" novalidate="true">
                  <div className="col-md-12">
                    <input type="text" name="name" placeholder="Name" className="validate-required" onChange={this.handleNameChange.bind(this)}  />
                  </div>
                  <div className="col-md-12">
                    <input type="email" name="email" placeholder="Johndoe@example.com" className="validate-required validate-email" onBlur={this.checkEmail.bind(this)} onChange={this.handleEmailChange.bind(this)} />
                  </div>
                  <div className="col-md-12">
                    <textarea rows="4" name="message" placeholder="Leave us a message" className="validate-required" onChange={this.handleMessageChange.bind(this)}></textarea>
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

export default WebsiteContact;
