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
							<button class="btn-date">Sep 23 – 29, 2019</button>
							<button class="btn-right"><img :src="'../assets/img/ico_right arrow.svg'"></button>
						</div>
					</div>
					<div class="header-legend">
						<div class="blue">
							<i class="fa fa-circle"></i>
							Clinic
						</div>
						<div class="green">
							<i class="fa fa-circle"></i>
							Widget
						</div>
						<div class="yellow">
							<i class="fa fa-circle"></i>
							Mednefits App
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
							<a>
								<div class="dr-container">
									<img :src="'../assets/img/clinic/ico_Profile.svg'">
									<span>Dr Jimmy Yap</span>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
	
			<FullCalendar :defaultView="calendarView"
				ref="fullCalendar" 
				:plugins="calendarPlugins" 
				:weekends="false" 
				:header = false
				:events="[
					{ title: 'event 1', date: '2019-09-09' },
					{ title: 'event 2', date: '2019-09-09' }
				]"
			/>
			<!-- 
				:header="{
					right: 'today prev,next',
					center: 'title',
					left: 'dayGridMonth,timeGridWeek,timeGridDay'
      	}"
			 -->
		</div>
	
	</div>
</template>

<script>
import calendar from "@/components/clinic/calendar";
export default calendar;
</script>