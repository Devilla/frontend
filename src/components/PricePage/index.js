import React, { Component } from 'react';
import PricePage from './PricePage';

class Price extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      externalValue: true,
      planPeriod: 12,
      servicebotPlans: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleSwitchChange = this.handleSwitchChange.bind(this);

  }

  componentWillMount() {
    fetch('https://servicebot.useinfluence.co/api/v1/service-templates/public')
    .then((res) => res.json())
    .then((res) => {
      this.setState({servicebotPlans: res});
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleChange(checked) {
    this.setState({checked});
  }

  handleMonthChange() {
    this.setState({externalValue: false, planPeriod: 1});
  }

  handleYearChange() {
    this.setState({externalValue: true, planPeriod: 12});
  }

  handleSwitchChange(value) {
    if (value) {
      this.setState({externalValue: true, planPeriod: 12});
    } else {
      this.setState({externalValue: false, planPeriod: 1});
    }
  }

  render() {
    const { planList, selectedPlan, handleCheckChange, couponDetails } = this.props;
    return (
      <div style={{width:'100%'}}>
        <PricePage
          couponDetails={couponDetails}
          planPeriod={this.state.planPeriod}
          planList={this.state.servicebotPlans}
          handleMonthChange={this.handleMonthChange}
          handleSwitchChange={this.handleSwitchChange}
          handleYearChange={this.handleYearChange}
          externalValue={this.state.externalValue}
          selectedPlan={selectedPlan}
          handleCheckChange={handleCheckChange}
        />
      </div>
    );
  }
}

export default Price;
