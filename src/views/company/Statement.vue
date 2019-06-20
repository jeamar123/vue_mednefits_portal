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
      
    </div>
    
  </div>
</template>

<script>
import statement from "@/components/company/statement";

export default statement;
</script>

