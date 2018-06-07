import React, { Component } from 'react';
import { Grid, Row, Col,Table } from 'react-bootstrap';
import Card from '../utils/card'
import {thArray, tdArray} from './data';
import Graph from './graph';
import $ from 'jquery';
import { connect } from 'react-redux';
import { fetchElastic } from 'ducks/elastic';
import { fetchCampaignInfo, successCampaign } from 'ducks/campaign';

class Analytics extends Component {
    constructor(){
      super();
      this.state = {
         url : '',
         vistor: '',
         signups: '',
         liveuser : '',
         conversion: '',
         showGraph: false

      }
      this.handleViewProfile = this.handleViewProfile.bind(this)
    }

    componentWillMount() {
      if(!this.props.campaignInfo)
        this.props.fetchCampaignInfo();
    }

    handleGraph(e){
      var url = $(e.target).parents('tr').find('.website a').text(),
          vistor = $(e.target).parents('tr').find('.vistor').text(),
          signups = $(e.target).parents('tr').find('.pname b').text(),
          liveuser = $(e.target).parents('tr').find('.liveuser').text(),
          conversion = $(e.target).parents('tr').find('.conversion').text();


          this.setState({
             url : url,
             vistor: vistor,
             signups: signups,
             liveuser : liveuser,
             conversion: conversion,
             showGraph: true
          })

    }
     activeState(val){
      this.setState({
         showGraph: val,
         url : '',
         vistor: '',
         signups: '',
         liveuser : '',
         conversion: '',
      })
    }

    handleViewProfile(e){
       var url = $(e.target).parents('tr').find('.website a').text();
       var data = {
         "url": url,
         "active": 2
       }
      this.props.callbackFromParent(data)
    }

    renderList() {
      if(this.props.campaignInfo && this.props.campaignInfo.websiteLive.length)
        return this.props.campaignInfo.websiteLive.map((website, index) => {
          let visitor = 0;
          console.log(website, "=======okokoko");
          website.uniqueUsers.aggregations.users.buckets.map(bucket => {
            visitor = visitor + bucket.visitors.sum_other_doc_count
          });

          return <tr key={index}>

              <td className="website"><i className="fas fa-globe"></i> <a href={website.websiteUrl} target="_blank">{website.websiteUrl}</a></td>
              <td className="vistor">{visitor}</td>
              <td><a href="javascript:;" onClick={() => this.handleViewProfile(this)} className="pname">
                  <b>{website.signups.userDetails.length} </b> <span>View Profile</span></a>
              </td>
              <td className="liveuser">-</td>
              <td className="conversion">
                {
                  ((website.signups.userDetails.length / visitor)   * 100).toFixed(2)
                } %
              </td>
            <td>
              <a href="javascript:;" onClick={this.handleGraph.bind(this)}><i className="fas fa-chart-area"></i> Show Graph</a>
            </td>
          </tr>
        })
      else
        return <tr>Nothing to display</tr>
    }

    render() {
        console.log(this.props.campaignInfo, "=========campaignInfo");
      return (
        <div className="content fill">
          <Grid fluid>
            <Row>
              <Col md={12}>
                <Card
                  plain
                  title="Analytics"
                  category=""
                  ctTableFullWidth ctTableResponsive
                  content={
                    <div className="text-center centertbl">
                    <Table hover>
                      <thead>
                        <tr>
                         {
                            thArray.map((prop, key) => {
                              return (
                              <th  key={key}>{prop}</th>
                              );
                            })
                          }
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.renderList()
                        }
                      </tbody>
                    </Table>
                    </div>
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <p className="text-center">
                Get one of our experts to do it all for you!
                &nbsp;
                 <a href="javascript:;">Click here</a></p>
              </Col>
            </Row>
          </Grid>

           <Graph
            showGraph={this.state.showGraph}
            website = {this.state.url}
            vistor =  {this.state.vistor}
            signups = {this.state.signups}
            liveuser = {this.state.liveuser}
            conversion = {this.state.conversion}
            callbackFromParent ={this.activeState.bind(this)}
           />
        </div>
      );
    }
}


const mapStateToProps = state => ({
  campaignInfo: state.getIn(['campaign', 'campaignInfo']),
});

const mapDispatchToProps = {
  fetchElastic,
  successCampaign,
  fetchCampaignInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
