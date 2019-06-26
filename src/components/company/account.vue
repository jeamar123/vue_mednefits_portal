<script>
// Methods here
let account = {
  data() {
    return {
      showBillingListInfo: {
      	value: 0,
        text: ""
      },
      gp_cap_status: false,
      account_billing_title: true, 
    };
  },
  methods: {
  	accountBillingList(value, text) {
  		this.showBillingListInfo.value = value;
  		this.showBillingListInfo.text = text;

      if(this.showBillingListInfo.text == 'benefits-tier') {
        this.account_billing_title = false;
      } else {
        this.account_billing_title = true;
      }
  	},
    toggleGPcapStatus(opt) {
      this.gp_cap_status = opt;
    },
  }
};

export default account
</script>

<style lang="scss">
@import "./src/assets/css/company/account.scss";
</style>