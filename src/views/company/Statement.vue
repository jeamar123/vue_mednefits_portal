<template>
  <div class="statement-wrapper">

  	<div class="container">
  		<div class="statement-container">
  			<div>
  				<span class="timeframe-title">Select a timeframe</span>
  				<span class="year-selector"><a @click="showCustomDate(0, 'this-year')" v-bind:class="{'active': year_active.value === 0}">This year</a></span>
  				<span class="year-selector"><a @click="showCustomDate(1, 'last-year')" v-bind:class="{'active': year_active.value === 1}">Last year</a></span>
  				<span class="year-selector"><a @click="showCustomDate(2, 'custom')" v-bind:class="{'active': year_active.value === 2}">Custom</a></span>
  			</div>

        <div v-if="showRangeMonthSlider" class="claim-slider-container">
					<vue-slider 
            class="range-slider" 
            v-model="range_values" 
            :marks="range_marks" 
            :enableCross="true" 
            :tooltip="'none'" 
            :min="1" 
            :max="12" 
            :process="false" 
            @drag-start="() => inDragging = true" 
            @drag-end="() => inDragging = false" 
            @change="() => isFromSlider = true"
            :dragEnd="sliderDragged( range_values )"
          ></vue-slider>

          <div id="date-responsive" class="date-selection-container">
            <div class="custom-date-selector">
              <i class="fa fa-calendar"></i>
              <v-date-picker 
                mode='single' 
                popoverDirection="bottom" 
                :formats="formats"
                v-model='start_date' 
                :input-props='{class: "activity-custom-input", placeholder: "MM/DD/YYYY", readonly: true}'
                popover-visibility='focus'
              >
              </v-date-picker>
              <i class="fa fa-caret-down"></i>
            </div>

            <span><i class="fa fa-arrow-right"></i></span>
            
            <div class="custom-date-selector">  
              <i class="fa fa-calendar"></i>
              <v-date-picker 
                mode='single' 
                popoverDirection="bottom" 
                :formats="formats"
                v-model='end_date' 
                :input-props='{class: "activity-custom-input", placeholder: "MM/DD/YYYY", readonly: true}'
                popover-visibility='focus'
              >
              </v-date-picker>
              <i class="fa fa-caret-down"></i>  
            </div> 
          </div>
				</div>

          

        <div v-if="showInputDate" class="date-selection-container">

          <div class="custom-date-selector">
            <i class="fa fa-calendar"></i>
            <v-date-picker 
              mode='single' 
              popoverDirection="bottom" 
              :formats="formats"
              v-model='start_date' 
              :input-props='{class: "activity-custom-input", placeholder: "MM/DD/YYYY", readonly: true}'
              popover-visibility='focus'
              v-on:input='dateSelected( start_date , end_date )'
            >
            </v-date-picker>
            <i class="fa fa-caret-down"></i>
          </div>

          <span><i class="fa fa-arrow-right"></i></span>
          
          <div class="custom-date-selector">  
            <i class="fa fa-calendar"></i>
            <v-date-picker 
              mode='single' 
              popoverDirection="bottom" 
              :formats="formats"
              v-model='end_date' 
              :input-props='{class: "activity-custom-input", placeholder: "MM/DD/YYYY", readonly: true}'
              popover-visibility='focus'
              v-on:input='dateSelected( start_date , end_date )'
            >
            </v-date-picker>
            <i class="fa fa-caret-down"></i>  
          </div>    

        </div>

  			<div class="team-benefits-wrapper">
					
					<h4>View Statement</h4>
					
					<div class="view-statement-container">

						<span class="header-content">Choose how you want your statement to be shown</span>

						<div class="btn-statement-wrapper">
							<button @click="statementType(0, 'overview')" v-bind:class="{'active': viewStatementType.value === 0}" class="btn-spending-type btn-overview">Overview</button>
							<button @click="statementType(1, 'full')" v-bind:class="{'active': viewStatementType.value === 1}" class="btn-spending-type btn-full">Full</button>
						</div>
					</div>
          
          
          <div v-if="full_active" class="health-spending-container">
            
            <span class="header-content">Choose which Health Spending Account</span>

            <div class="btn-health-spending-wrapper">
              <button @click="setSpendingType(0, 'medical')" v-bind:class="{'active': spendingTypeOpt.value === 0}" class="btn-spending-type btn-medical">Medical</button>
              <button @click="setSpendingType(1, 'wellness')" v-bind:class="{'active': spendingTypeOpt.value === 1}" class="btn-spending-type btn-wellness">Wellness</button>
              <button @click="setSpendingType(2, 'both')" v-bind:class="{'active': spendingTypeOpt.value === 2}" class="btn-spending-type btn-both">Both</button>
            </div>
          </div>
          
				</div>
  		</div>

      <!-- overview -->
      <div v-if="overview_active" class="download-container">DOWNLOAD <img :src="'../assets/img/coverage/Download.png'"></div>
      


      <!-- full -->
      <div v-if="full_active" class="statement-header-wrapper">
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
        <div class="statement-transaction-header">
          <div>
            <div class="total-transactions-container">
              <span> </span> Total Transactions
            </div>
            <div class="total-spent-container"> Total Spent
              <span>S$ <span>0.00</span> </span> 
            </div>
          </div>
          <div>
            <div class="btn-transaction-container">
              <button @click="netType(0, 'In-network')" v-bind:class="{'active': networkType.value === 0}">
                IN-NETWORK <br> TRANSACTIONS
              </button>
              <button @click="netType(1, 'In-network')" v-bind:class="{'active': networkType.value === 1}">
                E-CLAIM TRANSACTIONS <br> (OUT-OF-NETWORK)
              </button>
            </div>
          </div>
          <div>
            <div class="download-statement-container">
              <span>Download Statement</span>
              <button class="btn-pdf">PDF</button>
              <button class="btn-csv">CSV</button>
            </div>
          </div>
        </div>
      </div> 
      

  	</div>

    <div class="statement-title-col">
      <h4>Statement for 
        <span>1 June</span> - <span>30 June</span> 
        <span> 2019</span>
      </h4>
    </div>

    
    <div class="statement-overview-container">
      <div v-if="overview_active" class="mobile-preview btn">
        <button class="btn-info"><i class="fa fa-eye" aria-hidden="true"></i> Preview</button>
      </div>
      <!-- overview transaction -->
      <transition name="fade">
        <div v-if="overview_active" class="statement-wrapper">
          <div class="statement-header">
            <div class="mednefits-img-container">
              <img :src="'../assets/img/mednefits_logo_v3_(white).png'">
            </div>
            <div class="invoice-details-container">
              <h2>INVOICE</h2>
              <div class="medicloud-pte-text">Medicloud Pte Ltd</div>
              <div>7 Temasek Boulevard</div>
              <div>#18-02 Suntec Tower</div>
              <div>038987</div>
              <div class="country-text">Singapore</div>
              <div>+65 6254 7889</div>
              <div>mednefits.com</div>
            </div>
          </div>

          <div v-if="false" class="no-transaction-month-container">
            <div>No Transactions for this Month.</div>
            <div>( <span>1 June</span> - <span>30 June </span> <span>2019</span> )</div>
          </div>

          <div class="transaction-month-container">

            <div class="benefits-statement-container">
              <div class="benefits-statement-col-1">
                <div>Team Benefits Statement</div>
                <div>Mednefits</div>
                <div class="company-address">
                  7 Temasek Boulevard #18-02 Suntec T
                </div>
                <div>Fillbert Singapore</div>
                <div>62547889</div>
                <div>filbert@mednefits.com</div>
              </div>
              <div class="benefits-statement-col-2">
                <div>
                  <label>Statement Number:</label>
                  <span>MC00000036</span>
                </div>
                <div>
                  <label>Statement Date:</label>
                  <span>1 Apr 2019</span>
                </div>
                <div>
                  <label>Payment Due:</label>
                  <span>16 Apr 2019</span>
                </div>
                <div>
                  <label>Amount Due (SGD):</label>
                  <span>$270.00</span>
                </div>
              </div>
            </div>

            <div class="summary-charges-container">
              <h4>Summary of Charges</h4>

              <div class="charges-row">
                <div class="spending-account-container">
                  In-Network Spending Account Usage
                  <span class="pull-right-amount">S$ 153</span>
                </div>
                <div class="statement-month-container">
                  Statement for
                  <span>1 March</span> - 
                  <span>31 March</span>
                  <span> 2019</span>
                </div>
                <div class="charges-lite-plan">
                  Consultation Spent - General Practitioner 
                  <span class="pull-right-amount">S$ 117.00</span>
                </div>
              </div>

              <div class="charges-row sub-total-container">
                Sub Total
                <span class="pull-right-amount">S$ 270.00</span>
              </div>

              <div class="total-due-container">
                Total Due <span class="pull-right-amount">S$ 270.00</span>
              </div>
            </div>

            <div class="payment-information-container">
              <div class="payment-info-title">Payment Information</div>

              <div class="cheque-payment-container">
                <div class="cheque-bank-title">Cheque Payment:</div>
                <div class="cheque-detail">Medicloud Pte Ltd</div>
                <div class="cheque-detail">7 Temasek Boulevard #18-02 Suntec Tower</div>
                <div class="cheque-detail">038987 Singapore</div>
              </div>

              <div class="bank-transfer-container">
                <div class="cheque-bank-title">Bank Transfer:</div>
                <div class="bank-detail">Bank: UOB</div>
                <div class="bank-detail">Account Name: Medicloud Pte Ltd</div>
                <div class="bank-detail">Account Number: 3743069399</div>
              </div>
            </div>

          </div>

        </div>
      </transition>

      <!-- full transaction -->
      <transition name="fade">
        <div v-if="full_active" class="transaction-table-container">
          
          <div v-if="networkType.value === 0" class="in-network-table">
            <table>
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>ITEM/SERVICE</th>
                  <th>PROVIDER</th>
                  <th>TOTAL AMOUNT</th>
                  <th>MEDICINE & TREATMENT</th>
                  <th>CONSULTATION</th>
                  <th>EMPLOYEE</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr @click="toggleDetails()">
                  <td>
                    <span>29 April 2019, 10:52am</span>
                  </td>
                  <td>
                    <span>General Practitioner - Medicine & Treatment</span>
                  </td>
                  <td>
                    <span>Dover Medical Centre</span>
                  </td>
                  <td>
                    S$ <span>24.41</span>
                  </td>
                  <td>10.50</td>
                  <td>13.91</td>
                  <td>
                    <span>Dith Tan</span>
                    <div class="spouse-member">
                      <span>Child </span> of <span>Filbert Tan</span>
                    </div>
                  </td>
                  <td>
                    <a>
                      <i class="fa fa-angle-right transition-easeInOutCubic-300ms" :class="{'fa-angle-down-active': showTransDetails === true}"></i>
                    </a>
                  </td>
                </tr>
                <transition name="fade">
                  <tr v-if="showTransDetails" class="in-network-subtr">
                    <td colspan="8">
                      <div class="provider-item-wrapper">
                        <img :src="'https://res.cloudinary.com/www-medicloud-sg/image/upload/v1439208475/medilogo_cn6d0x.png'">
                        <div>Dover Medical Centre</div>
                        <div class="service-box">
                          <img :src="'https://res.cloudinary.com/dzh9uhsqr/image/upload/v1514515238/tidzdguqbafiq4pavekj.png'">
                          <label>
                            <span>General Practitioner</span>
                          </label>
                        </div>
                      </div>
                      <div class="transac-details-wrapper">
                        <div class="transac-details">
                          <div>
                            <label>MEMBER</label>
                            <span>Dith Tan</span>
                          </div>
                          <div>
                            <label>EMPLOYEE</label>
                            <span>Filbert Tan</span>
                          </div>
                          <div class="dependent-relationship-container">
                            <label>DEPENDENT RELATIONSHIP</label>
                            <span>Child</span>
                          </div>
                          <div>
                            <label>DATE</label>
                            <span>29 April 2019, 10:52am</span>
                          </div>
                          <div>
                            <label>TRANSACTION #</label>
                            <span>DOV000940</span>
                          </div>
                          <div>
                            <label>ITEM/SERVICE</label>
                            <div class="desc-wrapper">
                              <span>General Practitioner - Medicine & Treatment</span>
                            </div>  
                          </div>
                          <div>
                            <label>TOTAL AMOUNT</label>
                            <span>S$ 24.41</span>
                          </div>
                          <div>
                            <div class="service-container">
                              <label>
                                <div class="credit-container">
                                  <span>Credit</span>
                                </div>  
                              </label>
                              <div class="desc-wrapper">
                                <span>Medicine & Treatment</span>
                                <div>S$ <span>10.50</span></div>
                              </div>
                            </div>
                            <div class="service-container">
                              <label>
                                <div class="credit-container">
                                  <span>Credit</span>
                                </div>  
                              </label>
                              <div class="desc-wrapper">
                                <span>Consultation</span>
                                <div>S$ <span>13.91</span></div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <label>PAYMENT TYPE</label>
                            <span>In-Network</span>
                          </div>
                        </div>
                      </div>
                      <div class="download-receipt-container">
                        <button class="btn-download-receipt disabled">Download Receipt</button>
                      </div>
                    </td>
                  </tr>
                </transition>
              </tbody>
            </table>
          </div>

          <div v-if="networkType.value === 1" class="out-network-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>APPROVED DATE</th>
                  <th>CLAIM DATE</th>
                  <th>CLAIM TYPE</th>
                  <th>PROVIDER</th>
                  <th>TOTAL AMOUNT</th>
                  <th>EMPLOYEE</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr @click="toggleDetails()">
                  <td>
                    <label class="status-text approved">Approved</label>
                  </td>
                  <td>
                    <span>16 April 2019</span>
                  </td>
                  <td>
                    <span>16 April 2019</span>
                  </td>
                  <td>
                    <span>Traditional Chinese Medicine</span>
                  </td>
                  <td>
                    <span>Test TCM</span>
                  </td>
                  <td>S$ <span>58.00</span></td>
                  <td>
                    <span>Calvin Lee</span>
                    <div class="spouse-member">
                      <span>Child </span> of <span>Filbert Tan</span>
                    </div>
                  </td>
                  <td>
                    <a>
                      <i class="fa fa-angle-right transition-easeInOutCubic-300ms" :class="{'fa-angle-down-active': showTransDetails === true}"></i>
                    </a>
                  </td>
                </tr>
                <transition name="fade">
                  <tr v-if="showTransDetails" class="in-network-subtr">
                    <td colspan="8">
                      <div class="status-left-wrapper">
                        <div class="status-box-left">
                          <div class="status_text">Approved</div>
                          <div class="claim-date-text">Claim Date: <span>16 April 2019 05:09 PM</span></div>
                        </div>

                        <!-- this will appear when the status is rejected -->
                        <!-- <div class="reason-container">
                          <div class="label">REASON:</div>
                          <div>qwe</div>
                        </div> -->
                      </div>
                      <div class="transac-details-wrapper">
                        <div class="transac-details">
                          <div>
                            <label>MEMBER</label>
                            <span>Dith Tan</span>
                          </div>
                          <div>
                            <label>EMPLOYEE</label>
                            <span>Filbert Tan</span>
                          </div>
                          <div class="dependent-relationship-container">
                            <label>DEPENDENT RELATIONSHIP</label>
                            <span>Child</span>
                          </div>
                          <div>
                            <label>APPROVED DATE</label>
                            <span>09 April 2019</span>
                          </div>
                          <div>
                            <label>CLAIM DATE</label>
                            <span>09 April 2019</span>
                          </div>
                          <div>
                            <label>VISIT DATE</label>
                            <span>01 April 2019, 09:59 AM</span>
                          </div>
                          <div>
                            <label>TRANSACTION #</label>
                            <span>MNF000309</span>
                          </div>
                          <div>
                            <label>CLAIM TYPE</label>
                            <span>Health Screening</span>
                          </div>
                          <div>
                            <label>PROVIDER</label>
                            <span>TEST</span>
                          </div>
                          <div>
                            <label>CLAIM AMOUNT</label>
                            <span>S$ 50.00</span>
                          </div>
                          <div>
                            <label>PAYMENT TYPE</label>
                            <span>E-Claim</span>
                          </div>
                        </div>
                      </div>
                      <div class="download-receipt-container">
                        <button class="btn-download-receipt">Upload Receipt</button>
                        <button class="btn-download-receipt">Download Receipt</button>
                        <div class="trans-receipts-wrapper">
                          <div class="click-box-wrapper">
                            <div class="click-box">
                              <i class="fa fa-plus"></i>
                            </div>
                            <img :src="'https://res.cloudinary.com/dzh9uhsqr/image/upload/v1557387401/nhulevaerr46wlfy07d7.png'">
                          </div>
                          <div class="click-box-wrapper">
                            <div class="click-box">
                              <i class="fa fa-plus"></i>
                            </div>
                            <img :src="'https://res.cloudinary.com/dzh9uhsqr/image/upload/v1557387401/nhulevaerr46wlfy07d7.png'">
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
      </transition>
    </div>

  </div>
</template>

<script>
import statement from "@/components/company/statement";

export default statement;
</script>

