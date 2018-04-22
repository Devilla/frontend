import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import $ from 'jquery';
import axios from 'axios';
import { fetchPlan } from 'ducks/plan';

import PricePage from './PricePage';
import PaymentPrice from './PaymentPrice';

class Price extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      externalValue: true,
      sprice: '',
      sbprice: '',
      advprice: '',
      proprice: '',
      country_code: 'USD',
      rate: 0,
      planPeriod: 12
    };
    this.handleChange = this.handleChange.bind(this);
    this.returnRates =  this.returnRates.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleSwitchChange = this.handleSwitchChange.bind(this);

  }

  componentWillMount() {
    this.props.fetchPlan();
    this.initCountry();
    this.currencyRates();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.accordian();
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

  accordian() {
    $('.faq .faqwrap ul li .questions').on('click', function() {
      $('.faq .faqwrap ul li .questions').removeClass('active');
      $(this).parent().toggleClass('active');
      $(this).next().slideToggle(300);
    });
  }

  currencyRates() {
    axios.get('https://openexchangerates.org/api/latest.json?app_id=95df1c8c28bb434cbdee931132592e21&base=USD').then((response) => {
      this.setState({rate: response.data.rates.INR});
    })
    .catch(err => {
      console.log(err);
    });
  }

  initCountry(price) {
    axios.get('https://geoip-db.com/json/geoip.php').then((response) => {
      if (response.data.country_code == 'IN') {
        this.setState({country_code: 'IN'});
      } else if(response.data.country_code == 'USD') {
        this.setState({country_code: 'USD'});
      }
    }).catch(function(error) {
      console.log(error);
    });
  }

  returnRates(price) {
    if(this.state.country_code=='IN') {
      return '₹'+Math.floor(price*this.state.rate*this.state.planPeriod);
    } else {
      return '$'+Math.floor(price*this.state.planPeriod);
    }
  }

  render() {
    const { paymentPage, planList, selectedPlan, handleCheckChange } = this.props;
    return (
      <div style={paymentPage?{width:'100%'}:''}>
        {paymentPage?
          <PaymentPrice
            planList={planList}
            returnRates={this.returnRates}
            handleMonthChange={this.handleMonthChange}
            handleSwitchChange={this.handleSwitchChange}
            handleYearChange={this.handleYearChange}
            externalValue={this.state.externalValue}
            selectedPlan={selectedPlan}
            handleCheckChange={handleCheckChange}
          />
        :
          <PricePage
            externalValue={this.state.externalValue}
            handleMonthChange={this.handleMonthChange}
            handleSwitchChange={this.handleSwitchChange}
            handleYearChange={this.handleYearChange}
            planList={planList}
            returnRates={this.returnRates}
          />
        }
      </div>
    );
  }

}

const mapStateToProps = state => ({
  planList: state.getIn(['plan', 'plan'])
});

const mapDispatchToProps = {
  fetchPlan
};

export default connect(mapStateToProps, mapDispatchToProps)(Price);
