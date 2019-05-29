<script>
import Modal from "../../../views/company/modal/Modal.vue";
import FadeTransition from "../../../assets/transitions/FadeTransition";
import ModalTransition from "../../../assets/transitions/ModalTransition";

// Methods here
let employeeDetails = {
  components: {
    Modal,
    FadeTransition,
    ModalTransition
  },
  data() {
    return {
      toggle_overiew_type: 1,
      isMedicalUsageShow: false,
      isWellnessUsageShow: false,
      healthSpendingAccountTabIsShow: false,
      modalEditEmployee: false,
      modalEdit: {
        employee: false,
        dependent: false
      },
      showAddDependents: false,
      showRemoveEmployee: false
    };
  },
  methods: {
    editDetailsData(data) { //for modal edit in employee information
      this.modalEditEmployee = data.modalEditEmployee;
    },
  	toggleTabOverview( opt ) { //tab employee,dependent,settings in employee information
			this.toggle_overiew_type = opt;
			this.healthSpendingAccountTabIsShow = false;
		},
  	toggleMedicalUsage() { //chevron image for medical spending account
			if(this.isMedicalUsageShow == false ) {
				this.isMedicalUsageShow = true;
			}else {
				this.isMedicalUsageShow = false;
			}
		},
		toggleWellnessUsage() { //chevron image for wellness spending account
			if(this.isWellnessUsageShow == false ) {
				this.isWellnessUsageShow = true;
			}else {
				this.isWellnessUsageShow = false;
			}
		},
		toggleAddDependents( data ) { //add button for dependent under employee information
			let x = data;
			if( x === 'add' ) {
				console.log('ni gana');
				this.showAddDependents = true;
			} else if( x === 'cancel' ) {
				this.showAddDependents = false;
			}
		},
		removeEmployee( data ) { //remove employee button under person information
			let x = data;
			if( x === 'showRemove' ) {
				this.showRemoveEmployee = true;
			} else if( x === 'cancel' ) {
				this.showRemoveEmployee = false;
			}
		},
		reset() { //resend/reset account button in settings tab
			this.$swal({
        title: "Confirm",
        text:
          "Are you sure you want to resend and reset the password for this account?",
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
    viewEmployeeSpendingSummary() {//health spending account summary button under person information
      if (this.healthSpendingAccountTabIsShow == false) {
        this.toggle_overiew_type = 4;
        this.healthSpendingAccountTabIsShow = true;
      } else {
        this.toggle_overiew_type = 1;
        this.healthSpendingAccountTabIsShow = false;
      }
    }
  },
  created() {}
};

export default employeeDetails;
</script>


<style lang="scss" scoped>
@import "./src/assets/css/company/employee.scss";
</style>
