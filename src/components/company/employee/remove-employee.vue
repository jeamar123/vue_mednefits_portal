<script>
/* eslint-disable */
import Modal from "../../../views/company/modal/Modal.vue";
import { error } from "util";
import axios from 'axios';
import moment, { locale } from "moment";

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
			removeData: {
				customer_id: null,
				employeeInfo: JSON.parse(localStorage.getItem('selectedEmployee')),
				last_day_coverage: new Date(),
			},
			health_spending_summary: {},
			update_member_wallet_status: null,
			formats: {
	        input: ['DD/MM/YYYY'], 
	        data: ['DD/MM/YYYY']
      },
		};
	},
	created() {
		this.getSession();
		this.getSpendingAccountSummary();
	},
	mounted() {

	},
	methods: {
		next(data) {
			// this.getSpendingAccountSummary();
			if(data === 'outcome') {
				if (this.outcome_checked == 1) { //replace
					this.removeState = 'replacement';
					this.outcome_checked = 1;
					console.log(this.outcome_checked,this.removeState);
				}
				else if (this.outcome_checked == 2) { //reserve
					this.removeState = 'health_spending_wrapper';
					this.spendingState = 'reserve';
					this.outcome_checked = 2;
					console.log(this.outcome_checked,this.removeState, this.spendingState);
				}
				else if (this.outcome_checked == 3) { //remove
					this.removeState = 'health_spending_wrapper';
					this.spendingState = 'remove';
					this.outcome_checked = 3;
					console.log(this.outcome_checked,this.removeState, this.spendingState);
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
		},
		confirmWalletUpdateBtn() {
			if (this.update_member_wallet_status) {
				let last_day = moment(this.removeData.last_day_coverage).format(YYYY-MM-DD);
				this.updateWalletMember(removeData.employeeInfo.user_id, removeData.customer_id, last_day);
			} else {
				this.$parent.swal('Success!', "Member has successfully scheduled for remove.", 'success');
			}

			if( this.outcome_checked == 1){ //replace

			} else if (this.outcome_checked == 2) { //reserve

			} else if (this.outcome_checked == 3) { //remove
				
			}
		},

		//API calls
		getSession() {
			axios.get( `${axios.defaults.serverUrl}/get-hr-session`)
      .then(res => {
				this.removeData.customer_id = res.data.customer_buy_start_id;
				this.$parent.hideLoading();
      })
      .catch(err => {
        console.log( err );
        this.$parent.hideLoading();
        this.$parent.swal('Error!', err,'error');
      });
		},
		getSpendingAccountSummary () {
			let emp_id = this.removeData.employeeInfo.user_id;
			let customer_id = this.removeData.customer_id;
			let last_day = this.removeData.last_day_coverage;

			axios.get( `${axios.defaults.serverUrl}/hr/get_employee_spending_account_summary?employee_id=${emp_id}&customer_id=${customer_id}&last_date_of_coverage=${last_day}`)
      .then(res => {
				console.log(res);

				this.health_spending_summary = res.data;
				this.$parent.hideLoading();
				this.$forceUpdate();
      })
      .catch(err => {
        console.log( err );
        this.$parent.hideLoading();
        this.$parent.swal('Error!', err,'error');
      });
		},
		updateWalletMember(emp_id, customer_id, last_day) {
			axios.get( `${axios.defaults.serverUrl}/hr/get_employee_spending_account_summary?employee_id=${emp_id}&customer_id=${customer_id}&last_date_of_coverage=${last_day}&calibrate_wellness=true&calibrate_medical=true`)
      .then(res => {

				if( res.data.status ) {
					this.$parent.swal('Success!', "Member has successfully scheduled for remove and credits updated according.", 'success');
				} else {
					this.$parent.swal('Error!', response.data.message, 'error');
				}
				this.$parent.hideLoading();
      })
      .catch(err => {
        console.log( err );
        this.$parent.hideLoading();
        this.$parent.swal('Error!', err,'error');
      });
		}
	}
};

export default removeEmployee;
</script>

<style lang="scss" scoped>
  @import './src/assets/css/company/employee.scss'
</style>