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
      test : [
        {
          id: 1,
          name: 'test',
          showTransDetails: false,
        },
        {
          id: 2,
          name: 'test',
          showTransDetails: false,
        }
      ]
    };
  },
  methods: {
  	spendType(value, text) {
      //spending either medical or wellness
      this.eclaimSpendingType.value = value;
      this.eclaimSpendingType.text = text;
    },
    toggleDetails(data) {
        data.showTransDetails = !data.showTransDetails;
    }
  }
};

export default claim;
</script>

<style lang="scss" scoped>
@import "./src/assets/css/company/claim.scss";
</style>


