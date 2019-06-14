<script>
// Methods here
let claim = {
  data() {
    return {
      chevronState: false,
    	eclaimSpendingType: {
    		value: 0,
        text: ""
      },
      showSubtr: false,
      timeFrame: {},
    };
  },
  methods: {
  	spendType(value, text) {
      //spending either medical or wellness
      this.eclaimSpendingType.value = value;
      this.eclaimSpendingType.text = text;
    },
    toggleSubtr() {
      this.chevronState = !this.chevronState;
      this.showSubtr = !this.showSubtr;
    }
  }
};

export default claim;
</script>

<style lang="scss" scoped>
@import "./src/assets/css/company/claim.scss";
</style>


