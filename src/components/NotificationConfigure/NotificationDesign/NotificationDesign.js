import React from 'react';
import {
  Googlepop,
  Facebookpop,
  FireIcon
} from 'img';
import StarRatings from 'react-star-ratings';
import './NotificationDesign.scss';

const NotificationDesign = ({
  contentText,
  visitorText,
  liveVisitorText,
  toggleMap,
  notificationPanelStyle,
  notification,
  popupName
}) => {
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

  const notificationName = notification.notificationName;
  let imgSrc = popupName === 'Google' ? Googlepop : Facebookpop;

  return (
    <div className="card-box p-0">
      <div className="text-center">
        <div className="row">
          <div className="col-md-12 ">
            <div className="card-box  text-white pt-5 pb-5 ">
              <div id="FPqR2DbIqJeA2DbI7MM9_0">
                <div id="FPqR3tRBqJeA3tRB7MM9_0" className="">
                  <div>
                    <div style={{}}>
                      <div style={notificationName == 'Recent Activity'
                        ? {}
                        : {
                          display: 'none'
                        }}>
                        <div id="FPqR2fZIqJeA2fZI7MM9_0">
                          <div className="FPqR3zjZqJeA3zjZ7MM9_0 FPqR2riIqJeA2riI7MM9_0" style={{
                            borderRadius: notificationStyle.borderRadius,
                            backgroundColor: notificationStyle.backgroundColor,
                            border: `${notificationStyle.borderWidth} ${notificationStyle.borderStyle} ${notificationStyle.borderColor}`
                          }}>
                            <div className="FPqR1JYFqJeA1JYF7MM9_0"><img src={toggleMap?'https://image.maps.cit.api.here.com/mia/1.6/mapview?app_id=jqBe50cRhOGMszLkt1Ab&app_code=uwZ-b66zb73TujBbVZ7iqQ&lat=28.6667&lon=77.2167&z=10&h=200&w=200':'images/554cf2e92cb6bf677667d90c_Testimonial-10 - Copy.jpg'} style={{ borderRadius: notificationStyle.borderRadius }} /></div>
                            <div className="FPqR2EbCqJeA2EbC7MM9_0">
                              <div className="FPqR2AUlqJeA2AUl7MM9_0" style={{
                                color: notificationStyle.color,
                                fontFamily: notificationStyle.fontFamily,
                                fontWeight: notificationStyle.fontWeight
                              }}>
                                Username from City, Country
                              </div>
                              <div className="FPqR13BWqJeA13BW7MM9_0" style={{
                                fontFamily: notificationStyle.fontFamily,
                                fontWeight: notificationStyle.fontWeight
                              }}>Recently signed up for {contentText}</div>
                              <div className="FPqR2PlWqJeA2PlW7MM9_0">a minute ago</div>
                              <div className="FPqR3eNuqJeA3eNu7MM9_0">
                                <i>
                                  <svg width="7" height="13" viewBox="0 0 7 13" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" fillRule="evenodd">
                                      <path d="M4.127.496C4.51-.12 5.37.356 5.16 1.07L3.89 5.14H6.22c.483 0 .757.616.464 1.044l-4.338 6.34c-.407.595-1.244.082-1.01-.618L2.72 7.656H.778c-.47 0-.748-.59-.48-1.02L4.13.495z" fill="#F6A623"></path>
                                      <path fill="#FEF79E" d="M4.606.867L.778 7.007h2.807l-1.7 5.126 4.337-6.34H3.16"></path>
                                    </g>
                                  </svg>
                                </i>
                                <span>by  </span>
                                <span className="FPqR12wMqJeA12wM7MM9_0" style={{
                                  color: notificationStyle.linkColor,
                                  fontFamily: notificationStyle.linkFontFamily,
                                  fontWeight: notificationStyle.linkFontWeight
                                }}>Influence</span>
                              </div>
                            </div>
                            <div className="FPqR1N_EqJeA1N_E7MM9_0" style={{
                              display: 'none'
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={notificationName == 'Live Visitor Count'
                        ? {}
                        : {
                          display: 'none'
                        }}>
                        <div id="FPqR3dGiqJeA3dGi7MM9_0">
                          <div className="FPqR2B_4qJeA2B_47MM9_0 FPqRD2zVqJeAD2zV7MM9_0" style={{
                            borderRadius: notificationStyle.borderRadius,
                            backgroundColor: notificationStyle.backgroundColor,
                            border: `${notificationStyle.borderWidth} ${notificationStyle.borderStyle} ${notificationStyle.borderColor}`
                          }}>
                            <div id="FPqR3acHqJeA3acH7MM9_0">
                              <div className="FPqRH0WDqJeAH0WD7MM9_0">
                                <div className="FPqRh0ePqJeAh0eP7MM9_0"></div>
                              </div>
                              <div className="FPqR15RvqJeA15Rv7MM9_0" style={{
                                color: notificationStyle.color,
                                fontFamily: notificationStyle.fontFamily,
                                fontWeight: notificationStyle.fontWeight
                              }}>
                                <div className="FPqR2fwXqJeA2fwX7MM9_0" style={{
                                  color: notificationStyle.color,
                                  fontFamily: notificationStyle.fontFamily,
                                  fontWeight: notificationStyle.fontWeight
                                }}>
                                  <span className="FPqR1Jr6qJeA1Jr67MM9_0">
                                    <span >431</span>
                                  </span><span>
                                    {` ${visitorText}`}</span>
                                </div>
                                <span>
                                  {` ${liveVisitorText}`}
                                </span>
                              </div>
                              <div className="FPqR14UVqJeA14UV7MM9_0">
                                Verified by
                                <i>
                                  <svg width="7" height="13" viewBox="0 0 7 13" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" fillRule="evenodd">
                                      <path d="M4.127.496C4.51-.12 5.37.356 5.16 1.07L3.89 5.14H6.22c.483 0 .757.616.464 1.044l-4.338 6.34c-.407.595-1.244.082-1.01-.618L2.72 7.656H.778c-.47 0-.748-.59-.48-1.02L4.13.495z" fill="#F6A623"></path>
                                      <path fill="#FEF79E" d="M4.606.867L.778 7.007h2.807l-1.7 5.126 4.337-6.34H3.16"></path>
                                    </g>
                                  </svg>
                                </i>
                                <a href="https://useinfluence.co" rel="nofollow" target="_blank">{contentText}</a>
                              </div>
                            </div>
                            <div className="FPqR159fqJeA159f7MM9_0" style={{
                              display: 'none'
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={notificationName == 'Bulk Activity'
                        ? {}
                        : {
                          display: 'none'
                        }}>
                        <div id="FPqR2lriqJeA2lri7MM9_0">
                          <div className="FPqR1XogqJeA1Xog7MM9_0 FPqR27wVqJeA27wV7MM9_0" style={{
                            borderRadius: notificationStyle.borderRadius,
                            backgroundColor: notificationStyle.backgroundColor,
                            border: `${notificationStyle.borderWidth} ${notificationStyle.borderStyle} ${notificationStyle.borderColor}`
                          }}>
                            <div className="FPqR37xpqJeA37xp7MM9_0"><img src={FireIcon} style={{ borderRadius: notificationStyle.borderRadius }} /></div>
                            <div className="FPqRqu5HqJeAqu5H7MM9_0">
                              <div style={{
                                color: notificationStyle.color,
                                fontFamily: notificationStyle.fontFamily,
                                fontWeight: notificationStyle.fontWeight
                              }}>
                                <span className="FPqRtoc3qJeAtoc37MM9_0" style={{
                                  color: notificationStyle.color,
                                  fontFamily: notificationStyle.fontFamily
                                }}>
                                  <span style={{
                                    color: notificationStyle.color,
                                    fontFamily: notificationStyle.fontFamily
                                  }}>{`2,002 ${ visitorText} `}
                                  </span>
                                </span>
                                <span style={{
                                  color: notificationStyle.color,
                                  fontFamily: notificationStyle.fontFamily
                                }}>{` signed up for ${contentText} in the last 7 days`}
                                </span>
                              </div>
                            </div>
                            <div className="FPqR29e1qJeA29e17MM9_0" style={{
                              display: 'none'
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={notificationName == 'Review Notification'
                        ? {}
                        : {
                          display: 'none'
                        }}>
                        <div className="reviewpop-container">
                          <div id="FPqR2fZIqJeA2fZI7MM9_0">
                            <div className="FPqR3zjZqJeA3zjZ7MM9_0 FPqR2riIqJeA2riI7MM9_0 wrapper"  style={{
                              borderRadius: notificationStyle.borderRadius,
                              backgroundColor: notificationStyle.backgroundColor,
                              border: `${notificationStyle.borderWidth} ${notificationStyle.borderStyle} ${notificationStyle.borderColor}`
                            }}>

                              <div className="FPqR1JYFqJeA1JYF7MM9_0" ><img src={imgSrc} width='50px'/></div>
                              <div className="FPqR2EbCqJeA2EbC7MM9_0 content-pop">
                                <div className="FPqR2AUlqJeA2AUl7MM9_0" style ={{
                                  color:notificationStyle.color,
                                  fontFamily: notificationStyle.fontFamily,
                                  fontWeight: notificationStyle.fontWeight}}>
                                  <div className="star">
                                    <StarRatings
                                      rating={4.6}
                                      starDimension="20px"
                                      starRatedColor={popupName === 'Google' ? 'gold' : '#097fff'}
                                      numberOfStars={5}
                                      starSpacing= "5px"
                                      name='rating'
                                    />
                                    <span  className="rating-num" style ={{
                                      fontFamily: notificationStyle.fontFamily,
                                      fontWeight: notificationStyle.fontWeight}}> 4.6</span></div>
                                </div>
                                <div className="FPqR2PlWqJeA2PlW7MM9_0 "  style={{
                                  color: notificationStyle.linkColor,
                                  fontFamily: notificationStyle.linkFontFamily,
                                  fontWeight: notificationStyle.linkFontWeight,
                                  backgroundColor:notificationStyle.backgroundColor
                                }}>
                                  <span className="FPqR1Jr6qJeA1Jr67MM9_0 headtext-pop">
                                    <span>250 {visitorText} reviewed {contentText}</span>
                                  </span>

                                </div>
                                <div className="FPqR3eNuqJeA3eNu7MM9_0 verifier">
                                  <i>
                                    <svg width="7" height="13" viewBox="0 0 7 13" xmlns="http://www.w3.org/2000/svg">
                                      <g fill="none" fillRule="evenodd">
                                        <path d="M4.127.496C4.51-.12 5.37.356 5.16 1.07L3.89 5.14H6.22c.483 0 .757.616.464 1.044l-4.338 6.34c-.407.595-1.244.082-1.01-.618L2.72 7.656H.778c-.47 0-.748-.59-.48-1.02L4.13.495z" fill="#F6A623"></path>
                                        <path fill="#FEF79E" d="M4.606.867L.778 7.007h2.807l-1.7 5.126 4.337-6.34H3.16"></path>
                                      </g>
                                    </svg>
                                  </i>
                                  <span>by  </span>
                                  <span className="FPqR12wMqJeA12wM7MM9_0" style={{
                                    color: notificationStyle.linkColor,
                                    fontFamily: notificationStyle.linkFontFamily,
                                    fontWeight: notificationStyle.linkFontWeight
                                  }}><b>Influence</b></span>
                                </div>
                              </div>

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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDesign;
