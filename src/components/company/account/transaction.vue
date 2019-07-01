<script>

import Modal from "../../../views/company/modal/Modal";
// Methods here
let transaction = {
  components: {
    Modal
  },
  data() {
    return {
      modals: {
        transactions : {
          refund: false
        },
      }
    };
  },
  methods: {
    companyContactsModal(data,id) {
      // company
      let refund = this.modals.transactions.refund;
      // Transactions
      if (data == 'refund') {
        this.modals.transactions.refund = !refund;
        console.log("ni gana", this.modals.transactions.refund);
      }
      // end Transactions
    }
  }
};

export default transaction
</script>
