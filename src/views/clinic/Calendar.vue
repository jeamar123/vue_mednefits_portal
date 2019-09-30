<template>
	<div class="calendar-container">
		<div class="clinic-calendar-wrapper">
			<div class="calendar-wrapper">
				<div class="calendar-header">
					<div class="header-list">
						<div>
							<div>
								<div class="dr-container">
									<img :src="'../assets/img/clinic/ico_Profile.svg'">
									<span>Dr Jimmy Yap</span>
								</div>
								<i class="fa fa-caret-down" aria-hidden="true"></i>
							</div>
							<ul class="header-dropdown-list" v-if="false">
								<li>
									<a>Dr Jimmy Yap</a>
								</li>
							</ul>
						</div>
						<div>
							<span>Weeky</span>
							<i class="fa fa-caret-down" aria-hidden="true"></i>
							<ul class="header-dropdown-list" v-if="false">
								<li>
									<a>Weekly</a>
								</li>
								<li>
									<a>Daily</a>
								</li>
								<li>
									<a>Monthly</a>
								</li>
								<li>
									<a>By Group</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="calendar-view">
						<button class="btn-today">Today</button>
						<div class="datepicker-btn">
							<button class="btn-left"><img :src="'../assets/img/ico_left arrow.svg'"></button>
							<button class="btn-date">
								<v-date-picker v-model="appDetails.dateRange"
									mode='range'
									:max-date='new Date()'
									:formats='formats'
									:input-props='{class: "vDatepicker btn-date", placeholder: "MM/DD/YYYY", readonly: true}'
									popover-visibility='focus' popover-direction='bottom'>
								</v-date-picker>
							</button>
							
							<button class="btn-right"><img :src="'../assets/img/ico_right arrow.svg'"></button>
						</div>
					</div>
					<div class="header-legend">
						<div class="blue">
							<i class="fa fa-circle"></i> Clinic
						</div>
						<div class="green">
							<i class="fa fa-circle"></i> Widget
						</div>
						<div class="yellow">
							<i class="fa fa-circle"></i> Mednefits App
						</div>
					</div>
					<div class="header-tool">
						<div>
							<img :src="'../assets/img/ico_Settings.svg'">
							<ul class="header-dropdown-list" v-if="false">
								<li>
									<a>Providers</a>
								</li>
								<li class="provider-selector">
									<a>
												<input type="checkbox">
												<span>View as Dropdown</span>
											</a>
								</li>
								<li class="provider-selector">
									<a>
												<input type="checkbox">
												<span>View as Tabs</span>
											</a>
								</li>
								<li class="divider"></li>
							</ul>
						</div>
						<div>
							<img :src="'../assets/img/info.png'">
						</div>
					</div>
				</div>
				<div class="view-tabs-doctors-container">
					<ul>
						<li>
							<a class="active">
								<div class="dr-container">
									<img :src="'../assets/img/clinic/ico_Profile.svg'">
									<span>Dr Jimmy Yap</span>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
	
			<FullCalendar @select="handelSelect" @eventMouseLeave="handleMouseLeave" @eventClick="handleEventClick" 
			:defaultView="calendarView" 
			ref="fullCalendar" 
			:plugins="calendarPlugins" 
			slotDuration='00:15' 
			:locales="locales" 
			:locale="locale" 
			:firstDay="firstDay"
			:events="events" 
			:now="dateNow" 
			:businessHours="businessHours" 
			:weekends= true 
			:header= false 
			:editable= true 
			:eventLimit= true 
			:nowIndicator= true 
			:selectable= true />
			<!-- 
						:header="{
							right: 'today prev,next',
							center: 'title',
							left: 'dayGridMonth,timeGridWeek,timeGridDay'
		      	}"
					 -->
		</div>
	
		<div class="calendar-modal">
			<Modal v-if="appModal" class="appointment-modal">
				<div slot="header" class="appointment-header-container">
					<h4>Appointment</h4>
					<h4 v-if="false">Reserve Booking</h4>
					<i @click="appModal = false" class="fa fa-times"></i>
				</div>
				<div slot="body" class="appointment-body-container">
					<ul>
						<li class="left">
							<a>BOOKING</a>
						</li>
						<li class="left">
							<a>PATIENT</a>
						</li>
					</ul>
					<form>
						<div class="modal-calendar-row-input-container">
							<label>Doctor</label>
							<div class="modal-calendar-input-wrapper">
								<div class="doctor-wrapper">
									<i v-if="appDetails.doctor != undefined" class="doctor-icon fa fa-check"></i>
									<i v-if="appDetails.doctor == undefined" class="doctor-icon fa fa-arrow-right"></i>
									<i class="doctor-icon fa fa-chevron-down"></i>
									<input type="text" @click="handleSelectDoctor" v-model="appDetails.doctor" class="modal-calendar-input-container doctor" placeholder="Select a Doctor" readonly="readonly">
								</div>
								<ul v-if="dropDownDoctor" class="dropdown-container">
									<li v-for="doctor in doctors" :key="doctor.index">
										<a @click="selectedData('doctor',doctor.name)">
											<div class="dr-container">
												<img :src="doctor.imgUrl">
												<span>{{doctor.name}}</span>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="modal-calendar-row-input-container">
							<label>Service</label>
							<div class="modal-calendar-input-wrapper">
								<div class="service-wrapper">
									<div>
										<i v-if="appDetails.service != undefined" class="service-icon fa fa-check"></i>
										<i v-if="appDetails.service == undefined || serviceCustomIndicator == 2 && appDetails.service == undefined" class="service-icon fa fa-arrow-right"></i>
										<i class="service-icon fa fa-chevron-down"></i>
									</div>
									<input type="text" @click="handleSelectService" v-model="appDetails.service" class="modal-calendar-input-container service" placeholder="Select a service" readonly="readonly">
									<!-- <span>Select a service</span> -->
								</div>
	
								<ul v-if="dropDownService" class="dropdown-container">
									<li v-for="service in services" :key="service.index">
										<a @click="selectedData('service',service.name,service.type)">
											<div class="dr-container">
												<span>{{service.name}} </span> <span class="right">{{service.time}}</span>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
	
						<!-- Select a service -->
						<div v-if="appDetails.service == 'Slot Blocker' || appDetails.service == 'Medicine & Treatment' &&  serviceCustomIndicator != 2" class="duration-form-container">
							<div class="modal-calendar-row-input-container">
								<label>Duration</label>
								<div class="modal-calendar-input-wrapper">
									<input type="number" style="cursor:text" class="duration-container modal-calendar-input-container" placeholder="60" v-model="appDetails.valHoursMin">
									<div class="duration-wrapper mins-container">
										<i class="icon fa fa-chevron-down"></i>
										<input type="text" @click="handleSelectDuration" v-model="appDetails.duration" class="modal-calendar-input-container" placeholder="Mins" readonly="readonly">
									</div>
									<ul v-if="dropDownDuration" class="dropdown-container">
										<li>
											<a @click="selectedData('duration','Hours')">
												<div class="dr-container">
													<span>Hours</span>
												</div>
											</a>
										</li>
										<li>
											<a @click="selectedData('duration','Mins')">
												<div class="dr-container">
													<span>Mins</span>
												</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
	
							<!-- <div class="day-time-container">
								<div class="modal-calendar-row-input-container">
									<label>Day</label>
									<div class="modal-calendar-input-wrapper">
										<div class="modal-calendar-input-container">
											<span>Saturday, September 21 2019</span>
										</div>
									</div>
								</div>
	
								<div class="modal-calendar-row-input-container">
									<label>Time</label>
									<div class="modal-calendar-input-wrapper">
										<div class="modal-calendar-input-container">
											<span>1:00 PM</span>
											<i class="fa fa-chevron-down"></i>
										</div>
									</div>
								</div>
							</div> -->
	
						</div>
	
						<!-- Reserve booking -->
	
						<div v-if="serviceCustomIndicator == 2" class="reserve-booking-form-container">
	
							<!-- when selecting service -->
							<div class="price-container">
	
								<div class="modal-calendar-row-input-container">
									<label>Price</label>
									<div class="modal-calendar-input-wrapper">
										<input class="modal-calendar-input-container" v-model="appDetails.price">
									</div>
								</div>
	
								<div class="modal-calendar-row-input-container">
									<label>Duration</label>
									<div class="modal-calendar-input-wrapper">
										<input type="number" style="cursor:text" class="duration-container modal-calendar-input-container" placeholder="60" v-model="appDetails.valHoursMin">
										<div class="duration-wrapper mins-container">
											<i class="icon fa fa-chevron-down"></i>
											<input type="text" @click="handleSelectDuration" v-model="appDetails.duration" class="modal-calendar-input-container" placeholder="Mins" readonly="readonly">
										</div>
										<!-- <ul v-if="dropDownDuration" class="dropdown-container">
											<li>
												<a @click="selectedData('duration','Hours')">
													<div class="dr-container">
														<span>Hours</span>
													</div>
												</a>
											</li>
											<li>
												<a @click="selectedData('duration','Mins')">
													<div class="dr-container">
														<span>Mins</span>
													</div>
												</a>
											</li>
										</ul> -->
									</div>
								</div>
							</div>
	
							<!-- <div class="day-time-container">
								<div class="modal-calendar-row-input-container">
									<label>Day</label>
									<div class="modal-calendar-input-wrapper">
										<div class="modal-calendar-input-container">
											<span>Saturday, September 21 2019</span>
										</div>
									</div>
								</div>
	
								<div class="modal-calendar-row-input-container">
									<label>Time</label>
									<div class="modal-calendar-input-wrapper">
										<div class="modal-calendar-input-container">
											<span>1:00 PM</span>
											<i class="fa fa-chevron-down"></i>
										</div>
									</div>
								</div>
							</div> -->
	
							<div v-if="true" class="modal-calendar-row-input-container">
								<label>Name</label>
								<div class="modal-calendar-input-wrapper">
									<input class="modal-calendar-input-container" placeholder="Name" v-model="appDetails.name">
								</div>
							</div>
	
							<div v-if="true" class="modal-calendar-row-input-container">
								<label>Email <span>(Optional)</span></label>
								<div class="modal-calendar-input-wrapper">
									<input class="modal-calendar-input-container" placeholder="Email"
									v-model="appDetails.email">
								</div>
							</div>
	
	
							<div v-if="true" class="modal-calendar-row-input-container">
								<label>Phone <span>(Optional)</span></label>
								<div class="modal-calendar-input-wrapper area-code-container">
									<!-- <button>+65</button>
									<input class="modal-calendar-input-container" placeholder="Mobile Number"> -->
									<vue-tel-input ref="areaCode" v-model="appDetails.mobile" v-bind="telProps" @input="setAreaCode"></vue-tel-input>
								</div>
							</div>
	
						</div>
	
						<div class="day-time-container">
							<div class="modal-calendar-row-input-container">
								<label>Day</label>
								<div class="modal-calendar-input-wrapper">
									<div>
										<!-- <span>Saturday, September 21 2019</span> -->
										<v-date-picker v-model="appDetails.dateDay"
                    :max-date='new Date()'
                    :formats='formats'
                    :input-props='{class: "vDatepicker modal-calendar-input-container", placeholder: "MM/DD/YYYY", readonly: true}'
                    popover-visibility='focus' popover-direction='top'>
                  </v-date-picker>
									</div>
								</div>
							</div>
	
							<div class="modal-calendar-row-input-container">
								<label>Time</label>
								<div class="modal-calendar-input-wrapper">
									<div class="time-wrapper">
										<i class="icon fa fa-chevron-down"></i>
										<input type="text" @click="handleSelectDay" v-model="appDetails.time" class="modal-calendar-input-container" placeholder="1:00 AM" readonly="readonly">
									</div>
									<ul v-if="dropDownDay" class="dropdown-container">
										<li v-for="hours in hoursPerday" :key='hours.index'>
											<a @click="selectedData('day',hours)"> 
												<div class="dr-container">
													<span>{{hours}}</span>
												</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
	
						<div class="modal-calendar-row-input-container">
							<label>Notes</label>
							<div class="modal-calendar-input-wrapper">
								<input class="modal-calendar-input-container" style="cursor:text" type="text" placeholder="Notes / Instructions" v-model="appDetails.notes">
							</div>
						</div>
	
						<div class="modal-calendar-row-input-container">
							<label></label>
							<div class="modal-calendar-input-wrapper">
								<button class="btn-continue" @click.prevent="btnContinue()">Continue</button>
								<button v-if="false" class="btn-continue">Reserve</button>
							</div>
						</div>
	
					</form>
				</div>
			</Modal>
	
			<Modal v-if="false" class="clinic-config-modal">
				<div slot="header">
					<div class="setup-uncompleted-line"></div>
					<ul>
						<li>
							<label>Welcome</label>
							<a>
		    				<span class="clinic-badge active">
		    				
		    				<i class="fa fa-check done-step"></i>
		    				</span>
	    				</a>
						</li>
						<li>
							<label>Hours</label>
							<a>
		    				<span class="clinic-badge">
		    				2
		    				<i v-if="false" class="fa fa-check"></i>
		    				</span>
	    				</a>
						</li>
						<li>
							<label>Doctors</label>
							<a>
		    				<span class="clinic-badge">
		    				3
		    				<i v-if="false" class="fa fa-check"></i>
		    				</span>
	    				</a>
						</li>
						<li>
							<label>Service</label>
							<a>
		    				<span class="clinic-badge">
		    				4
		    				<i v-if="false" class="fa fa-check"></i>
		    				</span>
	    				</a>
						</li>
						<li>
							<label>DONE!</label>
							<a>
		    				<span class="clinic-badge">
		    				5
		    				<i v-if="false" class="fa fa-check"></i>
		    				</span>
	    				</a>
						</li>
					</ul>
				</div>
				<div slot="body">
					<div v-if="true" class="first-step">
						<div class="panel-header">
							<div>
								<h3>Welcome to Medicloud</h3>
								<span>We'll get you setup in no time</span>
							</div>
							<div>
								<button>Next <i class="fa fa-chevron-right"></i></button>
							</div>
						</div>
						<div class="panel-body">
							<span>This will only take a moment</span>
							<div>
								<div class="modal-calendar-row-input-container">
									<label>Clinic Name</label>
									<div class="modal-calendar-input-wrapper area-code-container">
										<input class="modal-calendar-input-container" placeholder="">
									</div>
								</div>
								<div class="modal-calendar-row-input-container">
									<label>Speciality</label>
									<div class="modal-calendar-input-wrapper area-code-container">
										<input class="modal-calendar-input-container" placeholder="">
										<i class="fa fa-chevron-down"></i>
									</div>
								</div>
								<div class="modal-calendar-row-input-container">
									<label>Phone No</label>
									<div class="modal-calendar-input-wrapper area-code-container">
										<button>+65</button>
										<input class="modal-calendar-input-container" placeholder="">
									</div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="false" class="second-step">
						<div class="panel-header">
							<div>
								<h3>Set Yours Business Hours</h3>
								<span>Let your customers know when you're open</span>
							</div>
							<div>
								<button class="btn-prev"><i class="fa fa-chevron-left"></i></button>
								<button>Next <i class="fa fa-chevron-right"></i></button>
							</div>
						</div>
						<div class="panel-body">
							<span>
			    					Your time Zone is set to <u style="cursor: pointer;">SINGAPORE (UTC+08:00)</u>.
			    				</span>
							<div class="working-row-container">
								<div class="day-container">
									<span>Monday</span>
								</div>
								<label class="clinic-switch-container">
			    						<input type="checkbox" checked="checked">
			    						<span class="slider">
			    							<span class="off">On</span>
			    							<span class="on">Off</span>
			    						</span>
			    					</label>
								<div class="timepicker-container">
									<div>
										<select>
			    								<option>12:00AM</option>
			    								<option>12:00AM</option>
			    							</select>
									</div>
									<span>to</span>
									<div>
										<select>
			    								<option>12:00AM</option>
			    								<option>12:00AM</option>
			    							</select>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="false" class="third-step">
						<div class="panel-header">
							<div>
								<h3>Add Doctors</h3>
								<span>Dont worry - you can always edit these later</span>
							</div>
							<div>
								<button class="btn-prev"><i class="fa fa-chevron-left"></i></button>
								<button>Next <i class="fa fa-chevron-right"></i></button>
							</div>
						</div>
						<div class="panel-body">
	
							<div class="add-doctors-info-container">
								<div class="add-doctors-list">
									<div>
										<img :src="'../assets/img/clinic/ico_Profile.svg'">
									</div>
									<div>
										<span>Odin</span>
									</div>
									<div>
										<span>odil@gmail.com</span>
									</div>
									<div>
										<i class="fa fa-times"></i>
									</div>
								</div>
							</div>
							<div class="add-doctors-input-container">
								<div>
									<img :src="'../assets/img/clinic/ico_Profile.svg'">
								</div>
								<div>
									<div class="modal-calendar-input-wrapper">
										<input class="modal-calendar-input-container" type="text" placeholder="Name">
									</div>
									<div class="modal-calendar-input-wrapper">
										<input class="modal-calendar-input-container" type="text" placeholder="Email">
									</div>
								</div>
								<div>
									<button class="btn-add">Add</button>
								</div>
							</div>
	
						</div>
					</div>
					<div v-if="false" class="fourth-step">
						<div class="panel-header">
							<div>
								<h3>Add the Services You Offer</h3>
								<span>Dont worry - you'll be able to edit these later</span>
							</div>
							<div>
								<button class="btn-prev"><i class="fa fa-chevron-left"></i></button>
								<button>Next <i class="fa fa-chevron-right"></i></button>
							</div>
						</div>
						<div class="panel-body">
							<div class="service-info-container">
								<div class="service-header">
									<div>
										<span>Service Name</span>
									</div>
									<div>
										<span>Time</span>
									</div>
									<div>
										<span>Price</span>
									</div>
									<div>
										<span>Doctors</span>
									</div>
								</div>
								<div class="service-info-list">
									<div>
										<span>Noel</span>
									</div>
									<div>
										<span>1 </span>
										<span>mins</span>
									</div>
									<div>
										<span>1</span>
									</div>
									<div>
										<i class="fa fa-user-md"> </i>
										<span>1</span>
									</div>
									<div>
										<i class="fa fa-times"></i>
									</div>
								</div>
							</div>
							<div class="service-input-container">
								<div>
									<div class="modal-calendar-input-wrapper">
										<input class="modal-calendar-input-container" type="text" placeholder="Service Name">
									</div>
									<div class="time-container modal-calendar-input-wrapper">
										<div class="modal-calendar-input-wrapper">
											<input class="modal-calendar-input-container" type="text" placeholder="0">
										</div>
										<div>
											<button class="btn-mins">Mins</button>
											<ul class="dropdown-container">
												<li>
													<a>Mins</a>
												</li>
												<li>
													<a>Hours</a>
												</li>
											</ul>
										</div>
									</div>
									<div class="modal-calendar-input-wrapper">
										<input class="modal-calendar-input-container" type="text" placeholder="$ 0">
									</div>
									<div class="select-doctor-container">
										<button class="btn-select-doctor">
	    								<i class="fa fa-user-md"> </i>
	    								<i class="fa fa-caret-down" ></i>
	    							</button>
	    							<ul v-if="false" class="dropdown-container">
	    								<li>
	    									<span>Who can perform this service?</span>
	    								</li>
	    								<li>
	    									<label class="doctor-list-container">
	    										<input type="checkbox"> <span>Noelou</span>
	    									</label>
	    								</li>
	    							</ul>
									</div>
									<div>
										<button class="btn-add">Add</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="false" class="fifth-step">
						<div class="panel-header">
							<div>
								<h3>All done! Time to get down to business.</h3>
							</div>
						</div>
						<div class="setup-dashboard">
							<div class="setup-dashboard-link">
								<div>
									<img :src="'../assets/img/business/calendar-thumbnails.png'">
								</div>	
								<h1>Start Booking Appointments</h1>
							</div>
							<div class="setup-features-list">
								<div>
									<div class="setup-dashboard-link">
										<div class="features-img-container">
											<img :src="'../assets/img/business/booking-page-thumbnail.png'">
										</div>
										<span>See My Booking Page >></span>
									</div>
									<div class="setup-dashboard-link">
										<div class="features-img-container">
											<img :src="'../assets/img/business/booknow-btn-thumbnail.png'">
										</div>
										<span>Get the Booking Button >></span>
									</div>
								</div>
								<div>
									<div class="setup-dashboard-link">
										<div class="features-img-container">
											<img :src="'../assets/img/business/integration-thumbnail.png'">
										</div>
										<span>View Integrations >></span>
									</div>
									<div class="setup-dashboard-link">
										<div class="features-img-container">
											<img :src="'../assets/img/business/staff-or-service-thumbnail.png'">
										</div>
										<span>Add Staff / Services >></span>
									</div>
								</div>
							</div>
						</div>
						<div class="panel-footer">
							<div>
								<button class="btn-prev"><i class="fa fa-chevron-left"></i></button>
								<button>Close</button>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	
	</div>
</template>

<script>
import calendar from "@/components/clinic/calendar";
export default calendar;
</script>