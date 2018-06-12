import React from 'react';

const CompanyInfo = ({ companyName, website, handleStateChange, handleSubmit }) => {
  return (
    <div>
      <div className="authpage section innerpage">
        <div className="container">
          <div className="flow-wrapper">
            <Animated className="leftwrap center" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
              <form onSubmit={handleSubmit} className="loginfrm">
                <h3 className="dashed">Tell Us about your company</h3>
                <div className="section-divider-line"></div>
                <div className="frmcntl">
                  <input
                    className="field w-input"
                    name="companyName"
                    id="companyName"
                    value={companyName}
                    onChange={(e) => handleStateChange(e.target.value, e.target.id)}
                    placeholder="Company Name"
                    type="text"
                    required
                  />
                </div>
                <div className="frmcntl">
                  <input
                    className="field w-input"
                    name="website"
                    id="website"
                    placeholder="Website"
                    type='text'
                    value={website}
                    onChange={(e) => handleStateChange(e.target.value, e.target.id)}
                    required
                  />
                </div>
                <div className="frmcntl">
                  <input className="button submit-button w-button"
                    type="submit"
                    value="Next"
                  />
                </div>
              </form>
            </Animated>
          </div>
        </div>
      </div>

      <ToastContainer hideProgressBar={true} />
    </div>
  );
};


export default CompanyInfo;
