import React , { Component } from 'react';
import './IntegrationContent.scss';
import { Row, Col } from 'react-bootstrap';
import { Zapier1, Zapier2, Zapier3, Zapier4} from 'img';

class IntegrationContent extends Component {
  constructor(props) {
    super(props);
  }

  contentOne = () => {
    return (
      <div>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 1</span>
          </Col>
          <Col md={6}>
            <img src ={Zapier1} />
            <p></p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Click the "+ New" button in the top left of your screen to create a new notification. </h5>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 2</span>
          </Col>
          <Col md={6}>
            <img src ={Zapier2} height="200px" width="300px" />
            <p></p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Select Webhook Integration</h5>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 3</span>
          </Col>
          <Col md={6}>
            <img src ={Zapier3}  height="200px" width="300px" />
            <p></p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Select Custom Webhook  </h5>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 4</span>
          </Col>
          <Col md={6}>
            <img src ={Zapier4}  height="200px" width="300px" />
            <p></p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Add channel </h5>
          </Col>
        </Row>
      </div>
    );
  }

  contentTwo = () => {
    return (
      <div>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 1</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Heading </h5>

            <ul>
              <li>
                //dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 2</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Heading </h5>

            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 3</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Heading </h5>

            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
  contentThree = () => {
    return (
      <div>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 1</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Heading </h5>

            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 2</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Heading </h5>

            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 3</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Heading </h5>

            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
      </div>

    );
  }
  contentFour = () => {
    return (
      <div>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 1</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Heading </h5>

            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 2</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Heading </h5>

            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 3</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Heading </h5>

            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
      </div>

    );
  }
  contentFive = () => {
    return (
      <div>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 1</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Heading </h5>

            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 2</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Heading </h5>

            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 3</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Heading </h5>

            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
  contentSix = () => {
    return (
      <div>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 1</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Heading </h5>

            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 2</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Heading </h5>

            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 3</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Heading </h5>

            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
      </div>

    );
  }
  contentSeven = () => {
    return (
      <div>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 1</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 2</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 3</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
      </div>

    );
  }
  contentEight = () => {
    return (
      <div>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 1</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 2</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 3</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
      </div>

    );
  }
  contentNine = () => {
    return (
      <div>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 1</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 2</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 3</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
  contentTen = () => {
    return (
      <div>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 1</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 2</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 3</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
      </div>

    );
  }
  contentEleven = () => {
    return (
      <div>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 1</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 2</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 3</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
      </div>

    );
  }
  contentTwelve = () => {
    return (
      <div>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 1</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 2</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 3</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
      </div>

    );
  }
  contentThirteen= () => {
    return (
      <div>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 1</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 2</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 3</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
      </div>

    );
  }
  contentFourteen = () => {
    return (
      <div>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 1</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 2</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 3</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
  contentFifteen = () => {
    return (
      <div>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 1</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Heading </h5>

            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 2</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Heading </h5>

            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span className="btn-step btn ">STEP 3</span>
          </Col>
          <Col md={6}>
            <img src ='' />
            <p>//image goes herer</p>
          </Col>
          <Col md={4}>
            <h5 className="heading">Heading </h5>
            <ul>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
              <li>//dummy 
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }

  render() {
    const { renderIntegration ,renderState}  = this.props;
    return (
      <div className='integrationContent-container'>
        <div className="card-box">
          <div className="integration-header">
            <h4 className="m-t-0 header-title">Make your Integration Live</h4>
            <button type="button" className="btn btn-primary  waves-light waves-effect number back-btn" style={{borderRadius:'5px'}} onClick={() => renderIntegration(0)}>Back</button>
          </div>
          <hr className="mt-0"/>
          {renderState === 1 ?
            this.contentOne()
            : '' }
          {renderState === 2 ?
            this.contentTwo()
            : '' }
          {renderState === 3 ?
            this.contentThree()
            : '' }
          {renderState === 4 ?
            this.contentFour()
            : '' }
          {renderState === 5 ?
            this.contentFive()
            : '' }
          {renderState === 6 ?
            this.contentSix()
            : '' }
          {renderState === 7 ?
            this.contentSeven()
            : '' }
          {renderState === 8 ?
            this.contentEight()
            : '' }
          {renderState === 9 ?
            this.contentNine()
            : '' }
          {renderState === 10 ?
            this.contentTen()
            : '' }
          {renderState === 11 ?
            this.contentEleven()
            : '' }
          {renderState === 12 ?
            this.contentTwelve()
            : '' }
          {renderState === 13 ?
            this.contentOne()
            : '' }
          {renderState === 14 ?
            this.contentOne()
            : '' }
          {renderState === 15 ?
            this.contentOne()
            : '' }
        </div>
      </div>
    );
  }
}

export default IntegrationContent;
