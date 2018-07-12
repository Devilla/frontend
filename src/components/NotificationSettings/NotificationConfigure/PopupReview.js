import React , { Component } from 'react';
import './PopupReview.scss';
import { Row, Col } from 'react-bootstrap';
import ReviewDesignSetting from '../../PopupReview/ReviewDesignSetting';
import Channel from  './Channel';


class PopupReview extends Component {
  constructor() {
    super();
    this.state= {
      activeClass: 1,
      popupName: ''
    };
  }

    setActiveState = (val) => {
      this.setState({ activeClass: val });
    }

    showpopup = (channelName) => {
      this.setState({ popupName: channelName });
    }



    render() {
      const { activeClass }  = this.state;
      const {     toggleTextBox,
        toggleMap,
        notificationUrl,
        notificationPanelStyle,
        onConfigChange,
        contentText,
        visitorText,
        handleContentChange} = this.props;

      return (
        <div>
          <div className="review-container">
            <div className="review">

              <div className="content">
                <Row>
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
                            onConfigChange={onConfigChange}
                            contentText={contentText}
                            visitorText={visitorText}
                            handleContentChange={handleContentChange}
                          />
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Row>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default PopupReview;
