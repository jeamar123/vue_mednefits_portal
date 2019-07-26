<script>
/* eslint-disable */
import Modal from "../../../views/company/modal/Modal.vue";
import HealthSpending from "../../../views/company/employee/Health-spending.vue";
import employee from "../../../views/company/Employee.vue";
import axios from 'axios';
import moment from "moment";

// Methods here
let employeeDetails = {
  components: {
    Modal,
    HealthSpending
  },
  props:{
    id: {
      type: Number
    },
    employees : {
      type: Object
    }
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
      },
      isTierDetailsShow: false,
      formats: {
	        input: ['DD/MM/YYYY'], 
	        data: ['DD/MM/YYYY']
      },
      selected_emp_dependents : {},
      toEdit: {},
      dependentIndex: null,
    };
  },
  created() {
  },  
  mounted() {
    this.getEmpPlans(this.id);
    this.getEmpDependents(this.id);
    console.log('mao ning data', this.employees);
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
      
    },
    getUsage(x,y) {
      return ( parseFloat(x) + parseFloat(y) );
    },
    editEmployees() {
      this.modalEdit.employee = !this.modalEdit.employee;
      this.toEdit = {
        fname : this.employees.fname,
        email : this.employees.email,
        lname : this.employees.lname,
        phone_no : this.employees.phone_no,
        nric : this.employees.nric,
        postal_code : this.employees.postal_code,
        member_id : this.employees.member_id,
        job_title : this.employees.job_title,
        dob : this.employees.dob,
        bank_account : this.employees.bank_account,
      }
    },
    editDependents(index) {
      this.modalEdit.dependent = !this.modalEdit.dependent;
      this.dependentIndex = index;
      this.toEdit = {
        first_name :  this.selected_emp_dependents[index].first_name,
        dob :  this.selected_emp_dependents[index].dob,
        last_name :  this.selected_emp_dependents[index].last_name,
        relationship :  this.selected_emp_dependents[index].relationship,
        member_id :  this.selected_emp_dependents[index].member_id,
        nric :  this.selected_emp_dependents[index].nric,
      }
      console.log( this.toEdit);
    },
    update(source, index) {
      if(source == 'employees') {
        this.$swal({
          title: "Confirm",
          text: "Are you sure you want to update this employee?",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes",
          confirmButtonColor: "#0392CF",
          cancelButtonText: "No",
          customClass: "warning-global-container primary"
        }).then(result => {
          if (result.value) {
            this.modalEdit.employee = false;
            this.updateToApi(source);
            this.$swal(
              "Updated!",
              "Employee Details Has Been Updated.",
              "success"
            );
          }
        });
      } else if (source == 'dependents') {
        this.$swal({
          title: "Confirm",
          text: "Are you sure you want to update this employee?",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes",
          confirmButtonColor: "#0392CF",
          cancelButtonText: "No",
          customClass: "warning-global-container primary"
        }).then(result => {
          if (result.value) {
            this.modalEdit.dependent = false;
            this.updateToApi(source, index);
            this.dependentIndex = null;
            this.$swal(
              "Updated!",
              "Dependent Details Has Been Updated.",
              "success"
            );
          }
        });
      }
    },
    updateToApi(source, index) {

      if(source == 'employees') {
        this.employees = this.toEdit;
      } else if (source == 'dependents') {
        this.selected_emp_dependents[index] = this.toEdit;
      }

    },

    //API calls
    getEmpPlans(id) {
      axios.get( `${axios.defaults.serverUrl}/hr/get_employee_plan_covers?employee_id=${id}`)
      .then(res => {
      
        this.employees.plan_list = res.data;
        this.$forceUpdate();
      })
      .catch(err => {
        console.log( err );
        this.$parent.hideLoading();
        this.$parent.swal('Error!', err,'error');
      });
    },
    getEmpDependents(id) {
      axios.get( `${axios.defaults.serverUrl}/hr/get_employee_dependents?employee_id=${id}`)
      .then(res => {
        this.selected_emp_dependents = res.data.dependents;

        this.selected_emp_dependents.map( (value, key) => {
          value.dob = new Date( value.dob );
        });
        this.$forceUpdate();
      })
      .catch(err => {
        console.log( err );
        this.$parent.hideLoading();
        this.$parent.swal('Error!', err,'error');
      });
    }
  },
  filters: {
    decimalTwo(value) {
      if (value !=0) {
        return parseFloat(value).toFixed(2);
      } else {
        return 0;
      }
    },
    formatDate(value, format) {
      if (value !=0) {
        return moment(String(value)).format(format);
      } else {
        return 'N/A'
      }
    },
  },
};

export default employeeDetails;
</script>

<style lang="scss" scoped>
  @import './src/assets/css/company/employee.scss'
</style>


