<script>
/* eslint-disable */
// imports here
import FadeTransition from "../../assets/transitions/FadeTransition";
import ModalTransition from "../../assets/transitions/ModalTransition";
import moment from "moment";
import jQuery from "jquery";
import { isNull } from "util";
const $ = jQuery;
window.$ = $;

// Methods here
let enrollment = {
  components: {
    FadeTransition,
    ModalTransition
  },
  data() {
    return {
      isType: "", //excel or web input
      isState: "enrollment", //navigation title
      empType: "empOnly",
      summaryBtn: false, // summary state
      dependentState: false,
      selected_emp_dep_tab: 1,
      modalEdit: false, //edit modal
      // data binding store data from WEB INPUT forms
      indexData: 0,
      employeeDetails: {},
      dependentDetails: {},
      employeeStorage: [
        // {
        // //   fname: "jazer",
        // //   lname: "zayas",
        // //   dependents: [
        // //     {
        // //       fname: "jazer",
        // //       lname: "zayas"
        // //     },
        // //     {
        // //       fname: "jazer",
        // //       lname: "zayas"
        // //     }
        // //   ]
        // }
      ],
      dependentStorage: [
        //     {
        //       fname: "jazer",
        //       lname: "zayas"
        //     },
        //     {
        //       fname: "jazer",
        //       lname: "zayas"
        //     }
      ],
      date: new Date() // Jan 25th, 2018
    };
  },
  methods: {
    type(data) {
      this.isType = data;
      console.log(this.isType);
    },
    empBtnType(data) {
      this.empType = data;
    },
    toggleSummary() {
      console.log(this.summaryBtn);
      this.summaryBtn = !this.summaryBtn;
      if (this.summaryBtn === true) {
        $("#summary-btn").css({ right: "255px" });
        $("#summary-content").css({ width: "255px" });
      } else {
        $("#summary-btn").css({ right: "0" });
        $("#summary-content").css({ width: "0" });
      }
    },
    addDependent() {
      this.dependentState = !this.dependentState;
      if (this.dependentState === true) {
        this.isState = "dependent";
      }
    },
    addToStorage(source, index) {
      // store to temp storage when adding employees
      console.log(this.employeeDetails);
      console.log(this.indexData);
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
      } else if (this.employeeDetails.fname != undefined) {
        this.employeeStorage.push({
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
        });
      } else {
        console.log('no data to be pushed');
      }
      console.log(this.employeeStorage);
      this.dependentStorage = [];
      this.employeeDetails = {};
      this.employeeDetails.dob = undefined;
      this.indexData = 0;
    },
    addDependentDetails() {
      this.dependentState = !this.dependentState;
      if (this.dependentState === false) {
        this.isState = "web";
      }
      // store to temp storage when adding employees
      this.dependentStorage.push({
        fname: this.dependentDetails.fname,
        lname: this.dependentDetails.lname
      });
      this.dependentDetails = {};
    },
    selectEmpDepTab( opt ) {
      this.selected_emp_dep_tab = opt;
    },
    cancelDep() {
      this.$swal({
        title: "Confirm",
        text: "Unsaved data will be deleted, Proceed?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirm",
        customClass: "warning-global-container primary"
      }).then(result => {
        if (result.value) {
          this.dependentState = !this.dependentState;
          this.isState = "web";
        }
      });
    },
    enroll() {
      this.isState = "enrollsum";
      this.$emit("enrollmentData", {
        isState: "enrollsum"
      });
      this.addToStorage();
    },
    next() {
      if (this.isType === "web") {
        this.isState = "web";
        this.$emit("enrollmentData", {
          isState: "web"
        });
      } else if (this.isType === "excel") {
        this.isState = "excel";
        this.$emit("enrollmentData", {
          isState: "excel"
        });
      } else {
        console.log("select 1 item");
      }
    },
    back(data) {
      this.isState = data;
      if (this.isState === "enrollment") {
        this.dependentState = false;
        this.$emit("enrollmentData", {
          isState: "enrollment"
        });
      } else if (this.isState === "web") {
        this.isState = "web";
        this.$emit("enrollmentData", {
          isState: "web"
        });
      }
    },
    editEmployee(data, index) {
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
    update() {
      this.$swal({
        title: "Confirm",
        text: "Are you sure you want to update this employee?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        customClass: "warning-global-container"
      }).then(result => {
        if (result.value) {
          this.modalEdit = false;
          let index = this.indexData;
          this.addToStorage('edit', index);
          this.$swal(
            "Updated!",
            "Employee details has been updated.",
            "success"
          );
        }
      });
    },
    remove() {
      this.$swal({
        title: "Confirm",
        text: "Are you sure you want to remove this employee?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        customClass: "warning-global-container"
      }).then(result => {
        if (result.value) {
          this.modalEdit = false;
          //delete employee
          let index = this.indexData;
          const data = this.employeeStorage.indexOf(index);
          this.employeeStorage.splice(data,1);
          //succes SWAL
          this.$swal(
            "Deleted!",
            "Employee details has been deleted.",
            "success"
          );
        }
      });
    },
    excel() {
      console.log("excel details");
    }
  },
  filters: {
    formatDate: function(value) {
      if (value) {
        return moment(String(value)).format("MM/DD//YYYY");
      }
    }
  }
};

export default enrollment;
</script>

<style lang="scss">
@import "./src/assets/css/company/enrollment.scss";
</style>