<template>
  <div class="statement-wrapper">

  	<div class="container">
  		<div class="statement-container">
  			<div>
  				<span class="timeframe-title">Select a timeframe</span>
  				<span class="year-selector"><a class="active">This year</a></span>
  				<span class="year-selector"><a>Last year</a></span>
  				<span class="year-selector"><a>Custom</a></span>
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
                E- CLAIM TRANSACTIONS <br> (OUT-OF-NETWORK)
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
        <span>2019</span>
      </h4>
    </div>
    <div class="statement-overview-container">
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
    </div>
    
  </div>
</template>

<script>
import statement from "@/components/company/statement";

export default statement;
</script>

