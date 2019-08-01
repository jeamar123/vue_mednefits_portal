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
						<input type="radio">
						<span>Daily Calendar</span>
					</label>
					<label class="calendar-selector-container">
						<input type="radio">
						<span>Weekly Calendar</span>
					</label>
					<label class="calendar-selector-container">
						<input type="radio">
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
				<input type="button" value="Monday">
				<i class="fa fa-caret-down" aria-hidden="true"></i>
			</div>
		</div>
		<div class="line-break">
			<div>
				<span>Calendar Time Unit</span>
			</div>
			<div class="account-input-wrapper">
				<input type="button" value="15 Min">
				<i class="fa fa-caret-down" aria-hidden="true"></i>
			</div>
		</div>
		<div class="line-break">
			<div>
				<span>Calendar Start Hour</span>
			</div>
			<div class="account-input-wrapper">
				<input type="button" value="12:00 AM">
				<i class="fa fa-caret-down" aria-hidden="true"></i>
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