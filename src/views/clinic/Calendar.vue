<template>
	<div class="calendar-container">
		<div class="clinic-calendar-wrapper">
			Calendar ni sya besh
	
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