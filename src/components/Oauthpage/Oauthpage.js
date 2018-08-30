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
      <div className="auth-td tr" key={index} onClick={(e) => this.openGenerator(e, oauth)}>
        <div scope="row" className="th col-md-1 text-center">{index+1}</div>
        <div className="td col-md-2 text-center">{oauth.name}</div>
        <div className="td col-md-2 text-center">{moment(oauth.createdAt).format('DD/MM/YYYY')}</div>
        <div className="td col-md-3 text-center">{oauth.secret.replace(/./g, '*')}</div>
        <div className="td col-md-3 text-center">{oauth.clientId}</div>
        <div className="td col-md-1 text-center">
          <a href="javascript:;"><i className="ml-3 icon-trash" onClick={() => deleteClientOauth(oauth.id, index)}></i></a>
        </div>
      </div>
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
            <h4 className="oauthheader mt-3">OAuth</h4>
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

            <div className="table table-striped">
              <div className="thead table-header flex">
                <div className="tr tab-row">
                  <div className="th col-md-1 text-center">#</div>
                  <div className="th col-md-2 text-center">NAME</div>
                  <div className="th col-md-2 text-center">CREATION DATE</div>
                  <div className="th col-md-3 text-center">Secret</div>
                  <div className="th col-md-3 text-center">CLIENT ID</div>
                  <div className="th col-md-1 text-center">ACTION</div>
                </div>
              </div>
              <div className="tbody">
                {this.getOAuthRows()}
              </div>
            </div>
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
