<script>
import Modal from "../../../views/company/modal/Modal.vue";

let removeEmployee = {
	components: {
		Modal
	},
	data() {
		return {
			sampleData: false
		};
	},
	methods: {
		sample() {
			
		}
	}
};

export default removeEmployee;
</script>

<style lang="scss" scoped>
@import "./src/assets/css/company/employee.scss";
</style>