<script>
	import axios from 'axios';
	import Modal from "../../../views/clinic/modal/Modal.vue";

	var clinicProfile = {
		components: {
	    Modal
	  },
		data() {
			return {
				timeFrame: {},
			}
		},
		
	
	}

	export default clinicProfile
</script>

<style lang="scss" scoped>
@import "./src/assets/css/clinic/settings.scss";
</style>