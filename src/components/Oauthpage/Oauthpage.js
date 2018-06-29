import React , { Component } from 'react';
import './Oauthpage.scss';
import moment  from 'moment';
import { browserHistory }  from 'react-router';



class Oauthpage extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }
  
  getOAuthRows = () => {
    let i =0;
    return (
      <tr className="auth-td" key={i++} onClick={() => {}}>
        <th scope="row">{i++}</th>
        <td>{'dummy'}</td>
        <td>{moment().format()}</td>
        <td>{'dummy'}</td>
        <td>{'dummy'}</td>
        <td>
          <a href="javascript:;"><i className="ml-3 icon-trash" onClick={() => {}}></i></a>
          <a href="javascript:;"><i className="ml-1 fi-paper-stack " onClick={() => {}}></i></a>
        </td>
      </tr>
    );
  }

  render() {
    return (
      
      <div className="oauth-container">
        <div className="content">
          <div className="card-box">
            <h4 className="header-title"><i className="icon-arrow-left mr-3"></i>OAuth 2.0 Client IDs</h4>
            <hr/>
            <button type="button" className="credbtn btn btn-primary waves-effect mb-5" onClick={() => {browserHistory.push('/oauthgenerate');}} ><i className="fi-plus"></i>&nbsp;&nbsp;Create Credentials</button>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>NAME</th>
                  <th>CREATION DATE</th>
                  <th>TYPE</th>
                  <th>CLIENT ID</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {this.getOAuthRows()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    );
  }
}
  
  
export default Oauthpage;