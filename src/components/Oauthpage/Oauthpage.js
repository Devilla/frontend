import React , { Component } from 'react';
import './Oauthpage.scss';
import moment  from 'moment';
import { browserHistory }  from 'react-router';
import { connect } from 'react-redux';

import { fetchClientOauth, createClientOauth, successClientOauth, deleteClientOauth } from 'ducks/oauth';


class Oauthpage extends Component {

  componentWillMount() {
    this.props.fetchClientOauth();
  }

  openGenerator = (e, oauth) => {
    if(e.target.className === 'ml-3 icon-trash')
      return;
    this.props.successClientOauth(oauth);
    browserHistory.push('/oauthgenerate');
  }

  getOAuthRows = () => {
    const { oauths, deleteClientOauth } = this.props;
    return oauths.map((oauth, index) =>
      <tr className="auth-td" key={index} onClick={(e) => this.openGenerator(e, oauth)}>
        <th scope="row">{index+1}</th>
        <td>{oauth.name}</td>
        <td>{moment(oauth.createdAt).format('DD/MM/YYYY')}</td>
        <td>{oauth.secret.replace(/./g, '*')}</td>
        <td>{oauth.clientId}</td>
        <td>
          <a href="javascript:;"><i className="ml-3 icon-trash" onClick={() => deleteClientOauth(oauth.id, index)}></i></a>
        </td>
      </tr>
    );
  }

  generateClientOauth = () => {
    this.props.createClientOauth();
    browserHistory.push('/oauthgenerate');
  }

  render() {
    return (
      <div className="oauth-container">
        <div className="content">
          <div className="card-box">
            <h4 className="oauthheader mt-3">OAuth 2.0 Client ID</h4>
            <hr/>
            <button
              type="button"
              className="credbtn btn btn-primary waves-effect mb-5"
              onClick={this.generateClientOauth}
            >
              <i className="fi-plus"></i>
              &nbsp;&nbsp;
              Create Credentials
            </button>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>NAME</th>
                  <th>CREATION DATE</th>
                  <th>Secret</th>
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

const mapStateToProps = state => ({
  loading: state.getIn(['loading', 'state']),
  oauths: state.getIn(['oauth', 'oauths'])
});

const mapDispatchToProps = {
  fetchClientOauth,
  createClientOauth,
  successClientOauth,
  deleteClientOauth
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Oauthpage);
