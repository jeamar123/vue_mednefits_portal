<script>
/* eslint-disable */
// methods here
import Enrollment from "./enrollment";
import Overview from "./overview";

let dashboard = {
  components: {
    Enrollment,
    Overview
  },
  data() {
    return {
      isState: 'enrollment',
      isActive: false,
      isDropdown: false, //hide show Dropdown,
      accountDropdown: false, 
    };
  },
  methods: {
    // change the title on navigation to Web Input and Enrollment and excel
    // functions from $emit data from another component
    enrollmentData(state) {
      this.isState = state.isState;
      console.log(this.isState);
    },
    overviewData(state){
      this.isState = state.isState;
      console.log(this.isState);
    },
    //Dropdown methods toggle show hide dropdown
    dropdownClicked(data) {
      if (data === 'employee') {
        this.isDropdown = !this.isDropdown;
      } else if (data === 'account') {
        this.accountDropdown = !this.accountDropdown;
      }
      
    },
    // if dropdown open then close dropdown when click anywhere in page
    employeeDocumentClick(e) {
      let el = this.$refs.employeeDropdownMenu;
      let target = e.target;
      if (el !== target && !el.contains(target)) {
        this.isDropdown = false;
      };
    },
    accountDocumentClick(e) {
      let el = this.$refs.accountDropdownMenu;
      let target = e.target;
      if (el !== target && !el.contains(target)) {
        this.accountDropdown = false;
      };
    }
    // Your Methods here
  },
  created() {
    // close dropdown when click anywhere in page
    document.addEventListener("click", this.employeeDocumentClick);
    document.addEventListener("click", this.accountDocumentClick);
  },
  destroyed() {
    // close dropdown when click anywhere in page
    // important to clean up!!
    document.removeEventListener("click", this.employeeDocumentClick);
    document.removeEventListener("click", this.accountDocumentClick);
  }
};

export default dashboard;
</script>

<style lang="scss" scoped>
	@import './src/assets/css/company/dashboard.scss';
</style>