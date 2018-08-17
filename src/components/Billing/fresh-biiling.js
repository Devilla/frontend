import React ,{Component} from 'react';
import './fresh-biiling.css';



export default class FressBill extends Component {
  constructor() {
    super();
    this.state = {
      collapseOne : false,
      collapseTwo : false,
      collapseThree : false
    };
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
          <div style={{display:'block', marginLeft:'400px', height:'400px', width:'900px', backgroundColor: '#fff', paddingTop: '12px',
            boxShadow: '0 1px 1px rgba(0,0,0,.2)', borderRadius: '5px'}}> </div>
          :
          <div style={{display:'none', marginLeft:'400px', height:'400px', width:'900px', backgroundColor: '#fff', paddingTop: '12px',
            boxShadow: '0 1px 1px rgba(0,0,0,.2)', borderRadius: '5px'}}> </div>
        }

        <div style={{marginTop:'100px',marginLeft:'400px', width:'900px',height:'71px',backgroundColor: '#fff', padding: '20px',
          boxShadow: '0 1px 1px rgba(0,0,0,.2)', borderRadius: '5px'}}><i className='fa fa-file-text-o'></i> &nbsp;INVOICES
          <i className="pl-2 icon-arrow-down" onClick={()=>this.handleCollapseThree()}> </i>
        </div>
        {this.state.collapseThree?
          <div style={{display:'block', marginLeft:'400px', height:'400px', width:'900px', backgroundColor: '#fff', paddingTop: '12px',
            boxShadow: '0 1px 1px rgba(0,0,0,.2)', borderRadius: '5px'}}> </div>
          :
          <div style={{display:'none', marginLeft:'400px', height:'400px', width:'900px', backgroundColor: '#fff', paddingTop: '12px',
            boxShadow: '0 1px 1px rgba(0,0,0,.2)', borderRadius: '5px'}}> </div>
        }
      </div>
    );
  }
}
