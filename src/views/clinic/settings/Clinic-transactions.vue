<template>
	<div class="clinic-transactions-wrapper">
		<div class="profile-side-list">
			<div class="payments-container">
				<span>Payments</span>
				<div v-bind:class="{'active': detail_active.value === 0}" @click="selectTransDetail(0,'history')">
					<img :src="'../assets/img/clinic/history.png'">
					<span>HISTORY</span>
				</div>
				<div v-bind:class="{'active': detail_active.value === 1}" @click="selectTransDetail(1,'invoice')" class="">
					<img :src="'../assets/img/clinic/invoice.png'">
					<span>INVOICE</span>
				</div>	
				<div v-bind:class="{'active': detail_active.value === 2}" @click="selectTransDetail(2,'statement-account')" class="">
					<img :src="'../assets/img/clinic/Statement of Account.png'">
					<span>STATEMENT OF ACCOUNT</span>
				</div>
			</div>
		</div>
		<div class="transaction-body-detail">
			<div v-if="detail_active.value === 0">
				<div>
					<h4>Transaction History</h4>
					<div class="dashboard-summary-wrapper">
						<div class="time-frame-container">
							<div class="select-frame-wrapper">
								<div class="activity-date-header">
									<span>Select a timeframe:</span>
									<span v-bind:class="{'active': year_active.value === 0}" @click="setYear(0,'this-year')" class="year-selector">This year</span>
									<span v-bind:class="{'active': year_active.value === 1}" @click="setYear(1,'last-year')" class="year-selector">Last year</span>
									<span v-bind:class="{'active': year_active.value === 2}" @click="setYear(2,'custom')" class="year-selector">Custom</span>
								</div>
							</div>

							<div class="custom-picker-wrapper">

								<div v-if="year_active.value === 0 || year_active.value === 1">
									<div class="claim-slider-container">
										<vue-slider class="range-slider" v-model="range_values" :marks="range_marks" :enableCross="true" :min="1" :max="12" :process="false"></vue-slider>
									</div>

									<div class="search-export-wrapper">
										<div class="search-wrapper">
											<input type="type" placeholder="Search">
											<button>
												<i class="fa fa-search"></i>
											</button>
										</div>

										<div class="export-wrapper">
											<button class="btn-export"><i class="fa fa-file"></i>Export as .PDF</button>
											<button class="btn-export"><i class="fa fa-file"></i>Export as .CSV</button>	
										</div>
									</div>
								</div>
								<div v-if="year_active.value === 2">
									<div class="custom-date-selector-wrapper">
										<div class="custom-date-selector">
											<i class="fa fa-calendar"></i>
											<v-date-picker :max-date='new Date()' v-model="timeFrame.start"
					              :input-props='{class: "activity-custom-input", placeholder: "MM/DD/YYYY", readonly: true}'
					              popover-visibility='focus'>
					            </v-date-picker>
											<i class="fa fa-caret-down"></i>
										</div>

										<span>
											<i class="fa fa-arrow-right"></i>
										</span>

										<div class="custom-date-selector">
											<i class="fa fa-calendar"></i>
											<v-date-picker :max-date='new Date()' v-model="timeFrame.start"
					              :input-props='{class: "activity-custom-input", placeholder: "MM/DD/YYYY", readonly: true}'
					              popover-visibility='focus'>
					            </v-date-picker>
											<i class="fa fa-caret-down"></i>
										</div>
									</div>

									<div class="search-export-wrapper">
										<div class="search-wrapper">
											<input type="type" placeholder="Search">
											<button>
												<i class="fa fa-search"></i>
											</button>
										</div>

										<div class="export-wrapper">
											<button class="btn-export"><i class="fa fa-file"></i>Export as .PDF</button>
											<button class="btn-export"><i class="fa fa-file"></i>Export as .CSV</button>	
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
				<div>
					<table class="trans-history-tbl">
						<thead>
							<tr>
								<th>DATE</th>
								<th>TRANSACTION ID</th>
								<th>NAME</th>
								<th>NRIC</th>
								<th>SERVICE/S</th>
								<th>MEDNEFITS FEE</th>
								<th>MEDNEFITS CREDIT</th>
								<th>CASH</th>
							</tr>
						</thead>
						<tbody>
							<tr v-if="false">
								<td colspan="7">
									<h5>No Data</h5>
								</td>
							</tr>
							<tr>
								<td>
									<span>25 July 2019, 09:29 am</span>
								</td>
								<td>
									<span>STA001866</span>
								</td>
								<td>
									<span>Dhonald Lite</span>
								</td>
								<td>
									<span>S8788703J</span>
								</td>
								<td>
									<span>Consultation and Sample Service	</span>
								</td>
								<td>
									<span>S$</span>
									<span>13.91</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.20</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.00</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>25 July 2019, 09:29 am</span>
								</td>
								<td>
									<span>STA001866</span>
								</td>
								<td>
									<span>Dhonald Lite</span>
								</td>
								<td>
									<span>S8788703J</span>
								</td>
								<td>
									<span>Consultation and Sample Service	</span>
								</td>
								<td>
									<span>S$</span>
									<span>13.91</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.20</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.00</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>25 July 2019, 09:29 am</span>
								</td>
								<td>
									<span>STA001866</span>
								</td>
								<td>
									<span>Dhonald Lite</span>
								</td>
								<td>
									<span>S8788703J</span>
								</td>
								<td>
									<span>Consultation and Sample Service	</span>
								</td>
								<td>
									<span>S$</span>
									<span>13.91</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.20</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.00</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>25 July 2019, 09:29 am</span>
								</td>
								<td>
									<span>STA001866</span>
								</td>
								<td>
									<span>Dhonald Lite</span>
								</td>
								<td>
									<span>S8788703J</span>
								</td>
								<td>
									<span>Consultation and Sample Service	</span>
								</td>
								<td>
									<span>S$</span>
									<span>13.91</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.20</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.00</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>25 July 2019, 09:29 am</span>
								</td>
								<td>
									<span>STA001866</span>
								</td>
								<td>
									<span>Dhonald Lite</span>
								</td>
								<td>
									<span>S8788703J</span>
								</td>
								<td>
									<span>Consultation and Sample Service	</span>
								</td>
								<td>
									<span>S$</span>
									<span>13.91</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.20</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.00</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>25 July 2019, 09:29 am</span>
								</td>
								<td>
									<span>STA001866</span>
								</td>
								<td>
									<span>Dhonald Lite</span>
								</td>
								<td>
									<span>S8788703J</span>
								</td>
								<td>
									<span>Consultation and Sample Service	</span>
								</td>
								<td>
									<span>S$</span>
									<span>13.91</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.20</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.00</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>25 July 2019, 09:29 am</span>
								</td>
								<td>
									<span>STA001866</span>
								</td>
								<td>
									<span>Dhonald Lite</span>
								</td>
								<td>
									<span>S8788703J</span>
								</td>
								<td>
									<span>Consultation and Sample Service	</span>
								</td>
								<td>
									<span>S$</span>
									<span>13.91</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.20</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.00</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>25 July 2019, 09:29 am</span>
								</td>
								<td>
									<span>STA001866</span>
								</td>
								<td>
									<span>Dhonald Lite</span>
								</td>
								<td>
									<span>S8788703J</span>
								</td>
								<td>
									<span>Consultation and Sample Service	</span>
								</td>
								<td>
									<span>S$</span>
									<span>13.91</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.20</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.00</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>25 July 2019, 09:29 am</span>
								</td>
								<td>
									<span>STA001866</span>
								</td>
								<td>
									<span>Dhonald Lite</span>
								</td>
								<td>
									<span>S8788703J</span>
								</td>
								<td>
									<span>Consultation and Sample Service	</span>
								</td>
								<td>
									<span>S$</span>
									<span>13.91</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.20</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.00</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>25 July 2019, 09:29 am</span>
								</td>
								<td>
									<span>STA001866</span>
								</td>
								<td>
									<span>Dhonald Lite</span>
								</td>
								<td>
									<span>S8788703J</span>
								</td>
								<td>
									<span>Consultation and Sample Service	</span>
								</td>
								<td>
									<span>S$</span>
									<span>13.91</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.20</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.00</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>25 July 2019, 09:29 am</span>
								</td>
								<td>
									<span>STA001866</span>
								</td>
								<td>
									<span>Dhonald Lite</span>
								</td>
								<td>
									<span>S8788703J</span>
								</td>
								<td>
									<span>Consultation and Sample Service	</span>
								</td>
								<td>
									<span>S$</span>
									<span>13.91</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.20</span>
								</td>
								<td>
									<span>S$</span>
									<span>0.00</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div v-if="detail_active.value === 1" class="clinic-invoice-wrapper">
				<div class="trans-body-detail-header">
					<div>
						<h4>View Invoice</h4>
					</div>
					<div class="view-invoice-month-selector">
						<div class="custom-date-selector">
							<i class="fa fa-calendar"></i>
							<v-date-picker :max-date='new Date()' v-model="timeFrame.start"
	              :input-props='{class: "activity-custom-input", placeholder: "MM/DD/YYYY", readonly: true}'
	              popover-visibility='focus'>
	            </v-date-picker>
							<i class="fa fa-caret-down"></i>
						</div>
						<button class="btn-go">Go</button>
						<button class="btn-export"><i class="fa fa-file"></i>Export as .PDF</button>
					</div>
				</div>
				<div class="invoice-card-wrapper">
					<div v-if="false">
						<h3 class="no-trans-text">No transaction found in the chosen month.</h3>
					</div>

					<div v-if="true" class="invoice-info-wrapper">
						<div class="header">
							<div>
								<img :src="'https://res.cloudinary.com/dzh9uhsqr/image/upload/v1549795986/up0ebkyrragfte9bany7.jpg'">
							</div>
							<div class="header-right-info">
								<h1>INVOICE</h1>
								<div class="mednefits-wallet-text">
									Mednefits Wallet ( 
									<span class="invoice-day-start">0</span>
									<span class="invoice-month">Aug</span> 
									- 
									<span class="invoice-day-end">0</span>
									<span class="invoice-month">Aug</span>
									<span class="invoice-year">2019</span>
									 )
								</div>
								<div class="invoice-row-container">
									<label>Clinic Name:</label>
									<span class="clinic-name">Stackgecko GP</span>
								</div>
								<div class="invoice-row-container">
									<label>Billing/Payable Name(Bank):</label>
									<span class="billing-name">Stackgecko GP</span>
								</div>
								<div class="invoice-row-container">
									<label>Clinic Address:</label>
									<span class="clinic-address">zone 3 bugo cdo</span>
								</div>
								<div class="invoice-row-container">
									<label>Billing Address:</label>
									<span class="billing-address">Zone 3 Bugo Cdo</span>
								</div>
							</div>
						</div>
						<div class="bill-to">
							<div class="bill-to-left-info">
								<h5>BILL TO</h5>
								<h5>Medicloud Private Limited</h5>
								<div>
									<div>7 Temasek Boulevard #18-02 Suntec Tower One</div>
									<div>038987</div>
									<div>Singapore</div>
								</div>
							</div>
							<div class="bill-to-right-info">
								<div class="invoice-row-container">
									<label>Invoice Number: </label>
									<span class="invoice-number">MNST00002</span>
								</div>
								<div class="invoice-row-container">
									<label>Period Date: </label>
									<span class="period-date">1 Oct - 31 Oct 2018</span>
								</div>
								<div class="invoice-row-container">
									<label>Amount Due (SGD): </label>
									<span class="invoice-amount-due">1,399.90</span>
								</div>
							</div>
						</div>
						<div class="description">
							<div>
								<label>Descriptions:</label>
							</div>
							<div>
								<label>Period: </label>
								<span class="period-date">1 Oct - 31 Oct 2018</span>
							</div>
							<div>
								<label>Total Transactions: </label>
								<span class="total-transactions">27</span>
							</div>
							<div>
								<label>Mednefits Credit Transactions: </label>
								<span class="credit-transactions">21</span>
							</div>
							<div>
								<label>Cash/Creditcard Transactions: </label>
								<span class="cash-creditcard-transactions">6</span>
							</div>
						</div>
						<div class="table-wrapper">
							<label>Transactions Break down</label>
							<table>
								<thead>
									<tr>
										<th>Items</th>
										<th>Mednefits Fee</th>
										<th>Mednefits Credit</th>
										<th>Total Amount</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<span>STA000501 Allan Cheam Alzula</span>
										</td>
										<td>
											<span>S$ 13.91</span>
										</td>
										<td>
											<span>S$ 0.05</span>
										</td>
										<td>
											<span>S$ 13.96</span>
										</td>
									</tr>

									<tr>
										<td colspan="3">
											<span>Total Amount Due (SGD):</span>
										</td>
										<td>
											<span>S$ 1,399.90</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="notes">
							<div>
								<span>Notes</span>
							</div>
							<div>
								<label>Payment method: </label>
								<span>Bank Transfer/Cheque</span>
							</div>
							<div>
								<label>Payee's Name: </label>
								<span>N/a</span>
							</div>
							<div>
								<label>Account Type: </label>
								<span>N/a</span>
							</div>
							<div>
								<label>Payee's Account Number: </label>
								<span>132-66713-3</span>
							</div>
						</div>
						<div class="copyright">
							<h5>© 2018 Mednefits. All rights reserved</h5>
						</div>
					</div>
				</div>
			</div>
			<div v-if="detail_active.value === 2" class="clinic-view-statement-wrapper">
				<div class="trans-body-detail-header">
					<div>
						<h4>View Statment of Account</h4>
					</div>
					<div class="view-invoice-month-selector">
						<div class="custom-date-selector">
							<i class="fa fa-calendar"></i>
							<v-date-picker :max-date='new Date()' v-model="timeFrame.start"
	              :input-props='{class: "activity-custom-input", placeholder: "MM/DD/YYYY", readonly: true}'
	              popover-visibility='focus'>
	            </v-date-picker>
							<i class="fa fa-caret-down"></i>
						</div>
						<button class="btn-go">Go</button>
					</div>
				</div>

				<div v-if="!viewStatementAccount" class="table-statement-container">
					<ul class="table-statement-header">
						<li>
							<a>All Invoices</a>
						</li>
					</ul>

					<table class="invoice-tbl-container">
						<thead>
							<tr>
								<th>
									<span>Status</span>
								</th>
								<th>
									<span>Date</span>
								</th>
								<th>
									<span>Number</span>
								</th>
								<th>
									<span>Customer</span>
								</th>
								<th>
									<span>Total</span>
								</th>
								<th>
									<span>Amount due</span>
								</th>
								<th>
									<span>Actions</span>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div class="status paid">PAID</div>
								</td>
								<td>
									<span>Apr 01, 2019</span>
								</td>
								<td>
									<span>MNST00005</span>
								</td>
								<td>
									<span>Stackgecko GP</span>
								</td>
								<td>
									<span>$4,023.87</span>
								</td>
								<td>
									<span>$0.00</span>
								</td>
								<td>
									<a @click="viewStatement()" class="view-statement-button">View</a>
									<div>
										<button @click="btnView()"><i class="fa fa-caret-down"></i></button>
										<ul v-if="viewSelector" class="dropdown-menu">
											<li>
												<a>Export as PDF</a>
											</li>
											<li>
												<a>Print</a>
											</li>
										</ul>	
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div v-if="viewStatementAccount" class="invoice-card-wrapper statement-account-wrapper">
					<div>
						<i @click="viewStatement()" class="fa fa-times"></i>
					</div>
					<div class="header">
						<div class="statment-account-header-title">
							<h1>STATEMENT OF ACCOUNT</h1>
							<h5>
								(Generated on <span>May 23, 2019</span>)
							</h5>
						</div>

						<div>
							<img :src="'https://res.cloudinary.com/dzh9uhsqr/image/upload/v1549795986/up0ebkyrragfte9bany7.jpg'">
						</div>
						<div class="header-right-info">
							<div class="statement-row-container">
								<span class="statement-bank-name">N/a</span>
							</div>
							<div class="statement-row-container">
								<span class="statement-bank-address">N/a</span>
							</div>
						</div>
					</div>
					<div class="bill-to">
						<div class="bill-to-left-info">
							<h5>BILL TO</h5>
							<h5>Medicloud Private Limited</h5>
							<div>
								<div>7 Temasek Boulevard #18-02 Suntec Tower One</div>
								<div>038987</div>
								<div>Singapore</div>
							</div>
						</div>
						<div class="bill-to-right-info">
							<div class="account-summary-title">
								<span>Account Summary</span>
							</div>
							<div class="statement-row-container">
								<label>Invoiced: </label>
								<span>S$ <span class="statement-amount-due">4,023.87</span></span>
							</div>
							<div class="statement-row-container">
								<label>Payments: </label>
								<span>(S$ <span class="statement-amount-paid">4031.36</span>)</span>
							</div>
							<div class="statement-row-container">
								<label>Ending Balance <span class="statement-created-at">May 23,2019 </span>:</label>
								<span>S$ <span class="statement-amount-total">NaN</span></span>
							</div>
						</div>
					</div>
					<div class="invoices-payments-container">
						<div>SHOWING ALL INVOICES AND PAYMENTS BETWEEN <span>FEB 01, 2017</span> AND <span>FEB 28,2017</span></div>
					</div>
					<div class="invoices-payments-tbl-container">
						<table>
							<thead>
								<tr>
									<th>
										<span>Date</span>
									</th>
									<th>
										<span>Details</span>
									</th>
									<th>
										<span>Amount</span>
									</th>
									<th>
										<span>Balance</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<span>Feb 01,2017</span>
									</td>
									<td>
										<span>Invoce #<span class="statement-invoice-number">MNST00005</span> (due <span>FEB 28, 2017</span>)</span>
									</td>
									<td> S$ 
										<span class="statement-amount-due">4,023.87</span>
									</td>
									<td> S$ 
										<span class="statement-amount-total">4,023.87</span>
									</td>
								</tr>
								<tr>
									<td>
										<span>Feb 28,2017</span>
									</td>
									<td> Payment 
										<span>Invoice #<span class="statement-invoice-number">MNST00005</span> </span>
									</td>
									<td> (S$ 
										<span class="statement-amount-due">4031.36</span>)
									</td>
									<td> S$ 
										<span class="statement-amount-total">NaN</span>
									</td>
								</tr>
								<tr>
									<td>
										<span>May 23,2019</span>
									</td>
									<td>
										<span>Ending Balance</span>
									</td>
									<td> 
										<span class="statement-amount-due"></span>
									</td>
									<td> S$ 
										<span class="statement-amount-total">NaN</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="total">
						<h4>Amount due (SGD)</h4>
						<div>S$ <span class="statement-amount-total">NaN</span></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import clinicTransactions from "@/components/clinic/settings/clinic-transactions";

export default clinicTransactions;
</script>