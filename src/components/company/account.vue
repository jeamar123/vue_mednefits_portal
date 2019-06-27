<script>

import Modal from "../../views/company/modal/Modal.vue";
// Methods here
let account = {
  components: {
    Modal
  },
  data() {
    return {
      showBillingListInfo: {
      	value: 0,
        text: ""
      },
      gp_cap_status: false,
      account_billing_title: true,
      modals: {
        company: {
          business_info: false,
          business_contact: false,
          Billing_contacts: false,
          Billing_address: false
        },
        transactions : {
          refund: false
        }
      }
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
    companyContactsModal(data,id) {
      // company
      let business_info = this.modals.company.business_info;
      let business_contact = this.modals.company.business_contact;
      let Billing_contacts = this.modals.company.Billing_contacts;
      let Billing_address = this.modals.company.Billing_address;

      if( data = 'business_info'){
        this.modals.company.business_info = !business_info;
        console.log("ni gana", this.modals.company.business_info);
      }
      else if( data = 'business_contact'){
        this.modals.company.business_contact = !business_contact;
        console.log("ni gana", this.modals.company.business_contact);
      }
      else if( data = 'Billing_contacts'){
        this.modals.company.Billing_contacts = !Billing_contacts;
        console.log("ni gana", this.modals.company.Billing_contacts);
      }
      else if( data = 'Billing_address'){
        this.modals.company.Billing_address = !Billing_address;
        console.log("ni gana", this.modals.company.Billing_address);
      }
      // end company & contacts
      // Transactions
      let refund = this.modals.transactions.refund;
      if (data = 'refund') {
        this.modals.transactions.refund = !refund;
        console.log("ni gana", this.modals.transactions.refund);
      }
    }
  }
};

export default account
</script>

<style lang="scss" scoped>
@import "./src/assets/css/company/account.scss";
</style>