import React, {Component} from 'react';
import './ConnectionStatus.css';


export default class ConnectionStatus extends Component{

  constructor() {
    super();
    this.state = {
      connectionStatus:''
    };
  }


  componentWillMount(){
    if (window && window.navigator.onLine) {
      this.state.connectionStatus = 'Connected.';
      console.log('online','=====================');
    } else {
      this.state.connectionStatus = 'Can’t connect to Influence. Please check your internet connection..';
      console.log('offline','=====================');
    }
  }

  render(){
    return(

    // <!-- Please uncomment the lines below only one at a time to see the different connection status. -->
    //Also change the brand color as background from ConnectionStatus.css file

      <div id={window && this.state.connectionStatus=='Connected.'?'status-noteConnected' :'status-noteDisconnected'} className="center-block loading">
        {/*Reconecting in 10 seconds*/}
        {/*Reconecting...*/}
        {this.state.connectionStatus}

      </div>

    );
  }
}
