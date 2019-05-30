<script>
  export default {
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
</script>

<template>
  <transition name="fade">
    <div class="enrollment-wrapper">

      <div class="container">
        <div class="excel-import-wrapper" v-if="isState === 'excel'">

          <div class="download-template-wrapper"  v-if="stepperState === 'download'">
            <h1>Download template.</h1>
            <p>We've put together the fields that are needed for enrollements in the excel template file, first row (aka
              header). Please download, complete and submit the excel file on the step 3 (Upload).</p>
            <div class="download-template-btn">
              <button @click=" empBtnType('empOnly')" v-bind:class="{'active': empType === 'empOnly'}" class=""><img
                  :src="'../assets/img/download-gray.png'"> Employees only</button>
              <button @click=" empBtnType('empDependents')" v-bind:class="{'active': empType === 'empDependents'}"
                lass=""><img :src="'../assets/img/download-gray.png'">Employees + Dependents</button>
            </div>
          </div>


          <!-- Employees only-->
          <div class="review-with-dependents" v-if="stepperState === 'empOnly'">
            <h1>Let us help you with the review before upload.</h1>
            <div class="review-tick-container">
              <p class="review-tick-title">Review your file type:</p>
              <label class="review-container">
                <input type="checkbox" value="1" v-model="checkedlistEmpOnly">
                <span class="review-prepare-template-text">Save the file .xlsx or .xls format. </span>
                <span class="review-checkmark"></span>
              </label>
              <p class="review-tick-title">Review the data in your file:</p>
              <label class="review-container">
                <input type="checkbox" value="2" v-model="checkedlistEmpOnly">
                <span class="review-prepare-template-text">Employee's first name and last name are separated.</span>
                <span class="review-prepare-template-subtext">Separate the full name to first name as given name; last
                  name as family name.</span>
                <span class="review-checkmark"></span>
              </label>
              <label class="review-container">
                <input type="checkbox" value="3" v-model="checkedlistEmpOnly">
                <span class="review-prepare-template-text">Input employee's date of birth according to the format
                  (dd/mm/yyyy).</span>
                <span class="review-prepare-template-subtext">Our system will only pick and capture date in the stated
                  format.</span>
                <span class="review-checkmark"></span>
              </label>
              <label class="review-container">
                <input type="checkbox" value="4" v-model="checkedlistEmpOnly">
                <span class="review-prepare-template-text">A valid employee's email address.</span>
                <span class="review-prepare-template-subtext">Login credential will be sent to this email address once
                  account is set up.</span>
                <span class="review-checkmark"></span>
              </label>
              <label class="review-container">
                <input type="checkbox" value="5" v-model="checkedlistEmpOnly">
                <span class="review-prepare-template-text">Input employee's 6 digit postal code</span>
                <span class="review-prepare-template-subtext">It should be the local residential postal code where the
                  employee reside.</span>
                <span class="review-checkmark"></span>
              </label>
            </div>
          </div>


          <!-- Employee + Dependents-->
          <div class="review-with-dependents" v-if="stepperState === 'empDependents'">
            <h1>Let us help you with the review before upload.</h1>
            <div class="review-tick-container">
              <p class="review-tick-title">Review your file type:</p>
              <label class="review-container">
                <input type="checkbox" value="1" v-model="checkedlistEmpDependents">
                <span class="review-prepare-template-text">Save the file .xlsx or .xls format. </span>
                <span class="review-checkmark"></span>
              </label>
              <p class="review-tick-title">Review the data in your file:</p>
              <label class="review-container">
                <input type="checkbox" value="2" v-model="checkedlistEmpDependents">
                <span class="review-prepare-template-text">Employee, dependent/s first name and last name are
                  separated.</span>
                <span class="review-prepare-template-subtext">Separate the full name to first name as given name; last
                  name as family name.</span>
                <span class="review-checkmark"></span>
              </label>
              <label class="review-container">
                <input type="checkbox" value="3" v-model="checkedlistEmpDependents">
                <span class="review-prepare-template-text">Input employee, dependent/s date of birth according to the
                  format (dd/mm/yyyy).</span>
                <span class="review-prepare-template-subtext">Our system will only pick and capture date in the stated
                  format.</span>
                <span class="review-checkmark"></span>
              </label>
              <label class="review-container">
                <input type="checkbox" value="4" v-model="checkedlistEmpDependents">
                <span class="review-prepare-template-text">A valid employee's email address.</span>
                <span class="review-prepare-template-subtext">Login credential will be sent to this email address once
                  account is set up.</span>
                <span class="review-checkmark"></span>
              </label>
              <label class="review-container">
                <input type="checkbox" value="5" v-model="checkedlistEmpDependents">
                <span class="review-prepare-template-text">Input employee's 6 digit postal code</span>
                <span class="review-prepare-template-subtext">It should be the local residential postal code where the
                  employee reside.</span>
                <span class="review-checkmark"></span>
              </label>
              <label class="review-container">
                <input type="checkbox" value="6" v-model="checkedlistEmpDependents">
                <span class="review-prepare-template-text">Under dependent/s relationship column only select from drop
                  down list.</span>
                <span class="review-checkmark"></span>
              </label>
            </div>
          </div>

          <div class="upload-file-wrapper" v-if="stepperState === 'upload'">
            <h1>Upload your file</h1>
            <div class="upload-box">
              <input type="file" id="upload">
              <label class="fileupload-text ng-scope" for="upload">
                <img :src="'../assets/img/Upload-Receipt.png'" class="upload-icon center-block">

                <!-- upload file-->
                <div v-if="true">
                  <span>
                    Drag and drop an Excel file here to upload
                    <br>
                    or
                    <br>
                  </span>
                  <span>Select file</span>
                </div>

                <!-- successfully upload -->
                <div v-if="false">
                  <span>
                    Successfully Uploaded.
                    <br>
                  </span>
                  <span>Change file</span>
                </div>

                <!-- change the file -->
                <div v-if="false">
                  <span>Change file</span>
                </div>

              </label>
            </div>
          </div>

        </div>
      </div>

      <div class="prev-next-button-container">
        <div class="button-container">
          <button v-if="isState === 'excel' && stepperState == 'download'" @click="$router.go(-1)"
            class="back-btn">Back</button>
          <button v-if="stepperState == 'empOnly' || stepperState == 'empDependents' || stepperState == 'upload'"
            @click="back('download')" class="back-btn">Back</button>

          <div class="btn-enroll-container">
            <button class="btn-download-template" v-if="isState === 'excel' && stepperState == 'download'">DOWNLOAD
              TEMPLATE</button>
            <button class="next-btn" v-if="isState === 'excel' && stepperState == 'download'"
              @click="excel(empType)">Next</button>
            <button class="next-btn" v-if="stepperState == 'empOnly' || stepperState == 'empDependents'"
              @click="excel('upload')">Next</button>
            <button class="next-btn" v-if="stepperState == 'upload'" @click="excel('enrollsum')">Next</button>  <!-- go to enroll summary -->
          </div>
        </div>
      </div>
    </div>

  </transition>
</template>

<style lang="scss">
  @import "./src/assets/css/company/enrollment.scss";
</style>