<template>
	<div class="calendar-container">
		<div class="clinic-calendar-wrapper">
			Calendar ni sya besh
	
			<FullCalendar @dateClick="handleDateClick" @eventClick="handleEventClick" :defaultView="calendarView"
				ref="fullCalendar" 
				:plugins="calendarPlugins"
				slotDuration='00:15'
				:locales="locales"
				:locale="locale"
				:firstDay ="firstDay"
				:events="events"
				:now="dateNow"
				:businessHours="businessHours"
				:weekends= true 
				:header = false
				:editable = true
				:eventLimit= true
				:nowIndicator = true
				
    		
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