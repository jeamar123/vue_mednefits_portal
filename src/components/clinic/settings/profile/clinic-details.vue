<script>
	import axios from 'axios';
	// import Modal from "../../../views/clinic/modal/Modal.vue";

	var clinicDetails = {
		// components: {
	 //    Modal
	 //  },
		data() {
			return {
				timeFrame: {},
				showWeekSelector: false,
				showTimeSelector: false,
				showStartHourSeletor: false,
			}
		},
		methods: {
			btnWeekSelector() {
				if (this.showWeekSelector === false) {
					this.showWeekSelector = true;
				} else {
					this.showWeekSelector = false;
				}
			},
			btnTimeSelector() {
				if (this.showTimeSelector === false) {
					this.showTimeSelector = true;
				} else {
					this.showTimeSelector = false;
				}
			},
			btnStartHourSelector() {
				if (this.showStartHourSeletor === false) {
					this.showStartHourSeletor = true;
				} else {
					this.showStartHourSeletor = false;
				}
			}
		}
	
	}

	export default clinicDetails
</script>

<style lang="scss" scoped>
@import "./src/assets/css/clinic/settings.scss";
@import "./src/assets/css/clinic/clinic-responsive.scss";
</style>
