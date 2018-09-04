import React, { Component } from 'react';


export class Card extends Component{
  render(){
    return (
      <div className={this.props.isDisabled ? 'card card-plain inner-display' : 'card card-plain inner-display disabled'}>
        <div className="header row">
          <label className="title col-md-11 text-center">{this.props.title}</label>
          <div className="status col-md-1">
            {this.props.status}
          </div>
        </div>
        <div className="content">
          {this.props.content}
        </div>
        <div className={this.props.isDisabled ? 'overlays hide': 'overlays'}></div>
      </div>
    );
  }
}

export default Card;
