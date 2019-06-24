<template>
  <div class="claim-wrapper">
  	<div class="container">
  		<div class="claim-container">
    		<span class="timeframe-title">Select a timeframe (Claim Date)</span>
    		<div class="activity-header-calendar">
					<div class="date-selection-container">

						<div class="custom-date-selector">
							<i class="fa fa-calendar"></i>
							<v-date-picker :max-date='new Date()' v-model="timeFrame.start"
                :input-props='{class: "activity-custom-input", placeholder: "MM/DD/YYYY", readonly: true}'
                popover-visibility='focus'>
              </v-date-picker>
							<i class="fa fa-caret-down"></i>
						</div>

						<span><i class="fa fa-arrow-right"></i></span>
						
						<div class="custom-date-selector">	
							<i class="fa fa-calendar"></i>
							<v-date-picker :max-date='new Date()' v-model="timeFrame.end"
                :input-props='{class: "activity-custom-input", placeholder: "MM/DD/YYYY", readonly: true}'
                popover-visibility='focus'>
              </v-date-picker>
							<i class="fa fa-caret-down"></i>	
						</div>		

						<button class="btn-apply">
							Apply
						</button>
						
					</div>
				</div>

				<div class="team-benefits-wrapper">
					<div class="team-benefits-header">
						<h4>Team E-Claim</h4>
						<div class="spending-type-container">
							<button @click="spendType(0, 'medical')" v-bind:class="{'active': eclaimSpendingType.value === 0}" class="btn-spending-type btn-medical">Medical</button>
							<button @click="spendType(1, 'wellness')" v-bind:class="{'active': eclaimSpendingType.value === 1}" class="btn-spending-type btn-wellness">Wellness</button>
						</div>
					</div>
					<div class="cost-wrapper">
						<div class="benefit-box">
							<h5>S$ <span>0.00</span></h5>
							<p>SPENT</p>
						</div>
						<div class="benefit-box">
							<h5>S$ <span>0.00</span></h5>
							<p>BALANCE</p>
						</div>
						<div class="benefit-box">
							<h5>S$ <span>0.00</span></h5>
							<p>ALLOCATED</p>
						</div>
						<div class="benefit-box">
							<h5>S$ <span>0.00</span></h5>
							<p>TOTAL COMPANY CREDITS</p>
						</div>
					</div>
				</div>

    	</div>

    	<div class="view-search-transaction-eclaim-container">
	    	<div class="view-search-container">
	    		<div>
	    			<div class="view-toggle-btn">
	    				<h4>View</h4>

	    				<div class="btn-view-eclaim">
		    				<button @click="viewEclaimToggle">All <i class="fa fa-caret-down"></i></button>
		    				<ul v-if="viewEclaim" class="dropdown-menu">
							    <li><a>All</a></li>
							    <li><a>Pending</a></li>
							    <li><a>Approved</a></li>
							    <li><a>Rejected</a></li>
							  </ul>
						  </div>
	    			</div>
	    			<div class="search-wrapper">
							<div class="input-group">
								<input class="search-input" placeholder="Search Employee Name">
								<ul v-if="false" class="dropdown-menu">
									<li class="active">
										<a class="dropdown-item" href="#" role="option">allan cheam alzula</a>
									</li>
									<li class="">
										<a class="dropdown-item" href="#" role="option">allan cheam alzula</a>
									</li>
									<li class="">
										<a class="dropdown-item" href="#" role="option">allan cheam alzula</a>
									</li>
								</ul>
					      <span class="input-group-btn">
					        <button><i class="fa fa-search"></i></button>
					        <button v-if="false"><i class="fa fa-close"></i></button>
					      </span>
							</div>
						</div>
	    		</div>
	    	</div>

	    	<div class="total-claim-transaction">
	    		<div class="total-transaction-container"><span>124</span> Total Transactions</div>
	    		<div class="total-claim-container">Total Claim <span>S$ <span>811.05</span></span></div>
	    	</div>

	    	<div class="download-btn-container">
	    		<button>Download CSV <i class="fa fa-download"></i></button>
	    		<button>Download receipts <i class="fa fa-download"></i></button>
	    	</div>
    	</div>

    </div>

    <div class="transaction-wrapper">
    	<div class="transaction-table-container">
	    	<table>
	    		<thead>
						<tr>
							<th></th>
							<th>CLAIM DATE</th>
							<th>APPROVED/ REJECTED DATE</th>
							<th>CLAIM TYPE</th>
							<th>PROVIDER</th>
							<th>CLAIM AMOUNT</th>
							<th>MEMBER</th>
							<th></th>
						</tr>
	    		</thead>
	    		<tbody v-for="n in test" :key="n.id">
						<tr @click="toggleDetails(n)">
							<td>
								<label class="status-text pending">Pending {{n.id}}</label>
							</td>
							<td>
								<span>15 May 2019 05:09 PM</span>
							</td>
							<td>
								<span>09 May 2019 04:21 PM</span>
							</td>
							<td class="claim-type-details">
								<span>General Practice</span>
							</td>
							<td>
								<span>qwer</span>
							</td>
							<td> S$
								<span>12.00</span>
							</td>
							<td>
								<span>Chryst Gundran</span>
								<div class="spouse-member">
									<span>Family </span> of <span>Jaz Zayas</span>
								</div>
							</td>
							<td>
								<i class="fa fa-angle-right transition-easeInOutCubic-300ms" :class="{'fa-angle-down-active': n.showTransDetails === true}" ></i>
							</td>
						</tr>
						<transition name="fade">
							<tr class="in-network-subtr" v-if="n.showTransDetails">
								<td colspan="8">


									<div class="status-left-wrapper">
										<div class="status-box-left">
											<div class="status_text">Pending {{n.id}}</div>
											<div class="claim-date-text">Claim Date: <span>15 May 2019 05:09 PM</span></div>
										</div>

										<!-- this will appear when the status is rejected -->
										<div class="reason-container">
											<div class="label">REASON:</div>
											<div>qwe</div>
										</div>
									</div>

									<div class="transac-details-wrapper">
										<div class="transac-details">
											<div>
												<label>MEMBER</label>
												<span>Chryst Gundran</span>
											</div>
											<div>
												<label>EMPLOYEE</label>
												<span>Jaz Zayas</span>
											</div>
											<div>
												<label>DEPENDENT RELATIONSHIP</label>
												<span>Family</span>
											</div>
											<div>
												<label>APPROVED DATE</label>
												<span></span>
											</div>
											<div>
												<label>CLAIM DATE</label>
												<span>15 May 2019 05:09 PM</span>
											</div>
											<div>
												<label>VISIT DATE</label>
												<span>15 May 2019 08:00 AM</span>
											</div>
											<div>
												<label>TRANSACTION #</label>
												<span>MNF000340</span>
											</div>
											<div>
												<label>CLAIM TYPE</label>
												<span>General Practice</span>
											</div>
											<div>
												<label>PROVIDER</label>
												<span>qwer</span>
											</div>
											<div>
												<label>CLAIM AMOUNT</label>
												<span>S$ 12.00</span>
											</div>
											<div>
												<label>PAYMENT TYPE</label>
												<span>E-Claim</span>
											</div>
											<div>
												<label>REMARKS</label>
												<span></span>
											</div>
										</div>

										<div class="transac-details-btn">
											<button v-if="false" class="btn-approved">Approve Claim</button>
											<button v-if="false" class="btn-rejected">Reject Claim</button>
											<button class="btn-check-pending">Change to Pending</button>
										</div>
									</div>

									<div class="download-receipt-container">
										<button class="btn-download-receipt">Download Receipt</button>

										<div class="trans-receipts-wrapper">
											<div class="click-box-wrapper">
												<a>
													<div @click="showPreview = true" class="click-box transition-easeInOutCubic-200ms">
														<i class="fa fa-plus"></i>
													</div>
													<img class="thumbnail" :src="'https://res.cloudinary.com/dzh9uhsqr/image/upload/v1557387401/nhulevaerr46wlfy07d7.png'">
												</a>
												
												<ImgPreview v-if="showPreview">
													<div slot="content">
														<a @click="showPreview = false">
															<i class="fa fa-times"></i>
														</a>
														<img :src="'https://res.cloudinary.com/dzh9uhsqr/image/upload/v1557387401/nhulevaerr46wlfy07d7.png'">
													</div>
												</ImgPreview>

											</div>
										</div>
									</div>
								</td>
							</tr>
						</transition>
	    		</tbody>
	    	</table>
    	</div>
    </div>
  </div>
</template>

<script>
import claim from "@/components/company/claim";

export default claim;
</script>
