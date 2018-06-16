import React, { Component } from 'react';

export class CardHeader extends Component{
  render(){
    return (
      <div className="">
        <div className="header">
          <h4 className="title h3">{this.props.title}</h4>
        </div>
        <div className="">
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default CardHeader;
