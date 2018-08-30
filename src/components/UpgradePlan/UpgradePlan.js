import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { UpgradeCard, Modal } from 'components';
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.plan) {
      const { plan } = nextProps;
      this.setState({ plan });
    }
  }

  handleCheckChange(checked, value) {
    this.setState({ plan: checked ? value : null });
    this.props.handleSelectedPlan(value);
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
        <Modal
          id='upgradePlanModal'
          title='Upgrade Plan'
          content={
            <div className="modal-body">
              {!proceed ?
                <PlanList
                  plan={plan}
                  profile={this.props.profile}
                  handleCheckChange={this.handleCheckChange}
                  makePayment={this.makePayment}
                />
                :
                <UpgradeCard plan={plan} />
              }
            </div>
          }
          style={
            {
              alignModalStyle: {
                top: '10px'
              },
              modalDialog : {
                maxWidth: '80%'
              },
              modalBody : {
                padding: '0px'
              }
            }
          }
        />
      </div>
    );
  }
}
