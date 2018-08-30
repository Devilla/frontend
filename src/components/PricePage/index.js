import React, { Component } from 'react';
import PricePage from './PricePage';

class Price extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      externalValue: true,
      planPeriod: 1,
      servicebotPlans: [],
      style1: {opacity: 1},
      style2: {opacity: 0.5}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);

  }

  componentWillMount() {
    fetch('https://servicebot.useinfluence.co/api/v1/service-templates/public')
      .then((res) => res.json())
      .then((res) => {
        this.setState({servicebotPlans: res});
      });
  }

  handleChange(checked) {
    this.setState({checked});
  }

  handleMonthChange() {
    this.setState({externalValue: true, planPeriod: 1 ,style1: {opacity : 1}, style2: {opacity : 0.5}});
  }

  handleYearChange() {
    this.setState({externalValue: false, planPeriod: 12,style1: {opacity : 0.5}, style2: {opacity : 1}});
  }



  render() {
    const { planList, selectedPlan, handleCheckChange, couponDetails, setPlanList } = this.props;
    return (
      <div style={{width:'100%'}}>
        <PricePage
          setPlanList={setPlanList}
          couponDetails={couponDetails}
          planPeriod={this.state.planPeriod}
          planList={this.state.servicebotPlans}
          handleMonthChange={this.handleMonthChange}
          handleYearChange={this.handleYearChange}
          externalValue={this.state.externalValue}
          selectedPlan={selectedPlan}
          monthOpaque={this.state.style1}
          yearOpaque={this.state.style2}
          handleCheckChange={handleCheckChange}
        />
      </div>
    );
  }
}

export default Price;
