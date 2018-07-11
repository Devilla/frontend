import React from 'react';
// import StarRatings from 'react-star-ratings';
import {
// Facebookpop,
// Googlepop
} from 'img';
import './ReviewPopup.scss';
import PopupStyle from './PopupStyle';
const ReviewPopup = ({tab, display, position, animation, notificationPanelStyle}) => {

  const {
    radius,
    borderWidth,
    borderColor,
    shadow,
    blur,
    backgroundColor,
    color,
    linkColor,
    fontFamily,
    fontWeight,
    linkFontFamily,
    linkFontWeight
  } = notificationPanelStyle;


  // findPopupHander= () => {

  // }


  const notificationStyle = {
    backgroundColor: `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`,
    borderStyle: 'solid',
    borderWidth: `${borderWidth}px`,
    borderColor: `rgba(${borderColor.r}, ${borderColor.g}, ${borderColor.b}, ${borderColor.a})`,
    color: `rgb(${color.r}, ${color.g}, ${color.b})`,
    boxShadow: `${shadow.r}px ${shadow.b}px ${shadow.g}px ${blur}px ${shadow.color}`,
    borderRadius: `${radius}px`,
    linkColor: `rgb(${linkColor.r}, ${linkColor.g}, ${linkColor.b}, ${linkColor.a})`,
    fontFamily,
    fontWeight,
    linkFontFamily,
    linkFontWeight
  };
  let notificationPosition;
  switch (position) {
    case 'Bottom Right':
      notificationPosition = {right: '10px', bottom: '0px'};
      break;
    case 'Bottom Left':
      notificationPosition = {left: '0px', bottom: '0px'};
      break;
    case 'Bottom Center':
      notificationPosition = {left: '50%', transform: 'translate(-50%, 0)', bottom: '0px'};
      break;
    case 'Top Left':
      notificationPosition = {left: '0px', top: '10px'};
      break;
    case 'Top Right':
      notificationPosition = {right: '10px', top: '10px'};
      break;
    case 'Top Center':
      notificationPosition = {left: '50%', transform: 'translate(-50%, 0)', top: '10px'};
      break;
    default:
      notificationPosition = {left: '0px', bottom: '0px'};
  }

  return (
    <div className="reviewpop-container">
      <div className={'notification-view animated ' + animation} style={notificationPosition}>
        <div id="FPqR2DbIqJeA2DbI7MM9_0" >
          <div style={tab == '1' || tab =='1.1'
            ? {}
            : {
              display: 'none'
            }} id="FPqR3tRBqJeA3tRB7MM9_0">
            <div>
              <div style={{}}>
                <div style={display?{display: 'block'}:{display: 'none'}}>
                  <div id="FPqR2fZIqJeA2fZI7MM9_0">
                    <div className="FPqR3zjZqJeA3zjZ7MM9_0 FPqR2riIqJeA2riI7MM9_0 wrapper"  style={tab == '1'
                      ?{}
                      :{
                        borderRadius: notificationStyle.borderRadius,
                        backgroundColor: notificationStyle.backgroundColor,
                        border: `${notificationStyle.borderWidth} ${notificationStyle.borderStyle} ${notificationStyle.borderColor}`
                      }}>

                      <PopupStyle notificationStyle={notificationStyle}/>


                      <div className="FPqR1N_EqJeA1N_E7MM9_0" style={{display: 'none'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z">
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ReviewPopup;
