<script>
// Methods here
let claim = {
  data() {
    return {
    	eclaimSpendingType: {
    		value: 0,
        text: ""
    	},
      timeFrame: {},
    };
  },
  methods: {
  	spendType(value, text) {
      //spending either medical or wellness
      this.eclaimSpendingType.value = value;
      this.eclaimSpendingType.text = text;
    },
  }
};

export default claim;
</script>

<style lang="scss" scoped>
@import "./src/assets/css/company/claim.scss";
</style>


