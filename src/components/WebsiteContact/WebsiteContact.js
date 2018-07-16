import React, { Component } from 'react';
import { connect } from 'react-redux';
import { validateEmail } from 'services/FormUtils';
import { HelpBlock } from 'react-bootstrap';
import { contactUs, clearContactError,contactError } from 'ducks/auth';
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
      errorEmail: '',
      errorName: '',
      errorMsg: '',
      name:'',
      message:'',
      isEmailValid: false
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
      this.setState({errorEmail: 'Enter a valid Email id'});
    } else {
      const data = {
        'email': this.state.email
      };
    }
  }

  checkEmailBlur = (event) => {
    const value = event.target.value;
    const isEmailValid = validateEmail(this.refs.email.value);
    this.setState({ isEmailValid: isEmailValid});
    if (!value)
      this.setState({ errorEmail: 'Email id required' });
    if (!isEmailValid)
      this.setState({ errorEmail: 'Enter a valid Email id' });
  }

  checkNameBlur = (event)=> {
    const value = event.target.value;
    (value === '')?  this.setState({ errorName: 'Enter your Name' }) : (
      (isNaN(value)) ? this.setState({errorName: ''}) : this.setState({ errorName: 'Enter a valid Name' })
    );
  }

  checkMsgBlur = (event)=> {
    const value = event.target.value;
    (value === '')?  this.setState({ errorMsg: 'Input your query' }) : '' ;
  }


  handleStateChange = (target, value) => {
    const isEmailValid = validateEmail(this.refs.email.value);
    this.setState({[target]: value ,isEmailValid});
    if (isEmailValid)
      this.setState({ errorEmail: '' });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      'name': this.state.name,
      'email': this.state.email,
      'message': this.state.message
    };
    this.props.contactUs(data);
    this.props.clearContactError();
    this.props.contactError(data);

    this.setState({name: '', email: '', message: '', errorEmail: '',errorName:'',errorMsg:''});
    if (! toast.isActive(this.toastId)) {
      this.toastId = toast.info('Thankyou for your Response! ', toastConfig);
    }
  }

  render() {
    const { name, email, message, errorEmail,errorName, errorMsg ,isEmailValid} = this.state;
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
                      onBlur={this.checkNameBlur} onChange={(e) => this.handleStateChange(e.target.name, e.target.value)}
                    />
                    <HelpBlock>
                      <p className="website-error">{errorName}</p>
                    </HelpBlock>
                  </div>
                  <div className="col-md-12">
                    <input
                      type="email"
                      name="email"
                      ref="email"
                      placeholder="Email Address"
                      value={email}
                      className="validate-required validate-email"
                      onBlur={this.checkEmailBlur} onChange={(e) => this.handleStateChange(e.target.name, e.target.value)}
                    />
                    <HelpBlock>
                      <p className="website-error">{errorEmail}</p>
                    </HelpBlock>
                  </div>
                  <div className="col-md-12">
                    <textarea
                      rows="4"
                      name="message"
                      placeholder="Leave us a message"
                      className="validate-required"
                      value={message}
                      onBlur={this.checkMsgBlur}
                      onChange={(e) => this.handleStateChange(e.target.name, e.target.value)}
                    >
                    <HelpBlock>
                      <p className="website-error">{errorMsg}</p>
                    </HelpBlock>
                    </textarea>
                  </div>

                  <button type="submit" className="btn btn--primary type--uppercase"
                    onClick={this.handleSubmit}
                    disabled={!isEmailValid} >Send Enquiry</button>
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
  contactUs,
  contactError,
  clearContactError
};

export default connect(null, mapDispatchToProps)(WebsiteContact);
