import React from 'react';
import {Table} from 'react-bootstrap';


export default class WordpressPluginPage extends React.Component {

  render() {
    return (
      <div>
        <Table className="mt-5 ml-5">
          <thead>
            <tr>
              <td>S. NO.</td>
              <td>Campaign Name</td>
              <td>Tracking ID</td>
            </tr>
          </thead>
          <tbody>
            <tr className="campaign-td">
              <td>1.</td>
              <td>Campaign Name</td>
              <td>Tracking ID</td>
              <td>
                <button className="p-2 btn btn-primary">Copy</button>
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Campaign Name</td>
              <td>Tracking ID</td>
              <td>
                <button className="p-2 btn btn-primary">Copy</button>
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Campaign Name</td>
              <td>Tracking ID</td>
              <td className="pr-2">
                <button className="p-2 btn btn-primary">Copy</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }

}
