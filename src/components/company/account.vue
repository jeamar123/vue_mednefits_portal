<script>

import Modal from "../../views/company/modal/Modal.vue";
// Methods here
let account = {
  components: {
    Modal
  },
  data() {
    return {
      account_billing_title: true,
    };
  },
  methods: {
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