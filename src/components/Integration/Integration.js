import React , { Component } from 'react';
import './Integration.scss';
import { Row, Col } from 'react-bootstrap';

import {
  Aweber,
  Clickfunnels,
  Hubspot,
  Instapage,
  Leadpages,
  Mailmunch,
  Ontraport,
  Squarespace,
  Thrivecart,
  Unbounce,
  Webflow,
  Woocommerce,
  Wordpress,
  Googletag,
  Zapier
} from 'img';

class Integrations extends Component {
  constructor() {
    super();
    this.state = {
      selectedChannels: [],
      channelContent: [],
      checked: false,
      activePage: 0
    };
  }
  renderIntegration =(value) => {
    this.setState({
      activePage: value
    });
  }
  componentDidMount() {
    window.scrollTo(0,0);
  }
  componentWillUnmount() {
    this.setState({
      activePage: 0
    });
  }

  channelsList = () => {
    const integrations =[{
      name: 'Wordpress',
      text : 'Show social proof notification on wordpress using our app.',
      url: 'https://wordpress.org/plugins/useinfluence/',
      image: `${Wordpress}`

    },
    {
      name : 'Google Tag Manager',
      text:'Sync your conversation and import your FAQs from Tag Manager',
      url: 'https://useinfluence.freshdesk.com/support/solutions/articles/36000080637-integrate-with-google-tag-manager',
      image: `${Googletag}`
    },
    {
      name:'Zapier',
      text:'Sync your conversation and import your FAQs from Zapier',
      url : 'https://useinfluence.freshdesk.com/support/solutions/articles/36000075182-integrate-with-zapier-',
      image: `${Zapier}`
    },
    {
      name:'Hubspot',
      text:'Sync your conversation and import yourFAQs from Hubspot',
      url : '',
      image: `${Hubspot}`
    },
    {
      name:'Instapage',
      text:'Sync your conversation and import yourFAQs from Instapage',
      url : 'https://useinfluence.freshdesk.com/support/solutions/articles/36000076079-integrate-with-instapage',
      image: `${Instapage}`

    },
    {
      name:'Leadpages',
      text:'Sync your conversation and import yourFAQs from Leadpages',
      url: 'https://useinfluence.freshdesk.com/support/solutions/articles/36000078519-integrate-with-leadpages',
      image: `${Leadpages}`
    },


    {
      name:'Mailmunch',
      text:'Sync your conversation and import yourFAQs from Mailmunch',
      url: 'https://useinfluence.freshdesk.com/support/solutions/articles/36000076088-integrate-with-mailmunch',
      image: `${Mailmunch}`
    },
    {
      name:'Ontraport',
      text:'Sync your conversation and import yourFAQs from Ontraport',
      url: 'https://useinfluence.freshdesk.com/support/solutions/articles/36000076192-integrate-with-ontraport-',
      image: `${Ontraport}`
    },
    {
      name:'Squarespace',
      text:'Sync your conversation and import yourFAQs from Squarespace',
      url: 'https://useinfluence.freshdesk.com/support/solutions/articles/36000076111-integrate-with-squarespace',
      image: `${Squarespace}`
    },
    {
      name:'Thrivecart',
      text:'Sync your conversation and import yourFAQs from Thrivecart',
      url: '',
      image: `${Thrivecart}`
    },
    {
      name:'Unbounce',
      text:'Sync your conversation and import yourFAQs from Unbounce',
      url: '',
      image: `${Unbounce}`
    },
    {
      name:'Webflow',
      text:'Sync your conversation and import yourFAQs from Webflow',
      url: 'https://useinfluence.freshdesk.com/support/solutions/articles/36000075200-integrate-with-webflow',
      image: `${Webflow}`
    },
    {
      name:'Woocommerce',
      text:'Sync your conversation and import yourFAQs from Woocommerce',
      url: 'https://wordpress.org/plugins/useinfluence/',
      image: `${Woocommerce}`
    },
    {
      name:'Aweber',
      text:'Sync your conversation and import yourFAQs from Aweber',
      url: '',
      image: `${Aweber}`
    },
    {
      name:'Clickfunnels',
      text:'Sync your conversation and import yourFAQs from Clickfunnels',
      url: 'https://useinfluence.freshdesk.com/support/solutions/articles/36000072080-integrate-with-clickfunnels',
      image: `${Clickfunnels}`
    },


    ];
    return (
      <div>
        <Row className="mb-5 navbar-custom integrations-header">
          <div className="col-xl-12"><h3 className="integrationheader-1"> Integrations </h3></div>
          <div className="col-xl-12"><p className=" mb-5 h6 integrationheader-2"> The best of all worlds - Use Influence with your favourite apps </p></div>
        </Row>

        <Row className="justify-content-center mb-5 ">
          {integrations.map((item) => {
            return (
              <Col md={3}  className="box-shadow ribbon-box mt-5">
                <div className="ribbon-two ribbon-two-danger"><span>Inactive</span></div>
                <div className="tilebox-one">
                  <img src={item.image} className="logocompany" />
                  <h4 className="text-muted text-uppercase mt-0 i-title wordpress">{item.name}</h4>
                  <p className="text-center desc-page text-muted">{item.text} </p>
                  <span className="text-muted" ><a href={item.url} target="_blank">View Details&nbsp; <i className="fi-open"></i></a></span>
                </div>
              </Col>
            );
          })

          }
        </Row>

      </div>
    );
  }

  addChannelHandler = (event) => {
    const { value }  = event.target;
    this.setState((prevState) => {
      return {selectedChannels : prevState.selectedChannels.concat(value)};
    });

  }




  render() {

    return (
      this.state.activePage === 0 ? (
        <div className="transition-item integration-container">
          <div className="channel-container" >
            <div className="channel">
              <div className="content">

                {this.channelsList()}

              </div>


            </div>
          </div>
        </div>)
        : (
          <div className="transition-item pageContent">
          </div>
        )
    );
  }
}


export default Integrations;
