import React,{Component} from 'react';
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
                <p>Account Settings</p>
              </div>
            </div>
            <div className="thumbs ">
              <div className="link-content-icon">
                <img src="https://web.freshchat.com/assets/images/settings/your_account-9efcbfd4225d3f6d83f36d06f3e744e2.svg"/>
                <p>Profile Settings</p>
              </div>
            </div>
            <div className="thumbs ">
              <div className="link-content-icon">
                <img src="https://web.freshchat.com/assets/images/settings/integrations-ab3594743a116949f0d5444ff4c7926f.svg"/>
                <p>Integrations</p>
              </div>
            </div>
            <div className="thumbs ">
              <div className="link-content-icon">
                <img src="https://web.freshchat.com/assets/images/settings/billing-715beb90d3a115fee034546af3f350ad.svg"/>
                <p>Billing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
