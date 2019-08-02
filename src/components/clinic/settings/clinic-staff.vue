<script>
	import axios from 'axios';
	import Modal from "../../../views/clinic/modal/Modal.vue";

	var clinicStaff = {
		components: {
	    Modal
	  },
		data() {
			return {
				timeFrame: {},
					detail_active: {
	        value: 0,
	        text: ""
	      },
	      showAddDoctorTooltip: false,
	      showDeleteDoctorTooltip: false,
	      showCountryCodeList: false,
			}
		},
		methods: {
			selectDetail(value, text) {
	      this.detail_active.value = value;
	      this.detail_active.text = text; 
	    },
	    btnAddDoctor() {
	    	if (this.showAddDoctorTooltip === false) {
	    		this.showAddDoctorTooltip = true;
	    	} else {
	    		this.showAddDoctorTooltip = false;
	    	}
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
	    }
		}
	
	}

	export default clinicStaff
</script>

<style lang="scss" scoped>
@import "./src/assets/css/clinic/settings.scss";
</style>