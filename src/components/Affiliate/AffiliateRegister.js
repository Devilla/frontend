import React, { Component } from 'react';
import { connect } from 'react-redux';
import { validateEmail } from 'services/FormUtils';
import { HelpBlock } from 'react-bootstrap';
import { affiliate, clearAffiliateError } from 'ducks/auth';
import { toast,ToastContainer } from 'react-toastify';
import './affiliateregister.scss';
function validate(password, authEmail) {
  return {
    password: password.length === 0,
    authEmail: authEmail === false
  };
}


const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};

class AffiliateRegister extends Component {
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



  checkEmailBlur = (event) => {
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
    const isEmailValid = validateEmail(this.refs.email.value);
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

  handleSubmit(evt) {
    evt.preventDefault();
    if (!this.canBeSubmitted()) {
      return;
    } else {
      const data = {
        'name': this.state.name,
        'email': this.state.email
      };
      this.props.affiliate(data);
      this.props.clearAffiliateError();
      this.setState({name: '', email: '', emailError: ''});
    }

    if (! toast.isActive(this.toastId)) {
      this.toastId = toast.info('Thankyou for Registering! 😀', toastConfig);
    }
  }
  canBeSubmitted() {
    const errors = validate(this.state.email, this.state.password, this.state.authEmail);

    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const { errorEmail, errorName, isEmailValid } = this.state;
    const mousepoint = {
      cursor: 'pointer'
    };
    return (
      <div className="affiliateregister-container">
        <div className="main-container">
          <section>
            <div className="container">
              <div className="row justify-content-around">
                <h2 className="align-center">Become an Influence Affiliate</h2>
                <div className="col-md-6">
                  <form className="row" onSubmit={this.handleSubmit.bind(this)} method="POST" data-name="Affiliate Form">
                    <div className="mt-3 col-md-12">
                      <input
                        type="text"
                        name="name"
                        placeholder="First / Last Name"
                        className="ml-0 validate-required"
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
                      <input
                        className="button submit-button w-button btn btn--primary ml-0"
                        type="submit"
                        value="BECOME A AFFILIATE"
                        style={mousepoint}
                        disabled={!isEmailValid}

                      />
                    </div>
                    <ToastContainer  autoClose={8000} className="toaster"/>
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
  error: state.getIn(['auth', 'affiliateError'])
});

const mapDispatchToProps = {
  affiliate,
  clearAffiliateError
};

export default connect(mapStateToProps, mapDispatchToProps)(AffiliateRegister);
