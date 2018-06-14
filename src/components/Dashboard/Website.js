import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export class Website extends Component{

    handleCheckbox = event => {
      const target = event.target;
      console.log(event.target);
      this.setState({
        [target.name]: target.checked
      });
    };

    render(){
      const { data, render } = this.props;
      let tasks=[];
      for (var i = 0; i < data.length; i++) {
        tasks.push(
          <tr key={i} onClick={() => browserHistory.push('/campaigns')} style={{ cursor: 'pointer'}}>
            <td>{i+1}. <i className="fas fa-globe"></i> {data[i].campaignName}</td>
          </tr>
        );
      }
      return (
        <tbody>
          {render &&
                 tasks
          }
          {!render &&
                <tr><td style={{textAlign: 'center'}}><img style={{width: '60%'}} src='images/loader-dashboard.gif' alt="loader"/></td></tr>
          }
        </tbody>
      );
    }
}

export default Website;
