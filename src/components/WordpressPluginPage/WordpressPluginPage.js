import React from 'react';

export default class WordpressPluginPage extends React.Component {

  render() {
    return (
      <div>
        <div className="table-responsive">
          <div className="table table-striped">
            <div className="thead table-header flex">
              <div className="tr tab-row">
                <div className="th col-md-2 text-center p-1">S. NO.</div>
                <div className="th col-md-5 text-center p-1">Campaign Name</div>
                <div className="th col-md-5 text-center p-1">Tracking ID</div>
              </div>
            </div>
            <div className="tbody tab-body">
              <div className="campaign-td tr">
                <div className="th col-md-1 text-center">1.</div>
                <div className="td col-md-4 text-center p-1">Influence</div>
                <div className="td col-md-4 text-center p-1">INF-XXXXXXXXX</div>
                <div className="td col-md-3 text-center p-1">
                  <button className="p-2 btn btn-primary">Copy</button>
                </div>
              </div>
              <div className="campaign-td tr">
                <div className="th col-md-1 text-center">2.</div>
                <div className="td col-md-4 text-center p-1">Influence</div>
                <div className="td col-md-4 text-center p-1">INF-XXXXXXXXX</div>
                <div className="td col-md-3 text-center p-1">
                  <button className="p-2 btn btn-primary">Copy</button>
                </div>
              </div>
              <div className="campaign-td tr">
                <div className="th col-md-1 text-center">3.</div>
                <div className="td col-md-4 text-center p-1">Influence</div>
                <div className="td col-md-4 text-center p-1">INF-XXXXXXXXX</div>
                <div className="td col-md-3 text-center p-1">
                  <button className="p-2 btn btn-primary">Copy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
