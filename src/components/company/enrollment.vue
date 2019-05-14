<script>
/* eslint-disable */
// imports here
import jQuery from "jquery";
import { isNull } from "util";
const $ = jQuery;
window.$ = $;

// Methods here
let enrollment = {
  data() {
    return {
      isType: "", //excel or web input
      isState: "enrollment", //navigation title
      summaryBtn: false, // summary state
      dependentState: false,
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
      ]
    };
  },
  methods: {
    type(data) {
      this.isType = data;
      console.log(this.isType);
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
      this.employeeStorage.push({
        fname: this.employeeDetails.fname,
        lname: this.employeeDetails.lname,
        dependents: [this.dependentStorage]
      });
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
    next() {
      if (this.isType === "web") {
        this.isState = "web";
        this.$emit("enrollmentData", {
          isState: "web"
        });
      } else if (this.isType === "excel") {
        this.isState = "excel";
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
      }
    },
    excel() {
      console.log("excel details");
    },
    cancelDep() {
      this.$swal({
        title: "Confirm",
        text: "Unsaved data will be deleted, Proceed?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm",
      }).then((result) => {
        if (result.value) {
          this.dependentState = false;
          this.isState = "web";
        }
      });
    }
  }
};

export default enrollment;
</script>

<style lang="scss" scoped>
@import "./src/assets/css/company/enrollment.scss";
// for the view transition

//fade transtion <tranisition name="fade">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>