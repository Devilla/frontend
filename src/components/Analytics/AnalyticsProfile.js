import { profileHeader } from './data';

const AnalyticsProfile = ({ handleProfileBack, renderProfileList }) => {
  return (
    <div className="content analytics-profile">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card
              plain
              title="Analytics"
              category="View Profile"
              ctTableFullWidth ctTableResponsive
              rightContent={<div className="backBtn">
                <a href="javascript:;" onClick={handleProfileBack}><i className="fas fa-chevron-left"></i> Back </a>
              </div>}
              content={
                <div className="text-center centertbl">
                  <Table hover>
                    <thead>
                      <tr>
                        {
                          profileHeader.map((prop, key) => {
                            return (
                              <th key={key}>{prop}</th>
                            );
                          })
                        }
                      </tr>
                    </thead>
                    <tbody>
                      {renderProfileList()}
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
    </div>
  );
};

export default AnalyticsProfile;
