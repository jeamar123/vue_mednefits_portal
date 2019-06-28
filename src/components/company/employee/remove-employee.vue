<script>
/* eslint-disable */
import Modal from "../../../views/company/modal/Modal.vue";
import { error } from "util";

let removeEmployee = {
	components: {
		Modal
	},
	data() {
		return {
			sampleData: false,
			removeState: 'default',
			spendingState: 'account_summary',
			outcome_checked: 0,
		};
	},
	methods: {
		next(data) {
			if(data === 'outcome') {
				if (this.outcome_checked == 1) {
					this.removeState = 'replacement';
					this.outcome_checked = 1;
					console.log(this.outcome_checked,this.removeState);
				}
				else if (this.outcome_checked == 2) {
					this.removeState = 'health_spending_wrapper';
					this.spendingState = 'account_summary';
					this.outcome_checked = 2;
					console.log(this.outcome_checked,this.removeState);
				}
				else if (this.outcome_checked == 3) {
					this.removeState = 'health_spending_wrapper';
					this.spendingState = 'account_summary';
					this.outcome_checked = 3;
					console.log(this.outcome_checked,this.removeState);
				}
				else {
					console.log(this.outcome_checked,this.removeState);
				}
			}
			else if (data === 'replacement') {
				this.removeState = 'health_spending_wrapper';
				this.spendingState = 'account_summary';
			}
			else if ( data === 'confirm'){
				console.log('confirm clicked');
			}
		}
	}
};

export default removeEmployee;
</script>

<style lang="scss" scoped>
  @import './src/assets/css/company/employee.scss'
</style>