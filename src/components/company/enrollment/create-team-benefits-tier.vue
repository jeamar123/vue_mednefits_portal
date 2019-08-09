<script>
/* eslint-disable */
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
      this.tierDetials = {};
    },
    saveTierData(data) {
      if (data == "save" && !this.isEmpty(this.tierDetials)) {
        this.$swal("Successful!", "Tier has been added.", "success");
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
      } else if (data == "edit") {
        let index = this.tierCounter - 1;
        this.$swal({
          title: "Confirm",
          text: "Are you sure you want to update this tier?",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes",
          confirmButtonColor: "#0392CF",
          cancelButtonText: "No",
          customClass: "warning-global-container primary"
        }).then(result => {
          if (result.value) {
            this.tierStorage[index] = {
              medCap: this.tierDetials.medCap,
              wellCap: this.tierDetials.wellCap,
              gpCap: this.tierDetials.gpCap,
              empCount: this.tierDetials.empCount,
              depCount: this.tierDetials.depCount
            };
            this.isTierInput = false;
            this.isTierSummary = true;
            this.tierDetials = {}; //empty form
            console.log("tierDetials", this.tierDetials);
            console.log("tierStorage", this.tierStorage);
            this.$swal(
              "Updated!",
              "Tier details has been updated.",
              "success"
            );
          }
        });
      } else {
        console.log("Nothing to save");
      }
    },
    editTierData(index) {
      this.isTierInput = true;
      this.isEditActive = true;
      this.isTierSummary = false;

      this.tierCounter = index + 1;
      this.tierDetials = {
        medCap: this.tierStorage[index].medCap,
        wellCap: this.tierStorage[index].wellCap,
        gpCap: this.tierStorage[index].gpCap,
        empCount: this.tierStorage[index].empCount,
        depCount: this.tierStorage[index].depCount
      };
    },
    remove() {
      this.$swal({
        title: "Confirm",
        text: "Are you sure you want to remove this tier?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        confirmButtonColor: "#ff6864",
        cancelButtonText: "No",
        customClass: "warning-global-container danger "
      }).then(result => {
        if (result.value) {
          this.isTierInput = false;
          this.isTierBtn = true;
          this.tierDetials= {};
          //delete tier
          let index = this.tierCounter - 1;
          const data = this.tierStorage.indexOf(index);
          this.tierStorage.splice(data, 1);
          //succes SWAL
          this.$swal("Deleted!", "Tier has been deleted.", "success");
        }
      });
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