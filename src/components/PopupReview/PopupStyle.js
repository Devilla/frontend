import React , { Component }  from 'react' ;
import StarRatings from 'react-star-ratings';
import {
  Googlepop,
  Facebookpop,
} from 'img';





class PopupStyle extends Component { 
  render() {
    const { notificationStyle ,popupName}  = this.props;
    let img={};
    popupName === 'Google' ? img = Googlepop : img= Facebookpop;
    return (
      <div>   
        <div className="FPqR1JYFqJeA1JYF7MM9_0" ><img src={img} width='50px'/></div>
        <div className="FPqR2EbCqJeA2EbC7MM9_0 content-pop">
          <div className="FPqR2AUlqJeA2AUl7MM9_0" style ={{
            color:notificationStyle.color,
            fontFamily: notificationStyle.fontFamily,
            fontWeight: notificationStyle.fontWeight}}>
            <div className="star">
              <StarRatings
                rating={4.6}
                starDimension="20px"
                starRatedColor={popupName==='Google'?'gold':'#385c8e'}
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
              <span>250 marketers reviewed us</span>
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
      </div>
    );
  }
}


export default PopupStyle;