<script>
	import axios from 'axios';
	import Modal from "../../../views/clinic/modal/Modal.vue";

	var clinicProfile = {
		components: {
	    Modal
	  },
		data() {
			return {
				weekDayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
				dayBreakNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
				detail_active: {
	        value: 0,
	        text: ""
				},
				business_active: {
					value: 0,
					text: ""
				}
			}
		},
		methods: {
			selectProfileDetail(value, text) {
	      this.detail_active.value = value;
	      this.detail_active.text = text; 
	    },
	    selectBusinessHours(value, text) {
	    	this.business_active.value = value;
	      this.business_active.text = text; 
	    },
		}
	}
	export default clinicProfile
</script>

<style lang="scss" scoped>
@import "./src/assets/css/clinic/settings.scss";
</style>