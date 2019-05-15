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
      modalEdit: false, //edit modal
      // data binding store data from WEB INPUT forms
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
    getEmployeeDetails() {
      // store to temp storage when adding employees
      console.log(this.employeeDetails);
      this.employeeStorage.push({
        fname: this.employeeDetails.fname,
        lname: this.employeeDetails.lname,
        idType: this.employeeDetails.idType,
        nricFinNo: this.employeeDetails.nricFinNo,
        dob: this.employeeDetails.dob,
        email: this.employeeDetails.email,
        mNumber: this.employeeDetails.mNumber,
        postal: this.employeeDetails.postal,
        startDate: this.employeeDetails.startDate,
        mCredits: this.employeeDetails.mCredits,
        wCredits: this.employeeDetails.wCredits,
        dependents: [this.dependentStorage]
      });
      console.log(this.employeeStorage);
      this.dependentStorage = [];
      this.employeeDetails = {};
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
    cancelDep() {
      this.$swal({
        title: "Confirm",
        text: "Unsaved data will be deleted, Proceed?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirm",
        customClass: "warning-global-container"
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
    modalTrigger(data, index) {
      let x = data;
      if (x === "edit" || x === "close") {
        this.modalEdit = !this.modalEdit;
        console.log(index);
      }
    },
    update() {
      this.$swal({
        title: "Confirm",
        text: "Are you sure you want to update this employee?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Update",
        cancelButtonText: "No",
        customClass: "warning-global-container"
      }).then(result => {
        if (result.value) {
          this.modalEdit = false;
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