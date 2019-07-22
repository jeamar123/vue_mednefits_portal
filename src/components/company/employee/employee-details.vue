<script>
/* eslint-disable */
import Modal from "../../../views/company/modal/Modal.vue";
import HealthSpending from "../../../views/company/employee/Health-spending.vue";

// Methods here
let employeeDetails = {
  components: {
    Modal,
    HealthSpending
  },
  data() {
    return {
      sideInfo: false,
      toggle_overiew_type: 1,
      isMedicalUsageShow: false,
      isWellnessUsageShow: false,
      healthSpendingAccountTabIsShow: false,
      modalEditEmployee: false,
      modalEdit: {
        employee: false,
        dependent: false,
        reset: false,
      },
      showAddDependents: false,
      sideInfo: {
        trigger: false,
        sideStyle: {},
        sideContainer: {},
        empInfoWrapper: {}
      }
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
  	toggleSideInfo( opt ) { //sidebar information in mobile view
        this.sideInfo.trigger = !this.sideInfo.trigger;

        if (this.sideInfo.trigger == true) {
          this.sideInfo.sideStyle = {
            left: '0',
          }
          // this.sideInfo.sideContainer = {
          //   gridTemplateColumns: '1fr 100%',
          // }
        } else {
          console.log('false ni');
           this.sideInfo.sideStyle = {
            left: '-320px',
          }
          // this.sideInfo.sideContainer = {
          //   gridTemplateColumns: '1fr 100%',
          // }
        }
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
				this.showAddDependents = true;
			} else if( x === 'cancel' ) {
				this.showAddDependents = false;
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
          this.modalEdit.reset = true;
          // this.dependentState = !this.dependentState;
          // this.isState = "web";
          // show input password modal
        }
      });
    },
    viewEmployeeSpendingSummary() { //health spending account summary button under person information

      this.toggleSideInfo(0);
      if (this.healthSpendingAccountTabIsShow == false) {
        this.toggle_overiew_type = 4;
        this.healthSpendingAccountTabIsShow = true;
      } else {
        this.toggle_overiew_type = 1;
        this.healthSpendingAccountTabIsShow = false;
      }
      setTimeout(  function() {
        // $("html, body").animate({scrollTop: $("body").offset().top}, 400);
        console.log('gana ni');
        $("body").scrollTop(0);
      }, 2000);
      
    }
  },
  created() {}
};

export default employeeDetails;
</script>

<style lang="scss" scoped>
  @import './src/assets/css/company/employee.scss'
</style>


