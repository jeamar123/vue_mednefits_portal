<script>
// Methods here
let account = {
  data() {
    return {
      showBillingListInfo: {
      	value: 0,
        text: ""
      }
    };
  },
  methods: {
  	accountBillingList(value, text) {
  		this.showBillingListInfo.value = value;
  		this.showBillingListInfo.text = text;
  	}
  }
};

export default account
</script>

<style lang="scss">
@import "./src/assets/css/company/account.scss";
</style>