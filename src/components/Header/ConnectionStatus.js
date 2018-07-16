import React, {Component} from 'react';
import './ConnectionStatus.scss';


export default class ConnectionStatus extends Component{

  constructor() {
    super();
    this.state = {
      connectionStatus:''
    };
  }
  componentWillMount(){
    if (window && window.navigator.onLine) {
      this.setState({connectionStatus: 'Connected.'});
    } else {
      this.setState({connectionStatus: 'Can’t connect to Influence. Please check your internet connection..'});
    }
  }

  render(){
    return(

    // <!-- Please uncomment the lines below only one at a time to see the different connection status. -->
    //Also change the brand color as background from ConnectionStatus.css file

      <div id={window && this.state.connectionStatus=='Connected.'?'status-noteConnected':'status-noteDisconnected'} className="center-block loading">
        // {this.state.connectionStatus}

      </div>

    );
  }
}
