<script>
/* eslint-disable */

import $ from "jquery";
window.$ = $;
// methods here
let activity = {
  data() {
    return {
      spendingType: {
        value: 0,
        text: ""
      },
      networkType: {
        value: 0,
        text: ""
      },
      timeFrame: {},
      toggleSidebar: false
    };
  },
  methods: {
    spendType(value, text) {
      //spending either medical or wellness
      this.spendingType.value = value;
      this.spendingType.text = text;
    },
    netType(value, text) {
      //spending either medical or wellness
      this.networkType.value = value;
      this.networkType.text = text;
      this.toggleSidebar = false;
    },
    toggleShowSidebar(data) {
      // toggle show sidebar content
      if (this.networkType.value === 0) {
        this.toggleSidebar = !this.toggleSidebar;
        
      } else if (this.networkType.value === 1){
        this.toggleSidebar = !this.toggleSidebar;
      }
    }
  }
};

export default activity;
</script>


<style lang="scss">
@import "./src/assets/css/company/activity.scss";
</style>
