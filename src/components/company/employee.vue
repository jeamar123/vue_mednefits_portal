<script>

import FadeTransition from "../../assets/transitions/FadeTransition";
import ModalTransition from "../../assets/transitions/ModalTransition";
// methods here
let employee = {
	components: {
    FadeTransition,
    ModalTransition
  },
  data() {
    return {
      sampleData: false,
      overviewInfoShow: false,
      modalEditEmployee: false,
      modalEditDependent: false,
      isMedicalUsageShow: false,
      isWellnessUsageShow: false,
      showAddDependents: false,
      showRemoveEmployee: false,
      healthSpendingAccountTabIsShow: false,
      toggle_overiew_type: 1
    };
  },
  methods: {
		toggleTabOverview( opt ) {
			this.toggle_overiew_type = opt;
			this.healthSpendingAccountTabIsShow = false;
		},
		toggleMedicalUsage() {
			if(this.isMedicalUsageShow == false ) {
				this.isMedicalUsageShow = true;
			}else {
				this.isMedicalUsageShow = false;
			}
		},
		toggleWellnessUsage() {
			if(this.isWellnessUsageShow == false ) {
				this.isWellnessUsageShow = true;
			}else {
				this.isWellnessUsageShow = false;
			}
		},
		toggleAddDependents( data ) {
			let x = data;
			if( x === 'add' ) {
				this.showAddDependents = true;
			} else if( x === 'cancel' ) {
				this.showAddDependents = false;
			}
		},
		removeEmployee( data ) {
			let x = data;
			if( x === 'showRemove' ) {
				this.showRemoveEmployee = true;
			} else if( x === 'cancel' ) {
				this.showRemoveEmployee = false;
			}
		},
		overviewInfo() {
			if(this.overviewInfoShow == false) {
				this.overviewInfoShow = true;
			}
			else {
				this.overviewInfoShow = false;
			}
		},
		openUpdateEmployeeModal( data ) {
			let x = data;
			if( x === 'edit' ) {
				this.modalEditEmployee = !this.modalEditEmployee;
			} else if( x === 'close' ) {
				this.modalEditEmployee = !this.modalEditEmployee;
			}
		},
		openUpdateDependentModal( data ) {
			let x = data;
			if( x === 'edit' ) {
				this.modalEditDependent = !this.modalEditDependent;
			} else if( x === 'close' ) {
				this.modalEditDependent = !this.modalEditDependent;
			}
		},
		reset() {
			this.$swal({
        title: "Confirm",
        text: "Are you sure you want to resend and reset the password for this account?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        customClass: "warning-global-container primary"
      }).then(result => {
        if (result.value) {
          this.dependentState = !this.dependentState;
          this.isState = "web";
        }
      });
		},
		viewEmployeeSpendingSummary() {

			if (this.healthSpendingAccountTabIsShow == false ) {
				this.toggle_overiew_type = 4;
				this.healthSpendingAccountTabIsShow = true;
			}else {
				this.toggle_overiew_type = 1;
				this.healthSpendingAccountTabIsShow = false;
			}
		}
	}
};



export default employee

</script>

<style lang="scss" scoped>
	@import './src/assets/css/company/employee.scss'
</style>
