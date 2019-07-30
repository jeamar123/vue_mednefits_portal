<script>
	import axios from 'axios';
	import Modal from "../../views/clinic/modal/Modal.vue";

	var claim = {
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

	export default claim
</script>

<style lang="scss" scoped>
@import "./src/assets/css/clinic/claim.scss";
</style>






