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
      isState: '',
      isActive: false,
      isDropdown: false //hide show Dropdown
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
    dropdownClicked() {
      this.isDropdown = !this.isDropdown;
    },
    // if dropdown open then close dropdown when click anywhere in page
    documentClick(e) {
      let el = this.$refs.dropdownMenu;
      let target = e.target;
      if (el !== target && !el.contains(target)) {
        this.isDropdown = false;
      }
    }
    // Your Methods here
  },
  created() {
    // close dropdown when click anywhere in page
    document.addEventListener("click", this.documentClick);
  },
  destroyed() {
    // close dropdown when click anywhere in page
    // important to clean up!!
    document.removeEventListener("click", this.documentClick);
  }
};

export default dashboard;
</script>

<style lang="scss" scoped>
	@import './src/assets/css/company/dashboard.scss'
</style>