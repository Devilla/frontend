import React, { Component } from 'react';
var Recaptcha = require('react-recaptcha');

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
    window.scrollTo(0, 0);
  }

  handleSubmit(evt){
    evt.stopPropagation();
    evt.preventDefault();

    console.log(this.refs.email,'+++++++++++++++++++++++');
    // if (evt.target.value==''){
    //   console.log(evt.target.value,'------------------------------------------');
    //   this.setState({ error: 'All fields are required' });
    //   return;
    // }else{
    //   this.state.name=evt.target.name;
    //   this.state.email=evt.target.email;
    //   this.state.message=evt.target.message;
    // }
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
    console.log(evt.target.value,"==============EMAIL");
    this.setState({email: evt.target.value, emailError: ''});
  }
  handleNameChange(evt) {
    console.log(evt.target.value,"=========NAME");
    this.setState({name: evt.target.value});
  }
  handleMessageChange(evt) {
    console.log(evt.target.value, "=============MESSAGE");
    this.setState({message: evt.target.value});
  }

  render() {
    return (
      <div className="main-container">
        <section className="cover text-center bg--secondary">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div> <span className="h2"><p>Contact us&nbsp;</p></span> </div>
                <div> <span className="h3 typed-text typed-text--cursor color--primary"> We sit round the clock just for you!</span> </div>
              </div>
            </div>
          </div>
        </section>
        <section className="switchable bg--secondary">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-5">
                <p className="lead">
                  E:&nbsp;<a href="#">info@useinfluence.co</a>
                  <br />
                </p>
                <p className="lead">
                  Drop a mail anytime, we endeavour to answer all enquiries within 24 hours.
                </p>
                <p className="lead"></p>
              </div>
              <div className="col-md-6 col-12">
                <form onSubmit={this.handleSubmit.bind(this)} className="form-email row" data-recaptcha-theme="light" novalidate="true">
                  <div className="col-md-6 col-12">
                    <label>Your Name:</label>
                    <input type="text" name="name" className="validate-required" onChange={this.handleNameChange.bind(this)}  />
                  </div>
                  <div className="col-md-6 col-12">
                    <label>Email Address:</label>
                    <input type="email" name="email" className="validate-required validate-email" onBlur={this.checkEmail.bind(this)} onChange={this.handleEmailChange.bind(this)} />
                  </div>
                  <div className="col-md-12 col-12">
                    <label>Message:</label>
                    <textarea rows="4" name="message" className="validate-required" onChange={this.handleMessageChange.bind(this)}></textarea>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="recaptcha">
                      <Recaptcha sitekey="sdfsdfsdfdsfsd" />
                    </div>
                  </div>
                  <button type="submit" className="btn btn--primary type--uppercase">Send Enquiry</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WebsiteContact;
