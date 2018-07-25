import React from 'react';

const WebsitePrice = ({
  externalValue,
  handleMonthChange,
  handleYearChange,
  handleSwitchChange,
  renderPriceList
}) => {
  return (
    <div className="websitepricing-container">
      <div className="main-container">
        <h2 className="text-center btn" disabled  > STEP 2</h2>
        <p className="plantitle"> &nbsp;&nbsp;Choose Your Dream Plan.</p>
        <section className="text-center no-brdr-top">
          <div className="container">
            <div className="row justify-content-center">

              <div className="col-md-1 mr-0 text-left " id="leftmg"><div><strong onClick={handleMonthChange} className="h5 type--bold">Monthly</strong></div></div>
              <div className="col-md-1 col-sm-1 my-auto text-center pl-2">
                <input className="tgl tgl-ios" id="cb2" type="checkbox"  defaultChecked={externalValue}/>
                <label className="tgl-btn toggleId"  htmlFor="cb2"  onClick={() => handleSwitchChange(!externalValue)}></label>
              </div>
              <div className="text-left my-auto" ><strong onClick={handleYearChange} className="h5 type--bold">Yearly</strong></div>
            </div>

          </div>
        </section>

        <section className="text-center unpad--top pricerow">
          <div className="container">
            <div className="row">
              {renderPriceList()}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebsitePrice;
