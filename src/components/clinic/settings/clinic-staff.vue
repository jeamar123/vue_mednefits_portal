<script>
	import axios from 'axios';
	import Modal from "../../../views/clinic/modal/Modal.vue";

	var clinicStaff = {
		components: {
	    Modal
	  },
		data() {
			return {
				weekDayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
				dayBreakNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
				timeFrame: {},
					detail_active: {
	        value: 0,
	        text: ""
	      },
	      showAddDoctorTooltip: false,
	      showDeleteDoctorTooltip: false,
	      showCountryCodeList: false,
	      showDayTime: true,
	      showCustomTime: false,
	      modalStaff: {
	      	addTimeOffModal: false,
	      }
			}
		},
		methods: {
			// showWorkingHourStart( index ){
			// 	this.workingHourStartArr[ index ] = ( this.workingHourStartArr[ index ] ) ? true : false;
			// 	this.$forceUpdate();
			// 	console.log( this.workingHourStartArr );
			// },
			selectDetail(value, text) {
	      this.detail_active.value = value;
	      this.detail_active.text = text; 
	    },
	    btnAddDoctor() {
	    	this.showAddDoctorTooltip = ( this.showAddDoctorTooltip === false ) ? true : false;
	    },
	    btnDeleteDoctor() {
	    	if (this.showDeleteDoctorTooltip === false) {
	    		this.showDeleteDoctorTooltip = true;
	    	} else {
	    		this.showDeleteDoctorTooltip = false;
	    	}
	    },
	    btnCountryCode() {
	    	if (this.showCountryCodeList === false) {
	    		this.showCountryCodeList = true;
	    	} else {
	    		this.showCountryCodeList = false;
	    	}
	    },
	    toggleCheckBox() {
	    	console.log('gana please');
	    	if (this.showDayTime === true ) {
	    		this.showDayTime = false;
	    		this.showCustomTime = true;
	    	} else {
	    		this.showCustomTime = false;
	    		this.showDayTime = true;
	    	}
	    }
		}
	
	}

	export default clinicStaff
</script>

<style lang="scss">
@import "./src/assets/css/clinic/settings.scss";
</style>