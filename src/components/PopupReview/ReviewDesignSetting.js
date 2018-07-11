import React, { Component } from 'react';
import { FormGroup, Row, Col, Button, FormControl } from 'react-bootstrap';
import Slider from 'react-rangeslider';
import reactCSS from 'reactcss';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import { ChromePicker } from 'react-color';

const FONT_WEIGHT_BOLD = 'bold';
// const FONT_WEIGHT_NORMAL = 'normal';

class ReviewDesignSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBorderColorSwatchOpen: false,
      isBgColorSwatchOpen: false,
      isTextColorSwatchOpen: false,
      isLinkColorSwatchOpen: false,
      activeClass: 1,
      toggleTextBox: false
    };
    Object.assign(this.state, props.notificationPanelStyle);
  }

  // notificationPanelStyleDefault(e) {
  //   this.setState({ [e.target.id]: e.target.value });
  // }

  //   handleRadiusChange = (radius) => {
  //     this.setState({ radius });
  //     // this.props.onConfigChange({ prop: 'radius', value: radius });
  //   }

  //   handleStateChangeDay = (e) => {
  //     this.setState({ [e.target.id]: e.target.value });
  //     // this.props.onConfigChange({ prop: 'bulkData', value: e.target.value });
  //   }



  //   handleStateChangeNumber = (e) => {
  //     this.setState({ [e.target.id]: e.target.value });
  //     // this.props.onConfigChange({ prop: 'recentNumber', value: e.target.value });
  //   }

  //   handleStateChangeConv = (e) => {
  //     this.setState({ [e.target.id]: e.target.value });
  //     // this.props.onConfigChange({ prop: 'recentConv', value: e.target.value });
  //   }

  //   handleBorderWidthChange = (borderWidth) => {
  //     this.setState({ borderWidth });
  //     // this.props.onConfigChange({ prop: 'borderWidth', value: borderWidth });
  //   };

  //   handleBorderColorChange = (borderColor) => {
  //     borderColor = borderColor.rgb;
  //     this.setState({ borderColor });
  //     // this.props.onConfigChange({ prop: 'borderColor', value: borderColor });
  //   };

  //   showBorderSwatch = () => {
  //     this.setState({
  //       isBorderColorSwatchOpen: true
  //     });
  //   };

  //   hideBorderSwatch = () => {
  //     this.setState({
  //       isBorderColorSwatchOpen: false
  //     });
  //   };

  //   handleShadowChange = (shadow) => {
  //     this.setState({ shadow });
  //     // this.props.onConfigChange({ prop: 'shadow', value: shadow });
  //   };

  //   handleBlurChange = (blur) => {
  //     this.setState({ blur });
  //     // this.props.onConfigChange({ prop: 'blur', value: blur });
  //   };

  //   handleBgColorChange = (backgroundColor) => {
  //     backgroundColor = backgroundColor.rgb;
  //     this.setState({ backgroundColor });
  //     // this.props.onConfigChange({ prop: 'backgroundColor', value: backgroundColor });
  //   };

  //   showBgSwatch = () => {
  //     this.setState({
  //       isBgColorSwatchOpen: true
  //     });
  //   };

  //   hideBgSwatch = () => {
  //     this.setState({
  //       isBgColorSwatchOpen: false
  //     });
  //   };

    setActiveState = (val) => {
      this.setState({ activeClass: val });
    }

  //   handleTextColorChange = (color) => {
  //     color = color.rgb;
  //     this.setState({ color });
  //     // this.props.onConfigChange({ prop: 'color', value: color });
  //   }

  //   handleTextLinkColorChange = (linkColor) => {
  //     linkColor = linkColor.rgb;
  //     this.setState({ linkColor });
  //     // this.props.onConfigChange({ prop: 'linkColor', value: linkColor });
  //   }

  //   showTextColorSwatch = () => {
  //     this.setState({ isTextColorSwatchOpen: true });
  //   };

  //   handleAnonymousConversionsChange = (e) => {
  //     this.setState({ hideAnonymousConversion: e });
  //     // this.props.onConfigChange({ prop: 'hideAnonymousConversion', value: e });

  //   };

  //   handleOnlyDisplayNotification = (e) => {
  //     this.setState({ onlyDisplayNotification: e });
  //     // this.props.onConfigChange({ prop: 'onlyDisplayNotification', value: e });
  //   };

  //   hideTextColorSwatch = () => {
  //     this.setState({ isTextColorSwatchOpen: false });
  //   };

  //   showLinkColorSwatch = () => {
  //     this.setState({ isLinkColorSwatchOpen: true });
  //   };

  //   hideLinkColorSwatch = () => {
  //     this.setState({ isLinkColorSwatchOpen: false });
  //   };

  //   handleFontChange = (e) => {
  //     const fontFamily = `${e.target.value}`;
  //     this.setState({ fontFamily });
  //     // this.props.onConfigChange({ prop: 'fontFamily', value: fontFamily });
  //   };

  //   handleDurationChange = (e) => {
  //     const selectDurationData = `${e.target.value}`;
  //     this.setState({ selectDurationData });
  //     // this.props.onConfigChange({ prop: 'selectDurationData', value: selectDurationData });
  //   };

  //   handleLastDisplayDurationChange = (e) => {
  //     const selectLastDisplayConversation = `${e.target.value}`;
  //     this.setState({ selectLastDisplayConversation });
  //     this.props.onConfigChange({ prop: 'selectLastDisplayConversation', value: selectLastDisplayConversation });
  //   };

  //   handleLinkFontChange = (e) => {
  //     const linkFontFamily = `${e.target.value}`;
  //     this.setState({ linkFontFamily });
  //     this.props.onConfigChange({ prop: 'linkFontFamily', value: linkFontFamily });
  //   };

  //   handleFontWeightChange = () => {
  //     // let fontWeight = this.props.notificationPanelStyle.fontWeight;
  //     // if (fontWeight === FONT_WEIGHT_BOLD)
  //     //   fontWeight = FONT_WEIGHT_NORMAL;
  //     // else
  //     //   fontWeight = FONT_WEIGHT_BOLD;

  //     // this.setState({ fontWeight });
  //     // this.props.onConfigChange({ prop: 'fontWeight', value: fontWeight });
  //   }

  //   handleLinkFontWeightChange = () => {
  //     // let linkFontWeight = this.props.notificationPanelStyle.linkFontWeight;
  //     // if (linkFontWeight === FONT_WEIGHT_BOLD)
  //     //   linkFontWeight = FONT_WEIGHT_NORMAL;
  //     // else
  //     //   linkFontWeight = FONT_WEIGHT_BOLD;

  //     // this.setState({ linkFontWeight });
  //     // this.props.onConfigChange({ prop: 'linkFontWeight', value: linkFontWeight });
  //   }

    componentWillReceiveProps(nextProps) {
      if (nextProps != this.props)
        Object.assign(this.state, this.props.notificationPanelStyle);
    }

    render() {
      const { activeClass } = this.state;
      const {
        notificationPanelStyle
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
            margin: '5% 70%',
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
      return (

        <div className="setting" style={{ backgroundColor: 'white' }}>

          <Col md={12}>
            <div className="card-box" style={{width:'474px'}}>
              <ul className="nav nav-tabs">
                <li className="nav-item waves-effect">
                  <a data-toggle="tab" aria-expanded="false" className={`nav-link ${activeClass == 1 ? 'active' : ''}`} onClick={() => this.setActiveState(1)}>
                    <i className="fi-layers mr-2"></i>Box&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </a>
                </li>
                <li className="nav-item waves-effect">
                  <a data-toggle="tab" aria-expanded="true" className={`nav-link ${activeClass == 2 ? 'active' : ''}`} onClick={() => this.setActiveState(2)}>
                    <i className="fi-mail mr-2"></i>Text&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </a>
                </li>
                <li className="nav-item waves-effect">
                  <a data-toggle="tab" aria-expanded="false" className={`nav-link ${activeClass == 3 ? 'active' : ''}`} onClick={() => this.setActiveState(3)}>
                    <i className="fi-layers mr-2"></i> Settings&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div className={`tab-pane ${activeClass == 1 ? 'show active' : ''}`} id="credit">
                  <Row>
                    <Col md={12} className="text-muted">
                      <p className="h6">Radius</p>
                      <div className='slider'>
                        <Slider
                          tooltip={false}
                          min={0}
                          max={50}
                          value={notificationPanelStyle.radius}
                    
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row >
                    <Col md={12} className="text-muted h6">
                      <p className="h6">Border</p>
                      <Row>
                        <Col md={6}>
                          <div className='slider alignment'>
                            <Slider
                              tooltip={false}
                              min={0}
                              max={10}
                              value={notificationPanelStyle.borderWidth}
                            /* onChange={this.handleBorderWidthChange} */
                            />
                          </div>
                        </Col>
                        <Col md={6} className="mt-2">
                          <div style={styles.swatch} onClick={this.showBorderSwatch}>
                            <div style={{ ...styles.colorSwatch, ...styles.border }} />
                          </div>
                          {this.state.isBorderColorSwatchOpen ? <div style={styles.popover}>
                            <div style={styles.cover} onClick={this.hideBorderSwatch} />
                            <ChromePicker color={notificationPanelStyle.borderColor} 
                              /* onChange={this.handleBorderColorChange}  */
                            />
                          </div> : null}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  
                 
                </div>

                <div className={`tab-pane ${activeClass == 2 ? 'show active' : ''}`} id="debit">
                  <Row className="mb-3">
                    <Col md={12}>
                      <h4 className="text-muted h6">Text Style</h4>
                      <Row>
                        <Col md={4}>
                          <Button bsSize="small" block active={notificationPanelStyle.fontWeight == FONT_WEIGHT_BOLD} 
                            /* onClick={this.handleFontWeightChange} */
                          >
                            Bold
                          </Button>
                        </Col>
                        <Col md={4}>
                          <FormControl componentClass="select" bsSize="small" value={notificationPanelStyle.fontFamily} 
                            /* onChange={this.handleFontChange} */
                          >
                            <option value="arial">Arial</option>
                            <option value="monospace">Monospace</option>
                            <option value="georgia">Georgia</option>
                            <option value='Roboto,helvetica,arial,sans-serif'>Default</option>
                          </FormControl>
                        </Col>
                        <Col md={3}>
                          <div style={styles.swatch} onClick={this.showTextColorSwatch}>
                            <div style={{ ...styles.colorSwatch, ...styles.textColor }} />
                          </div>
                          {this.state.isTextColorSwatchOpen ? <div style={styles.popover}>
                            <div style={styles.cover} onClick={this.hideTextColorSwatch} />
                            <ChromePicker color={notificationPanelStyle.color} 
                              /* onChange={this.handleTextColorChange}  */
                            />
                          </div> : null}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  {
                    <Row className="mb-3">
                      <Col md={12}>
                        <h4 className="text-muted h6">Brand Name</h4>
                        <Row>
                          <Col md={12}>
                            <FormControl
                              type="text"
                              maxLength='15'
                              value={''}
                              placeholder="Enter brand name for notification"
                              id="contentText"
                          
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  }
                  {
                    <Row className="mb-3">
                      <Col md={12}>
                        <h4 className="text-muted h6">Identity User As</h4>
                        <Row>
                          <Col md={12}>
                            <FormControl
                              type="text"
                              maxLength="10"
                              value={''}
                              placeholder="Enter identity"
                              id="visitorText"
                          
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  }
                </div>


                <div className={`tab-pane ${activeClass == 3 ? 'show active' : ''}`} id="paypal">
                  {
                    <Row className="mb-3">
                      <Col md={9} style={{padding: '8px 15px', width: '45%'}}>
                        <span className="mt-5 text-muted h6"> Hide 'Reviews' if reviews less than</span>
                      </Col>
                      <Col md={3} style={{'padding': 0, width: '10%'}}>
                        <FormGroup>
                          <FormControl
                            type="number"
                            min="0"
                            value={notificationPanelStyle.liveVisitorCount}
                            /* onChange={(e) => this.handleLiveVistorCount(e)} */
                            bsSize="sm"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  }
             
                
                  
                  <Row className="mb-3">
                    <Col md={10}>
                      <span className="mt-5 text-muted h6">Notifications Clickable</span>
                    </Col>
                    <input
                      className="tgl tgl-ios"
                      id="handleClickableNotification"
                      type="checkbox"
                      checked={true}
                      readOnly
                    />
                    <label className="tgl-btn" htmlFor="handleClickableNotification"></label>
                  </Row>
                 
                  <Row className="mb-3">
                    <Col md={10}>
                      <span className="mt-5 text-muted h6">Hide/Show Notification</span>
                    </Col>
                    <input
                      className="tgl tgl-ios"
                      id="handleClickableNotification"
                      type="checkbox"
                      checked={true}
                      readOnly
                    />
                    <label className="tgl-btn" htmlFor="handleClickableNotification"></label>
                  </Row>
                 
                </div>
              </div>
            </div>
          </Col>
          <Row className="state-btn">
            <Col md={4}>

              <span className="btn btn-primary mr-0" >
                 Back
              </span>
            </Col>
            <Col md={4}>
              <span className="btn btn-primary mr-3"  >
                 Set Default
              </span>
            </Col>
            <Col md={4}>
              <span className="btn btn-primary mr-3 ">
                Save
              </span>
            </Col>

          </Row>
        </div>
      );
    }
}

export default ReviewDesignSetting;
