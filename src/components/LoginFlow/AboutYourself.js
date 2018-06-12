import React from 'react';
const AboutYourself = ({ username, state, address, phoneNumber, handleStateChange, handleSubmit }) => {
  return (
    <div>
      <div className="authpage section innerpage">
        <div className="container">
          <div className="flow-wrapper">
            <Animated className="leftwrap center" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
              <form onSubmit={handleSubmit} className="loginfrm">
                <h3 className="dashed">Tell Us about yourself</h3>
                <div className="section-divider-line"></div>
                <div className="frmcntl vertical-col">
                  <input
                    className="field w-input min-col"
                    name="username"
                    id="username"
                    defaultValue={username}
                    onChange={(e) => handleStateChange(e.target.value, e.target.id)}
                    placeholder="Username*"
                    type="text"
                    required
                  />
                  <input
                    className="field w-input min-col"
                    name="state"
                    id="state"
                    defaultValue={state}
                    onChange={(e) => handleStateChange(e.target.value, e.target.id)}
                    placeholder="State"
                    type="text"
                    required
                  />
                </div>
                <div className="frmcntl vertical-col">
                  <input
                    className="field w-input min-col"
                    name="address"
                    id="address"
                    placeholder="Address"
                    type='text'
                    defaultValue={address}
                    onChange={(e) => handleStateChange(e.target.value, e.target.id)}
                    required
                  />
                  <input
                    className="field w-input min-col"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    type='number'
                    defaultValue={phoneNumber}
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


export default AboutYourself;
