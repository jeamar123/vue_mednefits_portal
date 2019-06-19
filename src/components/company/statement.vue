<script>

//Methods here
let statement = {
  data() {
    return {
      viewStatementType: {
    		value: 0,
        text: ""
      },
      spendingTypeOpt: {
        value: 0,
        text: ""
      },
      networkType: {
        value: 0,
        text: ""
      },
      overview_active: true,
      full_active: false,
    };
  },
  methods: {
  	statementType(value, text) {
      //spending either medical or wellness
      this.viewStatementType.value = value;
      this.viewStatementType.text = text;
     

      if ( this.viewStatementType.text == 'full') {
        this.overview_active = false;
        this.full_active = true;
      } else if ( this.viewStatementType.text == 'overview') {
        this.overview_active = true;
        this.full_active = false;
      }
    },
    setSpendingType(value, text) {
      this.spendingTypeOpt.value = value;
      this.spendingTypeOpt.text = text;
    },
    netType(value, text) {
      this.networkType.value = value;
      this.networkType.text = text;
    }
  }
};

export default statement
</script>

<style lang="scss" scoped>
@import "./src/assets/css/company/statement.scss";
</style>
