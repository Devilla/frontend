import React, { Component } from 'react';
import { Row, Col, Tabs, Tab, Button, FormControl } from 'react-bootstrap';
import Switch from 'react-flexible-switch';

import Slider from 'react-rangeslider'
import reactCSS from 'reactcss'
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import { ChromePicker } from 'react-color';

const FONT_WEIGHT_BOLD = 'bold';
const FONT_WEIGHT_NORMAL = 'normal';


export class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBorderColorSwatchOpen: false,
      isBgColorSwatchOpen: false,
      isTextColorSwatchOpen: false,
      isLinkColorSwatchOpen: false
    }
    Object.assign(this.state, props.notificationPanelStyle);
  }

  handleRadiusChange = (radius) => {
    this.setState({ radius });
    this.props.onConfigChange({ prop: 'radius', value: radius });
  };

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

  handleLinkFontChange = (e) => {
    const linkFontFamily = `${e.target.value}`;
    this.setState({ linkFontFamily });
    this.props.onConfigChange({ prop: 'linkFontFamily', value: linkFontFamily });
  };

  handleFontWeightChange = () => {
    let fontWeight = this.props.notificationPanelStyle.fontWeight;
    if(fontWeight === FONT_WEIGHT_BOLD)
      fontWeight = FONT_WEIGHT_NORMAL;
    else
      fontWeight = FONT_WEIGHT_BOLD;

    this.setState({fontWeight});
    this.props.onConfigChange({ prop: 'fontWeight', value: fontWeight });
  }

  handleLinkFontWeightChange = () => {
    let linkFontWeight = this.props.notificationPanelStyle.linkFontWeight;
    if(linkFontWeight === FONT_WEIGHT_BOLD)
      linkFontWeight = FONT_WEIGHT_NORMAL;
    else
      linkFontWeight = FONT_WEIGHT_BOLD;

    this.setState({linkFontWeight});
    this.props.onConfigChange({ prop: 'linkFontWeight', value: linkFontWeight });
  }

  componentWillReceiveProps(nextProps) {
      if(nextProps != this.props)
        Object.assign(this.state, this.props.notificationPanelStyle);
  }

  handleStateChange() {

  }

  render() {
    const { notificationPanelStyle, handleContentChange, contentText, notificationName, hideAnonymous, displayNotifications } = this.props;
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
    console.log(notificationName, "================>notification");
    return (
      <div className="setting" style={{ backgroundColor: 'white' }}>
        <Tabs justified defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Box">
            <Row>
              <Col md={12}>
                <h4>Radius</h4>
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
            <Row>
              <Col md={12}>
                <h4>Border</h4>
                <Row>

                  <Col md={3}>
                    <div style={styles.swatch} onClick={this.showBorderSwatch}>
                      <div style={{ ...styles.colorSwatch, ...styles.border }} />
                    </div>
                    {this.state.isBorderColorSwatchOpen ? <div style={styles.popover}>
                      <div style={styles.cover} onClick={this.hideBorderSwatch} />
                      <ChromePicker color={notificationPanelStyle.borderColor} onChange={this.handleBorderColorChange} />
                    </div> : null}
                  </Col>
                  <Col md={9}>
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
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h4>Shadow</h4>
                <Row>
                  <Col md={6}>
                    <div className='slider hf'>
                      <Slider
                        tooltip={false}
                        min={0}
                        max={10}
                        value={notificationPanelStyle.shadow}
                        onChange={this.handleShadowChange}
                      />
                      <small>stroke</small>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className='slider hf'>
                      <Slider
                        tooltip={false}
                        min={0}
                        max={25}
                        value={notificationPanelStyle.blur}
                        onChange={this.handleBlurChange}
                      />
                      <small>blur</small>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <h4>Background Color</h4>
                  </Col>
                  <Col md={8}>
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
          </Tab>
          <Tab eventKey={2} title="Text">
            <Row>
              <Col md={12}>
                <h4>Text Setting</h4>
                <Row>
                  <Col md={4}>
                    <div style={styles.swatch} onClick={this.showTextColorSwatch}>
                      <div style={{ ...styles.colorSwatch, ...styles.textColor }} />
                    </div>
                    {this.state.isTextColorSwatchOpen ? <div style={styles.popover}>
                      <div style={styles.cover} onClick={this.hideTextColorSwatch} />
                      <ChromePicker color={notificationPanelStyle.color} onChange={this.handleTextColorChange} />
                    </div> : null}
                  </Col>
                  <Col md={4}>
                    <Button bsSize="small" block active={notificationPanelStyle.fontWeight == FONT_WEIGHT_BOLD} onClick={this.handleFontWeightChange}>
                      Bold
                    </Button>
                  </Col>
                  <Col md={4}>
                    <FormControl componentClass="select" bsSize="small" value={notificationPanelStyle.fontFamily} onChange={this.handleFontChange}>
                      <option value="arial">Arial</option>
                      <option value="monospace">Monospace</option>
                      <option value="georgia">Georgia</option>
                      <option value="inherit">Default</option>
                    </FormControl>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h4>Link Setting</h4>
                <Row>
                  <Col md={4}>
                    <div style={styles.swatch} className="bgcolor" onClick={this.showLinkColorSwatch}>
                      <div style={{ ...styles.colorSwatch, ...styles.linkColor }} />
                    </div>
                    {this.state.isLinkColorSwatchOpen ? <div style={styles.popover}>
                      <div style={styles.cover} onClick={this.hideLinkColorSwatch} />
                      <ChromePicker color={notificationPanelStyle.linkColor} onChange={this.handleTextLinkColorChange} />
                    </div> : null}
                  </Col>
                  <Col md={4}>
                    <Button bsSize="small" block active={notificationPanelStyle.linkFontWeight == FONT_WEIGHT_BOLD} onClick={this.handleLinkFontWeightChange}>
                      Bold
                    </Button>
                  </Col>
                  <Col md={4}>
                    <FormControl componentClass="select" bsSize="small" placeholder="select" value={notificationPanelStyle.linkFontFamily} onChange={this.handleLinkFontChange}>
                      <option value="arial">Arial</option>
                      <option value="sans-serif">Sen Serif</option>
                      <option value="helvetica">Helvetica</option>
                      <option value="open sans">Default</option>
                    </FormControl>
                  </Col>
                </Row>
              </Col>
            </Row>
            {notificationName=="Recent Activity" &&
              <Row>
                <Col md={12}>
                  <h4>Content Setting</h4>
                  <Row>
                    <Col md={12}>
                      <FormControl
                        type="text"
                        value={contentText}
                        placeholder="Enter content for notification"
                        id="contentText"
                        onChange={(e) => handleContentChange(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            }
          </Tab>
          {/* {notificationName=="Recent Activity" &&
            <Tab eventKey={3} title="Others">
              <Row>
                <Col md={2}>
                  <Switch
                    circleStyles={{
                      onColor: 'blue',
                      offColor: 'gray',
                      diameter: 18
                    }}
                    switchStyles={{
                      width: 50
                    }}

                    cssClass="alignsame"
                    value={hideAnonymous}
                    onChange={(e) => this.handleStateChange('hideAnonymous', e)}
                  />
                </Col>
                <Col md={10}>
                  <span className="mt-5">Hide anonymous conversions
                  </span>
                </Col>
              </Row>
              <Row>
                <Col md={2}>
                  <Switch circleStyles={{
                      onColor: 'blue',
                      offColor: 'gray',
                      diameter: 18
                    }} switchStyles={{
                      width: 50
                    }} cssClass="alignsame" value={displayNotifications} onChange={(e) => this.handleStateChange('displayNotifications', e)}/>
                </Col>
                <Col md={10}>
                  <span className="mt-5">Only display notifications from user's country</span>
                </Col>
              </Row>
            </Tab>
          } */}
          {/* <Tab eventKey={3} title="Image">
            <ImagesUploader
              url="http://localhost:1337/upload"
              optimisticPreviews
              multiple={false}
              onLoadEnd={(err) => {
                if (err) {
                  console.error(err);
                }
              }}
              label="Upload a picture"
            />
          </Tab> */}
        </Tabs>
      </div>
    );
  }
}

export default Setting;
