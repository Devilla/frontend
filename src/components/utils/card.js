import React, { Component } from 'react';

import './card.scss';

export class Card extends Component {
  render() {
    return (
      <div className={'card' + (this.props.plain ? ' card-plain' : '')}>
        <div className={'header'
                    + (this.props.hCenter ? ' text-center' : '')}>
          <div className='card-header-analytics'>
            <div>
              <h4 className='title'>{this.props.title}</h4>
              <p className='category'>{this.props.category}</p>
            </div>
            <div>
              {this.props.rightContent}
            </div>
          </div>
        </div>
        <div className={'content'
                    + (this.props.ctAllIcons ? ' all-icons' : '')
                    + (this.props.ctTableFullWidth ? ' table-full-width' : '')
                    + (this.props.ctTableResponsive ? ' table-responsive' : '')
                    + (this.props.ctTableUpgrade ? ' table-upgrade' : '')}>

          {this.props.content}


        </div>
      </div>
    );
  }
}

export default Card;
