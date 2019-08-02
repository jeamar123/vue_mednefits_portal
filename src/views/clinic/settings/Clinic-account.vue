<template>
	<div class="clinic-account-wrapper">
		<div class="account-header-title">
			<h2>Customize your account preferences</h2>
		</div>
		<div class="line-break">
			<div>
				<span>Default Calendar View</span>
			</div>
			<div>
				<label>This will be your default calendar view</label>
				<div>
					<label class="calendar-selector-container">
						<input name="type" type="radio">
						<span>Daily Calendar</span>
					</label>
					<label class="calendar-selector-container">
						<input name="type" type="radio">
						<span>Weekly Calendar</span>
					</label>
					<label class="calendar-selector-container">
						<input name="type" type="radio">
						<span>Monthly Calendar</span>
					</label>
				</div>
			</div>
		</div>
		<div class="line-break">
			<div>
				<span>Start the Week with</span>
			</div>
			<div class="account-input-wrapper">
				<div>
					<input @click="btnWeekSelector()" type="button" value="Monday">
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<ul v-if="showWeekSelector" class="dropdown-menu">
					<li>
						<a>Monday</a>
					</li>
					<li>
						<a>Tuesday</a>
					</li>
					<li>
						<a>Wednesday</a>
					</li>
					<li>
						<a>Thursday</a>
					</li>
					<li>
						<a>Friday</a>
					</li>
					<li>
						<a>Saturday</a>
					</li>
					<li>
						<a>Sunday</a>
					</li>
				</ul>	
			</div>
		</div>
		<div class="line-break">
			<div>
				<span>Calendar Time Unit</span>
			</div>
			<div class="account-input-wrapper">
				<div>
					<input @click="btnTimeSelector()" type="button" value="15 Min">
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<ul v-if="showTimeSelector" class="dropdown-menu">
					<li>
						<a>05 Min</a>
					</li>
					<li>
						<a>15 Min</a>
					</li>
					<li>
						<a>30 Min</a>
					</li>
					<li>
						<a>45 Min</a>
					</li>
					<li>
						<a>60 Min</a>
					</li>
				</ul>	
			</div>
		</div>
		<div class="line-break">
			<div>
				<span>Calendar Start Hour</span>
			</div>
			<div class="account-input-wrapper">
				<div>
					<input @click="btnStartHourSelector()" type="button" value="12:00 AM">
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="timepicker-wrapper">
					<ul v-if="showStartHourSeletor" class="dropdown-menu">
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
				</div>
			</div>
		</div>
		<div class="line-break">
			<div>
				<span>Enable PIN Verification</span>
			</div>
			<div class="account-input-wrapper">
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
</template>

<script>
import clinicAccount from "@/components/clinic/settings/clinic-account";

export default clinicAccount;
</script>