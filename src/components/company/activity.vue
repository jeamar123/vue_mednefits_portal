<script>
/* eslint-disable */
import ImgPreview from "../../views/company/modal/ImagePreview";

import $ from "jquery";
window.$ = $;
// methods here
let activity = {
  components: {
    ImgPreview
  },
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
      toggleSidebar: {
        in : false,
        out : false
      },
      showPreview: false,
    };
  },
  methods: {
    showPreviewTesting () {
      console.log(this.showPreview);
    },
    spendType(value, text) {
      //spending either medical or wellness
      this.spendingType.value = value;
      this.spendingType.text = text;
    },
    netType(value, text) {
      //spending either medical or wellness
      this.networkType.value = value;
      this.networkType.text = text;
      this.toggleSidebar.in = false;
      this.toggleSidebar.out = false;
    },
    toggleShowSidebar(data) {
      // toggle show sidebar content
      if (this.networkType.value === 0) {
        this.toggleSidebar.in = !this.toggleSidebar.in;
        
      } else if (this.networkType.value === 1){
        this.toggleSidebar.out = !this.toggleSidebar.out;
      }
    }
  }
};

export default activity;
</script>


<style lang="scss">
@import "./src/assets/css/company/activity.scss";
</style>
