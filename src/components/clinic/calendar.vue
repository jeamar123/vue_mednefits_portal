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

			formats: { //v-date-picker
				input: ["MMM DD YYYY"],
				data: ["MMM DD YYYY"]
			},
			dateRange: {
        start: new Date(2018, 0, 16), // Jan 16th, 2018
        end: new Date(2018, 0, 19)    // Jan 19th, 2018
      },
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
			selectState: 1,
			// End Calendar Data
			//for new event
			newEvent: [
				// {
				// 	title: 'The event 1', // a property!
				// 	allDay: false, // Boolean (true or false).
				// 	start: '2019-09-16 10:00', // a property! YYYY - MM - DD hh:mm:ss:sss
				// 	end: '2019-09-16 10:15', // a property! ** see important note below about 'end' ** YYYY - MM - DD hh:mm:ss:sss
				// }, 
			],
			appModal: false,
			setupModal:true,
			dropDownService : false,
			dropDownDoctor : false,
			dropDownDuration: false,
			dropDownDay: false,
			setupSpeciality: false,
			setupServiceTime: false,
			setupDoctor: false,

			// DATA FORMS
			telProps: {
				defaultCountry: "SG",
				placeholder: "",
				enabledCountryCode: true,
				enabledFlags: true,
				autocomplete: "off",
				validCharactersOnly: true,
				maxLen: 8,
			},
			sgAreaCode: {
				areaCodes: null,
				dialCode: "65",
				iso2: "SG",
				name: "Singapore",
				priority: 0,
			},
			appDetails : {},
			serviceCustomIndicator: 0,
			setup: {
				dataStorage: {
					serviceTime: 'Mins',
				},
				stepper: 1,
			},

			dataSample: false
		};
	},
	created() {
		this.events = this.newEvent; // should be array format
	},
	methods: {
		setAreaCode(formattedNumber, { number, isValid, country }) {
			this.appDetails.mobile_area_code = country.dialCode;
			this.appDetails.mobile_area_code_country = country;

			if (country.iso2 == 'SG') {
				this.telProps.maxLen = 8;
			} else if (country.iso2 == 'MY' || country.iso2 == 'PH') {
				this.telProps.maxLen = 10;
			} else {
				this.telProps.maxLen = 0;
			}
		},

		//calendar methods
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
		},
		handelSelect(info) {

			if (moment(info.start).format('HH:mm') >= this.businessHours.startTime && moment(info.end).format('HH:mm') <= this.businessHours.endTime && info.start > this.dateNow) {
				this.selectState = 1;
				this.appModal = true;
				this.dropDownDoctor = false;
				this.dropDownService = false;
				this.dropDownDuration = false;
				this.dropDownDay = false;
				this.serviceCustomIndicator = 0;
				this.appDetails = {};
			} else {
				this.selectState = 0;
			}

			let start = moment(info.startStr).format('YYYY-MM-DD HH:mm');
			let end = moment(info.endStr).format('YYYY-MM-DD HH:mm');
			console.log(start, end);

			let item = {
				title: ' ', // a property!
				allDay: false, // Boolean (true or false).
				start: start, // a property! YYYY - MM - DD hh:mm:ss:sss
				end: end, // a property! ** see important note below about 'end' ** YYYY - MM - DD hh:mm:ss:sss
				backgroundColor: '#3a87ad',
			};
			this.newEvent.push(item);
			this.events = this.newEvent; // should be array format
			console.log('item', item, 'Event', this.events);
		},
		handleMouseLeave() {
			if (this.selectState == 0) {
				this.events.pop();
				this.selectState = 1;
			} else {
				console.log(`don't remove`);
			}
		},
		// End of Calendar methods

		//Modal Methods
			//Appointments
			handleSelectDoctor() {
				this.dropDownDoctor = !this.dropDownDoctor;
				this.dropDownService = false;
				this.dropDownDuration = false;
				this.dropDownDay = false;
			},
			handleSelectService() {
				this.dropDownService = !this.dropDownService;
				this.dropDownDoctor = false;
				this.dropDownDuration = false;
				this.dropDownDay = false;
			},
			handleSelectDuration() {
				this.dropDownDuration = !this.dropDownDuration;
				this.dropDownService = false;
				this.dropDownDoctor = false;
				this.dropDownDay = false;
				
			},
			handleSelectDay() {
				this.dropDownDay = !this.dropDownDay;
				this.dropDownService = false;
				this.dropDownDoctor = false;
				this.dropDownDuration = false;
			},
			//setup
			handleSpeciality() {
				this.setupSpeciality = !this.setupSpeciality;
			},
			handleServiceTime() {
				this.setupServiceTime = !this.setupServiceTime;
				this.setupDoctor = false;
			},
			handleSetupDoctor() {
				this.setupDoctor = !this.setupDoctor;
				this.setupServiceTime = false;
			},
			next() {
				let limit = 5;
				if(this.setup.stepper < limit){
					this.setup.stepper++
					// this.$forceUpdate();
				}
			},
			back(){
				let limit = 0;
				if(this.setup.stepper > limit){
					this.setup.stepper--
					// this.$forceUpdate();
				}
			},
			selectedData(type,data,indicator) {
				if(type == 'doctor') {
					this.appDetails.doctor = data;
					this.handleSelectDoctor();
				} else if (type == 'service') {
					this.appDetails.service = data;
					
					if (indicator == 2) {
						this.appDetails.service = undefined;
						this.serviceCustomIndicator = indicator;
						console.log(this.serviceCustomIndicator);
					}
					this.handleSelectService();
				} else if (type == 'duration') {
					this.appDetails.duration = data;
					this.handleSelectDuration();
				} else if (type == 'day') {
					this.appDetails.time = data;
					this.handleSelectDay();
				} 
					//setup modal
				else if (type == 'speciality') {
					this.setup.dataStorage.speciality = data;
					this.handleSpeciality();
				} else if (type == 'serviceTime') {
					this.setup.dataStorage.serviceTime = data;
					this.handleServiceTime();
				}
			},
			btnContinue() {
				console.log('Modal form data', this.appDetails);
			}

	},
	computed: {
		//For Services li
		services() {
			let service = [
				{
					name: 'Slot Blocker',
					type: 1,
					time: 'Custom'
				},
				{
					name: 'Appointment Without SMS Notification',
					type: 2,
					time: 'Custom'
				}, 
				{
					name: 'Medicine & Treatment',
					type: 3,
					time: '10 mins'
				}
			];

			let service2  = [
				{
					name: 'Medicine & Treatment',
					type: 3,
					time: '10 mins'
				}
			]

			if(this.serviceCustomIndicator == 2 ) {
				return service2;
			}else {
				return service
			}
		},
		doctors() {
			let doctor = [
				{
					name: 'Dr Jimmy Yap',
					imgUrl: '../assets/img/clinic/ico_Profile.svg'
				}
			];
			return doctor;
		},
		specialities(){
			let specialities = [
				{
					name: 'Health Specialist',
					type: 1,
				},
				{
					name: 'Wellness',
					type: 2,
				}, 
				{
					name: 'Medical Spa',
					type: 3,
				}
			];

			return specialities;
		},
		hoursPerday() {
			let day = 23;
			let hours = []
			let formatTime;

			for ( let i = 0 ; i < day+1; i++) {
				let min = 15;
				for (let x = 4; x > 0 ; x--) {
					formatTime = (moment().hours(day).subtract(i, 'hours').minutes(min*x).format('hh:mmA'));
					hours.unshift(formatTime);
				}
				
			}
			// formatTime = (moment().subtract(22, 'hours').format('hh:00 A'));
			// hours.unshift(formatTime);
			
			return hours;
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






