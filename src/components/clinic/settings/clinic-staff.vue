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
			}
		},
		methods: {
			selectDetail(value, text) {
	      this.detail_active.value = value;
	      this.detail_active.text = text; 
	    }
		}
	
	}

	export default clinicStaff
</script>

<style lang="scss" scoped>
@import "./src/assets/css/clinic/settings.scss";
</style>