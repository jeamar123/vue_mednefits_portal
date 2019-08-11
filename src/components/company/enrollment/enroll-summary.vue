<script>
/* eslint-disable */
import axios from 'axios';
import moment from "moment";
import Modal from "../../../views/company/modal/Modal.vue";
import { deprecate } from "util";

let enrollSumamary = {
  components: {
    Modal
  },
  data() {
    return {
      isState: "enrollsum",
      modalEdit: false, //edit modal
      isChecked: [], // used in enrollment summary
      employeeDetails: {},
      maxDep: 0,
      employeeStorage: [],
      isEnrollDisabled: false,
    };
  },
  created(){
    this.getTempEmployees();
  },
  methods: {
    findMaxDep() { // methods to find maximum depdents each employee
      let depLength = []; //holds array of all dependent array length to find na fax depdendent on each employee
      let dep;
      let value;
      console.log( this.employeeStorage );
      for (let i = 0; i <= this.employeeStorage.length-1; i++){ //TO SELECT 1 EMPLOYEE
        dep = this.employeeStorage[i].dependents;
        value = dep.length;
        depLength.push(value);
      };
      let max = Math.max.apply(Math, depLength);
      this.maxDep = max;
    },
    checkDependentForm( data ){
      console.log( data );
      var err = 0;
      if( !data.first_name ){
        this.$parent.swal( 'Error!', 'First name is required!', 'error' );
        return false;
      }
      if( !data.last_name ){
        this.$parent.swal( 'Error!', 'Last name is required!', 'error' );
        return false;
      }
      if( !data.nric ){
        this.$parent.swal( 'Error!', 'NRIC/FIN is required!', 'error' );
        return false;
      }else{
        if( this.checkNRIC( data.nric ) == false ){
          this.$parent.swal( 'Error!', 'Invalid NRIC!', 'error' );
          return false;
        }
      }
      if( !data.dob ){
        this.$parent.swal( 'Error!', 'Date of Birth is required!', 'error' );
        return false;
      }
      if( !data.relationship ){
        this.$parent.swal( 'Error!', 'Relationship is required!', 'error' );
        return false;
      }
      if( !data.plan_start ){
        this.$parent.swal( 'Error!', 'Start Date is required!', 'error' );
        return false;
      }
      return true; 
    },
    checkEmployeeForm( data ){
      console.log( data );
      var err = 0;
      if( !data.fname ){
        this.$parent.swal( 'Error!', 'First name is required!', 'error' );
        return false;
      }
      if( !data.lname ){
        this.$parent.swal( 'Error!', 'Last name is required!', 'error' );
        return false;
      }
      if( !data.nricFinNo ){
        this.$parent.swal( 'Error!', 'NRIC/FIN is required!', 'error' );
        return false;
      }else{
        if( this.checkNRIC( data.nricFinNo ) == false ){
          this.$parent.swal( 'Error!', 'Invalid NRIC!', 'error' );
          return false;
        }
      }
      if( !data.dob ){
        this.$parent.swal( 'Error!', 'Date of Birth is required!', 'error' );
        return false;
      }
      if( !data.email ){
        this.$parent.swal( 'Error!', 'Email Address is required!', 'error' );
        return false;
      }else{
        if( this.checkEmail( data.email ) == false ){
          this.$parent.swal( 'Error!', 'Invalid Email!', 'error' );
          return false;
        }
      }
      if( !data.mNumber ){
        this.$parent.swal( 'Error!', 'Mobile Number is required!', 'error' );
        return false;
      }
      if( !data.mAreaCode ){
        this.$parent.swal( 'Error!', 'Mobile Area Code is required!', 'error' );
        return false;
      }
      // if( !data.postal ){
      //   this.$parent.swal( 'Error!', 'Postal Code is required!', 'error' );
      //   return false;
      // }
      if( !data.startDate ){
        this.$parent.swal( 'Error!', 'Start Date is required!', 'error' );
        return false;
      }
      return true; 
    },
    checkNRIC( value ){
      var nric_pattern = new RegExp('^[stfgSTFG]{1}[0-9]{7}[a-zA-z]{1}$');
      return nric_pattern.test( value );
    },
    checkEmail( value ){
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test( value );
    },
    back() {
      this.$swal({
        title: "Confirm",
        text: "Temporary employee data will be deleted, Proceed?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        confirmButtonColor: "#0392CF",
        cancelButtonText: "No",
        customClass: "warning-global-container primary"
      }).then(result => {
        if (result.value) {
          this.$router.go(-1);
          this.$emit("enrollData", {
            stepStatus: 1
          });
        }
      });
    },
    enroll( data ) {
      if (data === "successEnroll") {
        if( this.isEnrollDisabled == true ){
          this.$parent.swal('Error!', 'Please check your enrollment errors first.', 'error');
        }else{
          this.isState = "successEnroll";
          // this.$emit("enrollmentData", {
          //   isState: "enrollment"
          // });
        }
      }
    },
    editEmployee( data, index ) {
      // used in enrollment summary
      let x = data;
      this.indexData = index;
      if (x === "edit") {
        console.log(this.employeeStorage[index]);
        this.employeeDetails = {
          fname: this.employeeStorage[index].employee.first_name,
          lname: this.employeeStorage[index].employee.last_name,
          nricFinNo: this.employeeStorage[index].employee.nric,
          dob: new Date( this.employeeStorage[index].employee.dob ),
          email: this.employeeStorage[index].employee.email,
          mNumber: this.employeeStorage[index].employee.mobile,
          mAreaCode: this.employeeStorage[index].employee.mobile_area_code,
          mCredits: this.employeeStorage[index].employee.credits,
          wCredits: this.employeeStorage[index].employee.wellness_credits,
          startDate: new Date( this.employeeStorage[index].employee.start_date ),
          errors: this.employeeStorage[index].error_logs,
          dependents: this.employeeStorage[index].dependents
        };
        if( this.employeeDetails.dependents.length > 0 ){
          for( var i = 0; i < this.employeeDetails.dependents.length; i++ ){
            this.employeeDetails.dependents[i].enrollee.dob = new Date( moment( this.employeeDetails.dependents[i].enrollee.dob, ['DD/MM/YYYY'] ) );
            this.employeeDetails.dependents[i].enrollee.plan_start = new Date( moment( this.employeeDetails.dependents[i].enrollee.plan_start, ['DD/MM/YYYY'] ) );
            if( i == this.employeeDetails.dependents.length - 1 ){
              this.modalEdit = !this.modalEdit;
            }
          }
        }else{
          this.modalEdit = !this.modalEdit;
        }
      }else{
        this.modalEdit = !this.modalEdit;
      }
    },
    update() {
      console.log( this.employeeDetails );
      // used in enrollment summary
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
          if( this.checkEmployeeForm( this.employeeDetails ) == true ){
            for( var i = 0; i < this.employeeDetails.dependents.length; i++ ){
              if( this.checkDependentForm( this.employeeDetails.dependents[i].enrollee ) == true ){
                if( i == this.employeeDetails.dependents.length - 1 ){
                  this.updateEmployee();
                }
              }
            }
          }
        }
      });
    },
    updateEmployee( ){
      var data = {
        temp_enrollment_id : this.employeeStorage[this.indexData].employee.temp_enrollment_id,
        first_name: this.employeeDetails.fname,
        last_name: this.employeeDetails.lname,
        nric: this.employeeDetails.nricFinNo,
        dob: moment(this.employeeDetails.dob, [ 'YYYY-MM-DDTHH:mm:ss.SSSSZ', 'DD/MM/YYYY' ]).format('DD/MM/YYYY'),
        // dob: moment(this.employeeDetails.dob).format('YYYY-MM-DD'),
        email: this.employeeDetails.email,
        mobile: this.employeeDetails.mNumber,
        job_title: this.employeeStorage[this.indexData].employee.job_title,
        medical_credits: this.employeeDetails.mCredits,
        wellness_credits: this.employeeDetails.wCredits,
        plan_start: moment(this.employeeDetails.startDate, [ 'YYYY-MM-DDTHH:mm:ss.SSSSZ', 'DD/MM/YYYY' ]).format('DD/MM/YYYY'),
        // plan_start: moment(this.employeeDetails.startDate).format('YYYY-MM-DD'),
        postal_code: this.employeeStorage[this.indexData].employee.postal_code,
        mobile_area_code: this.employeeDetails.mAreaCode
      }
      this.$parent.showLoading();
      axios.post( axios.defaults.serverUrl + '/hr/update/tier_employee_enrollee_details', data )
        .then(res => {
          this.$parent.hideLoading();
          console.log(res);
          if( res.data.status ){
            if( this.employeeDetails.dependents.length > 0 ){
              this.updateDependents();
            }else{
              this.modalEdit = false;
              this.$parent.swal('Success!', res.data.message, 'success');
              this.getTempEmployees();
            }
          }else{
            this.$parent.swal('Error!', res.data.message, 'error');
          }
        })
        .catch(err => {
          console.log( err );
          this.$parent.hideLoading();
          this.$parent.swal('Error!', err,'error');
        });
    },
    updateDependents( ){
      for( var i = 0; i < this.employeeDetails.dependents.length; i++ ){
        var data = {
          dependent_temp_id : this.employeeDetails.dependents[i].enrollee.dependent_temp_id,
          first_name : this.employeeDetails.dependents[i].enrollee.first_name,
          last_name : this.employeeDetails.dependents[i].enrollee.last_name,
          nric : this.employeeDetails.dependents[i].enrollee.nric,
          dob : moment(this.employeeDetails.dependents[i].enrollee.dob, [ 'YYYY-MM-DDTHH:mm:ss.SSSSZ', 'DD/MM/YYYY' ]).format('YYYY-MM-DD'),
          plan_start : moment(this.employeeDetails.dependents[i].enrollee.plan_start, [ 'YYYY-MM-DDTHH:mm:ss.SSSSZ', 'DD/MM/YYYY' ]).format('YYYY-MM-DD'),
          relationship : this.employeeDetails.dependents[i].enrollee.relationship,
        } 
        this.$parent.showLoading();
        axios.post( axios.defaults.serverUrl + '/hr/update_tier_dependent_enrollee_details', data )
          .then(res => {
            this.$parent.hideLoading();
            console.log(res);
            if( res.data.status ){
              this.modalEdit = false;
              this.$parent.swal('Success!', res.data.message, 'success');
              this.getTempEmployees();
            }else{
              this.$parent.swal('Error!', res.data.message, 'error');
            }
          })
          .catch(err => {
            console.log( err );
            this.$parent.hideLoading();
            this.$parent.swal('Error!', err,'error');
          });
      }
    },
    removeEmployee( id ){
      this.$swal({
        title: "Confirm",
        text: "Are you sure you want to remove this employee?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        confirmButtonColor: "#ff6864",
        cancelButtonText: "No",
        customClass: "warning-global-container danger"
      }).then(result => {
        if (result.value) {
          this.$parent.showLoading();
          axios.get( axios.defaults.serverUrl + '/remove/temp_enrollee/' + id )
            .then(res => {
              this.$parent.hideLoading();
              console.log(res);
              if( res.data.status ){
                this.modalEdit = false;
                this.$parent.swal('Success!', res.data.message, 'success');
                this.getTempEmployees();
              }else{
                this.$parent.swal('Error!', res.data.message, 'error');
              }
            })
            .catch(err => {
              console.log( err );
              this.$parent.hideLoading();
              this.$parent.swal('Error!', err,'error');
            });
        }
      });
    },
    removeCheckedEmployees( id ){
      this.$swal({
        title: "Confirm",
        text: "Are you sure you want to remove these employee(s)?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        confirmButtonColor: "#ff6864",
        cancelButtonText: "No",
        customClass: "warning-global-container danger"
      }).then(result => {
        if (result.value) {
          // for( var i = 0; i < this.employeeDetails.dependents.length; i++ ){
          // }
        }
      });
    },
    getTempEmployees(){
      this.$parent.showLoading();
      axios.get( axios.defaults.serverUrl + '/hr/get/plan_tier_enrolless' )
        .then(res => {
          this.$parent.hideLoading();
          console.log(res);
          if( res.data.status ){
            this.employeeStorage = res.data.data;
            if( this.employeeStorage.length > 0 ){
              this.findMaxDep();
            }else{
              this.$parent.swal( 'Error!', 'No Employees to Enroll. Add Employees First.', 'error' );
              this.$router.push({ name: 'CompanyEnrollment' });
            }
          }else{
            this.$parent.swal('Error!', res.data.message, 'error');
          }
        })
        .catch(err => {
          console.log( err );
          this.$parent.hideLoading();
          this.$parent.swal('Error!', err,'error');
        });
    },
  },
  filters: {
    formatDate: function(value) {
      if (value) {
        return moment( String(value), [ 'YYYY-MM-DDTHH:mm:ss.SSSSZ', 'DD/MM/YYYY' ] ).format("MM/DD/YYYY");
      }
    },
  },
};

export default enrollSumamary;
</script>

<style lang="scss">
@import "./src/assets/css/company/enrollment.scss";
</style>