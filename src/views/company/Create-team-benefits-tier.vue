<template>
	<div class="benefits-tier-wrapper">
		<div class="benefits-tier-content-wrapper">
		  <h1>Create team benefits tiers.</h1>

		  <div v-if="false" class="add-tier-container">
		  	<h4>Add a tier</h4>
		  	<button><img :src="'../assets/img/plus-gray.png'"></button>
		  </div>

		  <div v-if="true" class="tier-item-container">
		  	<div class="tier-item-form">
					<div class="tier-item-header">
						<h4>Tier <span>1</span></h4>
						<img :src="'../assets/img/icons/close.svg'">
					</div>
					<div class="tier-item-body">
						<div class="input-wrapper">
							<label>Medical annual cap</label>
							<div class="input-container">
								<input type="number" min="0">
								<div class="icon-item">
									S
									<i class="fa fa-usd icon"></i>
								</div>
							</div>
						</div>
						<div class="input-wrapper">
							<label>Wellness annual cap</label>
							<div class="input-container">
								<input type="number" min="0">
								<div class="icon-item">
									S
									<i class="fa fa-usd icon"></i>
								</div>
							</div>
						</div>
						<div class="input-wrapper gp-toggle">
							<label>Add GP cap per visit?</label>
							<div class="btn-wrapper">
								<button class="active">Yes</button>
								<button >No</button>
							</div>
						</div>
						<div class="input-wrapper">
							<label>GP cap per visit</label>
							<div class="input-container">
								<input type="number" min="0">
								<div class="icon-item">
									S
									<i class="fa fa-usd icon"></i>
								</div>
							</div>
						</div>
						<div class="input-wrapper">
							<label>Employee headcount</label>
							<div class="input-container">
								<input type="number" min="0">
								<div class="icon-item">
									<i class="fa fa-users icon"></i>
								</div>
							</div>
						</div>
						<div class="input-wrapper">
							<label>Dependent headcount</label>
							<div class="input-container">
								<input type="number" min="0">
								<div class="icon-item">
									<i class="fa fa-users icon"></i>
								</div>
							</div>
						</div>
						<div class="tier-item-button">
							<button>Save &amp; Continue</button>
						</div>
					</div>
				</div>
		  </div>

		  <div>
		  	
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