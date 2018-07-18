import React , { Component } from 'react';



class DashboardChannel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  


  render() {

    return (

      <div className="dashchannel-container">
        <button type="button" className="btn btn-info  addchannel" data-toggle="modal" data-target="#myModal" onClick={()=>{}} ><i className="fi-plus"></i>&nbsp;Add Channels</button>
        <div className="modal fade show-modal" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content align-modal">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Add new Webhook</h4>
              </div>
              <div className="modal-body">
                {this.hookpop()}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">save</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


export default DashboardChannel;
