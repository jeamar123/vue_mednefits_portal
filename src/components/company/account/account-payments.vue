<script>

import Modal from "../../../views/company/modal/Modal";
// Methods here
let accountPayments = {
  components: {
    Modal
  },
  data() {
    return {
      modals: {
        account : {
          password: false,
          active_plans: false,
        }
      }
    };
  },
  methods: {
    companyContactsModal(data,id) {
      let password = this.modals.account.password;
      let active_plans = this.modals.account.active_plans;

      // Accounts & payment
      if (data == 'password') {
        this.modals.account.password = !password;
        console.log("ni gana", this.modals.account.password);
      } 
      else if (data == 'active_plans') {
        this.modals.account.active_plans = !active_plans;
        console.log("ni gana", this.modals.account.active_plans);
      }
      // end Accounts & payment
    }
  }
};

export default accountPayments
</script>
