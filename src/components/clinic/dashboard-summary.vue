<script>
	import axios from 'axios';
	import Modal from "../../views/clinic/modal/Modal.vue";

	var dashboardSummary = {
		components: {
	    Modal
	  },
		data() {
			return {
				modalClaim: {
	        verifyUser: false,
	        manualClaims: false,
	        eCardModal: false,
	        checkClaims: false,
	      },
			}
		},
		
	
	}

	export default dashboardSummary
</script>

<style lang="scss" scoped>
@import "./src/assets/css/clinic/dashboard-summary.scss";
</style>
