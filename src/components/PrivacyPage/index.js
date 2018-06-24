import React, { Component } from 'react';
import {Animated} from "react-animated-css";
export default class Privacy extends Component {
   componentDidMount(){
     window.scrollTo(0, 0)
   } 
  render() {
    return (
        <div>
            <div className="page-header"><div className="page-header-overlay">
            <div className="centered page-header-container w-container">
            <Animated className="page-header-title" animationIn="fadeInDown" animationOut="fadeOut" isVisible={true} >Privacy Policy</Animated></div></div></div>
   

   <div className="section innerpage">
    <div className="container w-container">  
        
    </div>
  </div>
        </div>
    );
  }
}
