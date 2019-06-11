<script>
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
      timeFrame: {}
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
    },
  }
};

export default activity;
</script>


<style lang="scss">
@import "./src/assets/css/company/activity.scss";
</style>
