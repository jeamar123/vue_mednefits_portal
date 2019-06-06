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
							<button @click="spendType(0, 'medical')" v-bind:class="{'active': spendingType.value === 0}" class="btn-spending-type btn-medical">Medical</button>
							<button @click="spendType(1, 'wellness')" v-bind:class="{'active': spendingType.value === 1}" class="btn-spending-type btn-wellness">Wellness</button>
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

				<div class="transaction-header">
					<div class="btn-transaction-container">
						<button @click="netType(0, 'In-network')" v-bind:class="{'active': networkType.value === 0}">
							IN - NETWORK <br> TRANSACTIONS
						</button>
						<button @click="netType(1, 'Out-of-network')" v-bind:class="{'active': networkType.value === 1}">
							E- CLAIM TRANSACTIONS <br> (OUT-OF-NETWORK)
						</button>
					</div>
					<div class="download-container">DOWNLOAD <img :src="'../assets/img/coverage/Download.png'"></div>
				</div>

    	</div>
    </div>
    <div class="transaction-container">
  		<div class="total-transac-header">
				<div>
					<span>297</span> Total Transactions 
					<div>Total Spent 
						<span>S$<span>51,938.73</span></span>
					</div>
				</div>
			</div>

			<div class="transaction-rows">
				<div class="timeline">
					<div class="date-box">MAY</div>
					<div class="transaction-tr">
						<div class="dot-box">
							<div class="dot-circle"></div>
						</div>
						<div class="month-box">
							<span>21</span>
						</div>
						<div class="img-wrapper">
							<img :src="'../assets/img/GP.png'">
						</div>
						<div class="transaction-details">
							<div>Allan Cheam Alzula</div>
							<div>General Practitioner - Medicine &amp; Treatment</div>
							<div>Malaysia Ringgit</div>
							<div class="spouse-dependent-container">
							</div>
							<div class="credits-spouse-wrap">
								<span>Credits</span>
							</div>
						</div>
						<div class="transaction-price">
							S$ <span>6.67</span>
						</div>
					</div>
				</div>
			</div>

			<div class="activity-pagination-wrapper">
				<div class="trans-pagination-shadow"></div>
				<div class="global-pagination">
	    		<div class="prev-pagination">
	          <i class="fa fa-angle-left"></i>
	    			<span>Prev</span>
	    		</div>
	    		<span class="numeric-pagination active">1</span>
	    		<span class="numeric-pagination">2</span>
	    		<span class="numeric-pagination">3</span>
	    		<span class="numeric-pagination">4</span>
	    		<div class="next-pagination">
	          <i class="fa fa-angle-right"></i>
	    			<span>Next</span>
	    		</div>
	    		<div class="per-page-pagination">
	    			<span>
	    				<span>5</span> per page
	    			</span>
	          <i class="fa fa-angle-down"></i>
	          <div v-if="false" class="per-page">
	            <ul class="nav">
	              <li><a href="">5</a></li>
	              <li><a href="">10</a></li>
	              <li><a href="">20</a></li>
	              <li><a href="">50</a></li>
	              <li><a href="">100</a></li>
	            </ul>
	          </div>
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

