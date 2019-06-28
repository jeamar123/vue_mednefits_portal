<template>
  <div class="account-wrapper">
  	<div class="container">

  		<div class="account-billing-header">
  			<h3 v-if="account_billing_title">Account & Billing</h3>
  		</div>

  		<div class="account-billing-info-wrapper">
  			<div class="account-biling-link-list">
  				<ul>
						<li v-bind:class="{'active': showBillingListInfo.value === 0}">
							<a @click="accountBillingList(0, 'company-contacts')" >Company &amp; Contacts</a>
						</li>
						<li v-bind:class="{'active': showBillingListInfo.value === 1}">
							<a @click="accountBillingList(1, 'transactions')" >Transactions</a>
						</li>
						<li v-bind:class="{'active': showBillingListInfo.value === 2}">
							<a @click="accountBillingList(2, 'document-center')" >Document Center</a>
						</li>
						<li v-bind:class="{'active': showBillingListInfo.value === 3}">
							<a @click="accountBillingList(3, 'account-payment')" >Account &amp; Payment</a>
						</li>
						<li v-bind:class="{'active': showBillingListInfo.value === 4}">
							<a @click="accountBillingList(4, 'benefits-tier')" >Team Benefits Tier</a>
						</li>
					</ul>
  			</div>

  			<div class="info-container">
  				<div v-if="showBillingListInfo.value === 0" class="list-info-container company-contacts-container">
  					<div class="business-info">
  						<h3 class="business-info-title">Business Information</h3>
  						<table>
  							<tbody>
  								<tr>
  									<td colspan="2">
  										<h4>Company Name</h4>
  										<span>Mednefits</span>
  									</td>
  								</tr>

  								<tr>
  									<td>
  										<h4>Company Address</h4>
  										<h6>7 Temasek Boulevard #18-02 Suntec T</h6>
  									</td>

  									<td class="edit-container">
  										<button class="edit-button-in-table" @click="companyContactsModal('business_info')">Edit</button>
  									</td>
  								</tr>
  							</tbody>
  						</table>
  					</div>

  					<div class="business-contact">
  						<h3>Business Contact</h3>
  						<table>
								<thead>
									<tr>
										<th>First Name</th>
										<th>Last Name</th>
										<th>Email Address</th>
										<th colspan="2">Phone</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Fillbert</td>
										<td>Singapore</td>
										<td>filbert@mednefits.com</td>
										<td>62547889</td>
										<td>
											<button class="edit-button-in-table" @click="companyContactsModal('business_contact')">Edit</button>
										</td>
									</tr>
								</tbody>
							</table>
  					</div>

  					<div class="billing-contact-address">
  						<h3>Billing Contact & Address</h3>
  						<table>
  							<thead>
									<tr>
										<th>First Name</th>
										<th>Last Name</th>
										<th colspan="2">Email Address</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Fillbert</td>
										<td>Singapore</td>
										<td>filbert@mednefits.com</td>
										<td>
											<button class="edit-button-in-table" @click="companyContactsModal('Billing_contacts')">Edit</button>
										</td>
									</tr>
								</tbody>
								<thead>
									<tr>
										<th>Company Name</th>
										<th>Billing Address</th>
										<th colspan="2">Payment Method</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Mednefits</td>
										<td class="biliing-address-text"><span>7 Temasek Boulevard #18-02 Suntec T</span></td>
										<td>Cheque</td>
										<td>
											<button class="edit-button-in-table" @click="companyContactsModal('Billing_address')">Edit</button>
										</td>
									</tr>
								</tbody>
  						</table>
  					</div>

  				</div>
  				<div v-if="showBillingListInfo.value === 1" class="list-info-container transactions-container">
  					<div class="plan-transactions">
  						<h3>Plan Transactions</h3>
  						<table>
  							<thead>
  								<tr>
  									<th>Transaction</th>
  									<th>Date Issue</th>
  									<th>Type</th>
  									<th>Amount</th>
  									<th colspan="2">Status</th>
  								</tr>
  							</thead>
  							<tbody>
  								<tr>
  									<td>Invoice - OMC000040</td>
  									<td>09/01/2019</td>
  									<td>Invoice</td>
  									<td class="amount-text">S$2,673.00</td>
  									<td>Paid</td>
  									<td>
  										<a class="edit-button-in-table anchor-btn">Download</a>
  										<a class="edit-button-in-table anchor-btn">Receipt</a>
  									</td>
  								</tr>
  								<tr>
  									<td>Invoice - OMC000010</td>
  									<td>17/01/2018</td>
  									<td>Invoice</td>
  									<td class="amount-text">S$2,871.00</td>
  									<td>Not Paid</td>
  									<td>
  										<a class="edit-button-in-table anchor-btn">Download</a>
  									</td>
  								</tr>
  							</tbody>
  						</table>

  						<div class="pagination-plan-transactions-container">
								<div class="arrows">
									<i class="fa fa-caret-left"></i>
								</div>
								<div class="page-status">
									<span>15</span> of <span>20</span>
								</div>				
								<div class="arrows">
									<i class="fa fa-caret-right"></i>
								</div>
							</div>
  					</div>

  					<div class="benefits-spending-account-container">
  						<h3>Benefits Spending Account Transactions</h3>
  						<table>
  							<thead>
  								<tr>
  									<th>Transaction</th>
  									<th>Date Issue</th>
  									<th>Type</th>
  									<th>Amount</th>
  									<th colspan="2">Status</th>
  								</tr>
  							</thead>
  							<tbody>
  								<tr>
  									<td>Invoice - MC00000001</td>
  									<td>04/01/2018</td>
  									<td>Invoice</td>
  									<td class="amount-text">S$3,618.40</td>
  									<td>Not Paid</td>
  									<td>
  										<a class="edit-button-in-table anchor-btn">Download</a>
  									</td>
  								</tr>
  							</tbody>
  						</table>

  						<div class="pagination-plan-transactions-container">
								<div class="arrows">
									<i class="fa fa-caret-left"></i>
								</div>
								<div class="page-status">
									<span>1</span> of <span>20</span>
								</div>				
								<div class="arrows">
									<i class="fa fa-caret-right"></i>
								</div>
							</div>
  					</div>

  					<div class="spending-account-container">
  						<h3>Spending Account Deposits</h3>

  						<table>
  							<thead>
  								<tr>
  									<th>Transaction</th>
  									<th>Date Issue</th>
  									<th>Type</th>
  									<th>Amount</th>
  									<th colspan="2">Status</th>
  								</tr>
  							</thead>
  							<tbody>
  								<tr>
  									<td>Invoice - DEP000015</td>
  									<td>14/09/2018</td>
  									<td>Invoice</td>
  									<td class="amount-text">S$1,000.00</td>
  									<td>Not Paid</td>
  									<td>
  										<a class="edit-button-in-table anchor-btn">Download</a>
  									</td>
  								</tr>
  								<tr>
  									<td>Invoice - DEP000026</td>
  									<td>15/02/2019</td>
  									<td>Invoice</td>
  									<td class="amount-text">S$0.00</td>
  									<td>Not Paid</td>
  									<td>
  										<a class="edit-button-in-table anchor-btn">Download</a>
  									</td>
  								</tr>
  							</tbody>
  						</table>

  						<div class="pagination-plan-transactions-container">
								<div class="arrows">
									<i class="fa fa-caret-left"></i>
								</div>
								<div class="page-status">
									<span>1</span> of <span>1</span>
								</div>				
								<div class="arrows">
									<i class="fa fa-caret-right"></i>
								</div>
							</div>
  					</div>

  					<div class="refund-container">
  						<h3>Refund</h3>
  						<table>
  							<thead>
  								<tr>
  									<th>Items</th>
  									<th>Date Withdraw</th>
  									<th>Amount</th>
  									<th colspan="3">Status</th>
  								</tr>
  							</thead>
  							<tbody>
  								<tr>
  									<td>Withdraw - <span>1</span> employee</td>
  									<td>16/01/2018</td>
  									<td class="amount-text">S$66.26</td>
  									<td>Pending</td>
  									<td>
  										<a class="edit-button-in-table anchor-btn">Download</a>
  									</td>
  									<td>
  										<button class="edit-button-in-table" @click="companyContactsModal('refund')">View</button>
  									</td>
  								</tr>
  								<tr>
  									<td>Withdraw - <span>1</span> employee</td>
  									<td>24/01/2018</td>
  									<td class="amount-text">S$64.74</td>
  									<td>Pending</td>
  									<td>
  										<a class="edit-button-in-table anchor-btn">Download</a>
  									</td>
  									<td>
  										<button class="edit-button-in-table">View</button>
  									</td>
  								</tr>
  							</tbody>
  						</table>

  						<div class="pagination-plan-transactions-container">
								<div class="arrows">
									<i class="fa fa-caret-left"></i>
								</div>
								<div class="page-status">
									<span>1</span> of <span>1</span>
								</div>				
								<div class="arrows">
									<i class="fa fa-caret-right"></i>
								</div>
							</div>
  					</div>
  				</div>
  				<div v-if="showBillingListInfo.value === 2" class="list-info-container document-center-container">
  					<h3>Document Center</h3>
						<table>
							<thead>
								<tr>
									<th>Document</th>
									<th colspan="2">Type</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Terms & Conditions</td>
									<td>Web link</td>
									<td>
										<a class="edit-button-in-table">View</a>
									</td>
								</tr>
								<tr>
									<td>Privacy Policy</td>
									<td>Web link</td>
									<td>
										<a class="edit-button-in-table">View</a>
									</td>
								</tr>
								<tr>
									<td>Product Brochure</td>
									<td>PDF</td>
									<td>
										<a class="edit-button-in-table">Download</a>
									</td>
								</tr>
								<tr>
									<td>How Mednefits Work</td>
									<td>PDF</td>
									<td>
										<a class="edit-button-in-table">Download</a>
									</td>
								</tr>
								<tr>
									<td>Mednefits Care Certificate</td>
									<td>PDF</td>
									<td>
										<a class="edit-button-in-table">Download</a>
									</td>
								</tr>
							</tbody>
						</table>
  				</div>
  				<div v-if="showBillingListInfo.value === 3" class="list-info-container account-payment-container">
  					<h3>Plan Subscription</h3>
  					<table>
  						<tbody>
								<tr>
									<td>
										<h5>Plan</h5>
										<span>Mednefits Care (Corporate)</span>
									</td>
									<td>
										<h5>Start Date</h5>
										<span>04 August 2018</span>
									</td>
									<td>
										<h5>End Date</h5>
										<span>02 August 2019</span>
									</td>
									<td>
										<h5>Days to Expiry</h5>
										<span>39</span>
									</td>
									<td>
										<h5>Employees</h5>
										<span>68</span>
									</td>
									<td>
										<h5>Dependents</h5>
										<span>9</span>
									</td>
								</tr>
							</tbody>
  					</table>

  					<table>
  						<thead>
  							<tr>
  								<th>Account</th>
  								<th></th>
  							</tr>
  						</thead>
  						<tbody class="account-and-payment-table-tbody">
  							<tr>
  								<td>Update Password</td>
  								<td class="account-payment-btn-container">
  									<button class="edit-button-in-table" @click="companyContactsModal('password')">Edit</button>
  								</td>
  							</tr>
  						</tbody>
  					</table>

  					<h3 class="current-active-title">Current Active Plans:</h3>

  					<div class="active-plan-container">
  						<div class="active-plan-text-container">
  							<label>
  								Active Plan #<span>1</span>
  							</label>
  						</div>
  						<div class="active-plan-text-container">
  							<label>
  								Active Plan ID #<span>44</span>
  							</label>
  						</div>
  						<div class="active-plan-wrapper">
  							<div class="account-title">
  								<span>Employee Account</span>
  							</div>
  							<div class="account-container">
  								<label>Plan Type: </label>
  								<span>Insurance Bundle</span>
  							</div>
  							<div class="account-container">
  								<label>Start Date: </label>
  								<span>04 August 2018</span>
  							</div>
  							<div class="account-container">
  								<label>Plan Duration: </label>
  								<span>12 months</span>
  							</div>
  							<div class="account-container">
  								<label>Total Seats: </label>
  								<span>51</span>
  							</div>
  							<div class="account-container">
  								<label>Occupied Seats: </label>
  								<span>51</span>
  							</div>
  							<div class="account-container">
  								<label>Vacant Seats: </label>
  								<span>0</span>
  							</div>
  							<div class="account-container">
  								<label>Plan Amount: </label>
  								<span>S$<span>5,049.00</span></span>
  							</div>
  							<div class="account-container">
  								<label>Payment Status: </label>
  								<span>PAID</span>
  							</div>
  						</div>

  						<div class="active-plan-wrapper dependent-account-list-container">
  							<div class="account-title">
  								<span>Dependent Account</span>
  							</div>
                <div class="dependent-account-info">
    							<div class="account-container">
    								<label>Plan Account Type: </label>
    								<span>Lite Plan</span>
    							</div>
    							<div class="account-container">
    								<label>Start Date: </label>
    								<span>2019-02-28</span>
    							</div>
    							<div class="account-container">
    								<label>Total Seats: </label>
    								<span>8</span>
    							</div>
    							<div class="account-container">
    								<label>Occupied Seats: </label>
    								<span>7</span>
    							</div>
    							<div class="account-container">
    								<label>Vacant Seats: </label>
    								<span>1</span>
    							</div>
    							<div class="account-container">
    								<label>Plan Amount: </label>
    								<span>S$<span>40.00</span></span>
    							</div>
    							<div class="account-container">
    								<label>Payment Status: </label>
    								<span>PENDING</span>
    							</div>
                </div>
                <div class="dependent-account-info">
                  <div class="account-container">
                    <label>Plan Account Type: </label>
                    <span>Lite Plan</span>
                  </div>
                  <div class="account-container">
                    <label>Start Date: </label>
                    <span>2019-03-05</span>
                  </div>
                  <div class="account-container">
                    <label>Total Seats: </label>
                    <span>10</span>
                  </div>
                  <div class="account-container">
                    <label>Occupied Seats: </label>
                    <span>0</span>
                  </div>
                  <div class="account-container">
                    <label>Vacant Seats: </label>
                    <span>10</span>
                  </div>
                  <div class="account-container">
                    <label>Plan Amount: </label>
                    <span>S$<span>0.00</span></span>
                  </div>
                  <div class="account-container">
                    <label>Payment Status: </label>
                    <span>PAID</span>
                  </div>
                </div>
                <div class="dependent-account-info">
                  <div class="account-container">
                    <label>Plan Account Type: </label>
                    <span>Lite Plan</span>
                  </div>
                  <div class="account-container">
                    <label>Start Date: </label>
                    <span>2019-03-05</span>
                  </div>
                  <div class="account-container">
                    <label>Total Seats: </label>
                    <span>10</span>
                  </div>
                  <div class="account-container">
                    <label>Occupied Seats: </label>
                    <span>0</span>
                  </div>
                  <div class="account-container">
                    <label>Vacant Seats: </label>
                    <span>10</span>
                  </div>
                  <div class="account-container">
                    <label>Plan Amount: </label>
                    <span>S$<span>0.00</span></span>
                  </div>
                  <div class="account-container">
                    <label>Payment Status: </label>
                    <span>PAID</span>
                  </div>
                </div>
  						</div>

  						<div class="medical-wellness-account-container">
  							<div class="active-plan-wrapper">
  								<div class="account-title">
	  								<span>Medical Spending Account:</span>
	  							</div>
  								<div class="account-container">
	  								<label>Total: </label>
	  								<span>S$<span>10,000.00</span></span>
	  							</div>
	  							<div class="account-container">
	  								<label>Unallocated: </label>
	  								<span>S$<span>0.00</span></span>
	  							</div>
  							</div>

  							<div class="active-plan-wrapper">
  								<div class="account-title">
	  								<span>Wellness Spending Account:</span>
	  							</div>
  								<div class="account-container">
	  								<label>Total: </label>
	  								<span>S$<span>20,000.00</span></span>
	  							</div>
	  							<div class="account-container">
	  								<label>Unallocated: </label>
	  								<span>S$<span>0.00</span></span>
	  							</div>
  							</div>
  						</div>

  						<div class="btn-view-plan-container">
  							<button class="btn-view-plan" @click="companyContactsModal('active_plans')">View Plan</button>
  						</div>
  					</div>

  					<div class="active-plan-container">
  						<div class="active-plan-text-container">
  							<label>
  								Active Plan #<span>1</span>
  							</label>
  						</div>
  						<div class="active-plan-text-container">
  							<label>
  								Active Plan ID #<span>44</span>
  							</label>
  						</div>
  						<div class="active-plan-wrapper">
  							<div class="account-title">
  								<span>Employee Account</span>
  							</div>
  							<div class="account-container">
  								<label>Plan Type: </label>
  								<span>Insurance Bundle</span>
  							</div>
  							<div class="account-container">
  								<label>Start Date: </label>
  								<span>04 August 2018</span>
  							</div>
  							<div class="account-container">
  								<label>Plan Duration: </label>
  								<span>12 months</span>
  							</div>
  							<div class="account-container">
  								<label>Total Seats: </label>
  								<span>51</span>
  							</div>
  							<div class="account-container">
  								<label>Occupied Seats: </label>
  								<span>51</span>
  							</div>
  							<div class="account-container">
  								<label>Vacant Seats: </label>
  								<span>0</span>
  							</div>
  							<div class="account-container">
  								<label>Plan Amount: </label>
  								<span>S$<span>5,049.00</span></span>
  							</div>
  							<div class="account-container">
  								<label>Payment Status: </label>
  								<span>PAID</span>
  							</div>
  						</div>

  						<div class="active-plan-wrapper">
  							<div class="account-title">
  								<span>Dependent Account</span>
  							</div>
  							<div class="account-container">
  								<label>Plan Account Type: </label>
  								<span>Lite Plan</span>
  							</div>
  							<div class="account-container">
  								<label>Start Date: </label>
  								<span>2019-02-28</span>
  							</div>
  							<div class="account-container">
  								<label>Total Seats: </label>
  								<span>8</span>
  							</div>
  							<div class="account-container">
  								<label>Occupied Seats: </label>
  								<span>7</span>
  							</div>
  							<div class="account-container">
  								<label>Vacant Seats: </label>
  								<span>1</span>
  							</div>
  							<div class="account-container">
  								<label>Plan Amount: </label>
  								<span>S$<span>40.00</span></span>
  							</div>
  							<div class="account-container">
  								<label>Payment Status: </label>
  								<span>PENDING</span>
  							</div>
  						</div>

  						<div class="medical-wellness-account-container">
  							<div class="active-plan-wrapper">
  								<div class="account-title">
	  								<span>Medical Spending Account:</span>
	  							</div>
  								<div class="account-container">
	  								<label>Total: </label>
	  								<span>S$<span>10,000.00</span></span>
	  							</div>
	  							<div class="account-container">
	  								<label>Unallocated: </label>
	  								<span>S$<span>0.00</span></span>
	  							</div>
  							</div>

  							<div class="active-plan-wrapper">
  								<div class="account-title">
	  								<span>Wellness Spending Account:</span>
	  							</div>
  								<div class="account-container">
	  								<label>Total: </label>
	  								<span>S$<span>20,000.00</span></span>
	  							</div>
	  							<div class="account-container">
	  								<label>Unallocated: </label>
	  								<span>S$<span>0.00</span></span>
	  							</div>
  							</div>
  						</div>

  						<div class="btn-view-plan-container">
  							<button class="btn-view-plan">View Plan</button>
  						</div>
  					</div>

  					<div class="active-plan-container">
  						<div class="active-plan-text-container">
  							<label>
  								Active Plan #<span>1</span>
  							</label>
  						</div>
  						<div class="active-plan-text-container">
  							<label>
  								Active Plan ID #<span>44</span>
  							</label>
  						</div>
  						<div class="active-plan-wrapper">
  							<div class="account-title">
  								<span>Employee Account</span>
  							</div>
  							<div class="account-container">
  								<label>Plan Type: </label>
  								<span>Insurance Bundle</span>
  							</div>
  							<div class="account-container">
  								<label>Start Date: </label>
  								<span>04 August 2018</span>
  							</div>
  							<div class="account-container">
  								<label>Plan Duration: </label>
  								<span>12 months</span>
  							</div>
  							<div class="account-container">
  								<label>Total Seats: </label>
  								<span>51</span>
  							</div>
  							<div class="account-container">
  								<label>Occupied Seats: </label>
  								<span>51</span>
  							</div>
  							<div class="account-container">
  								<label>Vacant Seats: </label>
  								<span>0</span>
  							</div>
  							<div class="account-container">
  								<label>Plan Amount: </label>
  								<span>S$<span>5,049.00</span></span>
  							</div>
  							<div class="account-container">
  								<label>Payment Status: </label>
  								<span>PAID</span>
  							</div>
  						</div>

  						<div class="active-plan-wrapper">
  							<div class="account-title">
  								<span>Dependent Account</span>
  							</div>
  							<div class="account-container">
  								<label>Plan Account Type: </label>
  								<span>Lite Plan</span>
  							</div>
  							<div class="account-container">
  								<label>Start Date: </label>
  								<span>2019-02-28</span>
  							</div>
  							<div class="account-container">
  								<label>Total Seats: </label>
  								<span>8</span>
  							</div>
  							<div class="account-container">
  								<label>Occupied Seats: </label>
  								<span>7</span>
  							</div>
  							<div class="account-container">
  								<label>Vacant Seats: </label>
  								<span>1</span>
  							</div>
  							<div class="account-container">
  								<label>Plan Amount: </label>
  								<span>S$<span>40.00</span></span>
  							</div>
  							<div class="account-container">
  								<label>Payment Status: </label>
  								<span>PENDING</span>
  							</div>
  						</div>

  						<div class="medical-wellness-account-container">
  							<div class="active-plan-wrapper">
  								<div class="account-title">
	  								<span>Medical Spending Account:</span>
	  							</div>
  								<div class="account-container">
	  								<label>Total: </label>
	  								<span>S$<span>10,000.00</span></span>
	  							</div>
	  							<div class="account-container">
	  								<label>Unallocated: </label>
	  								<span>S$<span>0.00</span></span>
	  							</div>
  							</div>

  							<div class="active-plan-wrapper">
  								<div class="account-title">
	  								<span>Wellness Spending Account:</span>
	  							</div>
  								<div class="account-container">
	  								<label>Total: </label>
	  								<span>S$<span>20,000.00</span></span>
	  							</div>
	  							<div class="account-container">
	  								<label>Unallocated: </label>
	  								<span>S$<span>0.00</span></span>
	  							</div>
  							</div>
  						</div>

  						<div class="btn-view-plan-container">
  							<button class="btn-view-plan">View Plan</button>
  						</div>
  					</div>

  					<div class="active-plan-container">
  						<div class="active-plan-text-container">
  							<label>
  								Active Plan #<span>1</span>
  							</label>
  						</div>
  						<div class="active-plan-text-container">
  							<label>
  								Active Plan ID #<span>44</span>
  							</label>
  						</div>
  						<div class="active-plan-wrapper">
  							<div class="account-title">
  								<span>Employee Account</span>
  							</div>
  							<div class="account-container">
  								<label>Plan Type: </label>
  								<span>Insurance Bundle</span>
  							</div>
  							<div class="account-container">
  								<label>Start Date: </label>
  								<span>04 August 2018</span>
  							</div>
  							<div class="account-container">
  								<label>Plan Duration: </label>
  								<span>12 months</span>
  							</div>
  							<div class="account-container">
  								<label>Total Seats: </label>
  								<span>51</span>
  							</div>
  							<div class="account-container">
  								<label>Occupied Seats: </label>
  								<span>51</span>
  							</div>
  							<div class="account-container">
  								<label>Vacant Seats: </label>
  								<span>0</span>
  							</div>
  							<div class="account-container">
  								<label>Plan Amount: </label>
  								<span>S$<span>5,049.00</span></span>
  							</div>
  							<div class="account-container">
  								<label>Payment Status: </label>
  								<span>PAID</span>
  							</div>
  						</div>

  						<div class="active-plan-wrapper">
  							<div class="account-title">
  								<span>Dependent Account</span>
  							</div>
  							<div class="account-container">
  								<label>Plan Account Type: </label>
  								<span>Lite Plan</span>
  							</div>
  							<div class="account-container">
  								<label>Start Date: </label>
  								<span>2019-02-28</span>
  							</div>
  							<div class="account-container">
  								<label>Total Seats: </label>
  								<span>8</span>
  							</div>
  							<div class="account-container">
  								<label>Occupied Seats: </label>
  								<span>7</span>
  							</div>
  							<div class="account-container">
  								<label>Vacant Seats: </label>
  								<span>1</span>
  							</div>
  							<div class="account-container">
  								<label>Plan Amount: </label>
  								<span>S$<span>40.00</span></span>
  							</div>
  							<div class="account-container">
  								<label>Payment Status: </label>
  								<span>PENDING</span>
  							</div>
  						</div>

  						<div class="medical-wellness-account-container">
  							<div class="active-plan-wrapper">
  								<div class="account-title">
	  								<span>Medical Spending Account:</span>
	  							</div>
  								<div class="account-container">
	  								<label>Total: </label>
	  								<span>S$<span>10,000.00</span></span>
	  							</div>
	  							<div class="account-container">
	  								<label>Unallocated: </label>
	  								<span>S$<span>0.00</span></span>
	  							</div>
  							</div>

  							<div class="active-plan-wrapper">
  								<div class="account-title">
	  								<span>Wellness Spending Account:</span>
	  							</div>
  								<div class="account-container">
	  								<label>Total: </label>
	  								<span>S$<span>20,000.00</span></span>
	  							</div>
	  							<div class="account-container">
	  								<label>Unallocated: </label>
	  								<span>S$<span>0.00</span></span>
	  							</div>
  							</div>
  						</div>

  						<div class="btn-view-plan-container">
  							<button class="btn-view-plan">View Plan</button>
  						</div>
  					</div>

  				</div>
  				<div v-if="showBillingListInfo.value === 4" class="list-info-container benefits-tier-container">
  					<h1>Team benefits tiers.</h1>

  					<div v-if="true" class="tier-item-wrapper">
					  	<div class="tier-item-form">
								<div class="tier-item-header">
									<h4>Tier <span>{{tierCounter}}</span></h4>
									<img :src="'../assets/img/icons/close.svg'">
									<!-- <img :src="'../assets/img/icons/close.svg'"> -->
								</div>
								<div class="tier-item-body">
									<div class="input-wrapper">
										<label>Medical annual cap</label>
										<div class="input-container">
											<input type="number" min="0">
											<div class="icon-item">
												S
												<i class="fa fa-usd icon"></i>
											</div>
										</div>
									</div>
									<div class="input-wrapper">
										<label>Wellness annual cap</label>
										<div class="input-container">
											<input type="number" min="0">
											<div class="icon-item">
												S
												<i class="fa fa-usd icon"></i>
											</div>
										</div>
									</div>
									<div class="input-wrapper gp-toggle">
										<label>Add GP cap per visit?</label>
										<div class="btn-wrapper">
											<button v-bind:class="{'active' : gp_cap_status == true }" @click="toggleGPcapStatus(true)">Yes</button>
											<button v-bind:class="{'active' : gp_cap_status == false }" @click="toggleGPcapStatus(false)">No</button>
										</div>
									</div>
									<div v-if="gp_cap_status" class="input-wrapper">
										<label>GP cap per visit</label>
										<div class="input-container">
											<input type="number" min="0">
											<div class="icon-item">
												S
												<i class="fa fa-usd icon"></i>
											</div>
										</div>
									</div>
									<div class="input-wrapper">
										<label>Employee headcount</label>
										<div class="input-container">
											<input type="number" min="0">
											<div class="icon-item">
												<i class="fa fa-users icon"></i>
											</div>
										</div>
									</div>
									<div class="input-wrapper">
										<label>Dependent headcount</label>
										<div class="input-container">
											<input type="number" min="0">
											<div class="icon-item">
												<i class="fa fa-users icon"></i>
											</div>
										</div>
									</div>
									<div class="tier-item-button">
										<button v-if="false" class="btn-delete-tier">Remove</button>
										<button>Save &amp; Continue</button>
										<!-- <button>Save &amp; Continue</button> -->
									</div>
								</div>
							</div>
					  </div>

					  <div v-if="false" class="tier-summary-wrapper">
					  	<h4>Manage your team benefits tiers here.</h4>
					  	<div class="summary-details-wrapper">
					  		<div class="summary-details">
					  			<div class="tier-summary-btn">
					  				<input type="radio" name="radio">
										<label>
											<div>
												Tier <span>1 </span> 
												<span>0</span>/<span>2</span>
											</div>
										</label>
										<span>Edit</span>
									</div>
									<div class="clinic-type-wrapper">
										<div class="clinic-type-container">
											<span class="label">Medical annual cap: </span>
											<span class="text">S$ <span>1</span></span>
										</div>
										<div class="clinic-type-container">
											<span class="label">Wellness annual cap: </span>
											<span class="text">S$ <span>1</span></span>
										</div>
										<div class="clinic-type-container">
											<span class="label">GP cap per visit: </span>
											<span class="text">S$ <span>0</span></span>
										</div>	
									</div>
					  		</div>
					  	</div>

					  	<div class="add-tier-wrapper">
						  	<h4>Add a tier</h4>
						  	<button><img :src="'../assets/img/plus-gray.png'"></button>
						  </div>

					  </div>
  				</div>
  			</div>
  		</div>

  	</div>

		<!-- modals here -->
			<!-- Company -->
		<Modal v-if="modals.company.business_info" class="edit-business-info-modal">
			<div slot="header">
				<h4>Edit Business Information</h4>
				<img @click="companyContactsModal('business_info')" :src="'../assets/img/icons/close.svg'">
			</div>
      <div slot="body">
        <form>
          <div class="form-group">
            <label>Company Address</label>
            <textarea></textarea>
          </div>
          <div class="form-group">
            <label>Postal Code</label>
            <textarea></textarea>
          </div>
        </form>
      </div>
      <div slot="footer">
        <button>CANCEL</button>
        <button>UPDATE</button>
      </div>
		</Modal>
		<Modal v-if="modals.company.business_contact">
			<div slot="header">
				<h4>Edit Business Contact</h4>
				<img @click="companyContactsModal('business_contact')" :src="'../assets/img/icons/close.svg'">
			</div>
      <div slot="body">
        <form>
          <div class="modal-input-wrapper">
            <label>First Name</label>
            <input type="text">
          </div>
          <div class="modal-input-wrapper">
            <label>Last Name</label>
            <input type="text">
          </div>
          <div class="modal-input-wrapper">
            <label>Email Address</label>
            <input type="text">
          </div>
          <div class="modal-input-wrapper">
            <label>Phone</label>
            <input type="number">
          </div>
          <div class="modal-input-wrapper">
            <label>Mobile</label>
            <input type="number">
          </div>
          <div class="modal-input-wrapper">
            <label>Job Title</label>
            <select>
              <option>Marketing</option>
              <option>Accounting, Audit, Finance</option>
              <option>Administration Support</option>
              <option>Arts/Culture/Heritage</option>
              <option>Building and Estate Management</option>
              <option>Corporate Strategy/Top Management</option>
            </select>
          </div>
        </form>
      </div>
      <div slot="footer">
        <button>CANCEL</button>
        <button>UPDATE</button>
      </div>
		</Modal>
		<Modal v-if="modals.company.Billing_contacts">
			<div slot="header">
				<h4>Edit Billing Contact & Address</h4>
				<img @click="companyContactsModal('Billing_contacts')" :src="'../assets/img/icons/close.svg'">
			</div>
      <div slot="body">
        <form>
          <div class="modal-input-wrapper">
            <label>First Name</label>
            <input type="text">
          </div>
          <div class="modal-input-wrapper">
            <label>Last Name</label>
            <input type="text">
          </div>
          <div class="modal-input-wrapper">
            <label>Email Address</label>
            <input type="text">
          </div>
        </form>
      </div>
      <div slot="footer">
        <button>CANCEL</button>
        <button>UPDATE</button>
      </div>
		</Modal>
		<Modal v-if="modals.company.Billing_address">
			<div slot="header">
				<h4>Edit Billing Contact & Address</h4>
				<img @click="companyContactsModal('Billing_address')" :src="'../assets/img/icons/close.svg'">
			</div>
      <div slot="body">
        <form>
          <div class="modal-input-wrapper">
            <label>Company Name</label>
            <input type="text">
          </div>
          <div class="modal-input-wrapper">
            <label>Billing Address</label>
            <input type="text">
          </div>
          <div class="modal-input-wrapper">
            <label>Postal Code</label>
            <input type="number">
          </div>
        </form>
      </div>
      <div slot="footer">
        <button>CANCEL</button>
        <button>UPDATE</button>
      </div>
		</Modal>
			<!-- end Company -->
			<!-- Transactions -->
		<Modal v-if="modals.transactions.refund" class="edit-refund-modal">
			<div slot="header">
        <div class="refund-info-header">
  				<h4>Olivia Koh</h4>
          <br>
          <h6>Mednefits</h6>
        </div>
				<img @click="companyContactsModal('refund')" :src="'../assets/img/icons/close.svg'">
			</div>
       <div slot="body">
        <div class="employee-active-text">EMPLOYEE <span>1</span> OF <span>1</span></div>
        <form>
          <div class="modal-input-wrapper">
            <label>First Name</label>
            <input type="text">
          </div>
          <div class="modal-input-wrapper">
            <label>Last Name</label>
            <input type="text">
          </div>
          <div class="modal-input-wrapper">
            <label>NRIC/FIN</label>
            <input type="number">
          </div>
          <div class="modal-input-wrapper">
            <label>Work Email</label>
            <input type="number">
          </div>
          <div class="modal-input-wrapper">
            <label>Mobile</label>
            <input type="number">
          </div>
          <div class="modal-input-wrapper">
            <label>Job Title</label>
            <select>
              <option>Marketing</option>
            </select>
          </div>
        </form>
      </div>
		</Modal>
			<!-- End Transactions -->
			<!-- Account & Payment -->
		<Modal v-if="modals.account.password" class="update-password-modal">
			<div slot="header">
				<h4>Update Account</h4>
				<img @click="companyContactsModal('password')" :src="'../assets/img/icons/close.svg'">
			</div>
      <div slot="body">
        <form>
          <div class="form-group">
            <label>Current Password</label>
            <input type="password">
          </div>
          <div class="form-group">
            <label>New Password</label>
            <input type="password">
          </div>
          <div class="form-group">
            <label>Re-type Password</label>
            <input type="password">
          </div>
        </form>
      </div>
      <div slot="footer">
        <button>CANCEL</button>
        <button>UPDATE</button>
      </div>
		</Modal>
		<Modal v-if="modals.account.active_plans" class="active-plan-modal">
			<div slot="header">
				<h4>Active Plan Details</h4>
				<img @click="companyContactsModal('active_plans')" :src="'../assets/img/icons/close.svg'">
			</div>
      <div slot="body">
        <div class="transactions-container">
          <div class="modal-title-header transactions-title-header">
            <span>Transactions</span>
          </div>
          <div class="modal-body-info transactions-body-info">
            <div class="col-1-body-info">
              <div>
                Plan Account: <span>Insurance Bundle</span>
              </div>
              <div>
                Invoice: <span>OMC000152</span>
              </div>
              <div>
                Plan Duration: <span>12 months</span>
              </div>
              <div>
                Employees: <span>51</span>
              </div>
              <div>
                Plan Amount: S$ <span>5,049.00</span>
              </div>
              <div>
                Payment Status: <span>PAID</span>
              </div>
              <div>
                Plan Duration: <span>12 months</span>
              </div>
            </div>
            <div class="col-2-body-info">
              <button class="btn-trans-dl-incove">DOWNLOAD INVOICE</button>
              <button class="btn-trans-pending-enrollment"><span>0 </span>PENDING ENROLLMENT</button>
              <button class="btn-trans-download-receipt">DOWNLOAD RECEIPT</button>
            </div>
          </div>
        </div>
        <div class="dependent-plans-container">
          <div class="modal-title-header dependent-title-header">
            <span>Dependent Plans</span>
          </div>
          <div class="modal-body-info dependent-body-info">
            <div class="col-1-body-info">
              <div>
                Dependent Plan Account Type: <span>Lite Plan</span>
              </div>
              <div>
                Active Plan Type: <span>Active Plan</span>
              </div>
              <div>
                Plan Duration: <span>5 months</span>
              </div>
              <div>
                Total Seats: <span>11</span>
              </div>
              <div>
                Occupied Seats: <span>7</span>
              </div>
              <div>
                Vacant Seats: <span>4</span>
              </div>
              <div>
                Plan Amount: S$ <span>0.00</span>
              </div>
              <div>
                Payment Status: <span>PENDING</span>
              </div>
            </div>
            <div class="col-2-body-info">
              <button class="btn-trans-dl-incove">DOWNLOAD INVOICE</button>
              <button class="btn-trans-pending-enrollment"><span>4 </span>PENDING ENROLLMENT</button>
              <!-- <button class="btn-trans-download-receipt">DOWNLOAD RECEIPT</button> -->
            </div>
          </div>
        </div>
        <div class="spending-account-container">
          <div class="modal-title-header spending-account-title-header">
            <span>Spending Account</span>
          </div>
          <div class="modal-body-info spending-account-body-info">
            <div class="col-1-body-info">
              <div>
                Invoce: <span>DEP000002</span>
              </div>
              <div>
                Total Credits: S$ <span>1,000.00</span>
              </div>
              <div>
                (Wellness)
              </div>
              <div>
                Deposit: S$ <span>50.00</span>
              </div>
              <div>
                Payment Status: <span>PENDING</span>
              </div>
            </div>
            <div class="col-2-body-info">
              <button class="btn-trans-dl-incove">DOWNLOAD INVOICE</button>
            </div>
          </div>
           <div class="modal-body-info spending-account-body-info">
            <div class="col-1-body-info">
              <div>
                Invoce: <span>DEP000013</span>
              </div>
              <div>
                Total Credits: S$ <span>1,000.00</span>
              </div>
              <div>
                (Medical)
              </div>
              <div>
                Deposit: S$ <span>5.00</span>
              </div>
              <div>
                Payment Status: <span>PENDING</span>
              </div>
            </div>
            <div class="col-2-body-info">
              <button class="btn-trans-dl-incove">DOWNLOAD INVOICE</button>
            </div>
          </div>
           <div class="modal-body-info spending-account-body-info">
            <div class="col-1-body-info">
              <div>
                Invoce: <span>DEP000091</span>
              </div>
              <div>
                Total Credits: S$ <span>2,808.00</span>
              </div>
              <div>
                (Medical)
              </div>
              <div>
                Deposit: S$ <span>70.20</span>
              </div>
              <div>
                Payment Status: <span>PENDING</span>
              </div>
            </div>
            <div class="col-2-body-info">
              <button class="btn-trans-dl-incove">DOWNLOAD INVOICE</button>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer">
        <button>CLOSE</button>
      </div>
		</Modal>
			<!-- End Account & Payment -->
  </div>

</template>

<script>
import account from "@/components/company/account";

export default account;
</script>

