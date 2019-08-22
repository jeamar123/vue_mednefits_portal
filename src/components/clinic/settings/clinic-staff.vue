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
	        value: '0',
	        text: ""
	      },
	      showAddDoctorTooltip: false,
	      showDeleteDoctorTooltip: false,
	      showCountryCodeList: false,
	      showDayTime: true,
	      showCustomTime: false,
	      modalStaff: {
	      	addTimeOffModal: false,
	      },
	      toggleSideBar: true,
			}
		},
		methods: {
			// showWorkingHourStart( index ){
			// 	this.workingHourStartArr[ index ] = ( this.workingHourStartArr[ index ] ) ? true : false;
			// 	this.$forceUpdate();
			// 	console.log( this.workingHourStartArr );
			// },
			sideBarCollapse( data ) {
				if ( data === 0 ) {
					if ( this.toggleSideBar === false ) {
						
						document.getElementById('staff-side-wrapper').style.left = "0";
						document.getElementById('staff-detail-wrapper').style.left = "0";
						this.toggleSideBar = true;
					} else {

						document.getElementById('staff-side-wrapper').style.left = "-320px";
						document.getElementById('staff-detail-wrapper').style.left ="-320px";
						this.toggleSideBar = false;
					}
				}
			},
			closeLeftContainer() {
				this.toggleSideBar = true;
        this.sideBarCollapse(0);
			},
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
@import "./src/assets/css/clinic/clinic-responsive.scss";
</style>