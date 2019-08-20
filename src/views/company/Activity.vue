<template>
  <div class="activity-wrapper">

  	<div class="container">
  		<div class="activity-container">
    		<span class="timeframe-title">Select a timeframe</span>

    		<div class="activity-header-calendar">
					<div class="date-selection-container">

						<div class="custom-date-selector">
							<i class="fa fa-calendar"></i>
							<v-date-picker :max-date='new Date()' v-model="timeFrame.rangePicker_start"
                :input-props='{class: "activity-custom-input", placeholder: "MM/DD/YYYY", readonly: true}'
                popover-visibility='focus'>
              </v-date-picker>
							<i class="fa fa-caret-down"></i>
						</div>

						<span><i class="fa fa-arrow-right"></i></span>
						
						<div class="custom-date-selector">	
							<i class="fa fa-calendar"></i>
							<v-date-picker :max-date='new Date()' v-model="timeFrame.rangePicker_end"
                :input-props='{class: "activity-custom-input", placeholder: "MM/DD/YYYY", readonly: true}'
                popover-visibility='focus' :formats='formats'>
              </v-date-picker>
							<i class="fa fa-caret-down"></i>
						</div>		

						<button class="btn-apply" @click="applyDates()">
							Apply
						</button>
						
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
							<h5>S$ <span>{{activity.total_spent_format_number | decimalTwo}}</span></h5>
							<p>SPENT</p>
						</div>
						<div class="benefit-box">
							<h5>S$ 
								<span v-if="spendingType.value == 0">{{credits.total_medical_employee_balance}}</span>
								<span v-if="spendingType.value == 1">{{credits.total_wellness_employee_balance}}</span>
							</h5>
							<p>BALANCE</p>
						</div>
						<div class="benefit-box">
							<h5>S$ 
								<span v-if="spendingType.value == 0">{{credits.total_medical_employee_allocated}}</span>
								<span v-if="spendingType.value == 1">{{credits.total_wellness_employee_allocated}}</span>
							</h5>
							<p>ALLOCATED</p>
						</div>
						<div class="benefit-box">
							<h5>S$ 
								<span v-if="activity.spending_type == 'medical'">{{total_allocation.total_allocation | decimalTwo}}</span>
								<span v-if="activity.spending_type == 'wellness'">{{total_allocation.total_wellness_allocation | decimalTwo}}</span>
							</h5>
							<p>TOTAL COMPANY CREDITS</p>
						</div>
					</div>
					<div class="spent-box">
						<div class="spending-title">Spending Breakdown</div>
						<div class="progress-wrapper">
							<div class="progress-bar transition-easeInOutCubic-900ms"  :style='progressBar'></div>
						</div>
						<div class="in-out-network-container">
							<div class="in-network-box">
								<div>S$ <span>{{activity.in_network_spending_format_number | decimalTwo}}</span></div>
								<span>IN-NETWORK</span>
							</div>
							<div class="out-network-box">
								<div>S$ <span>{{activity.e_claim_spending_format_number | decimalTwo}}</span></div>
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

		
		<div class="transaction-wrapper">
			<!-- transactions -->

			<!-- In network -->
			<transition name="fade">
				<div class="transaction-container transition-easeInOutCubic-600ms" id="transaction-container-inNetwork" :class="{'transaction-container-active': toggleSidebar.in === true}" v-if="networkType.value === 0">
					<div class="total-transac-header">
						<div>
							<span>{{activity.total_in_network_transactions}}</span> Total Transactions 
							<div>Total Spent 
								<span>S$<span>{{activity.total_in_network_spent_format_number | decimalTwo}}</span></span>
							</div>
						</div>
					</div>

					<!-- to repeat -->
					<div class="transaction-rows">
						<!-- pra sa date na g filter ang timeline -->
						<div class="timeline" v-for="n in 2" :key="n.id">
							<div class="date-box">MAY {{n}}</div>
							<!-- para sa each transaction -->
							<div class="transaction-tr" @click="toggleShowSidebar" v-for="y in 3" :key="y.id">
								<div class="dot-box">
									<div class="dot-circle"></div>
								</div>
								<div class="month-box">
									<span>{{y}}</span>
								</div>
								<div class="img-wrapper">
									<img :src="'../assets/img/GP.png'">
								</div>
								<div class="transaction-details">
									<div>Allan Cheam Alzula</div>
									<div>General Practitioner - Medicine &amp; Treatment</div>
									<div>Malaysia Ringgit</div>
									<div class="spouse-dependent-container">
										<div v-if="false">
											Spouse of <span>Unique Nina Faye</span>
										</div>
										<div>
											Dependent of <span>Unique Nina Faye</span>
										</div>
									</div>
									<div class="credit-cash-wrap credits-spouse-wrap">
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
						<div class="trans-pagination-shadow transition-easeInOutCubic-600ms" :class="{'trans-pagination-shadow-active': toggleSidebar.in === true}"></div>
						<div class="global-pagination">
							<div class="prev-pagination">
								<i class="fa fa-angle-left"></i>
								<!-- <span>Prev</span> -->
							</div>
							<!-- <span class="numeric-pagination active">1</span>
							<span class="numeric-pagination">2</span>
							<span class="numeric-pagination">3</span>
							<span class="numeric-pagination">4</span> -->
							<div class="next-pagination">
								<i class="fa fa-angle-right"></i>
								<!-- <span>Next</span> -->
							</div>
							<div class ="total-item">
								<span>1 - 10 of 100</span>
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
			</transition>
			<!-- side bar show/hide -->
			<transition name="slide">
				<div class="hidden-details-container" id="hidden-inNetwork" v-if="toggleSidebar.in">
					<span class="side-close" @click="toggleShowSidebar"> <i class="fa fa-times" aria-hidden="true"></i> </span>
					<img class="details-img" :src="'https://res.cloudinary.com/www-medicloud-sg/image/upload/v1439208475/medilogo_cn6d0x.png'">
					<h5>Malaysia Ringgit</h5>
					<div class="details-container">
						<div class="details-row">
							<div class="details-left">
								<div>MEMBER</div>
							</div>
							<div class="details-right">
								<div>Allan Cheam Alzula</div>
							</div>
						</div>
						<div class="details-row">
							<div class="details-left">
								<div>DATE</div>
							</div>
							<div class="details-right">
								<div>08 May 2018, 01:48pm</div>
							</div>
						</div>
						<div class="details-row">
							<div class="details-left">
								<div>TRANSACTION #</div>
							</div>
							<div class="details-right">
								<div>STA000414</div>
							</div>
						</div>
						<div class="details-row">
							<div class="details-left">
								<div>ITEM/SERVICE</div>
							</div>
							<div class="details-right">
								<div>Dental Care - Teeth Cleaning</div>
							</div>
						</div>
						<div class="details-row">
							<div class="details-left">
								<div>TOTAL AMOUNT</div>
							</div>
							<div class="details-right">
								<div>S$ <span>1,200.00</span></div>
							</div>
						</div>
						<div class="details-row">
							<div class="details-left">
								<div>PAYMENT TYPE</div>
							</div>
							<div class="details-right">
								<div>Mednefits Credits</div>
							</div>
						</div>
					</div>
					<div class="download-receipt-container">
						<button class="btn-download disabled">Download Receipt</button>
						<div class="trans-receipts-wrapper">
							<div class="click-box-wrapper" v-for="n in 3" :key="n.id"> <!-- To Repeat -->
								<a>
									<div @click="showPreview = true" class="click-box transition-easeInOutCubic-200ms">
										<i class="fa fa-plus"></i>
									</div>
									<img :src="'../assets/img/home-bg.jpg'">
								</a>

								<ImgPreview v-if="showPreview">
									<div slot="content">
										<a @click="showPreview = false">
											<i class="fa fa-times"></i>
										</a>

										<!-- <img :src="'https://res.cloudinary.com/dzh9uhsqr/image/upload/v1557387401/nhulevaerr46wlfy07d7.png'"> -->
										<img :src="'../assets/img/home-bg.jpg'">
									</div>
								</ImgPreview>

							</div> <!--End sa To Repeat -->
						</div>
						<a href="/download/transaction_receipt/413" target="_blank" class="btn-download btn-receipt">Mednefits E-Receipt</a>
					</div>
				</div>
			</transition>

			<!-- Out network -->
			<transition name="fade">
				<div class="transaction-container e-claim-transactions transition-easeInOutCubic-600ms" :class="{'transaction-container-active': toggleSidebar.out === true}" v-if="networkType.value === 1">
					<div class="total-transac-header">
						<div>
							<span>{{activity.e_claim_transactions.length}}</span> Total Transactions 
							<div>Total Spent 
								<span>S$<span>{{activity.e_claim_spending_format_number | decimalTwo}}</span></span>
							</div>
						</div>
					</div>

					<div class="transaction-rows">
						<div class="timeline" v-for="n in 2" :key="n.id">
							<div class="date-box">MAY{{n}}</div>
							<div class="transaction-tr" @click.prevent="toggleShowSidebar" v-for="y in 3" :key="y.id">
								<div class="dot-box">
									<div class="dot-circle"></div>
								</div>
								<div class="month-box">
									<span>{{y}}</span>
								</div>
								<div class="img-wrapper">
									<img class="receipt-img" :src="'../assets/img/receipt.png'">
								</div>
								<div class="transaction-details">
									<div>Allan Cheam Alzula</div>
									<div>fare</div>
									<div>taxi</div>
									<div class="spouse-dependent-container">
									</div>
									<!-- <div class="credit-cash-wrap credits-spouse-wrap">
										<span>Credits</span>
									</div> -->
								</div>
								<div class="transaction-price">
									S$ <span>50.00</span>
								</div>
							</div>
						</div>
					</div>

					<div class="activity-pagination-wrapper">
						<div class="trans-pagination-shadow transition-easeInOutCubic-600ms" :class="{'trans-pagination-shadow-active': toggleSidebar.out === true}"></div>
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
			</transition>
			<transition name="slide">
				<div class="hidden-details-container e-claim-hidden-container" id="hidden-outNetwork" v-if="toggleSidebar.out">
					<span class="side-close" @click="toggleShowSidebar"> <i class="fa fa-times" aria-hidden="true"></i> </span>
					<img class="details-img" :src="'../assets/img//GP.png'">
					<div class="details-container">
						<div class="details-row">
							<div class="details-left">
								<div>MEMBER</div>
							</div>
							<div class="details-right">
								<div>Allan Cheam Alzula</div>
							</div>
						</div>
						<div class="details-row">
							<div class="details-left">
								<div>APPROVED DATE</div>
							</div>
							<div class="details-right">
								<div>11 January 2018</div>
							</div>
						</div>
						<div class="details-row">
							<div class="details-left">
								<div>CLAIM DATE</div>
							</div>
							<div class="details-right">
								<div>11 January 2018, 11:12 AM</div>
							</div>
						</div>
						<div class="details-row">
							<div class="details-left">
								<div>VISIT DATE</div>
							</div>
							<div class="details-right">
								<div>01 January 2018, 01:00 PM</div>
							</div>
						</div>
						<div class="details-row">
							<div class="details-left">
								<div>TRANSACTION #</div>
							</div>
							<div class="details-right">
								<div>MNF000023</div>
							</div>
						</div>
						<div class="details-row">
							<div class="details-left">
								<div>CLAIM TYPE</div>
							</div>
							<div class="details-right">
								<div>Vision</div>
							</div>
						</div>
						<div class="details-row">
							<div class="details-left">
								<div>PROVIDER</div>
							</div>
							<div class="details-right">
								<div>Vision Hut</div>
							</div>
						</div>
						<div class="details-row">
							<div class="details-left">
								<div>CLAIM AMOUNT</div>
							</div>
							<div class="details-right">
								<div>S$ <span>50.00</span></div>
							</div>
						</div>
						<div class="details-row">
							<div class="details-left">
								<div>PAYMENT TYPE</div>
							</div>
							<div class="details-right">
								<div>E-Claim</div>
							</div>
						</div>
					</div>
					<div class="download-receipt-container">
						<button class="btn-download">Download Receipt</button>
						<div class="trans-receipts-wrapper">
							<div class="click-box-wrapper" v-for="n in 2" :key="n.id">
								<a>
									<div @click="showPreview = true" class="click-box transition-easeInOutCubic-200ms">
										<i class="fa fa-plus"></i>
									</div>
									<img :src="'../assets/img/home-bg.jpg'">
								</a>
								<ImgPreview v-if="showPreview">
									<div slot="content">
										<a @click="showPreview = false">
											<i class="fa fa-times"></i>
										</a>

										<img :src="'../assets/img/home-bg.jpg'">
									</div>
								</ImgPreview>
							</div>
						</div>
					</div>
				</div>
			</transition>
		</div>

<!-- 
	  <div class="transaction-wrapper e-claim-transaction-wrapper">
	    
    </div> -->
  </div>
</template>

<script>
import activity from "@/components/company/activity";

export default activity;
</script>



