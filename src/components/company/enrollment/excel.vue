<script>
/* eslint-disable */
  let excel = {
    components: {},
    data() {
      return {
        isState: 'excel',
        stepperState: 'download',
        stepStatus : 1,
        empType: "empOnly",
        checkedlistEmpOnly: [],
        checkedlistEmpDependents: [],
      };
    },
    methods: {
      empBtnType(data) { //used in excell
      this.empType = data;
      },
      excel(data) { //used in excel
        if (data == 'empOnly' || data == 'empDependents') {
          this.checkedlistEmpOnly = [];
          this.checkedlistEmpDependents = [];
          if (this.empType === "empOnly") {
            this.stepperState = "empOnly";
            ++this.stepStatus;
            this.$emit('excelData', {
              stepStatus: this.stepStatus
            });
          } else if (this.empType === "empDependents") {
            this.stepperState = "empDependents";
            ++this.stepStatus;
            this.$emit('excelData', {
              stepStatus: this.stepStatus
            });
          }
        } else if (data == 'upload') {
          if (this.checkedlistEmpOnly.length == 5) {
            this.stepperState = "upload";
            ++this.stepStatus;
            this.$emit('excelData', {
              stepStatus: this.stepStatus
            });
          } else if (this.checkedlistEmpDependents.length == 6) {
            this.stepperState = "upload";
            ++this.stepStatus;
            this.$emit('excelData', {
              stepStatus: this.stepStatus
            });
          }
        } else if (data == 'enrollsum') {
          this.stepperState = null;
          this.$router.push('summary');
          ++this.stepStatus;
          this.$emit('excelData', {
            stepStatus: this.stepStatus
          });
        }
      },
      back(data) {
        if (data == "download") {
          this.stepperState = "download";
          this.stepStatus = 1;
          this.$emit('excelData', {
              stepStatus: this.stepStatus
            });
        }
      
      },
    },
    created() {
    }

  }

  export default excel
</script>

<style lang="scss">
  @import "./src/assets/css/company/enrollment.scss";
</style>