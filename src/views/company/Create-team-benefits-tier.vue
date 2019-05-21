<template>
	<div class="benefits-tier-wrapper">
		<div class="benefits-tier-content-wrapper">
		  <h1>Create team benefits tiers.</h1>
		  <div class="add-tier-container">
		  	<h4>Add a tier</h4>
		  	<button><img :src="'../assets/img/plus-gray.png'"></button>
		  </div>
		</div>

		<div class="prev-next-button-container">
			<div class="button-container">
				<button class="back-btn" @click="$router.go(-1)">Back</button>
				<button class="next-btn btn-next-disabled">Next</button>
			</div>
		</div>
	</div>
</template>

<script>
import createTeamBenefitsTier from "@/components/company/create-team-benefits-tier"

export default createTeamBenefitsTier;
</script>