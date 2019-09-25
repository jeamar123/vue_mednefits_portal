<script>
import Modal from "../../views/clinic/modal/Modal.vue";
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";

var calendar = {
	components: {
		Modal,
		FullCalendar
	},
	data() {
		return {
			calendarPlugins: [
				dayGridPlugin,
				timeGridPlugin,
			],
			calendarView: 'dayGridMonth', // dayGridMonth,timeGridWeek,timeGridDay
			dataSample: false
		};
	}
};

export default calendar;
</script>

<style lang="scss">
@import "./src/assets/css/clinic/calendar.scss";
@import "./src/assets/css/clinic/clinic-responsive.scss";
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
@import '~@fullcalendar/timegrid/main.css';
</style>






