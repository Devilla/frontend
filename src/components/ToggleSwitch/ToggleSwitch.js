import React, { Component } from 'react';
// import './ToggleSwitch.scss';

class ToggleSwitch extends Component {
  constructor() {
    super();
    this.state = {
      isActive:true
    };
  }

  render(){
    return (
      <div className="switch td col-md-1">
        <input className="tgl tgl-ios" id="cb2" type="checkbox" checked={this.state.isActive}  readOnly/>
        <label className="tgl-btn m-0" htmlFor="cb2"  data-toggle="modal" data-target="#2"  onClick={() =>{}}>{this.state.isActive&&'ON'}</label>
      </div>
    );
  }
}

export default ToggleSwitch;
