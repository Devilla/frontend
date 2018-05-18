import React, { Component } from 'react';

export class Website extends Component{

    handleCheckbox = event => {
        const target = event.target;
        console.log(event.target);
        this.setState({
            [target.name]: target.checked
        });
    };

    render(){
      const { data, handleRouteChange, render } = this.props;
       let tasks=[];
        for (var i = 0; i < data.length; i++) {
           tasks.push(
                <tr key={i}>
                    <td>{i+1}. <i className="fas fa-globe"></i> {data[i].websiteUrl}</td>
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
