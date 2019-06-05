<template>
  <div class="activity-wrapper">

  	<div class="container">

  		<div class="activity-container">
    		<span class="timeframe-title">Select a timeframe</span>

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

					<div class="search-wrapper">
						<div class="input-group">
							<input class="search-input" placeholder="Search Employee Name">
				      <span class="input-group-btn">
				        <button>
				        	<i class="fa fa-search"></i></button>
				      </span>
						</div>
					</div>
				</div>

				<div class="team-benefits-wrapper">
					<div class="team-benefits-header">
						<h4>Benefits Cost</h4>
						<div class="spending-type-container">
							<button class="btn-spending-type btn-medical">Medical</button>
							<button class="btn-spending-type btn-wellness">Wellness</button>
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
					<div class="spent-box">
						<div class="spending-title">Spending Breakdown</div>
						<div class="progress-wrapper">
							<div class="progress-bar"></div>
						</div>
						<div class="in-out-network-container">
							<div class="in-network-box">
								<div>S$ <span>53,545.65</span></div>
								<span>IN-NETWORK</span>
							</div>
							<div class="out-network-box">
								<div>S$ <span>145.00</span></div>
								<span>E-CLAIM(OUT-OF-NETWORK)</span>
							</div>
						</div>
					</div>
				</div>

				<div class="transaction-container">
					<div class="btn-transaction-container">
						<button class="active">
							IN - NETWORK <br> TRANSACTIONS
						</button>
						<button>
							E- CLAIM TRANSACTIONS <br> (OUT-OF-NETWORK)
						</button>
					</div>
				</div>

    	</div>

    </div>
  </div>
</template>

<script>
import activity from "@/components/company/activity";

export default activity;
</script>

