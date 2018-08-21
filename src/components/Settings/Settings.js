import React,{Component} from 'react';
import {Link} from 'react-router';
import './Settings.scss';
// import {Row,Col} from 'react-bootstrap';
export default class Settings extends Component{

  render (){
    return (

      <div>
        <div className="thumb-box">
          <div className="row margin-top">
            <div className="col-md-1">
              <h5 className="title">SETUP</h5>
            </div>
            <div className="thumbs ">
              <div className="link-content-icon">
                <img src="https://web.freshchat.com/assets/images/settings/Account_settings-84a0fa377751b40cf4a872da666c7997.svg"/>
                <Link to="/wordpress-plugin-page"><p>Account Settings</p></Link>
              </div>
            </div>
            <div className="thumbs ">
              <div className="link-content-icon">
                <img src="https://web.freshchat.com/assets/images/settings/your_account-9efcbfd4225d3f6d83f36d06f3e744e2.svg"/>
                <Link to="/profile"><p>Profile Settings</p></Link>
              </div>
            </div>
            <div className="thumbs ">
              <div className="link-content-icon">
                <img src="https://web.freshchat.com/assets/images/settings/integrations-ab3594743a116949f0d5444ff4c7926f.svg"/>
                <Link to="/integrations"><p>Integrations</p></Link>
              </div>
            </div>
            <div className="thumbs ">
              <div className="link-content-icon">
                <img src="https://web.freshchat.com/assets/images/settings/billing-715beb90d3a115fee034546af3f350ad.svg"/>
                <Link to="/fresh-billing"><p>Billing</p></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
