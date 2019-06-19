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

						<span>Choose how you want your statement to be shown</span>

						<div class="btn-statement-wrapper">
							<button @click="statementType(0, 'overview')" v-bind:class="{'active': viewStatementType.value === 0}" class="btn-spending-type btn-overview">Overview</button>
							<button @click="statementType(1, 'full')" v-bind:class="{'active': viewStatementType.value === 1}" class="btn-spending-type btn-full">Full</button>
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

