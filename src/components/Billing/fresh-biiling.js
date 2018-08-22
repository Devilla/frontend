import React ,{Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import { fetchInvoices, downloadInvoice } from 'ducks/payment' ;
import { UpgradeCard } from 'components';
import {
  Col,
  Table
} from 'react-bootstrap';
import './fresh-biiling.css';

const billingHeader = [
  'Billing Date', 'Amount', 'Transaction Id', 'Status', 'Download'
];

class FressBill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOne : false,
      collapseTwo : false,
      collapseThree : false,
      planSelected: {}
    };
    props.fetchInvoices();
  }

  handleCollapseOne()
  {
    this.setState({collapseOne: !this.state.collapseOne});
  }

  handleCollapseTwo()
  {
    this.setState({collapseTwo: !this.state.collapseTwo});
  }

  handleCollapseThree()
  {
    this.setState({collapseThree: !this.state.collapseThree});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile) {
      const { profile } = nextProps;
      let planSelected = profile ? profile.plan : {};
      this.setState({ planSelected });

    }
  }

  renderPaymentList() {
    if (this.props.invoices) {
      this.props.invoices.sort((a, b) => {
        return moment(a.created_at) < moment(b.created_at) ? 1 : moment(a.created_at) > moment(b.created_at) ? -1 : 0;
      });
      return this.props.invoices.map((invoice, index) => {
        return <tr className=" text-muted font-13" key={index}>
          <td className="name pl-3">{moment(invoice.created_at).format('DD MMM YYYY')}</td>
          <td className="email pl-4">${invoice.amount_due / 100}</td>
          <td className="location">{invoice.invoice_id}</td>
          <td>{invoice.paid?'Paid':'Not Paid'}</td>
          <td className="lastseen"><i className="fi-download pl-4" onClick={() => this.props.downloadInvoice(invoice.id)}></i></td>
        </tr>;
      });
    } else
      return <tr>
        <td>nothing</td>
      </tr>;
  }

  render(){
    return (
      <div>
        <div style={{marginTop:'30px',marginLeft:'400px', width:'900px',height:'71px',backgroundColor: '#fff', paddingTop: '12px',
          boxShadow: '0 1px 1px rgba(0,0,0,.2)', borderRadius: '5px'}}><img className="pl-2 pt-2" style={{width:'91px',height:'48px'}} src="https://web.freshchat.com/assets/images/billing_sprout-d577fed24b84e4e1899b8d59c4c5b164.svg"/><strong> &nbsp;SPROUT</strong>
          <button className="btn btn-primary float-right p-2 ">Change Plan<i className="pl-2 icon-arrow-down" onClick={()=>this.handleCollapseOne()}> </i></button></div>
        {this.state.collapseOne?
          <div style={{display:'block', marginLeft:'400px', height:'400px', width:'900px', backgroundColor: '#fff', paddingTop: '12px',
            boxShadow: '0 1px 1px rgba(0,0,0,.2)', borderRadius: '5px'}}> </div>
          :
          <div style={{display:'none', marginLeft:'400px', height:'400px', width:'900px', backgroundColor: '#fff', paddingTop: '12px',
            boxShadow: '0 1px 1px rgba(0,0,0,.2)', borderRadius: '5px'}}> </div>
        }

        <div style={{marginTop:'100px',marginLeft:'400px', width:'900px',height:'71px',backgroundColor: '#fff', padding: '20px',
          boxShadow: '0 1px 1px rgba(0,0,0,.2)', borderRadius: '5px'}} ><i className='fa fa-credit-card'></i> &nbsp;ADD CARD DETAILS
          <i className="pl-2 icon-arrow-down" onClick={()=>this.handleCollapseTwo()}> </i>
        </div>
        {this.state.collapseTwo?
          <div style={{display:'block', position:'relative', marginLeft:'400px', height:'400px', width:'900px', backgroundColor: '#fff', paddingTop: '12px',
            boxShadow: '0 1px 1px rgba(0,0,0,.2)', borderRadius: '5px'}}>
            <UpgradeCard plan={this.state.planSelected} />
          </div>
          :
          <div style={{display:'none', marginLeft:'400px', height:'400px', width:'900px', backgroundColor: '#fff', paddingTop: '12px',
            boxShadow: '0 1px 1px rgba(0,0,0,.2)', borderRadius: '5px'}}> </div>
        }

        <div style={{marginTop:'100px',marginLeft:'400px', width:'900px',height:'71px',backgroundColor: '#fff', padding: '20px',
          boxShadow: '0 1px 1px rgba(0,0,0,.2)', borderRadius: '5px'}}><i className='fa fa-file-text-o'></i> &nbsp;INVOICES
          <i className="pl-2 icon-arrow-down" onClick={()=>this.handleCollapseThree()}> </i>
        </div>
        {this.state.collapseThree?
          <div style={{display:'block', position:'relative', marginLeft:'400px', height:'400px', width:'900px', backgroundColor: '#fff', paddingTop: '12px',
            boxShadow: '0 1px 1px rgba(0,0,0,.2)', borderRadius: '5px'}}>
            <div className="panel panel-default">
              <div className="card-box">
                <Col md={12} style={{marginTop: '-202px'}}>
                  <div className="text-left table-responsive">
                    <Table className="table-striped">
                      <thead>
                        <tr>
                          {
                            billingHeader.map((prop, key) => {
                              return (
                                <th className=" h6" key={key}>{prop}</th>
                              );
                            })
                          }
                        </tr>
                      </thead>
                      <tbody>
                        {this.renderPaymentList()}
                      </tbody>
                    </Table>
                  </div>
                </Col>
              </div>
            </div>
          </div>
          :
          <div style={{display:'none', marginLeft:'400px', height:'400px', width:'900px', backgroundColor: '#fff', paddingTop: '12px',
            boxShadow: '0 1px 1px rgba(0,0,0,.2)', borderRadius: '5px'}}>
          </div>
        }
      </div>
    );
  }
}


const mapStateToProps = state => ({
  profile: state.getIn(['profile', 'profile']),
  invoices: state.getIn(['payment', 'invoices'])
});

const mapDispatchToProps = {
  fetchInvoices,
  downloadInvoice
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(FressBill);
