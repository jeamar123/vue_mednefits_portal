<script>

//Methods here
let statement = {
  data() {
    return {
      viewStatementType: {
    		value: 0,
        text: ""
      },
    };
  },
  methods: {
  	statementType(value, text) {
      //spending either medical or wellness
      this.viewStatementType.value = value;
      this.viewStatementType.text = text;
    },
  }
};

export default statement
</script>

<style lang="scss" scoped>
@import "./src/assets/css/company/statement.scss";
</style>
