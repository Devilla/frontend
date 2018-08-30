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
            <tr className="campaign-td mt-3">
              <td className="ml-3">1.</td>
              <td>Influence</td>
              <td>INF-XXXXXXXXX</td>
              <td>
                <button className="p-2 btn btn-primary">Copy</button>
              </td>
            </tr>
            <tr>
              <td className="ml-3">2.</td>
              <td>Spykeys</td>
              <td>INF-XXXXXXXXX</td>
              <td>
                <button className="p-2 btn btn-primary">Copy</button>
              </td>
            </tr>
            <tr>
              <td className="ml-3">3.</td>
              <td>yahoo</td>
              <td>INF-XXXXXXXXX</td>
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
