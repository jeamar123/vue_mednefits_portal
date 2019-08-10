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
      for (let i = 0; i <= this.employeeStorage.length-1; i++){ //TO SELECT 1 EMPLOYEE
        dep = this.employeeStorage[i].dependents;
        value = dep.length;
        depLength.push(value);
      };
      let max = Math.max.apply(Math, depLength);
      this.maxDep = max;
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
    enroll(data) {
      if (data === "successEnroll") {
        this.isState = "successEnroll";
        // this.$emit("enrollmentData", {
        //   isState: "enrollment"
        // });
      }
    },
    editEmployee(data, index) {
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
        for( var i = 0; i < this.employeeDetails.depdendents.length; i++ ){
          if( i == this.employeeDetails.depdendents.length - 1 ){
            this.modalEdit = !this.modalEdit;
          }
        }
      }else{
        this.modalEdit = !this.modalEdit;
      }
    },
    addToStorage(source, index) {
      //used in web input
      // store to temp storage when adding employees
      if (source == "edit") {
        this.employeeStorage[index] = {
          fname: this.employeeDetails.fname,
          lname: this.employeeDetails.lname,
          idType: this.employeeDetails.idType,
          nricFinNo: this.employeeDetails.nricFinNo,
          dob: this.employeeDetails.dob,
          email: this.employeeDetails.email,
          mNumber: this.employeeDetails.mNumber,
          mAreaCode: this.employeeDetails.mAreaCode,
          postal: this.employeeDetails.postal,
          startDate: this.employeeDetails.startDate,
          mCredits: this.employeeDetails.mCredits,
          wCredits: this.employeeDetails.wCredits,
          dependents: [this.dependentStorage]
        };
        // this.indexData = 0;
      }  else {
        console.log("no data to be pushed");
      }
      this.dependentStorage = [];
      this.employeeDetails = {};
      this.employeeDetails.dob = undefined;
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
          var data = {
            temp_enrollment_id : this.employeeStorage[this.indexData].employee.temp_enrollment_id,
            first_name: this.employeeDetails.fname,
            last_name: this.employeeDetails.lname,
            nric: this.employeeDetails.nricFinNo,
            dob: moment(this.employeeDetails.dob).format('YYYY-MM-DD'),
            email: this.employeeDetails.email,
            mobile: this.employeeDetails.mNumber,
            job_title: this.employeeStorage[this.indexData].employee.job_title,
            medical_credits: this.employeeDetails.mCredits,
            wellness_credits: this.employeeDetails.wCredits,
            plan_start: moment(this.employeeDetails.startDate).format('YYYY-MM-DD'),
            postal_code: this.employeeStorage[this.indexData].employee.postal_code,
            mobile_area_code: this.employeeDetails.mAreaCode
          }
          this.$parent.showLoading();
          axios.post( axios.defaults.serverUrl + '/hr/update/tier_employee_enrollee_details', data )
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
    remove(data) {
      //remove used in enrollment summary
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
          if (data == "fromEdit") {
            this.modalEdit = false;
            //delete employee
            let index = this.indexData;
            const data = this.employeeStorage.indexOf(index);
            this.employeeStorage.splice(data, 1);
            //succes SWAL
            this.$swal(
              "Deleted!",
              "Employee details has been deleted.",
              "success"
            );
          } else if (data == "fromCheck") {
            let index = this.isChecked.sort();
            // const data = this.employeeStorage.indexOf(index);
            console.log("index ni", index);
            for (let i = index.length - 1; i >= 0; i--) {
              this.employeeStorage.splice(index[i], 1);
            }
            this.isChecked = [];
            //succes SWAL
            this.$swal(
              "Deleted!",
              "Employee details has been deleted.",
              "success"
            );
          }
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
            this.findMaxDep();
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