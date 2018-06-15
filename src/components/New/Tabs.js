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
              </div>

              <div className={`tab-pane ${activeClass == 3?'show active':''}`} id="messages1">
                <ConfigNotification setActiveState={this.setActiveState} />
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
