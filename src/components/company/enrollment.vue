<script>
/* eslint-disable */
// imports here
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

// Methods here
let enrollment = {
  data() {
    return {
      isType: "", //excel or web input
      isState: "enrollment", //navigation title
      summaryBtn: false, // summary state
      depdentState: false,
      // data binding store data from WEB INPUT forms
      employeeDetails: {},
      dpendentDetails: {},
      employeeStorage: [
        // {
        //   id: 1,
        //   fname: "jazer",
        //   lname: "zayas",
        //   dependents: [
        //     {
        //       fname: "jazer",
        //       lname: "zayas"
        //     },
        //     {
        //       fname: "jazer",
        //       lname: "zayas"
        //     }
        //   ]
        // }
      ],
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
      this.depdentState = !this.depdentState;
      if (this.depdentState === true) {
        this.isState = "dependent";
      } else {
        this.isState = "web";
      }
      console.log(this.isState);
    },
    getEmployeeDetails() { // store to temp storage when adding employees
      const maxID = Math.max.apply(Math, this.employeeStorage.map(q => { return q.id;}));
      // check max number of id inside the quizzes list
      const nextId = maxID + 1;
      this.employeeStorage.push({
        id: nextId,
        fname: this.employeeDetails.fname,
        lname: this.employeeDetails.lname,
        dependents: []
      });
      console.log(this.employeeDetails);
      console.log(this.employeeStorage);
    },
    next() {
      if (this.isType === "web") {
        this.isState = "web";
        this.$emit("enrollmentData", {
          isState: "web"
        });
        console.log(this.isState);
      } else if (this.isType === "excel") {
        this.isState = "excel";
        console.log(this.isState);
      } else {
        console.log("select 1 item");
      }
    },
    back(data) {
      this.isState = data;
    },
    excel() {
      console.log("excel details");
    }
  }
};

export default enrollment;
</script>

<style lang="scss" scoped>
@import "./src/assets/css/company/enrollment.scss";
</style>