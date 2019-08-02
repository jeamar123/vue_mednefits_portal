<template>
	<div class="clinic-staff-wrapper">
		<div class="staff-side-list">

			<div class="staff-header-list">
				<span>1 Doctors</span>
				<div class="add-img-container">
					<a>
						<img :src="'../assets/img/ico_add new.svg'">
					</a>
				</div>
			</div>

			<div class="staff-doctor-list-container">
				<div class="staff-doctor-container">
					<img :src="'../assets/img/doctor.png'">
					<span>gp@gmail.com</span>
				</div>
			</div>

		</div>
		<div class="detail-wrapper">
			<div class="detail-header-container">
				<ul>
					<li>
						<a v-bind:class="{'active': detail_active.value === 0}" @click="selectDetail(0,'details')">DETAILS</a>
					</li>
					<li>
						<a v-bind:class="{'active': detail_active.value === 1}" @click="selectDetail(1,'services')">SERVICES</a>
					</li>
					<li>
						<a v-bind:class="{'active': detail_active.value === 2}" @click="selectDetail(2,'working-hours')">WORKING HOURS</a>
					</li>
					<li>
						<a v-bind:class="{'active': detail_active.value === 3}" @click="selectDetail(3,'breaks')">BREAKS</a>
					</li>
					<li>
						<a v-bind:class="{'active': detail_active.value === 4}" @click="selectDetail(4,'time-off')">TIME-OFF</a>
					</li>
				</ul>

				<span class="trash-img-container">
					<a>
						<i class="fa fa-trash" aria-hidden="true"></i>
					</a>
				</span>	
			</div>

			<div class="detail-body-container">
				<div v-if="detail_active.value === 0" class="details-info-container">
					<div>
						<div class="staff-row-container">
							<div>
								<img :src="'../assets/img/img-portfolio-place.png'">
							</div>
							<div>
								<input type="text" placeholder="Doctor Name">
							</div>
						</div>
						<div class="staff-row-container">
							<div class="text-label">
								<span>Qualification</span>
							</div>
							<div>
								<input type="text" placeholder="Doctor Qualification">
							</div>
						</div>
						<div class="staff-row-container">
							<div class="text-label">
								<span>Designation</span>
							</div>
							<div>
								<input type="text" placeholder="Doctor Designation">
							</div>
						</div>
						<div class="staff-row-container">
							<div class="text-label">
								<span>Mobile</span>
							</div>
							<div class="phone-number-input-wrapper">
								<span class="input-group-addon">+65</span>
								<input type="text" placeholder="Phone Number">
							</div>
						</div>
						<div class="staff-row-container">
							<div class="text-label">
								<span>Email</span>
							</div>
							<div>
								<input type="text" placeholder="Example@gmail.com">
							</div>
						</div>
						<div class="staff-row-container">
							<div class="text-label">
								<span>CS Emails to</span>
							</div>
							<div>
								<input type="text" placeholder="Doctor CC E-Mail">
							</div>
						</div>
						<div class="staff-row-container btn-update-container line-break">
							<div>
								<button class="btn-staff">Update</button>
							</div>
						</div>
						<div class="staff-row-container line-break">
							<div class="text-label">
								<span>PIN</span>
							</div>
							<div>
								<input type="text" placeholder="4 Digit PIN">
							</div>
						</div>
						<div class="staff-row-container line-break">
							<div class="text-label">
								<span>Google Sync</span>
							</div>
							<label class="switch">
			          <input type="checkbox" checked="">
			          <span class="slider">
			            <span class="off">On</span>
			            <span class="on">Off</span>
			          </span>
			        </label>
						</div>
					</div>
				</div>

				<div v-if="detail_active.value === 1">
					<h1>SERVICES</h1>
				</div>

				<div v-if="detail_active.value === 2">
					<h1>WORKING HOURS</h1>
				</div>

				<div v-if="detail_active.value === 3">
					<h1>BREAKS</h1>
				</div>

				<div v-if="detail_active.value === 4">
					<h1>TIME-OFF</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import clinicStaff from "@/components/clinic/settings/clinic-staff";

export default clinicStaff;
</script>