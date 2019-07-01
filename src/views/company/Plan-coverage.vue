<template>
	<div class="plan-coverage-wrapper">
		<div class="container">
			<div class="plan-coverage-title-header">
				<h1>Plan Coverage</h1>
			</div>
			<div class="plan-coverage-info-wrapper">
				<div class="account-biling-link-list">
  				<ul>
						<li v-bind:class="{'active': $route.name === 'PlanBenefits'}">
							<router-link to='/company/plan-coverage'>
								Benefits
							</router-link>
						</li>
						<li v-bind:class="{'active': $route.name === 'PlanLocalNetwork'}">
							<router-link to='/company/local-network-partners'>
								Local Network Partners
							</router-link>
						</li>
					</ul>
  			</div>
  			<div class="info-container">
					<router-view name='plan' />
  			</div>
			</div>	
		</div>	
	</div>
</template>

<script>
import planCoverage from "@/components/company/plan-coverage.vue";

export default planCoverage;
</script>
