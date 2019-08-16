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
				<div class="clinic-profile-header">
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
						<div class="detail-body-container">
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
									<div></div>
									<div>
										<p>Add your first Time off by clicking below button</p>
										<button @click="modalProfile.addTimeOffModal = true"><img :src="'../assets/img/ico_add new.svg'"> Add Time Off</button>
									</div>
								</div>
							</div>
						</div>	
					</div>
				</div>
			</div>
			<div v-if="detail_active.value === 2" class="clinic-password-wrapper">
				<div class="clinic-profile-header">
					<h4>Change Your Password Here</h4>
				</div>
				<div>
					<div class="clinic-row-container">
						<div class="profile-password-img">
							<img :src="'../assets/img/clinic/ico_Profile.svg'">
						</div>
						<div class="profile-password-label">
							<span>Stackgecko GP</span>
						</div>
					</div>
					<div class="clinic-row-container">
						<div class="text-label">
							<span>Current Password</span>
						</div>
						<div class="profile-input-wrapper">
							<input type="text">
						</div>
					</div>
					<div class="clinic-row-container">
						<div class="text-label">
							<span>New Password</span>
						</div>
						<div class="profile-input-wrapper">
							<input type="text">
						</div>
					</div>
					<div class="clinic-row-container">
						<div class="text-label">
							<span>Confirm Password</span>
						</div>
						<div class="profile-input-wrapper">
							<input type="text">
						</div>
					</div>
					<div class="clinic-row-container">
						<div>
						</div>
						<div>
							<button class="btn-update-changes">Update Changes</button>
						</div>
					</div>
				</div>
			</div>
			<div v-if="detail_active.value === 3">
				<div class="clinic-profile-header">
					<h4>Enter Your Payment Details</h4>
				</div>
				<div>
					<div class="clinic-row-container">
						<div class="text-label">
							<span>Company Name</span>
						</div>
						<div class="profile-input-wrapper">
							<input type="text">
						</div>
					</div>
					<div class="clinic-row-container">
						<div class="text-label">
							<span>Billing Address</span>
						</div>
						<div class="profile-input-wrapper">
							<input type="text">
						</div>
					</div>
					<div class="clinic-row-container">
						<div class="text-label">
							<span>Bank Account Type</span>
						</div>
						<div class="profile-input-wrapper">
							<input type="text" placeholder="i.e UOB Account">
						</div>
					</div>
					<div class="clinic-row-container">
						<div class="text-label">
							<span>Bank Account Number</span>
						</div>
						<div class="profile-input-wrapper">
							<input type="text">
						</div>
					</div>
					<div class="clinic-row-container">
						<div>
						</div>
						<div class="profile-input-wrapper">
							<button class="btn-update">Update</button>
						</div>
					</div>
				</div>
			</div>
			<div v-if="detail_active.value === 4">
				<div class="clinic-profile-header">
					<h4>Booking Widget Integration</h4>
				</div>
				<div>
					<div class="booking-widget-row-container">
						<div>
							<span>Widget Code</span>
						</div>
						<div>
							<textarea></textarea>
						</div>
					</div>
					<div class="booking-widget-row-container">
						<div>
						</div>
						<div>
							<span>Copy & paste this link into your website.</span>
							<button class="btn-copy-clipboard">Copy to Clipboard</button>
						</div>
					</div>
				</div>
			</div>
			<div v-if="detail_active.value === 5" class="clinic-qr-code-wrapper">
				<div class="mednefits-icon-container">
					<img :src="'../assets/img/mednefits_icon_blue.png'">
				</div>
				<div class="qr-code-container">
					<img :src="'../assets/img/qr_code_PNG2.png'">
				</div>
				<div>
					<h4>Stackgecko GP</h4>
				</div>
			</div>
		</div>

		<Modal class="add-time-modal" v-if="modalProfile.addTimeOffModal">
      <div slot="header">
        <h4>Add New Time Off</h4>
        <i @click="modalProfile.addTimeOffModal = false" class="fa fa-times"></i>
      </div>
      <div slot="body">
      	<div v-if="showDayTime" class="daytime-off">
         	<div class="time-off-input-wrapper">
         		<label>Start Date</label>
         		<input type="text">	
         	</div>
         	<div class="time-off-input-wrapper">
         		<label>End Date</label>
         		<input type="text">	
         	</div>
       	</div>
       	<div v-if="showCustomTime" class="custom-time-off">
       		<div class="">
	         	<div class="time-off-input-wrapper">
	         		<label>Start Date</label>
	         		<div>
	         			<input type="text">
	         		</div>	
	         	</div>
	         	<div class="time-off-input-wrapper">
	         		<label>Start Time</label>
	         		<div>
	         			<input type="text">
	         		</div>
	         	</div>
         	</div>

         	<div>
	         	<div class="time-off-input-wrapper">
	         		<label>End Date</label>
	         		<div>
	         			<input type="text">
	         		</div>
	         	</div>
	         	<div class="time-off-input-wrapper">
	         		<label>End Time</label>
	         		<div>
	         			<input type="text">
	         		</div>
	         	</div>
         	</div>
       	</div>
       	<div class="time-off-input-wrapper">
       		<label>Notes</label>
       		<input type="text" placeholder="Details ...">
       	</div>

       	<div class="staff-day-checkbox">
       		<label class="checkbox-container"> All Day
					  <input type="checkbox" v-model="showDayTime" @click="toggleCheckBox()">
					  <span class="checkmark" id="custom-checkmark"></span>
					</label>
       	</div>

       	<div v-if="showDayTime" class="time-wall">
       		From 06 August 2019 to 06 August 2019
       	</div>

       		<div v-if="showCustomTime" class="custom-time-off-text time-wall">
       		From 06 August 2019, 08:00 AM to 06 August 2019, 05:00 PM
       	</div>
 				
       	<div class="btn-footer">
 					<button>Save Changes</button>
 				</div>	
      </div>
    </Modal>
	</div>
</template>

<script>
import clinicProfile from "@/components/clinic/settings/clinic-profile";

export default clinicProfile;
</script>