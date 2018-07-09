import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { UpgradeCard } from 'components';
import PlanList from './PlanList';
import './UpgradePlan.scss';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};

export default class UpgradePlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: '',
      proceed: false
    };
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.makePayment = this.makePayment.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleCheckChange(checked, value) {
    this.setState({ plan: checked ? value : null });
  }

  makePayment() {
    if (!this.state.plan)
      return toast.warn('Select a plan', toastConfig);
    this.setState({ proceed: true });
  }

  componentWillUnmount() {
    this.setState({ proceed: false });
  }

  render() {
    const { proceed, plan } = this.state;
    return (
      <div className="upgrade-plan-container">
        {!proceed ?
          <PlanList
            plan={plan}
            handleCheckChange={this.handleCheckChange}
            makePayment={this.makePayment}
          />
          :
          <UpgradeCard plan={plan} />
        }
        <ToastContainer hideProgressBar={true} />
      </div>
    );
  }
}
