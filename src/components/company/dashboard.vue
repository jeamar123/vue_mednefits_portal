<script>
/* eslint-disable */
// methods here

let dashboard = {
  data() {
    return {
      isActive: false,
      isDropdown: false //hide show Dropdown
    };
  },
  methods: {
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
    // if dropdown open then close dropdown when click anywhere in page
    document.addEventListener("click", this.documentClick);
  },
  destroyed() {
    // if dropdown open then close dropdown when click anywhere in page
    // important to clean up!!
    document.removeEventListener("click", this.documentClick);
  }
};

export default dashboard;
</script>

<style lang="scss" scoped>
@import "./src/assets/company/dashboard.scss";
</style>