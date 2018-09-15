import React, { Component } from 'react';
import { FormGroup, Row, Col, Button, FormControl } from 'react-bootstrap';
import Slider from 'react-rangeslider';
import reactCSS from 'reactcss';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import { ChromePicker } from 'react-color';
import Channel from '../Channel/Channel';
import DashboardChannel from 'components/DashboardChannel/DashboardChannel';
import './NotificationDesignSetting.scss';

const FONT_WEIGHT_BOLD = 'bold';
const FONT_WEIGHT_NORMAL = 'normal';

export class NotificationDesignSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBorderColorSwatchOpen: false,
      isBgColorSwatchOpen: false,
      isTextColorSwatchOpen: false,
      isLinkColorSwatchOpen: false,
      activeClass: 1,
      toggleTextBox: false,
    };
    Object.assign(this.state, props.notificationPanelStyle);
  }

  notificationPanelStyleDefault(e) {
    this.setState({ [e.target.id]: e.target.value });
  }


  handleRadiusChange = (radius) => {
    this.setState({ radius });
    this.props.onConfigChange({ prop: 'radius', value: radius });
  }

  handleStateChangeDay = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    this.props.onConfigChange({ prop: 'bulkData', value: e.target.value });
  }

  handleLiveVistorCount = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    this.props.onConfigChange({ prop: 'liveVisitorCount', value: e.target.value });
  }

  handleStateChangeNumber = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    this.props.onConfigChange({ prop: 'recentNumber', value: e.target.value });
  }

  handleStateChangeConv = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    this.props.onConfigChange({ prop: 'recentConv', value: e.target.value });
  }

  handleBorderWidthChange = (borderWidth) => {
    this.setState({ borderWidth });
    this.props.onConfigChange({ prop: 'borderWidth', value: borderWidth });
  };

  handleBorderColorChange = (borderColor) => {
    borderColor = borderColor.rgb;
    this.setState({ borderColor });
    this.props.onConfigChange({ prop: 'borderColor', value: borderColor });
  };

  showBorderSwatch = () => {
    this.setState({
      isBorderColorSwatchOpen: true
    });
  };

  hideBorderSwatch = () => {
    this.setState({
      isBorderColorSwatchOpen: false
    });
  };

  handleShadowChange = (shadow) => {
    this.setState({ shadow });
    this.props.onConfigChange({ prop: 'shadow', value: shadow });
  };

  handleBlurChange = (blur) => {
    this.setState({ blur });
    this.props.onConfigChange({ prop: 'blur', value: blur });
  };

  handleBgColorChange = (backgroundColor) => {
    backgroundColor = backgroundColor.rgb;
    this.setState({ backgroundColor });
    this.props.onConfigChange({ prop: 'backgroundColor', value: backgroundColor });
  };

  showBgSwatch = () => {
    this.setState({
      isBgColorSwatchOpen: true
    });
  };

  hideBgSwatch = () => {
    this.setState({
      isBgColorSwatchOpen: false
    });
  };

  setActiveState = (val) => {
    this.setState({ activeClass: val });
  }

  handleTextColorChange = (color) => {
    color = color.rgb;
    this.setState({ color });
    this.props.onConfigChange({ prop: 'color', value: color });
  }

  handleTextLinkColorChange = (linkColor) => {
    linkColor = linkColor.rgb;
    this.setState({ linkColor });
    this.props.onConfigChange({ prop: 'linkColor', value: linkColor });
  }

  showTextColorSwatch = () => {
    this.setState({ isTextColorSwatchOpen: true });
  };

  handleAnonymousConversionsChange = (e) => {
    this.setState({ hideAnonymousConversion: e });
    this.props.onConfigChange({ prop: 'hideAnonymousConversion', value: e });

  };

  handleOnlyDisplayNotification = (e) => {
    this.setState({ onlyDisplayNotification: e });
    this.props.onConfigChange({ prop: 'onlyDisplayNotification', value: e });
  };

  hideTextColorSwatch = () => {
    this.setState({ isTextColorSwatchOpen: false });
  };

  showLinkColorSwatch = () => {
    this.setState({ isLinkColorSwatchOpen: true });
  };

  hideLinkColorSwatch = () => {
    this.setState({ isLinkColorSwatchOpen: false });
  };

  handleFontChange = (e) => {
    const fontFamily = `${e.target.value}`;
    this.setState({ fontFamily });
    this.props.onConfigChange({ prop: 'fontFamily', value: fontFamily });
  };

  handleDurationChange = (e) => {
    const selectDurationData = `${e.target.value}`;
    this.setState({ selectDurationData });
    this.props.onConfigChange({ prop: 'selectDurationData', value: selectDurationData });
  };

  handleLastDisplayDurationChange = (e) => {
    const selectLastDisplayConversation = `${e.target.value}`;
    this.setState({ selectLastDisplayConversation });
    this.props.onConfigChange({ prop: 'selectLastDisplayConversation', value: selectLastDisplayConversation });
  };

  handleLinkFontChange = (e) => {
    const linkFontFamily = `${e.target.value}`;
    this.setState({ linkFontFamily });
    this.props.onConfigChange({ prop: 'linkFontFamily', value: linkFontFamily });
  };

  handleFontWeightChange = () => {
    let fontWeight = this.props.notificationPanelStyle.fontWeight;
    if (fontWeight === FONT_WEIGHT_BOLD)
      fontWeight = FONT_WEIGHT_NORMAL;
    else
      fontWeight = FONT_WEIGHT_BOLD;

    this.setState({ fontWeight });
    this.props.onConfigChange({ prop: 'fontWeight', value: fontWeight });
  }

  handleLinkFontWeightChange = () => {
    let linkFontWeight = this.props.notificationPanelStyle.linkFontWeight;
    if (linkFontWeight === FONT_WEIGHT_BOLD)
      linkFontWeight = FONT_WEIGHT_NORMAL;
    else
      linkFontWeight = FONT_WEIGHT_BOLD;

    this.setState({ linkFontWeight });
    this.props.onConfigChange({ prop: 'linkFontWeight', value: linkFontWeight });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps != this.props)
      Object.assign(this.state, this.props.notificationPanelStyle);
  }

  render() {

    const { activeClass  } = this.state;

    const {
      profile,
      notificationPanelStyle,
      handleContentChange,
      contentText,
      visitorText,
      liveVisitorText,
      otherText,
      notification,
      notificationUrl,
      toggleMap,
      toggleTextBox,
      handleClickableNotification,
      showpopupfield,
      showpopup,
      campaign
    } = this.props;

    const styles = reactCSS({
      'default': {
        colorSwatch: {
          width: '68px',
          height: '21px',
          borderRadius: '2px',
        },
        border: {
          backgroundColor: `rgba(${notificationPanelStyle.borderColor.r}, ${notificationPanelStyle.borderColor.g}, ${notificationPanelStyle.borderColor.b}, ${notificationPanelStyle.borderColor.a})`
        },
        background: {
          backgroundColor: `rgba(${notificationPanelStyle.backgroundColor.r}, ${notificationPanelStyle.backgroundColor.g}, ${notificationPanelStyle.backgroundColor.b}, ${notificationPanelStyle.backgroundColor.a})`
        },
        textColor: {
          backgroundColor: `rgb(${notificationPanelStyle.color.r}, ${notificationPanelStyle.color.g}, ${notificationPanelStyle.color.b})`
        },
        linkColor: {
          backgroundColor: `rgb(${notificationPanelStyle.linkColor.r}, ${notificationPanelStyle.linkColor.g}, ${notificationPanelStyle.linkColor.b}, ${notificationPanelStyle.linkColor.a})`
        },
        swatch: {
          margin: '4% 43%',
          padding: '0px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    let planType = profile.plan.references? profile.plan.references.service_template_properties.filter(item => item.name == 'planType'):[];
    planType = planType.length?planType[0].data.value:'';

    return (
      <div data-transition-id="notification-design-settings-page">
        {showpopupfield ?
          <div className="DashboardChannelcomponent">
            <DashboardChannel campaign={campaign} />
          </div>
          : ' '}

        <div className="setting">
          <Row>
            <Col md={12}>
              <div className="box2">
                <ul className="nav nav-tabs nav-notif">
                  {showpopupfield ?
                    <li className="nav-item waves-effect">
                      <a data-toggle="tab" aria-expanded="false" className={`nav-link-2 btn-products${activeClass == 4 ? 'active' : ''}`} onClick={() => this.setActiveState(4)}>
                        <i className="fi-layers mr-2"></i> Your Channels
                      </a>
                    </li>
                    : ' '}
                  <li className="nav-item waves-effect">
                    <a data-toggle="tab" aria-expanded="false" className={`nav-link-2 btn-products ${activeClass == 1 ? 'active' : ''}`} onClick={() => this.setActiveState(1)}>
                      <i className="fi-layers mr-2"></i>&nbsp; Box
                    </a>
                  </li>
                  <li className="nav-item waves-effect">
                    <a data-toggle="tab" aria-expanded="true" className={`nav-link-2 btn-products ${activeClass == 2 ? 'active' : ''}`} onClick={() => this.setActiveState(2)}>
                      <i className="fi-mail mr-2"></i>&nbsp; Text
                    </a>
                  </li>
                  <li className="nav-item waves-effect">
                    <a data-toggle="tab" aria-expanded="false" className={`nav-link-2 btn-products ${activeClass == 3 ? 'active' : ''}`} onClick={() => this.setActiveState(3)}>
                      <i className="fi-layers mr-2"></i>&nbsp; Settings
                    </a>
                  </li>
                </ul>

                <div className="tab-content">
                  <div className={`tab-pane ${activeClass == 1 ? 'show active' : ''}`} id="credit">
                    <Row>
                      <Col md={12} className="text-muted">
                        <label className="text-muted">Radius</label>
                        <div className='slider'>
                          <Slider
                            tooltip={false}
                            min={0}
                            max={50}
                            value={notificationPanelStyle.radius}
                            onChange={this.handleRadiusChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row >
                      <Col md={12} className="text-muted pt-3">
                        <label className="text-muted">Border</label>
                        <Row>
                          <Col md={6}>
                            <div className='slider alignment'>
                              <Slider
                                tooltip={false}
                                min={0}
                                max={10}
                                value={notificationPanelStyle.borderWidth}
                                onChange={this.handleBorderWidthChange}
                              />
                            </div>
                          </Col>
                          <Col md={6} className="mt-2 pr-5">
                            <div style={styles.swatch} onClick={this.showBorderSwatch}>
                              <div style={{ ...styles.colorSwatch, ...styles.border }} />
                            </div>
                            {this.state.isBorderColorSwatchOpen ? <div style={styles.popover}>
                              <div style={styles.cover} onClick={this.hideBorderSwatch} />
                              <ChromePicker color={notificationPanelStyle.borderColor} onChange={this.handleBorderColorChange} />
                            </div> : null}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row >
                      <Col md={12} className="text-muted pt-2">
                        <Row>
                          <Col md={6} className="p-3">
                            <label className="text-muted">Background Color</label>
                          </Col>
                          <Col md={6} className="pr-5 pt-1">
                            <div style={styles.swatch} onClick={this.showBgSwatch}>
                              <div style={{ ...styles.colorSwatch, ...styles.background }} />
                            </div>
                            {this.state.isBgColorSwatchOpen ? <div style={styles.popover}>
                              <div style={styles.cover} onClick={this.hideBgSwatch} />
                              <ChromePicker color={notificationPanelStyle.backgroundColor} onChange={this.handleBgColorChange} />
                            </div> : null}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    {notification.notificationName === 'Recent Activity' &&
                      planType === 'premium' &&
                      <Row style={{padding: '4% 0%'}}>
                        <Col md={10}>
                          <span className="mt-5 text-muted">Display map icon only</span>
                        </Col>
                        <Col md={2}>
                          <input
                            className="tgl tgl-ios"
                            id="cb2"
                            type="checkbox"
                            checked={toggleMap}
                            readOnly
                          />
                          <label className="tgl-btn" htmlFor="cb2" onClick={() => handleContentChange('toggleMap', !toggleMap)}>ON</label>
                        </Col>
                      </Row>
                    }
                  </div>

                  <div className={`tab-pane ${activeClass == 2 ? 'show active' : ''}`} id="debit">
                    <Row className="mb-2">
                      <Col md={12}>
                        <label className="text-muted">Text Style</label>
                        <Row>
                          <Col md={4}>
                            <Button className="select3" active={notificationPanelStyle.fontWeight == FONT_WEIGHT_BOLD} onClick={this.handleFontWeightChange}>
                              Bold
                            </Button>
                          </Col>
                          <Col md={5} className="pr-1 pl-5">
                            <FormControl componentClass="select" className="select2" bsSize="small" value={notificationPanelStyle.fontFamily} onChange={this.handleFontChange}>
                              <option value='Roboto,helvetica,arial,sans-serif'>Default</option>
                              <option value="arial">Arial</option>
                              <option value="monospace">Monospace</option>
                              <option value="georgia">Georgia</option>
                            </FormControl>
                          </Col>
                          <Col md={3}>
                            <div style={styles.swatch} onClick={this.showTextColorSwatch}>
                              <div style={{ ...styles.colorSwatch, ...styles.textColor }} />
                            </div>
                            {this.state.isTextColorSwatchOpen ? <div style={styles.popover}>
                              <div style={styles.cover} onClick={this.hideTextColorSwatch} />
                              <ChromePicker color={notificationPanelStyle.color} onChange={this.handleTextColorChange} />
                            </div> : null}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    {((notification.notificationName !== 'Live Visitor Count') ||
                      (notification.notificationName !== 'Live Visitor Count' &&
                      planType === 'premium')) &&
                      <Row className="mb-3">
                        <Col md={12} className="pt-3">
                          <label className="text-muted">Brand Name {campaign.campaignType == 'page'?' / Product Name':''}</label>
                          <Row>
                            <Col md={12}>
                              <FormControl
                                className="select3"
                                type="text"
                                maxLength='15'
                                value={contentText}
                                placeholder="Enter brand name for notification"
                                id="contentText"
                                onChange={(e) => handleContentChange(e.target.id, e.target.value)}
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col md={12} className="pt-4">
                          <label className="text-muted">Other Text</label>
                          <Row>
                            <Col md={12}>
                              <FormControl
                                className="select3"
                                type="text"
                                maxLength='35'
                                value={otherText}
                                placeholder="Enter Other Text for notification"
                                id="otherText"
                                onChange={(e) => handleContentChange(e.target.id, e.target.value)}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    }

                    {notification.notificationName !== 'Recent Activity' &&
                      <Row className="mb-3">
                        <Col md={12}>
                          <label className="text-muted mt-2">Identify User As</label>
                          <Row>
                            <Col md={12}>
                              <FormControl
                                className="select3"
                                type="text"
                                maxLength="10"
                                value={visitorText}
                                placeholder="Enter identity"
                                id="visitorText"
                                onChange={(e) => handleContentChange(e.target.id, e.target.value)}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    }
                    {notification.notificationName === 'Live Visitor Count' &&
                    <Row className="mb-3">
                      <Col md={12}>
                        <label className="text-muted">Other Text</label>
                        <Row>
                          <Col md={12}>
                            <FormControl
                              className="select3"
                              type="text"
                              maxLength='35'
                              defaultValue={liveVisitorText}
                              placeholder="Enter the Text for notification"
                              id="liveVisitorText"
                              onChange={(e) => handleContentChange(e.target.id, e.target.value)}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    }

                  </div>


                  <div className={`tab-pane ${activeClass == 3 ? 'show active' : ''}`} id="paypal">
                    {notification.notificationName === 'Live Visitor Count'  &&
                      <Row className="mb-3">
                        <Col md={9} className="text-center">
                          <label className="text-muted pt-2"> Hide 'Live Viewer' if viewers less than</label>
                        </Col>
                        <Col md={3}>
                          <FormGroup>
                            <FormControl
                              className="select3"
                              type="number"
                              min="0"
                              value={notificationPanelStyle.liveVisitorCount}
                              onChange={(e) => this.handleLiveVistorCount(e)}
                              bsSize="sm"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    }
                    {notification.notificationName === 'Bulk Activity'  &&
                      <Row className="mb-3">
                        <Col md={7}>
                          <label className="text-muted pt-2"> Display bulk data from last</label>
                        </Col>
                        <Col md={2}>
                          <FormGroup>
                            <FormControl
                              className="select3"
                              type="number"
                              min="0"
                              value={notificationPanelStyle.bulkData}
                              onChange={(e) => this.handleStateChangeDay(e)}
                              bsSize="sm"
                            />
                          </FormGroup>
                        </Col>
                        <Col md={3}>
                          <FormControl componentClass="select" className="select3" bsSize="small" value={notificationPanelStyle.selectDurationData} onChange={this.handleDurationChange}>
                            <option value="hours">hours</option>
                            <option value="days">days</option>
                          </FormControl>
                        </Col>
                      </Row>
                    }
                    {notification.notificationName === 'Recent Activity' &&
                      <div>
                        <Row className="mb-3">
                          <Col md={4} className="text-center pt-2 pr-0 pl-0">
                            <label className="text-muted">Display the last</label>
                          </Col>
                          <Col md={3}>
                            <FormGroup>
                              <FormControl
                                className="select3"
                                type="number"
                                min="0"
                                onChange={(e) => this.handleStateChangeNumber(e)}
                                bsSize="sm"
                                value={notificationPanelStyle.recentNumber}
                              />
                            </FormGroup>
                          </Col>
                          <Col md={4} className="pt-2">
                            <label className="text-muted">conversions</label>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <label className="text-muted text-center pt-2 pr-0 pl-2">Display conversions from last</label>
                          </Col>
                          <Col md={3} className="pl-2 pr-0">
                            <FormGroup>
                              <FormControl
                                className="select3"
                                type="number"
                                min="0"
                                value={notificationPanelStyle.recentConv}
                                onChange={(e) => this.handleStateChangeConv(e)}
                                bsSize="sm"
                              />
                            </FormGroup>
                          </Col>
                          <Col md={3}>
                            <FormControl componentClass="select" className="select3" bsSize="small" value={notificationPanelStyle.selectLastDisplayConversation} onChange={this.handleLastDisplayDurationChange}>
                              <option value="hours">hours</option>
                              <option value="days">days</option>
                            </FormControl>
                          </Col>
                        </Row>
                        {planType == 'premium' &&
                          <div>
                            <Row className="mb-3">
                              <Col md={10}>
                                <label className="text-muted">Hide anonymous conversions
                                </label>
                              </Col>
                              <Col md={2}>
                                <input
                                  className="tgl tgl-ios"
                                  id="hideAnonymousConversion"
                                  type="checkbox"
                                  checked={notificationPanelStyle.hideAnonymousConversion}
                                  readOnly
                                />
                                <label className="tgl-btn" htmlFor="anonymousConversionChange" onClick={() => this.handleAnonymousConversionsChange(!notificationPanelStyle.hideAnonymousConversion)}>ON</label>
                              </Col>
                            </Row>
                            <Row className="mb-3">
                              <Col md={10}>
                                <label className="text-muted">Only display notifications from users country</label>
                              </Col>
                              <Col md={2}>
                                <input
                                  className="tgl tgl-ios"
                                  id="handleOnlyDisplayNotification"
                                  type="checkbox"
                                  checked={notificationPanelStyle.onlyDisplayNotification}
                                  readOnly
                                />
                                <label className="tgl-btn" htmlFor="handleOnlyDisplayNotification" onClick={() => this.handleOnlyDisplayNotification(!notificationPanelStyle.onlyDisplayNotification)}>ON</label>
                              </Col>
                            </Row>
                          </div>
                        }
                      </div>
                    }
                    {planType === 'premium' &&
                      <div>
                        <Row className="mb-3">
                          <Col md={10}>
                            <label className="text-muted">Notifications Clickable</label>
                          </Col>
                          <Col md={2}>
                            <input
                              className="tgl tgl-ios"
                              id="handleClickableNotification"
                              type="checkbox"
                              checked={toggleTextBox}
                              readOnly
                            />
                            <label className="tgl-btn" htmlFor="handleClickableNotification" onClick={handleClickableNotification}>ON</label>
                          </Col>
                        </Row>
                        <Row style={toggleTextBox?{ display:'block', marginBottom: '-9%' }:{ display:'none', marginBottom: '-9%' }}>
                          <Col md={12}>
                            <FormControl
                              className="select3"
                              type="text"
                              value={notificationUrl}
                              placeholder="Enter URL"
                              id="notificationUrl"
                              onChange={(e) => handleContentChange(e.target.id, e.target.value)}
                            />
                          </Col>
                        </Row>
                      </div>
                    }
                  </div>

                  <div className={`tab-pane ${activeClass == 4 ? 'show active' : ''}`} id="debit">

                    <Col md={12}>
                      <Channel showpopup={showpopup} />
                    </Col>

                  </div>
                </div>
              </div>
            </Col>
          </Row>

        </div>

      </div>

    );
  }
}

export default NotificationDesignSetting;
