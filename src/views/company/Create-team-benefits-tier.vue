<template>
	<div>
		<div class="benefits-tier-wrapper">
		  <h1>Create team benefits tiers.</h1>

			<!-- button add tier -->
		  <div v-if="isTierBtn && tierStorage.length == 0" class="add-tier-wrapper">
		  	<h4>Add a tier</h4>
		  	<button @click="addTierBtn()"><img :src="'../assets/img/plus-gray.png'"></button>
		  </div>

			<!-- forms for add tier -->
		  <div v-if="isTierInput" class="tier-item-wrapper">
		  	<div class="tier-item-form">
					<div class="tier-item-header">
						<h4>Tier <span>{{tierCounter}}</span></h4>
						<img v-if="!isEditActive" @click="backBtn('add')" :src="'../assets/img/icons/close.svg'">
						<img v-if="isEditActive" @click="backBtn('edit')" :src="'../assets/img/icons/close.svg'">
					</div>
					<div class="tier-item-body">
						<div class="input-wrapper">
							<label>Medical annual cap</label>
							<div class="input-container">
								<input type="number" min="0" v-model="tierDetials.medCap">
								<div class="icon-item">
									S
									<i class="fa fa-usd icon"></i>
								</div>
							</div>
						</div>
						<div class="input-wrapper">
							<label>Wellness annual cap</label>
							<div class="input-container">
								<input type="number" min="0" v-model="tierDetials.wellCap">
								<div class="icon-item">
									S
									<i class="fa fa-usd icon"></i>
								</div>
							</div>
						</div>
						<div class="input-wrapper gp-toggle">
							<label>Add GP cap per visit?</label>
							<div class="btn-wrapper">
								<button v-bind:class="{'active' : gp_cap_status == true }" @click="toggleGPcapStatus(true)">Yes</button>
								<button v-bind:class="{'active' : gp_cap_status == false }" @click="toggleGPcapStatus(false)">No</button>
							</div>
						</div>
						<div v-if="gp_cap_status" class="input-wrapper">
							<label>GP cap per visit</label>
							<div class="input-container">
								<input type="number" min="0" v-model="tierDetials.gpCap">
								<div class="icon-item">
									S
									<i class="fa fa-usd icon"></i>
								</div>
							</div>
						</div>
						<div class="input-wrapper">
							<label>Employee headcount</label>
							<div class="input-container">
								<input type="number" min="0" v-model="tierDetials.empCount">
								<div class="icon-item">
									<i class="fa fa-users icon"></i>
								</div>
							</div>
						</div>
						<div class="input-wrapper">
							<label>Dependent headcount</label>
							<div class="input-container">
								<input type="number" min="0" v-model="tierDetials.depCount">
								<div class="icon-item">
									<i class="fa fa-users icon"></i>
								</div>
							</div>
						</div>
						<div class="tier-item-button">
							<button v-if="isEditActive" class="btn-delete-tier">Remove</button>
							<button v-if="!isEditActive" @click="saveTierData('save')">Save &amp; Continue</button>
							<button v-if="isEditActive" @click="saveTierData('edit')">Save &amp; Continue</button>
						</div>
					</div>
				</div>
		  </div>

		  <div v-if="isTierSummary && tierStorage.length != 0" class="tier-summary-wrapper">
		  	<h4>Summary</h4>
		  	<h4>Choose the tier you wish to enroll</h4>
		  	<div class="summary-details-wrapper">
		  		<div class="summary-details" v-for="(tier,index) in tierStorage" v-bind:key="tier.id">
		  			<div class="tier-summary-btn">
		  				<input type="radio" :id="'tier' +(index+1)" name="radio" :value="'tier' +(index+1)">
							<label :for="'tier' + (index+1)">
								<div>
									Tier <span>{{index +1}} </span> 
									<span>0</span>/<span>{{parseInt(tier.empCount) + parseInt(tier.empCount)}}</span>
								</div>
							</label>
							<span @click="editTierData(index)">Edit</span>
						</div>
						<div class="clinic-type-wrapper">
							<div class="clinic-type-container">
								<span class="label">Medical annual cap: </span>
								<span class="text">S$ <span>{{tier.medCap}}</span></span>
							</div>
							<div class="clinic-type-container">
								<span class="label">Wellness annual cap: </span>
								<span class="text">S$ <span>{{tier.wellCap}}</span></span>
							</div>
							<div class="clinic-type-container">
								<span class="label">GP cap per visit: </span>
								<span class="text">S$ <span>{{tier.gpCap || 0}}</span></span>
							</div>	
						</div>
		  		</div>
		  		<!-- <div class="summary-details">
		  			<div class="tier-summary-btn">
		  				<input type="radio" id="radio_2" name="radio">
							<label for="radio_2">
								<div>
									Tier <span>1 </span> 
									<span>0</span>/<span>2</span>
								</div>
							</label>
							<span @click="editTierData()">Edit</span>
						</div>
						<div class="clinic-type-wrapper">
							<div class="clinic-type-container">
								<span class="label">Medical annual cap: </span>
								<span class="text">S$ <span>1</span></span>
							</div>
							<div class="clinic-type-container">
								<span class="label">Wellness annual cap: </span>
								<span class="text">S$ <span>1</span></span>
							</div>
							<div class="clinic-type-container">
								<span class="label">GP cap per visit: </span>
								<span class="text">S$ <span>0</span></span>
							</div>	
						</div>
		  		</div> -->
		  	</div>

		  	<div class="add-tier-wrapper">
			  	<h4>Add a tier</h4>
			  	<button @click="addTierBtn()"><img :src="'../assets/img/plus-gray.png'"></button>
			  </div>
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