import React , { Component } from 'react';
import './PopupReview.scss';
import { Row, Col } from 'react-bootstrap';
import ReviewPopup from './ReviewPopup';
import ReviewDesignSetting from './ReviewDesignSetting';
import DashboardChannel  from '../DashboardChannel/DashboardChannel';
import Channel from  './Channel';


const notificationPanelStyleDefault = { // TODO: Take style values from server
  radius: 5,
  borderWidth: 0,
  borderColor: {
    r: 200,
    g: 200,
    b: 200,
    a: 0.80
  },
  shadow: {
    r: 0,
    g: 0,
    b: 0,
    color: 'lightgrey'
  },
  blur: 0,
  color: {
    r: 0,
    g: 149,
    b: 247,
    a: 1
  },
  linkColor: {
    r: 0,
    g: 137,
    b: 216,
    a: 1
  },
  backgroundColor: {
    r: 255,
    g: 255,
    b: 255,
    a: 1
  },
  fontFamily: 'inherit',
  fontWeight: 'normal',
  linkFontFamily: 'inherit',
  linkFontWeight: 'normal',
  selectDurationData: 'hours',
  selectLastDisplayConversation: 'hours',
  bulkData: 5,
  liveVisitorCount: 0,
  recentNumber: 5,
  recentConv: 5,
  hideAnonymousConversion: true,
  onlyDisplayNotification: false,
  visitorText: ' people '
};



class PopupReview extends Component {
  constructor() {
    super();
    this.state= {
      activeClass: 1,
      popupName: '',

      configuration: {},
      activity: true,
      notificationPanelStyle: notificationPanelStyleDefault,
      contentText: 'us',
      visitorText: 'marketers',
      notificationUrl: '',
      image: '',
      notifications: [],
      toggleTextBox: false,
      toggleMap: true
    };
  }

    setActiveState = (val) => {
      this.setState({ activeClass: val });
    }

    showpopup = (channelName) => {
      this.setState({ popupName: channelName });
    }

    handleNotificationStyleChange = style => {
      const notificationStyle = Object.assign({}, this.state.notificationPanelStyle);
      notificationStyle[style.prop] = style.value;
      this.setState({ notificationPanelStyle: notificationStyle });
    };

    setDefaultPanel = () => {
      this.setState({ notificationPanelStyle: notificationPanelStyleDefault });
    }

    handleContentChange = (target, content) => {
      this.setState({ [target]: content });
    }
  

    render() {
      const { notificationPanelStyle,activeClass,toggleMap,notificationUrl,toggleTextBox, visitorText,contentText }  = this.state;
  
      return (
        <div>
          <div className="review-container">
            <div className="review">
              <div className="card-box review-title">
                <h4 className="header-title text-left">Indentify and Convert Customers</h4>
                <hr/>
                <div className="pos">
                  <DashboardChannel />
                </div>
              </div>
              <div className="content">
                <Row>
                  <Col md={6} sm={12}>
                    <div className="card-box">
                      <div className="justify-content-center mb-2 reviewpopup ">
                        <ReviewPopup  
                          tab='1' 
                          animation='' 
                          display='block' 
                          position='' 
                          notificationPanelStyle={notificationPanelStyle} 
                          popupName={this.state.popupName}
                          toggleMap={toggleMap}
                          contentText={contentText}
                          visitorText={visitorText}
                        />
                      </div>
                  
                    </div>
                  </Col>
                  <Col md={5} sm={12}>
                    <div className="card-box mb-0 pb-0 mr-2">
                      <ul className="nav nav-tabs  switch">
                        <li className="nav-item waves-effect text-center">
                          <a data-toggle="tab" aria-expanded="true" className={`nav-link ${activeClass == 1?'active pb-3 pt-3':'pb-3 pt-3'}`} onClick={() => this.setActiveState(1)}>
                            <i className="fi-layers mr-2"></i>Your Channel
                          </a>
                        </li>
                        <li className="nav-item waves-effect">
                          <a data-toggle="tab" aria-expanded="true" className={`nav-link ${activeClass == 2?'active pb-3 pt-3':'pb-3 pt-3'}`} onClick={() => this.setActiveState(2)}>
                            <i className="fi-mail mr-2"></i>Settings
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content switch-data">
                      <div className={`tab-pane ${activeClass == 1?'show active':''}`} id="Channels">
                        <Row>
                          <Col md={12}>
                            <Channel showpopup={this.showpopup} />
                          </Col>
                        </Row>
                      </div>
                      <div className={`tab-pane ${activeClass == 2?'show active':''}`} id="Settings">
                        <Row>
                          <Col md={10}>
                            <ReviewDesignSetting 
                              toggleTextBox={toggleTextBox}
                              toggleMap={toggleMap}
                              notificationUrl={notificationUrl}
                              notificationPanelStyle={notificationPanelStyle}
                              onConfigChange={this.handleNotificationStyleChange}
                              setDefaultPanel={this.setDefaultPanel}
                              contentText={contentText}
                              visitorText={visitorText}
                              handleContentChange={this.handleContentChange}
                            />
                          </Col>
                        </Row>
                      </div>
                    </div>

                  </Col>

                </Row>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default PopupReview;
