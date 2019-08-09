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
      this.$router.go(-1);
      this.$emit("enrollData", {
        stepStatus: 1
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
        this.modalEdit = !this.modalEdit;
        console.log(this.employeeStorage[index]);
        this.employeeDetails = {
          fname: this.employeeStorage[index].fname,
          lname: this.employeeStorage[index].lname,
          nricFinNo: this.employeeStorage[index].nricFinNo,
          dob: this.employeeStorage[index].dob,
          email: this.employeeStorage[index].email,
          mNumber: this.employeeStorage[index].mNumber,
          mAreaCode: this.employeeStorage[index].mAreaCode,
          mCredits: this.employeeStorage[index].mCredits,
          wCredits: this.employeeStorage[index].wCredits,
          startDate: this.employeeStorage[index].startDate
        };
      } else if (x === "close") {
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
          this.modalEdit = false;
          let index = this.indexData;
          this.addToStorage("edit", index);
          this.$swal(
            "Updated!",
            "Employee details has been updated.",
            "success"
          );
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