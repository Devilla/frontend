import React, { Component } from 'react';
import { connect } from 'react-redux';
import { demoSuccess, clearDemoError } from 'ducks/auth';
const initialState = {
  firstname : '',
  lastname : '',
  email : '',
  Phone :'',
  company :'',
  totalemp : '',
  dept : '',
  errorEmail: '',
  fm1 : true,
  fm2 : false,
  fm3 : false,

};

function validate(password, authEmail) {
  return {
    password: password.length === 0,
    authEmail: authEmail === false
  };
}
class WebsiteDemoPage extends  Component  {

  constructor() {
    super();

    // this states are to be assigned to gather information
    this.state = initialState;

  }


  handle_fnameChange(evt)
  {
    this.setState({'firstName'  : evt.target.value});
  }
  handle_lnameChange(evt)
  {
    this.setState({'lastName'  : evt.target.value});
  }

  handle_emailChange(evt)
  {
    this.setState({'email'  : evt.target.value});
  }

  handle_numberChange(evt)
  {
    this.setState({'Phone'  : evt.target.value});
  }

  handleCompanyChange(evt)
  {
    this.setState({'company'  : evt.target.value});
    console.log(evt.target.value);
  }

  handleEmployeeChange(evt)
  {
    this.setState({'totalemp'  : evt.target.value});
    console.log(evt.target.value);
  }

  handleDeptChange(evt)
  {
    this.setState({'dept'  : evt.target.value});
    console.log(evt.target.value);
  }


  componentDidMount(){
    var scrollElm = document.scrollingElement;
    scrollElm.scrollTop = 0;
  }

  componentWillUnmount() {
    this.setState(initialState);
  }


    b1StepHandler =() => {
      this.setState( prevState => ({
        fm1: !prevState.fm1,
        fm2: !prevState.fm2
      }));
    }

    b2StepHandler =() => {
      this.setState( prevState => ({
        fm2: !prevState.fm2,
        fm3: !prevState.fm3
      }));
    }

    nextStepHandler = (evt) => {
      if (!this.canBeSubmitted()) {
        evt.preventDefault();
        return;
      } else {
        evt.preventDefault();
        const data = {
          'fistname': this.state.fistname,
          'lastName': this.state.lastName,
          'email': this.state.email
        };
        this.props.demoSuccess(data);
        this.props.clearDemoError();
        this.setState({fistname: '',lastName: '',email: '', emailError: ''});
      }
    }

    canBeSubmitted() {
      const errors = validate(this.state.email, this.state.password, this.state.authEmail);

      const isDisabled = Object.keys(errors).some(x => errors[x]);
      return !isDisabled;
    }


    render()  {
      let { fm1, fm2 , fm3 }  = this.state;
      return (
        <div className="main-container">
          <section className="imagebg image--light cover cover-blocks bg--secondary">

            <div className="container">
              <div className="col-md-6">
                <form>

                  { (fm1)  ?
                    (<div className="row form-details-1" >
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
                        <input type="text" name="firstname" placeholder="First Name" onChange={this.handle_fnameChange.bind(this)} />

                      </div>
                      <div className="col-md-8">
                        <input type="text" name="lastname" placeholder="Last Name" onChange={this.handle_lnameChange.bind(this)} />
                      </div>
                      <div className="col-md-8">
                        <input type="email" name="emailaddress" placeholder="Email" onChange={this.handle_emailChange.bind(this)} />

                      </div>
                      <div className="col-md-8">
                        <input type="number" name="phonenumber" placeholder="Phone" onChange={this.handle_numberChange.bind(this)} />
                      </div>
                      <div className="col-md-8">
                        <button
                          type="button"
                          name="schedule"
                          className="btn btn--primary col-md-12 ml-0"
                          onClick={this.b1StepHandler} >Schedule a demo
                        </button>
                      </div>
                    </div>) : (
                      ''
                    )
                  }


                  { (fm2) ?
                    (<div className="row form-details-2">
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
                        <input type="text" name="Company" onChange={this.handleCompanyChange.bind(this)} placeholder="Company" />
                      </div>
                      <div className="col-md-8">
                        <select  style={{'color': '#A8A8A8','fontSize':'16px'}} className='employees required select' id='account[help_desk_size]' name='account[help_desk_size]' placeholder='Number of employees' type='select' onChange={this.handleEmployeeChange.bind(this)}>
                          <option value="" selected="">Number of employees</option>
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
                        <select style={{'color': '#A8A8A8','fontSize': '16px'}} className='department required select' id='department' name='department' placeholder='Department' type='select' onChange={this.handleDeptChange.bind(this)}>
                          <option value="" selected="">Department</option>
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
                      <div className="col-md-8">
                        <button
                          type="button"
                          name="submitdata"
                          className="btn btn--primary col-md-12 ml-0"
                          onClick={this.b2StepHandler}>Submit
                        </button>
                      </div>
                    </div>) : (
                      ''
                    )
                  }

                  { (fm3) ?
                    (<div className="row form-details-3">
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
                          onClick={this.nextStepHandler.bind(this)}>Start your trial
                        </button>
                      </div>
                    </div>) :(
                      ''
                    )
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
  error: state.getIn(['auth', 'demoSuccess'])
});

const mapDispatchToProps = {
  demoSuccess,
  clearDemoError
};

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteDemoPage);
