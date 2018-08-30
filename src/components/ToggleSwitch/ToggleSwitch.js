import React, { Component } from 'react';

class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive:true
    };
  }

  render(){
    const {handleChange} = this.props;
    return (
      <div className="switch td col-md-1">
        <input className="tgl tgl-ios" id="cb2" type="checkbox" checked={this.state.isActive} />
        <label className="tgl-btn m-0" htmlFor="cb2"  data-toggle="modal" data-target="#2"  onClick={() =>handleChange}>{this.state.isActive&&'ON'}</label>
      </div>
    );
  }
}

export default ToggleSwitch;
