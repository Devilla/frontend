import React, { Component } from 'react';
import { connect } from 'react-redux';
import { validateEmail } from 'services/FormUtils';
import { HelpBlock } from 'react-bootstrap';
import { affiliate,affiliateError, clearAffiliateError } from 'ducks/auth';
import { toast,ToastContainer } from 'react-toastify';
import './affiliateregister.scss';

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

  handleEmailChange = (event) => {
    const { name, value } = event.target;
    const isEmailValid = validateEmail(this.refs.email.value);
    this.setState({ [name]: value, isEmailValid, errorEmail: '' });
  };

  handleNameChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const data = {
      'name': this.state.name,
      'email': this.state.email
    };
    this.props.affiliate(data);
    this.props.clearAffiliateError();
    this.props.affiliateError(data);
    this.setState({name: '', email: '', emailError: ''});

    if (!toast.isActive(this.toastId)) {
      this.toastId = toast.info('Thank you for Registering! 😀', toastConfig);
    }
  }

  render() {
    const { errorEmail, errorName, isEmailValid } = this.state;
    const mousepoint = {
      cursor: 'pointer'
    };
    return (
      <div className="transition-item affiliateregister-container">
        <div className="main-container">
          <section>
            <div className="container">
              <div className="row justify-content-around">
                <h2 className="align-center">Become an Influence Affiliate</h2>
                <div className="col-md-6">
                  <form className="row" onSubmit={this.handleSubmit.bind(this)} method="POST" data-name="Affiliate Form">
                    <div className="mt-3 col-md-12">
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="First / Last Name"
                        className="ml-0 validate-required"
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
                    <ToastContainer  className="toaster"/>
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
  affiliateError,
  clearAffiliateError
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(AffiliateRegister);
