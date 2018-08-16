import React ,{Component} from 'react';
import 'fresh-billing.css';



export default class FressBill extends Component {
	constructor() {
		super();
	}

	render(){
		return (
			<div>
			<div ClassName="row listing billing hasScroll" style="height: 411px;">
					<div ClassName="settings-container">
						<div id="ember2523" ClassName="ember-view">  <div ClassName="">
			<!---->
				</div>
				<div ClassName="column billing-block-outer">
					<div>
									<div ClassName="row plan" data-toggle="collapse" data-target="#collpase-block" aria-expanded="true">
										<div ClassName="plan_details">
											<div ClassName="plan_name">
												<img ClassName="plan_image" src="https://web.freshchat.com/assets/images/billing_sprout-d577fed24b84e4e1899b8d59c4c5b164.svg">
												<h2>Sprout</h2>
											</div>
											<div ClassName="plan_date">
												<!-- <h3>Billed </h3> -->
												<h3><span ClassName="billed-text">Billed</span>
													<span ClassName="montly-sprout">Monthly</span>
												</h3>
												<h4>Next billing on September 8, 2018</h4>
											</div>
										</div>
										<div ClassName="edit-btn">
											<a href="#" title="Change" ClassName="btn btn-primary" data-ember-action="2524">Change plan</a>
											<div ClassName="icon"><i ClassName="fa fa-chevron-up"></i></div>
										</div>
									</div>

									<div ClassName="estimate panel-collapse clearfix cert-body collapse in" id="collpase-block" aria-expanded="true" style="">
										<div ClassName="estimate-panel">
											<div ClassName="row title" data-toggle="collapse" data-target="#estimated-charge-panel">
												<div ClassName="col-md-12">Estimated charge for next cycle
													<div ClassName="pull-right">
													<span ClassName="total-price">$0</span>
													<div ClassName="icon"><i ClassName="fa fa-chevron-up"></i></div>
												</div>
												</div>
											</div>
											<div ClassName="estimate-panel-inner collapse panel-collapse" id="estimated-charge-panel">
												<div ClassName="row">
													<div ClassName="col-md-5">Team Members</div>
													<div ClassName="col-md-5"><b>2</b> <!----></div>
													<div ClassName="col-md-2 price">$0</div>
												</div>
												<div ClassName="row">
													<div ClassName="col-md-5">Estimated MUV Usage</div>
													<div ClassName="col-md-5 mau" data-html="true" data-toggle="tooltip" data-container="body" data-placement="left" title="Base MUV : <b ClassName='fr'>10K</b><br/>Estimate Usage : <b ClassName='fr'>1K</b><br/>Payable MUV : <b ClassName='fr'>0</b><br/>">
														<b>1K</b>
													</div>
													<div ClassName="col-md-2 price">
														-
													</div>
												</div>
												<div ClassName="row">
													<div ClassName="col-md-5">Base Plan Charge(1 Account Owner)</div>
													<div ClassName="col-md-5">&nbsp;</div>
													<div ClassName="col-md-2 price">$0</div>
												</div>
												<!--
													<div ClassName="row">
														<div ClassName="col-md-5">{{t 'settings.billing.addons_mau'}}</div>
														<div ClassName="col-md-5">{{mauPayable}}</div>
														<div ClassName="col-md-2 price"></div>
													</div>
											 -->
			<!----><!---->                </div>
										</div>
										<div ClassName="estimate-panel">
											<div ClassName="row title" data-toggle="collapse" data-target="#prorated-charges">

												<div ClassName="col-md-12">Additional charges for current cycle
													<div ClassName="pull-right">
														<span ClassName="total-price">$0</span>
														<div ClassName="icon"><i ClassName="fa fa-chevron-up"></i></div>
												</div>
												</div>
											</div>
											<div ClassName="estimate-panel-inner collapse panel-collapse" id="prorated-charges">

												<div ClassName="row">
													<div ClassName="col-md-5">Team members(Newly added/Became active)</div>
													<div ClassName="col-md-5">0</div>
													<div ClassName="col-md-2 price">
															-
													</div>
												</div>

											<div ClassName="row">
												<div ClassName="col-md-5">MUV exceeded base value</div>
												<div ClassName="col-md-5"><!----></div>
												<div ClassName="col-md-2 price">
																								-
												</div>
											</div>
										</div>
										</div>
										<div ClassName="estimate-panel">
											<div ClassName="row title" data-toggle="collapse" data-target="#available-credits">
												<div ClassName="col-md-12">Reversals
													<div ClassName="pull-right">
														<span ClassName="total-price">$0</span>
														<div ClassName="icon"><i ClassName="fa fa-chevron-up"></i></div>
													</div>
												</div>
											</div>
											<div ClassName="estimate-panel-inner collapse panel-collapse" id="available-credits">
												<div ClassName="row">
													<div ClassName="col-md-5">Inactive team members</div>
													<div ClassName="col-md-5">0</div>
													<div ClassName="col-md-2 price">
															-
														</div>
												</div>
												<!-- <div ClassName="row">
													<div ClassName="col-md-5">Reduced Muv</div>
													<div ClassName="col-md-5">{{teamMemberDeletedLength}}</div>
													<div ClassName="col-md-2 price"></div>
												</div> -->
											</div>
										</div>
										<div ClassName="row total">
											<div ClassName="col-md-5">You Pay</div>
											<div ClassName="col-md-5">&nbsp;</div>
											<div ClassName="col-md-2 price">$0</div>
										</div>
									</div>
					</div>
				</div>

						<div ClassName="billing-block-outer">
							<div>
								<div id="billing-card" ClassName="">
									<div ClassName="card">

											<!-- <div ClassName="credit-card-icon">
												<i ClassName="glyphicon glyphicon-credit-card"></i>
											</div> -->
											<a href="#" ClassName="clearfix" data-toggle="collapse" data-target="#collpase-card" data-ember-action="2569">
												<h2 ClassName="heading"><img src="/assets/images/ic_credit_card-bbfcc11c846fc33f7cd0329807d67ddd.svg" ClassName="heading-icon">ADD CARD DETAILS</h2>
											</a>
											<div ClassName="invoices-button">
												<a ClassName="standout-link" href="#" {{action 'setShowInvoices'}}>View Invoices <i ClassName="icon icon-Slide-Open-Icon"></i></a>
											</div>
									</div>
										<div id="card-info">
										</div>
								</div>
								<div ClassName="dialog-mask "></div>
								<div id="collpase-card" ClassName="billing-iframe-container collapse panel-collapse clearfix cert-body ">
									<div id="card-frame" ClassName="billing-iframe dn"></div>
									<div ClassName="footer dn" id="card-terms">By proceeding with payment, you agree to our <a href="https://hotline.io/terms/" ClassName="standout-link" target="_blank">T &amp; C</a> and <a href="https://hotline.io/privacy/" ClassName="standout-link" target="_blank">privacy policy</a>.</div>
								</div>
							</div>
						</div>
					{{app-invoices model=model show=showInvoices}}

				<!-- <div {{action 'closeSidebar'}} ClassName="close-btn">
					<i ClassName="icon icon-close"></i>
				</div>
				<div> -->
					<div ClassName="billing-block-outer column">
						<div>
							<div ClassName="row plan invoices-list-header" data-toggle="collapse" data-target="#collpase-invoices">
								<h2 ClassName="heading"><i ClassName="fa fa-file-text-o" aria-hidden="true"></i>INVOICES</h2>
								<!-- <span ClassName="invoice-list-length"></span> -->
								<div ClassName="icon"><i ClassName="fa fa-chevron-top"></i></div>
							</div>
								<div ClassName="invoice-list estimate collapse panel-collapse clearfix cert-body" id="collpase-invoices">
									<div ClassName="">
										<div ClassName="invoice-header row">
												<div ClassName="col-md-3 header">Bill Date</div>
												<div ClassName="col-md-4 header">Bill Value</div>
												<div ClassName="col-md-3 header">Status</div>
												<div ClassName="col-md-2 header">PDF</div>
										</div>
										<div ClassName="invoices">
												<div ClassName="row">
													<div ClassName="col-md-3 date invoice-data">08-Mar-2018</div>
													<div ClassName="col-md-4 price invoice-data">$0</div>
													<div ClassName="col-md-3 invoice-data">
														No Charge
																								</div>
													<div ClassName="col-md-2 download invoice-data">
														<a href="#" ClassName="standout-link" data-ember-action="2599">
															<img src="assets/images/pdficon-3c9c040ef894e4eca3ddb6a0946f4b67.png" height="20">
														</a>
													</div>
												</div>
									</div>
									</div>
			<!---->          </div>
								<span></span>
						</div>
					</div>
				<!-- </div> --></div>
					</div>
				</div>
			</div>
		);
	}
}
