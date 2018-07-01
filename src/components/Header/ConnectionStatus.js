import React, {Component} from 'react';
import './ConnectionStatus.css';

export default class ConnectionStatus extends Component{

  render(){
    return(

    // <!-- Please uncomment the lines below only one at a time to see the different connection status. -->

      <div id="status-note" className="center-block loading">
        {/*Can’t connect to Influence. Please check your internet connection.*/}
        {/*Reconecting in 10 seconds*/}
        {/*Reconecting...*/}
        Connected.
      </div>

    );
  }
}
