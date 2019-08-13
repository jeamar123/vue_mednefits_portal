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
											<button><i class="fa fa-file"></i>Export as .PDF</button>
											<button><i class="fa fa-file"></i>Export as .CSV</button>	
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
											<button><i class="fa fa-file"></i>Export as .PDF</button>
											<button><i class="fa fa-file"></i>Export as .CSV</button>	
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
			<div v-if="detail_active.value === 1">
				<h1>INVOICE</h1>
			</div>
			<div v-if="detail_active.value === 2">
				<h1>STATEMENT OF ACCOUNT</h1>
			</div>
		</div>
	</div>
</template>

<script>
import clinicTransactions from "@/components/clinic/settings/clinic-transactions";

export default clinicTransactions;
</script>