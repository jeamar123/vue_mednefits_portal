<template>
  <div class="activity-wrapper">

  	<div class="container">

  		<div class="activity-container">
    		<span class="timeframe-title">Select a timeframe</span>

    		<div class="activity-header-calendar">
					<div class="date-selection-container">

						<div class="custom-date-selector">
							<i class="fa fa-calendar"></i>
							<input type="text" value="01/06/2019" readonly>
							<i class="fa fa-caret-down"></i>
						</div> 

						<span><i class="fa fa-arrow-right"></i></span>
						
						<div class="custom-date-selector">	
							<i class="fa fa-calendar"></i>
							<input type="text" value="04/06/2019" readonly>
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

				</div>

    	</div>

    </div>
  </div>
</template>

<script>
import activity from "@/components/company/activity";

export default activity;
</script>

