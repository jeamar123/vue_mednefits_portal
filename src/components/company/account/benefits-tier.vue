<script>
import axios from 'axios';
import Modal from "../../../views/company/modal/Modal";
// Methods here
let benefitsTier = {
  components: {
    Modal
  },
  data() {
    return {
      sampleData: false,
      gp_cap_status: false,
    };
  },
  methods: {
    toggleGPcapStatus(opt) {
      this.gp_cap_status = opt;
    },
  }
};

export default benefitsTier
</script>
