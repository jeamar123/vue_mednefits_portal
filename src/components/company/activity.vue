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
      $(".transaction-container").css({
        left: "0"
      });
      $(".hidden-details-container").css({
        right: "-50%"
      });
      $(".trans-pagination-shadow").css({
        marginRigth: "0"
      });
    },
    toggleShowSidebar(data) {
      // toggle show sidebar content
      if (data === "in") {
        console.log("kani kai in");
        this.toggleSidebar = !this.toggleSidebar;
        if (this.toggleSidebar === true) {
          $("#transaction-container-inNetwork").css({
            left: "-13%"
          });
          $("#hidden-inNetwork").css({
            right: "1%"
          });
          $(".trans-pagination-shadow").css({
            marginRigth: "75px"
          });
        } else {
          console.log("kani kai else");
          $("#transaction-container-inNetwork").css({
            left: "0"
          });
          $("#hidden-inNetwork").css({
            right: "-50%"
          });
          $(".trans-pagination-shadow").css({
            marginRigth: "0"
          });
        }
      }
      // else if (data === 'out'){
      //   console.log('kani kai out');
      //   this.toggleSidebar = !this.toggleSidebar;
      //   if (this.toggleSidebar === true) {
      //     $("#transaction-container-outNetwork").css({
      //       left: "-13%"
      //     });
      //     $("#hidden-details-container-outNetwork").css({
      //       right: "1%"
      //     });
      //     $(".trans-pagination-shadow").css({
      //       marginRigth: "75px"
      //     });
      //   } else {
      //     $("#transaction-container-outNetwork").css({
      //       left: "0"
      //     });
      //     $("#hidden-details-container-outNetwork").css({
      //       right: "-50%"
      //     });
      //     $(".trans-pagination-shadow").css({
      //       marginRigth: "0"
      //     });
      //   }
      // }
    }
  }
};

export default activity;
</script>


<style lang="scss">
@import "./src/assets/css/company/activity.scss";
</style>
