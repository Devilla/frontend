import React, { Component } from 'react';
import InstallPixel from './install-pixel';
import CaptureLeads from './CaptureLeads';
import DisplayPage from './DisplayPage';
import ConfigNotification from './configure-notification'
import Notifications from './Notifications/Notifications';
import './Tabs.scss';

class Tabs extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeClass: 1
    };
    this.setActiveState = this.setActiveState.bind(this);
  }

  setActiveState(val) {
    this.setState({activeClass: val});
  }

  render(){
    const { activeClass } = this.state;
    return (
      <div className="col-md-12">
        <div className="card-box">
          <h3 className=" m-t-0 m-b-30">{this.props.campaign
            ? this.props.campaign.websiteUrl
            : 'http://localhost:3000'} / {this.props.campaign
              ? this.props.campaign.campaignName
              : 'http://localhost:3000'}</h3>
              <div className="clearfix"></div>


          <ul className="nav nav-pills navtab-bg nav-justified pull-in ">
              <li className="nav-item waves-effect">
                  <a data-toggle="tab" aria-expanded="false" className={`nav-link ${activeClass == 1?'active':''}`} onClick={() => this.setActiveState(1)}>

                      <i className="fi-layers mr-2"></i> Install Pixel
                  </a>
              </li>
              <li className="nav-item waves-effect">
                  <a data-toggle="tab" aria-expanded="true" className={`nav-link ${activeClass == 2?'active':''}`} onClick={() => this.setActiveState(2)}>

                      <i className="fi-mail mr-2"></i>Notifications
                  </a>
              </li>
              <li className="nav-item waves-effect">
                  <a data-toggle="tab" aria-expanded="false" className={`nav-link ${activeClass == 3?'active':''}`} onClick={() => this.setActiveState(3)}>

                      <i className="fi-box mr-2"></i> Configure
                  </a>
              </li>
              <li className="nav-item waves-effect">
                  <a data-toggle="tab" aria-expanded="false" className={`nav-link ${activeClass == 4?'active':''}`} onClick={() => this.setActiveState(4)}>

                      <i className="fi-head mr-2"></i> Capture Leads
                  </a>
              </li>
              <li className="nav-item waves-effect">
                  <a data-toggle="tab" aria-expanded="false" className={`nav-link ${activeClass == 5?'active':''}`} onClick={() => this.setActiveState(5)}>

                      <i className="fi-monitor mr-2"></i> Display
                  </a>
              </li>
          </ul>

          <div className="tab-content">

              <div className={`tab-pane ${activeClass == 1?'show active':''}`} id="home1">
                <InstallPixel setActiveState={this.setActiveState} campaign={this.props.campaign}/>
              </div>

              <div className={`tab-pane ${activeClass == 2?'show active':''}`} id="profile1">
                <Notifications setActiveState={this.setActiveState} />
                  {/* <div className="row m-t-50">
                      <div className="col-md-4">
                          <div className="card-box ribbon-box bx-shadow">
                              <div className="ribbon ribbon-success">
                                  <span>GROUP</span>
                              </div>
                              <div className="text-center card-box ">

                                  <div className="member-card pt-2 pb-2">
                                      <div className="thumb-lg member-thumb m-b-10 mx-auto">
                                          <img src="assets/images/users/avatar-2.jpg" className="rounded-circle img-thumbnail" alt="profile-image" />
                                      </div>

                                      <div className=" m-t-30">
                                          <h4 className="m-b-5">Group Activity</h4>
                                          <p className="text-muted">Show the total visitors over a period of time
                                              <span> | </span>
                                              <span>
                                                  <a href="#" className="text-pink">websitename.com</a>
                                              </span>
                                          </p>
                                      </div>

                                      <div className="checkbox checkbox-success checkbox-circle">
                                          <input id="checkbox-10" type="checkbox" checked />
                                          <label htmlFor="checkbox-10">
                                              Enable
                                          </label>
                                      </div>

                                      <button type="button" className="btn btn-primary m-t-20 btn-rounded btn-bordered waves-effect w-md waves-light">Configure</button>



                                  </div>
                              </div>
                          </div>

                      </div>

                      <div className="col-md-4">
                          <div className="card-box ribbon-box bx-shadow">
                              <div className="ribbon ribbon-success">
                                  <span>LIVE</span>
                              </div>
                              <div className="text-center card-box ">

                                  <div className="member-card pt-2 pb-2">
                                      <div className="thumb-lg member-thumb m-b-10 mx-auto">
                                          <img src="assets/images/users/avatar-3.jpg" className="rounded-circle img-thumbnail" alt="profile-image" />
                                      </div>

                                      <div className="">
                                          <h4 className="m-b-5">Live Visitor Count</h4>
                                          <p className="text-muted">Show how many people are currently on your page
                                              <span> | </span>
                                              <span>
                                                  <a href="#" className="text-pink">websitename.com</a>
                                              </span>
                                          </p>
                                      </div>

                                      <div className="checkbox checkbox-success checkbox-circle">
                                          <input id="checkbox-10" type="checkbox" checked />
                                          <label htmlFor="checkbox-10">
                                              Enable
                                          </label>
                                      </div>

                                      <button type="button" className="btn btn-primary m-t-20 btn-rounded btn-bordered waves-effect w-md waves-light">Configure</button>


                                  </div>
                              </div>
                          </div>

                      </div>

                      <div className="col-md-4">
                          <div className="card-box ribbon-box bx-shadow">
                              <div className="ribbon ribbon-success">
                                  <span>RECENT</span>
                              </div>
                              <div className="text-center card-box">

                                  <div className="member-card pt-2 pb-2">
                                      <div className="thumb-lg member-thumb m-b-10 mx-auto">
                                          <img src="assets/images/users/avatar-4.jpg" className="rounded-circle img-thumbnail" alt="profile-image" />
                                      </div>

                                      <div className="">
                                          <h4 className="m-b-5">Recent Activity</h4>
                                          <p className="text-muted">Show individual people that recently signed up
                                              <span> | </span>
                                              <span>
                                                  <a href="#" className="text-pink">websitename.com</a>
                                              </span>
                                          </p>
                                      </div>
                                      <div className="checkbox checkbox-success checkbox-circle mt-20">
                                          <input id="checkbox-10" type="checkbox" checked />
                                          <label htmlFor="checkbox-10">
                                              Enable
                                          </label>
                                      </div>

                                      <button type="button" className="btn btn-primary m-t-20 btn-rounded btn-bordered waves-effect w-md waves-light">Configure</button>

                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
                  <div className="m-t-50 float-right">
                      <button type="button" className="btn btn-custom  waves-light waves-effect number ">
                          Previous</button>
                              <button type="button" className="btn btn-custom  waves-light waves-effect number ml-2 pl-4 pr-4">Next </button>
                  </div>
                  <div className="clearfix"></div> */}
              </div>

              <div className={`tab-pane ${activeClass == 3?'show active':''}`} id="messages1">
                  <div className="row m-t-30 m-b-30">
                      <div className="col-md-6 border-right">
                          <h4 className="lead m-b-30 m-t-50">Configure Actions on UI</h4>
                          <ul className="text-muted text-left list-unstyled ">
                              <li>
                                  <div className="checkbox checkbox-pink">
                                      <input id="checkbox6b1" type="checkbox" checked />
                                      <label htmlFor="checkbox6b1" className="text-muted">
                                          Hide notifications on mobile
                                      </label>
                                  </div>
                              </li>
                              <li>
                                  <div className="checkbox checkbox-pink">
                                      <input id="checkbox6b2" type="checkbox" checked />
                                      <label htmlFor="checkbox6b2" className="text-muted">
                                          Loop notifications
                                      </label>
                                  </div>
                              </li>
                              <li>
                                  <div className="checkbox checkbox-pink">
                                      <input id="checkbox6b3" type="checkbox" />
                                      <label htmlFor="checkbox6b3" className="text-muted">
                                          Randomize delay between notifications
                                      </label>
                                  </div>
                              </li>
                              <li>
                                  <div className="checkbox checkbox-pink">
                                      <input id="checkbox6b4" type="checkbox" />
                                      <label htmlFor="checkbox6b4" className="text-muted">
                                          Allow users to close notifications
                                      </label>
                                  </div>
                              </li>
                              <br/>
                              <li className="m-t-5">

                                  <label className="text-muted">
                                      Select Popup Notification Animation
                                  </label>
                                  <select className="custom-select  muted-text">
                                      <option selected className="muted-text" disabled>--select--</option>
                                      <option value="Fade in Up">Fade in Up</option>
                                      <option value="Fade in Left">Fade in Left</option>
                                      <option value="Fade in Bottom">Fade in Bottom</option>
                                      <option value="Fade in Right">Fade in Right</option>
                                      <option value="Bounce in Up">Bounce in Up </option>
                                      <option value="Bounce in Right">Bounce in Right</option>
                                      <option value="Bounce in Left">Bounce in Left</option>
                                      <option value="Bounce in Bottom">Bounce in Bottom</option>


                                  </select>
                              </li>
                              <li className="mt-4">

                                  <label className="text-muted">
                                      Select Popout Notification Animation
                                  </label>
                                  <select className="custom-select  muted-text">
                                      <option selected className="muted-text" disabled>--select--</option>
                                      <option value="Fade out Up">Fade out Up</option>
                                      <option value="Fade out Left">Fade out Left</option>
                                      <option value="Fade out Bottom">Fade out Bottom</option>
                                      <option value="Fade out Right">Fade out Right</option>
                                      <option value="Bounce out Up">Bounce out Up </option>
                                      <option value="Bounce out Right">Bounce out Right</option>
                                      <option value="Bounce out Left">Bounce out Left</option>
                                      <option value="Bounce out Bottom">Bounce out Bottom</option>

                                  </select>
                              </li>
                          </ul>
                      </div>
                      <div className="col-md-6 pl-5">

                          <ul className="text-muted text-left list-unstyled m-t-50">
                              <li>

                                  <label className="text-muted">
                                      Initial delay in starting first notification
                                  </label>
                                  <input type="number" className="form-control  col-md-3" placeholder="Enter Seconds..." />

                              </li>
                              <li className="mt-4">
                                  <label className="text-muted">
                                      Display time for each notification
                                  </label>
                                  <input type="number" className="form-control  col-md-3" placeholder="Enter Seconds..." />
                              </li>
                              <li className="mt-4 pt-2">

                                  <label className="text-muted">
                                      Delay between subsequent notifications
                                  </label>
                                  <input type="number" className="form-control  col-md-3" placeholder="Enter Seconds..." />

                              </li>
                              <li className="mt-4">

                                  <label className="text-muted">
                                      Select Position for Popup Notification
                                  </label>
                                  <select className="custom-select  muted-text">
                                      <option selected className="muted-text" disabled>--select--</option>
                                      <option value="bottom left">Bottom Left</option>
                                      <option value="bottom right">Bottom Right</option>
                                      <option value="bottom center">Bottom Center</option>
                                      <option value="top left">Top Left</option>
                                      <option value="top right">Top Right</option>
                                      <option value="top center">Top Center</option>

                                  </select>
                              </li>

                          </ul>
                      </div>
                  </div>
                  <div className="m-t-50 float-right">
                      <button type="button" className="btn btn-custom  waves-light waves-effect number ">
                          Previous</button>
                              <button type="button" className="btn btn-custom  waves-light waves-effect number ml-2 pl-4 pr-4">Next </button>
                  </div>
                  <div className="clearfix"></div>
              </div>

              <div className={`tab-pane ${activeClass == 4?'show active':''}`} id="settings1">
                  <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                      rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                      mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi.
                      Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                      vitae, eleifend ac, enim.</p>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                      dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                      quis, sem. Nulla consequat massa quis enim.</p>
              </div>

              <div className={`tab-pane ${activeClass == 5?'show active':''}`} id="settings1">
                  <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                      rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                      mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi.
                      Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                      vitae, eleifend ac, enim.</p>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                      dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                      quis, sem. Nulla consequat massa quis enim.</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   campaign: state.getIn(['campaign', 'campaign'])
// });
//
// const mapDispatchToProps = {
//   clearCampaign
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
export default Tabs;
