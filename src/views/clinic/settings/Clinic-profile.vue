<template>
	<div class="clinic-profile-wrapper">
		<div class="profile-side-list">
			<div class="configure-container">
				<span>Configure</span>
				<div v-bind:class="{'active': detail_active.value === 0}" @click="selectProfileDetail(0,'clinic-details')">
					<img :src="'../assets/img/clinic/Clinic Details.png'">
					<span>CLINIC DETAILS</span>
				</div>
				<div v-bind:class="{'active': detail_active.value === 1}" @click="selectProfileDetail(1,'business-hours')">
					<img :src="'../assets/img/clinic/Business Hours.png'">
					<span>BUSINESS HOURS</span>
				</div>
				<div v-bind:class="{'active': detail_active.value === 2}" @click="selectProfileDetail(2,'password')">
					<img :src="'../assets/img/clinic/Password.png'">
					<span>PASSWORD</span>
				</div>
				<div v-bind:class="{'active': detail_active.value === 3}" @click="selectProfileDetail(3,'payment-details')">
					<img :src="'../assets/img/clinic/Payment Details.png'">
					<span>PAYMENT DETAILS</span>
				</div>
			</div>
			<div class="integrate-container">
				<span>Integrate</span>
				<div v-bind:class="{'active': detail_active.value === 4}" @click="selectProfileDetail(4,'widget')">
					<img :src="'../assets/img/clinic/Widget.png'">
					<span>WIDGET</span>
				</div>
				<div v-bind:class="{'active': detail_active.value === 5}" @click="selectProfileDetail(5,'qr-code')">
					<img :src="'../assets/img/clinic/qr-code.png'">
					<span>QR CODE</span>
				</div>
			</div>
		</div>

		<div class="profile-detail-container">
			<div v-if="detail_active.value === 0">
				<div class="medicloud-booking-header">
					<h4>Configure Your Medicloud Booking Page</h4>
				</div>
				<div class="medicloud-booking-body">
					<form>
						<div>
							<div class="clinic-row-container">
								<div class="text-label">
									<span>Logo / Photo</span>
								</div>
								<div>
									<img :src="'https://res.cloudinary.com/dzh9uhsqr/image/upload/v1549795986/up0ebkyrragfte9bany7.jpg'">
								</div>
							</div>
							<div class="clinic-row-container">
								<div class="text-label">
									<span>Clinic Name</span>
								</div>
								<div>
									<input placeholder="Clinic Name">
								</div>
							</div>
							<div class="clinic-row-container">
								<div class="text-label">
									<span>Speciality</span>
								</div>
								<div>
									<button>General Practitioner</button>
								</div>
							</div>
							<div class="clinic-row-container">
								<div class="text-label">
									<span>MRT</span>
								</div>
								<div>
									<button>Jurong East <i class="fa fa-caret-down"></i></button>
								</div>
							</div>
							<div class="clinic-row-container">
								<div class="text-label">
									<span>Address</span>
								</div>
								<div>
									<input placeholder="Address">
								</div>
							</div>
							<div class="clinic-row-container">
								<div class="text-label">
									<label>Street</label>
								</div>
								<div>
									<input placeholder="Street">
								</div>
							</div>
							<div class="clinic-row-container">
								<div class="text-label">
									<span>State</span>
								</div>
								<div>
									<input placeholder="State">
								</div>
							</div>
							<div class="clinic-row-container">
								<div class="text-label">
									<span>District</span>
								</div>
								<div>
									<input placeholder="District">
								</div>
							</div>
							<div class="clinic-row-container">
								<div class="text-label">
									<span>Postal Code</span>
								</div>
								<div>
									<input placeholder="Postal Code">
								</div>
							</div>
						</div>
						<div>
							<div class="clinic-row-container">
								<div class="text-label">
									<span>Country</span>
								</div>
								<div>
									<input placeholder="Country">
								</div>
							</div>
							<div class="clinic-row-container">
								<div class="text-label">
									<span>Latitude</span>
								</div>
								<div>
									<input placeholder="Latitude">
								</div>
							</div>
							<div class="clinic-row-container">
								<div class="text-label">
									<span>Longtitude</span>
								</div>
								<div>
									<input placeholder="Longtitude">
								</div>
							</div>
							<div class="clinic-row-container">
								<div class="text-label">
									<span>Description</span>
								</div>
								<div>
									<textarea placeholder="Description"></textarea>
								</div>
							</div>
							<div class="clinic-row-container">
								<div class="phone-number-input-wrapper">
									<div class="text-label">
										<span>Phone</span>
									</div>
								</div>
								<div class="phone-number-input-wrapper">
									<span class="input-group-addon">+65</span>
									<input type="text" placeholder="Phone Number">
								</div>
							</div>
							<div class="clinic-row-container">
								<div class="text-label">
									<span>Communication Email</span>
								</div>
								<div>
										<input placeholder="Communication Email">
									</div>
							</div>
							<div class="clinic-row-container">
								<div class="text-label">
									<span>Website</span>
								</div>
								<div>
										<input placeholder="Website">
									</div>
							</div>
							<div class="clinic-row-container">
								<div class="text-label">
									<span>Personalized heading</span>
								</div>
								<div>
									<input placeholder="Personalized heading">
								</div>
							</div>
							<div class="clinic-row-container">
								<div class="text-label">
									<span>Personalized Message</span>
								</div>
								<div>
									<textarea placeholder="Personalized Message"></textarea>
								</div>
							</div>
						</div>
					</form>
					<div class="clinic-row-container">
						<div></div>
						<button class="btn-update-changes">Update Changes</button>
					</div>
				</div>
			</div>
			<div v-if="detail_active.value === 1">
				<div class="business-hours-header">
					<ul>
						<li v-bind:class="{'active': business_active.value === 0}" @click="selectBusinessHours(0,'business-hours')">
							<a>BUSINESS HOURS</a>
						</li>
						<li v-bind:class="{'active': business_active.value === 1}" @click="selectBusinessHours(1,'breaks')">
							<a>BREAKS</a>
						</li>
						<li v-bind:class="{'active': business_active.value === 2}" @click="selectBusinessHours(2,'time-off')">
							<a>TIME-OFF</a>
						</li>
					</ul>
				</div>

				<div class="business-hours-body">
					<div v-if="business_active.value === 0">
						<div class="time-zone-container">
							<div>
								<span>Time Zone</span>
							</div>
							<div>
								<p>Your Time Zone is set to <u>SINGAPORE (UTC+08:00)</u> .</p>
							</div>
						</div>
						<div class="clinic-opening-container">
							<h1>
								Clinic Opening Times :
							</h1>
							<div>
								<div v-for="( list, index ) in weekDayNames" class="working-row-container">
									<div class="day-container">
										<span>{{ list }}</span>
									</div>
									<label class="clinic-switch-container">
					          <input type="checkbox" checked="">
					          <span class="slider">
					            <span class="off">On</span>
					            <span class="on">Off</span>
					          </span>
					        </label>
									<div class="timepicker-container">
										<div>
											<span v-if="false">08:00AM</span>
											<ul v-if="false" class="dropdown-menu">
												<li>
													<a>12:00 AM</a>
												</li>
												<li>
													<a>01:00 AM</a>
												</li>
												<li>
													<a>02:00 AM</a>
												</li>
												<li>
													<a>03:00 AM</a>
												</li>
												<li>
													<a>04:00 AM</a>
												</li>
												<li>
													<a>05:00 AM</a>
												</li>
												<li>
													<a>06:00 AM</a>
												</li>
												<li>
													<a>07:00 AM</a>
												</li>
												<li>
													<a>09:00 AM</a>
												</li>
												<li>
													<a>10:00 AM</a>
												</li>
												<li>
													<a>11:00 AM</a>
												</li>
												<li>
													<a>12:00 PM</a>
												</li>
												<li>
													<a>01:00 PM</a>
												</li>
												<li>
													<a>02:00 PM</a>
												</li>
												<li>
													<a>03:00 PM</a>
												</li>
												<li>
													<a>04:00 PM</a>
												</li>
												<li>
													<a>05:00 PM</a>
												</li>
												<li>
													<a>06:00 PM</a>
												</li>
												<li>
													<a>07:00 PM</a>
												</li>
												<li>
													<a>08:00 PM</a>
												</li>
												<li>
													<a>09:00 PM</a>
												</li>
												<li>
													<a>10:00 PM</a>
												</li>
												<li>
													<a>11:00 PM</a>
												</li>
											</ul>

											<select>
												<option>12:00AM</option>
												<option>12:00AM</option>
												<option>12:00AM</option>
												<option>12:00AM</option>
												<option>12:00AM</option>
												<option>12:00AM</option>
												<option>12:00AM</option>
												<option>12:00AM</option>
												<option>12:00AM</option>
											</select>
										</div>
										
										<span>to</span>
										<div>
											<span v-if="false">05:30PM</span>
											<ul v-if="false" class="dropdown-menu">
												<li>
													<a>12:00 AM</a>
												</li>
												<li>
													<a>01:00 AM</a>
												</li>
												<li>
													<a>02:00 AM</a>
												</li>
												<li>
													<a>03:00 AM</a>
												</li>
												<li>
													<a>04:00 AM</a>
												</li>
												<li>
													<a>05:00 AM</a>
												</li>
												<li>
													<a>06:00 AM</a>
												</li>
												<li>
													<a>07:00 AM</a>
												</li>
												<li>
													<a>09:00 AM</a>
												</li>
												<li>
													<a>10:00 AM</a>
												</li>
												<li>
													<a>11:00 AM</a>
												</li>
												<li>
													<a>12:00 PM</a>
												</li>
												<li>
													<a>01:00 PM</a>
												</li>
												<li>
													<a>02:00 PM</a>
												</li>
												<li>
													<a>03:00 PM</a>
												</li>
												<li>
													<a>04:00 PM</a>
												</li>
												<li>
													<a>05:00 PM</a>
												</li>
												<li>
													<a>06:00 PM</a>
												</li>
												<li>
													<a>07:00 PM</a>
												</li>
												<li>
													<a>08:00 PM</a>
												</li>
												<li>
													<a>09:00 PM</a>
												</li>
												<li>
													<a>10:00 PM</a>
												</li>
												<li>
													<a>11:00 PM</a>
												</li>
											</ul>
											<select>
												<option>12:00AM</option>
												<option>12:00AM</option>
												<option>12:00AM</option>
												<option>12:00AM</option>
												<option>12:00AM</option>
												<option>12:00AM</option>
												<option>12:00AM</option>
												<option>12:00AM</option>
												<option>12:00AM</option>
											</select>
										</div>	
									</div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="business_active.value === 1">
						<div class="time-zone-container">
							<div>
								<span>Time Zone</span>
							</div>
							<div>
								<p>Your Time Zone is set to <u>SINGAPORE (UTC+08:00)</u> .</p>
							</div>
						</div>
						<div class="breaks-clinic-container">
							<h1>
								Breaks For You Clinic :
							</h1>

							<div class="breaks-body-info-container">
								<div v-for="( list, index ) in  dayBreakNames" class="working-row-container">
									<div class="day-container">
										<span>{{ list }}</span>
									</div>
									<div>
										<button>Add Break</button>
									</div>
									<div class="break-timepicker-wrapper">
										<div>
											<div class="timepicker-container">
												<div>
													<span v-if="false">08:00AM</span>
													<ul v-if="false" class="dropdown-menu">
														<li>
															<a>12:00 AM</a>
														</li>
														<li>
															<a>01:00 AM</a>
														</li>
														<li>
															<a>02:00 AM</a>
														</li>
														<li>
															<a>03:00 AM</a>
														</li>
														<li>
															<a>04:00 AM</a>
														</li>
														<li>
															<a>05:00 AM</a>
														</li>
														<li>
															<a>06:00 AM</a>
														</li>
														<li>
															<a>07:00 AM</a>
														</li>
														<li>
															<a>09:00 AM</a>
														</li>
														<li>
															<a>10:00 AM</a>
														</li>
														<li>
															<a>11:00 AM</a>
														</li>
														<li>
															<a>12:00 PM</a>
														</li>
														<li>
															<a>01:00 PM</a>
														</li>
														<li>
															<a>02:00 PM</a>
														</li>
														<li>
															<a>03:00 PM</a>
														</li>
														<li>
															<a>04:00 PM</a>
														</li>
														<li>
															<a>05:00 PM</a>
														</li>
														<li>
															<a>06:00 PM</a>
														</li>
														<li>
															<a>07:00 PM</a>
														</li>
														<li>
															<a>08:00 PM</a>
														</li>
														<li>
															<a>09:00 PM</a>
														</li>
														<li>
															<a>10:00 PM</a>
														</li>
														<li>
															<a>11:00 PM</a>
														</li>
													</ul>
													<select>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
													</select>
												</div>
												<span>to</span>
												<div>
													<span v-if="false">05:30PM</span>
													<ul v-if="false" class="dropdown-menu">
														<li>
															<a>12:00 AM</a>
														</li>
														<li>
															<a>01:00 AM</a>
														</li>
														<li>
															<a>02:00 AM</a>
														</li>
														<li>
															<a>03:00 AM</a>
														</li>
														<li>
															<a>04:00 AM</a>
														</li>
														<li>
															<a>05:00 AM</a>
														</li>
														<li>
															<a>06:00 AM</a>
														</li>
														<li>
															<a>07:00 AM</a>
														</li>
														<li>
															<a>09:00 AM</a>
														</li>
														<li>
															<a>10:00 AM</a>
														</li>
														<li>
															<a>11:00 AM</a>
														</li>
														<li>
															<a>12:00 PM</a>
														</li>
														<li>
															<a>01:00 PM</a>
														</li>
														<li>
															<a>02:00 PM</a>
														</li>
														<li>
															<a>03:00 PM</a>
														</li>
														<li>
															<a>04:00 PM</a>
														</li>
														<li>
															<a>05:00 PM</a>
														</li>
														<li>
															<a>06:00 PM</a>
														</li>
														<li>
															<a>07:00 PM</a>
														</li>
														<li>
															<a>08:00 PM</a>
														</li>
														<li>
															<a>09:00 PM</a>
														</li>
														<li>
															<a>10:00 PM</a>
														</li>
														<li>
															<a>11:00 PM</a>
														</li>
													</ul>
													<select>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
													</select>
												</div>
												<div class="trash-container">
													<i class="fa fa-trash"></i>
												</div>	
											</div>
										</div>

										<div>
											<div class="timepicker-container">
												<div>
													<span v-if="false">08:00AM</span>
													<ul v-if="false" class="dropdown-menu">
														<li>
															<a>12:00 AM</a>
														</li>
														<li>
															<a>01:00 AM</a>
														</li>
														<li>
															<a>02:00 AM</a>
														</li>
														<li>
															<a>03:00 AM</a>
														</li>
														<li>
															<a>04:00 AM</a>
														</li>
														<li>
															<a>05:00 AM</a>
														</li>
														<li>
															<a>06:00 AM</a>
														</li>
														<li>
															<a>07:00 AM</a>
														</li>
														<li>
															<a>09:00 AM</a>
														</li>
														<li>
															<a>10:00 AM</a>
														</li>
														<li>
															<a>11:00 AM</a>
														</li>
														<li>
															<a>12:00 PM</a>
														</li>
														<li>
															<a>01:00 PM</a>
														</li>
														<li>
															<a>02:00 PM</a>
														</li>
														<li>
															<a>03:00 PM</a>
														</li>
														<li>
															<a>04:00 PM</a>
														</li>
														<li>
															<a>05:00 PM</a>
														</li>
														<li>
															<a>06:00 PM</a>
														</li>
														<li>
															<a>07:00 PM</a>
														</li>
														<li>
															<a>08:00 PM</a>
														</li>
														<li>
															<a>09:00 PM</a>
														</li>
														<li>
															<a>10:00 PM</a>
														</li>
														<li>
															<a>11:00 PM</a>
														</li>
													</ul>
													<select>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
													</select>
												</div>
												<span>to</span>
												<div>
													<span v-if="false">05:30PM</span>
													<ul v-if="false" class="dropdown-menu">
														<li>
															<a>12:00 AM</a>
														</li>
														<li>
															<a>01:00 AM</a>
														</li>
														<li>
															<a>02:00 AM</a>
														</li>
														<li>
															<a>03:00 AM</a>
														</li>
														<li>
															<a>04:00 AM</a>
														</li>
														<li>
															<a>05:00 AM</a>
														</li>
														<li>
															<a>06:00 AM</a>
														</li>
														<li>
															<a>07:00 AM</a>
														</li>
														<li>
															<a>09:00 AM</a>
														</li>
														<li>
															<a>10:00 AM</a>
														</li>
														<li>
															<a>11:00 AM</a>
														</li>
														<li>
															<a>12:00 PM</a>
														</li>
														<li>
															<a>01:00 PM</a>
														</li>
														<li>
															<a>02:00 PM</a>
														</li>
														<li>
															<a>03:00 PM</a>
														</li>
														<li>
															<a>04:00 PM</a>
														</li>
														<li>
															<a>05:00 PM</a>
														</li>
														<li>
															<a>06:00 PM</a>
														</li>
														<li>
															<a>07:00 PM</a>
														</li>
														<li>
															<a>08:00 PM</a>
														</li>
														<li>
															<a>09:00 PM</a>
														</li>
														<li>
															<a>10:00 PM</a>
														</li>
														<li>
															<a>11:00 PM</a>
														</li>
													</ul>
													<select>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
														<option>12:00AM</option>
													</select>
												</div>
												<div class="trash-container">
													<i class="fa fa-trash"></i>
												</div>	
											</div>
										</div>
									</div>	
								</div>
							</div>
						</div>
					</div>
					<div v-if="business_active.value === 2">
						<div class="time-off-info-wrapper">
							<div class="detail-body-info-header">
								<div>
									<img :src="'../assets/img/clinic/ico_Profile.svg'">
								</div>
								<div>
									<h1>Time off for you:</h1>
									<div class="add-img-container">
										<a><img :src="'../assets/img/ico_add new.svg'"></a>
									</div>
								</div>
							</div>
							<div class="time-off-body-info-container">
								<div>
									<p>Add your first Time off by clicking below button</p>
									<button><img :src="'../assets/img/ico_add new.svg'"> Add Time Off</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-if="detail_active.value === 2">
				<h1>PASSWORD</h1>
			</div>
			<div v-if="detail_active.value === 3">
				<h1>PAYMENT DETAILS</h1>
			</div>
			<div v-if="detail_active.value === 4">
				<h1>WIDGET</h1>
			</div>
			<div v-if="detail_active.value === 5">
				<h1>QR CODE</h1>
			</div>
		</div>
	</div>
</template>

<script>
import clinicProfile from "@/components/clinic/settings/clinic-profile";

export default clinicProfile;
</script>