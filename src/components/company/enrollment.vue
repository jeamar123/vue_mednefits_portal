<script>
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
      depdentState: false
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
      if ( this.depdentState === true ) {
        this.isState = 'dependent';
      }else {
        this.isState = 'web';
      }
      console.log(this.isState);
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
    employeeDetails() {
      console.log("submit employee details");
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