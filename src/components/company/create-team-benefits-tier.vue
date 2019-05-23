<script>
// Methods here
let createTeamBenefitsTier = {
  data() {
    return {
      
        gp_cap_status : false,
     
      isTierBtn: true,
      isTierInput: false,
      isTierSummary: false,
      isEditActive: false,
    };
  },
  methods: {
    toggleGPcapStatus( opt ) {
      this.gp_cap_status = opt;
    },
    addTierBtn() {
      this.isTierInput = true;
      this.isTierBtn = false;
      this.isTierSummary = false;
    },
    backBtn() {
      this.isTierInput = false;
      this.isTierBtn = true;
      this.isEditActive = false;
    },
    saveTierData ( data ) {
      this.isTierInput = false;
      this.isTierSummary = true;
    },
    editTierData() {
      this.isTierInput = true;
      this.isEditActive = true;
      this.isTierSummary = false;
    }
  }
};

export default createTeamBenefitsTier 
</script>

<style lang="scss" scoped>
	@import './src/assets/css/company/enrollment.scss'
</style>