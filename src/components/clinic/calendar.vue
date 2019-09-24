<script>
import Modal from "../../views/clinic/modal/Modal.vue";
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from '@fullcalendar/interaction'
import allLocales from '@fullcalendar/core/locales-all';
import moment from 'moment'

var calendar = {
	components: {
		Modal,
		FullCalendar
	},
	data() {
		return {

			//Calendar Data
			calendarPlugins: [
				dayGridPlugin,
				timeGridPlugin,
				interactionPlugin
			],
			locales: allLocales,
			locale: 'en',
			firstDay: 1,
			calendarView: 'timeGridWeek', // dayGridMonth,timeGridWeek,timeGridDay
			dateNow: new Date(),
			// titleFormat: 'YYYY-DD-MM', // you can now use format strings
			events: [], // should be array format
			businessHours: {
				// days of week. an array of zero-based day of week integers (0=Sunday)
				daysOfWeek: [1, 2, 3, 4, 5], // 1 -5 Monday - Friday 6 - 7 Saturday - Sunday

				startTime: '10:00', // a start time (10am in this example)
				endTime: '17:00', // an end time (6pm in this example)
			},
			// End Calendar Data
			//for new event
			newEvent: [{
				title: 'The event 1', // a property!
				allDay: false, // Boolean (true or false).
				start: '2019-09-16 10:00', // a property! YYYY - MM - DD hh:mm:ss:sss
				end: '2019-09-16 10:15', // a property! ** see important note below about 'end' ** YYYY - MM - DD hh:mm:ss:sss
			}, ],
			dataSample: false
		};
	},
	created() {
		this.events = this.newEvent; // should be array format
	},
	methods: {
		handleDateClick(data) {
			let time = moment(data.date).format('hh:mm');
			let start = moment(data.date).format('YYYY-MM-DD HH:mm');
			let end = moment(data.date).add(15, 'minute').format('YYYY-MM-DD HH:mm');
			let item = {
				title: 'test event', // a property!
				allDay: false, // Boolean (true or false).
				start: start, // a property! YYYY - MM - DD hh:mm:ss:sss
				end: end, // a property! ** see important note below about 'end' ** YYYY - MM - DD hh:mm:ss:sss
				backgroundColor: '#3a87ad',
			};
			this.newEvent.push(item);
			console.log('item', item, 'newEvent', this.newEvent);
			if (data.date >= this.dateNow) {
				let timeClicked = moment(data.date).format('MMMM DD YYYY hh:mm A');
				console.log(`book now at ${timeClicked}`);
			} else {
				console.log(`Invalid date`);
			}
		},
		handleEventClick(data) {
			console.log('event clicked')
		}
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






