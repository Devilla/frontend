import React, { Component } from 'react';

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
    fm3 : false
};
class WebsiteDemoPage extends  Component  {

    constructor() {
        super();

        // this states are to be assigned to gather information
        this.state = initialState;
    
    }
   
    componentDidMount(){
        window.scrollTo(0, 0)
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

    nextStepHandler = () => {
        //next functionlaity to be added 
        //handler for last button
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
                                <input type="text" name="First Name" placeholder="First Name" />
                               
                            </div>
                            <div className="col-md-8">
                                <input type="text" name="Last Name" placeholder="Last Name" />
                            </div>
                            <div className="col-md-8">
                                <input type="email" name="Email Address" placeholder="Email" />
                             
                            </div>
                            <div className="col-md-8">
                                <input type="number" name="Phone Number" placeholder="Phone" />
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
                            ""
                         ) 
                    }
                      

                    { (fm2) ?
                        (<div className="row form-details-2">
                                <div className="col-md-12 col-lg-12">
                                        <div>
                                            <h1>Let's add your company details</h1>
                                            <p className="lead">
                                                    Tell us more about your use case so we can show you the very best of Influence.
                                            </p>
                                            <hr className="short" />
                                        </div>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" name="Company" placeholder="Company" />
                                </div>
                                <div className="col-md-8">
                                    <select  style={{"color": "#A8A8A8","fontSize":"16px"}} className="employees required select" id="account[help_desk_size]" name="account[help_desk_size]" placeholder="Number of employees" type="select">
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
                                        <select style={{"color": "#A8A8A8","fontSize": "16px"}} className="department required select" id="department" name="department" placeholder="Department" type="select">
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
                                ""
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
                                        onClick={this.nextStepHandler}>Start your trial
                                    </button>
                                </div>
                            </div>) :(
                                ""
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

export default WebsiteDemoPage;