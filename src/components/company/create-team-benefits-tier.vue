<script>
// Methods here
let createTeamBenefitsTier = {
  data() {
    return {
      gp_cap_status: false,
      isTierBtn: true,
      isTierInput: false,
      isTierSummary: false,
      isEditActive: false,
      tierCounter: 0,
      tierDetials: {},
      tierStorage: []
    };
  },
  methods: {
    toggleGPcapStatus(opt) {
      this.gp_cap_status = opt;
    },
    addTierBtn() {
      this.isTierInput = true;
      this.isTierBtn = false;
      this.isTierSummary = false;

      if (this.tierStorage.length == 0) {
        this.tierCounter += 1;
      } else if (this.tierStorage.length != 0) {
        this.tierCounter = this.tierStorage.length + 1;
      }
    },
    backBtn(data) {
      this.isTierInput = false;
      this.isTierBtn = true;
      this.isEditActive = false;
      this.isTierSummary = true;

      if (data == "add") {
        if (this.tierStorage.length == 0) {
          this.tierCounter -= 1;
        } else if (this.tierStorage.length != 0) {
          this.tierCounter = this.tierStorage.length - 1;
        }
      } else if (data == "edit") {
        console.log("edit");
      }
    },
    saveTierData(data) {
      if (data == "save" && !this.isEmpty(this.tierDetials)) {
        this.tierStorage.push({
          medCap: this.tierDetials.medCap,
          wellCap: this.tierDetials.wellCap,
          gpCap: this.tierDetials.gpCap,
          empCount: this.tierDetials.empCount,
          depCount: this.tierDetials.depCount
        });
        this.isTierInput = false;
        this.isTierSummary = true;
        this.tierDetials = {}; //empty form
        console.log("tierDetials", this.tierDetials);
        console.log("tierStorage", this.tierStorage);
      } else {
        console.log("Nothing to save");
      }
    },
    editTierData(index) {
      this.isTierInput = true;
      this.isEditActive = true;
      this.isTierSummary = false;

      this.tierDetials = {
        medCap: this.tierStorage[index].medCap,
        wellCap: this.tierStorage[index].wellCap,
        gpCap: this.tierStorage[index].gpCap,
        empCount: this.tierStorage[index].empCount,
        depCount: this.tierStorage[index].depCount
      };
    },
    isEmpty(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) return false;
      }
      return true;
    }
  }
};

export default createTeamBenefitsTier;
</script>

<style lang="scss" scoped>
@import "./src/assets/css/company/enrollment.scss";
</style>