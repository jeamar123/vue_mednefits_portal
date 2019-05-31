<script>
  /* eslint-disable */
  // import Enrollment from "../Enrollment.vue";
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;
  export default {
    components: {},
    data() {
      return {
        isState: 'web',
        summaryBtn: false, // summary state
        dependentState: false, //used in web input
        selected_emp_dep_tab: 1, //used in web input
        empDepNavState: false, //used in web input
        modalEdit: false, //edit modal
        // data binding store data from WEB INPUT forms
        indexData: 0, // counter for employee
        depIndexData: 0, // counter for dependent
        prevDisabled: false,
        depPrevChevronState: false, //show hide chevron button
        depNextChevronState: false, //show hide chevron button
        employeeDetails: {}, //used in web input
        dependentDetails: {}, //used in web input
        employeeStorage: [ //used in web input
          // {
          // //   fname: "jazer",
          // //   lname: "zayas",
          // //   dependents: [
          // //     {
          // //       fname: "jazer",
          // //       lname: "zayas"
          // //     },
          // //     {
          // //       fname: "jazer",
          // //       lname: "zayas"
          // //     }
          // //   ]
          // }
        ],
        dependentStorage: [ //used in web input
          //     {
          //       fname: "jazer",
          //       lname: "zayas"
          //     },
          //     {
          //       fname: "jazer",
          //       lname: "zayas"
          //     }
        ],
        date: new Date(), // Jan 25th, 2018
      };
    },
    methods: {
      addToStorage(source, index) { //used in web input
        // store to temp storage when adding employees
        if (source == "edit") {
          this.employeeStorage[index] = {
            fname: this.employeeDetails.fname,
            lname: this.employeeDetails.lname,
            idType: this.employeeDetails.idType,
            nricFinNo: this.employeeDetails.nricFinNo,
            dob: this.employeeDetails.dob,
            email: this.employeeDetails.email,
            mNumber: this.employeeDetails.mNumber,
            mAreaCode: this.employeeDetails.mAreaCode,
            postal: this.employeeDetails.postal,
            startDate: this.employeeDetails.startDate,
            mCredits: this.employeeDetails.mCredits,
            wCredits: this.employeeDetails.wCredits,
            dependents: [this.dependentStorage]
          };
          // this.indexData = 0;
        } else if (source == "next") {
          //this.dependentStorage.length != 0 && !this.isEmpty(this.dependentDetails)
          this.employeeStorage.push({
            fname: this.employeeDetails.fname,
            lname: this.employeeDetails.lname,
            idType: this.employeeDetails.idType,
            nricFinNo: this.employeeDetails.nricFinNo,
            dob: this.employeeDetails.dob,
            email: this.employeeDetails.email,
            mNumber: this.employeeDetails.mNumber,
            mAreaCode: this.employeeDetails.mAreaCode,
            postal: this.employeeDetails.postal,
            startDate: this.employeeDetails.startDate,
            mCredits: this.employeeDetails.mCredits,
            wCredits: this.employeeDetails.wCredits,
            dependents: [this.dependentStorage]
          });
        } else if (
          source == "enroll" &&
          this.employeeStorage.length === 0 &&
          !this.isEmpty(this.employeeDetails)
        ) {
          //this.dependentStorage.length != 0 && !this.isEmpty(this.dependentDetails)
          this.employeeStorage.push({
            fname: this.employeeDetails.fname,
            lname: this.employeeDetails.lname,
            idType: this.employeeDetails.idType,
            nricFinNo: this.employeeDetails.nricFinNo,
            dob: this.employeeDetails.dob,
            email: this.employeeDetails.email,
            mNumber: this.employeeDetails.mNumber,
            mAreaCode: this.employeeDetails.mAreaCode,
            postal: this.employeeDetails.postal,
            startDate: this.employeeDetails.startDate,
            mCredits: this.employeeDetails.mCredits,
            wCredits: this.employeeDetails.wCredits,
            dependents: [this.dependentStorage]
          });
        } else if (
          source == "enroll" &&
          this.employeeStorage.length == this.indexData &&
          !this.isEmpty(this.employeeDetails)
        ) {
          //this.dependentStorage.length != 0 && !this.isEmpty(this.dependentDetails)
          this.employeeStorage.push({
            fname: this.employeeDetails.fname,
            lname: this.employeeDetails.lname,
            idType: this.employeeDetails.idType,
            nricFinNo: this.employeeDetails.nricFinNo,
            dob: this.employeeDetails.dob,
            email: this.employeeDetails.email,
            mNumber: this.employeeDetails.mNumber,
            mAreaCode: this.employeeDetails.mAreaCode,
            postal: this.employeeDetails.postal,
            startDate: this.employeeDetails.startDate,
            mCredits: this.employeeDetails.mCredits,
            wCredits: this.employeeDetails.wCredits,
            dependents: [this.dependentStorage]
          });
        } else {
          console.log("no data to be pushed");
        }
        this.dependentStorage = [];
        this.employeeDetails = {};
        this.employeeDetails.dob = undefined;
      },
      addDependentStorage(data) { //used in web input
        let arrStorage = this.employeeStorage;
        let limit = arrStorage.length;

        console.log("existing", this.indexData, limit);
        if (data == "add" && !this.isEmpty(this.dependentDetails)) {
          //if add button click
          // this.dependentState = !this.dependentState;
          // if (this.dependentState === false) {
          //   this.isState = "web";
          // }
          // store to temp storage when adding employees
          this.dependentStorage.push({
            fname: this.dependentDetails.fname,
            lname: this.dependentDetails.lname,
            relation: this.dependentDetails.relation,
            nricFinNo: this.dependentDetails.nricFinNo,
            dob: this.dependentDetails.dob,
            startDate: this.dependentDetails.startDate
          });
          this.dependentDetails = {};
        } else if (data == "save") {
          //else Save and Continue click
          this.dependentState = false;
          if (this.dependentState === false) {
            this.isState = "web";
            this.empDepNavState = true;
            this.depIndexData = 0; // reset back to zero
            this.depPrevChevronState = false;
            this.depNextChevronState = false;

            if (this.isEmpty(this.dependentDetails)) {
              if (this.indexData != limit || limit != 0) {
                
                arrStorage[this.indexData].dependents = [this.dependentStorage];
                
                this.dependentStorage = [];
                this.dependentDetails = {};
              } else {
                console.log("save");
              }
            } else {
              if (this.indexData == limit || limit == 0) {
                this.dependentStorage.push({
                  fname: this.dependentDetails.fname,
                  lname: this.dependentDetails.lname,
                  relation: this.dependentDetails.relation,
                  nricFinNo: this.dependentDetails.nricFinNo,
                  dob: this.dependentDetails.dob,
                  startDate: this.dependentDetails.startDate
                });
                this.dependentDetails = {};
              } else if (
                this.dependentStorage.length != 0 &&
                !this.isEmpty(this.dependentDetails)
              ) {
                arrStorage[this.indexData].dependents = [this.dependentStorage];

                console.log("save both to existing employee");
                arrStorage[this.indexData].dependents[0].push({
                  fname: this.dependentDetails.fname,
                  lname: this.dependentDetails.lname,
                  relation: this.dependentDetails.relation,
                  nricFinNo: this.dependentDetails.nricFinNo,
                  dob: this.dependentDetails.dob,
                  startDate: this.dependentDetails.startDate
                });
                this.dependentStorage = [];
                this.dependentDetails = {};
              } else {
                arrStorage[this.indexData].dependents[0].push({
                  fname: this.dependentDetails.fname,
                  lname: this.dependentDetails.lname,
                  relation: this.dependentDetails.relation,
                  nricFinNo: this.dependentDetails.nricFinNo,
                  dob: this.dependentDetails.dob,
                  startDate: this.dependentDetails.startDate
                });
                this.dependentDetails = {};
              }
              // store to temp storage when adding employees
            }
          }
        }
      },
      prevNextEmp(data, type) { //used in web input
        let arrStorage = this.employeeStorage;
        let depArrStorage = this.dependentStorage;
        let viewDept = this.employeeStorage[this.indexData];
        let index = this.indexData; //for employee index
        let depIndex = this.depIndexData; // for dependent index

        if (type == 0) {
          if (data == "prev") {
            if (index == 0) {
              console.log("prev is disabled");
            } else {
              index = --this.indexData;
              this.employeeDetails = {
                fname: arrStorage[index].fname,
                lname: arrStorage[index].lname,
                nricFinNo: arrStorage[index].nricFinNo,
                dob: arrStorage[index].dob,
                email: arrStorage[index].email,
                mNumber: arrStorage[index].mNumber,
                mAreaCode: arrStorage[index].mAreaCode,
                mCredits: arrStorage[index].mCredits,
                wCredits: arrStorage[index].wCredits,
                startDate: arrStorage[index].startDate
              };
              if (index == 0) {
                this.prevDisabled = true;
              }
              if (arrStorage[index].dependents[0].length != 0) {
                this.empDepNavState = true;
              }
            }
          } else if (data == "next") {
            this.prevDisabled = false;
            let limit = arrStorage.length;
            if (limit == index && !this.isEmpty(this.employeeDetails)) {
              // !this.isEmpty(this.employeeDetails)
              this.addToStorage("next");
              limit = arrStorage.length;
              index = ++this.indexData;
              this.empDepNavState = false;
              this.employeeDetails = {};
            } else if (index >= limit) {
              this.empDepNavState = false;
            } else {
              index = ++this.indexData;
              if (arrStorage[index] === undefined) {
                this.empDepNavState = false;
                this.employeeDetails = {};
              } else {
                this.employeeDetails = {
                  fname: arrStorage[index].fname,
                  lname: arrStorage[index].lname,
                  nricFinNo: arrStorage[index].nricFinNo,
                  dob: arrStorage[index].dob,
                  email: arrStorage[index].email,
                  mNumber: arrStorage[index].mNumber,
                  mAreaCode: arrStorage[index].mAreaCode,
                  mCredits: arrStorage[index].mCredits,
                  wCredits: arrStorage[index].wCredits,
                  startDate: arrStorage[index].startDate
                };
              }
            }
            this.selected_emp_dep_tab = 1;
          }
        } else if (type == 1) {
          // let limit = depArrStorage.length;
          if (data == "prev") {
            if (depIndex == 0) {
              console.log('prev disabled');
            } else {
              let limit = depArrStorage.length;
              depIndex = --this.depIndexData;
              this.dependentDetails = {
                fname: depArrStorage[depIndex].fname,
                lname: depArrStorage[depIndex].lname,
                relation: depArrStorage[depIndex].relation,
                nricFinNo: depArrStorage[depIndex].nricFinNo,
                dob: depArrStorage[depIndex].dob,
                startDate: depArrStorage[depIndex].startDate
              };
              if (limit > depIndex) {
                this.depPrevChevronState = true;
                this.depNextChevronState = true;
              }
              if (depIndex < limit && depIndex == 0) {
                this.depPrevChevronState = false;
                this.depNextChevronState = true;
              }
            }
          } else if (data == "add") {
            let limit = depArrStorage.length;
            if (limit == depIndex && !this.isEmpty(this.dependentDetails)) {
              // !this.isEmpty(this.employeeDetails)
              this.addDependentStorage("add");
              this.depPrevChevronState = true;
              // limit = depArrStorage.length;
              depIndex = ++this.depIndexData;
              this.dependentDetails = {};
            }
          } else if (data == "next") {
            let limit = depArrStorage.length;
            if (depIndex >= limit) {
              this.depPrevChevronState = true;
              this.depNextChevronState = false;
            } else {
              depIndex = ++this.depIndexData;
              if (depArrStorage[depIndex] === undefined) {
                this.dependentDetails = {};
                this.depNextChevronState = false;
                this.depPrevChevronState = true;
              } else {
                this.dependentDetails = {
                  fname: depArrStorage[depIndex].fname,
                  lname: depArrStorage[depIndex].lname,
                  relation: depArrStorage[depIndex].relation,
                  nricFinNo: depArrStorage[depIndex].nricFinNo,
                  dob: depArrStorage[depIndex].dob,
                  startDate: depArrStorage[depIndex].startDate
                };
                if (limit > depIndex) {
                  this.depPrevChevronState = true;
                  this.depNextChevronState = true;
                }
              }
            }
          }
        } else if (type == 2) {
          if (data == "prev") {
            if (depIndex == 0) {
              console.log('prev disabled');
            } else {
              let limit = viewDept.dependents[0].length;
              depIndex = --this.depIndexData;
              this.dependentDetails = {
                fname: viewDept.dependents[0][depIndex].fname,
                lname: viewDept.dependents[0][depIndex].lname,
                relation: viewDept.dependents[0][depIndex].relation,
                nricFinNo: viewDept.dependents[0][depIndex].nricFinNo
                // dob: viewDept.dependents[0].dob,
                // startDate: viewDept.dependents[0].startDate
              };
              if (limit > depIndex) {
                this.depPrevChevronState = true;
                this.depNextChevronState = true;
              }
              if (depIndex < limit && depIndex == 0) {
                this.depPrevChevronState = false;
                this.depNextChevronState = true;
              }
            }
          } else if (data == "next") {
            let limit = viewDept.dependents[0].length - 1;
            if (depIndex == limit) {
              this.depPrevChevronState = true;
              this.depNextChevronState = false;
            } else {
              depIndex = ++this.depIndexData;
              if (viewDept.dependents[0][depIndex] === undefined) {
                this.dependentDetails = {};
                // this.depNextChevronState = false;
                // this.depPrevChevronState = true;
              } else {
                this.depPrevChevronState = true;
                this.dependentDetails = {
                  fname: viewDept.dependents[0][depIndex].fname,
                  lname: viewDept.dependents[0][depIndex].lname,
                  relation: viewDept.dependents[0][depIndex].relation,
                  nricFinNo: viewDept.dependents[0][depIndex].nricFinNo,
                  dob: viewDept.dependents[0][depIndex].dob,
                  startDate: viewDept.dependents[0][depIndex].startDate
                };
                if (limit == depIndex) {
                  this.depPrevChevronState = true;
                  this.depNextChevronState = false;
                }
                if (limit < depIndex) {
                  this.depPrevChevronState = true;
                  this.depNextChevronState = true;
                }
              }
            }
          }
        }
      },
      addDependent() { //used in web input toggle dependent
        this.dependentState = !this.dependentState;
        if (this.dependentState === true) {
          this.isState = "dependent";
          this.depPrevChevronState = false;
          this.depNextChevronState = false;
          this.dependentDetails = {};
          this.depIndexData = 0;
        }
      },
      selectEmpDepTab(opt) { //used in web input
        this.selected_emp_dep_tab = opt;

        if (this.selected_emp_dep_tab == 2) {
          if (this.dependentStorage.length != 0) {
            this.depIndexData = this.dependentStorage.length - 1;
            this.dependentDetails = {
              fname: this.dependentStorage[this.depIndexData].fname,
              lname: this.dependentStorage[this.depIndexData].lname,
              relation: this.dependentStorage[this.depIndexData].relation,
              nricFinNo: this.dependentStorage[this.depIndexData].nricFinNo
              // dob: viewDept.dependents[0].dob,
              // startDate: viewDept.dependents[0].startDate
            };
            if (this.depIndexData >= 1) {
              this.depPrevChevronState = true;
              this.depNextChevronState = false;
            }
          } else if (this.employeeStorage.length != 0) {
            let viewDept = this.employeeStorage[this.indexData];
            this.depIndexData = viewDept.dependents[0].length - 1;
            this.dependentDetails = {
              fname: viewDept.dependents[0][this.depIndexData].fname,
              lname: viewDept.dependents[0][this.depIndexData].lname,
              relation: viewDept.dependents[0][this.depIndexData].relation,
              nricFinNo: viewDept.dependents[0][this.depIndexData].nricFinNo
              // dob: viewDept.dependents[0].dob,
              // startDate: viewDept.dependents[0].startDate
            };
            if (this.depIndexData >= 1) {
              this.depPrevChevronState = true;
              this.depNextChevronState = false;
            }
          }
        }
      },
      cancelDep() { // use in add dependent
        this.$swal({
          title: "Confirm",
          text: "Unsaved data will be deleted, Proceed?",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Confirm",
          customClass: "warning-global-container primary"
        }).then(result => {
          if (result.value) {
            this.dependentState = !this.dependentState;
            this.isState = "web";
          }
        });
      },
      toggleSummary() { //used in web input side nav summary
        this.summaryBtn = !this.summaryBtn;
        if (this.summaryBtn === true) {
          $("#summary-btn").css({
            right: "255px"
          });
          $("#summary-content").css({
            width: "255px"
          });
        } else {
          $("#summary-btn").css({
            right: "0"
          });
          $("#summary-content").css({
            width: "0"
          });
        }
      },
      enroll(data) {
        if (data == "enrollsum") {
          this.isState = "enrollsum";
          this.$emit("webInputData", {
            isState: "enrollsum",
          });
          this.addToStorage("enroll");
          this.indexData = this.employeeStorage.length;
          this.prevDisabled = false;


        } else if (data === "successEnroll") {
          this.isState = "successEnroll";
          // this.$emit("enrollmentData", {
          //   isState: "enrollment"
          // });
        }
      },
      //to check is object empty globall
      isEmpty(obj) {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) return false;
        }
        return true;
      }
    },
    created() {
    }

  }
</script>

<template>
  <transition name="fade">
    <div class="enrollment-wrapper">
      <div class="employee-dependent-header" v-if="isState === 'web' && empDepNavState">
        <span v-bind:class="{'active' : selected_emp_dep_tab  == 1}" @click="selectEmpDepTab(1)">Employee</span>
        <span v-bind:class="{'active' : selected_emp_dep_tab  == 2}" @click="selectEmpDepTab(2)">Dependent</span>
      </div>
      <div class="container">
        <div class="web-input-wrapper">
          <div v-if="isState === 'web' && selected_emp_dep_tab  == 1" class="employee-details-wrapper">
            <div class="employee-tier-title">
              EMPLOYEE
              <span>17</span> OF
              <span>27</span>
            </div>
            <div class="employee-details-header">
              <h1>Employee Details</h1>
              <div class="add-dependent-btn">
                <h4>Add a Dependent?</h4>
                <button @click="addDependent">
                  <img :src="'../assets/img/icons/add-employee.svg'"> Add
                </button>
              </div>
            </div>
            <form>
              <div class="employee-input-container">
                <div class="employee-input-wrapper">
                  <label for="fname">First / Given Name</label>
                  <input type="text" name="fname" v-model="employeeDetails.fname">
                </div>
                <div class="employee-input-wrapper">
                  <label for="fname">Last / Family Name</label>
                  <input type="text" name="lname" v-model="employeeDetails.lname">
                </div>
              </div>
              <div class="employee-input-container">
                <div class="employee-input-wrapper nric">
                  <label>
                    <input type="radio" name="id_status" value="nric" v-model="employeeDetails.idType">
                    NRIC
                  </label>
                  <label>
                    <input type="radio" name="id_status" value="fin" v-model="employeeDetails.idType">
                    FIN
                  </label>
                  <input type="text" name="nric-fin" v-model="employeeDetails.nricFinNo">
                </div>
                <div class="employee-input-wrapper dob">
                  <label for="fname">Date of Birth</label>
                  <v-date-picker :max-date='new Date()' v-model="employeeDetails.dob"
                    :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'>
                  </v-date-picker>
                </div>
              </div>
              <div class="employee-input-container">
                <div class="employee-input-wrapper">
                  <label for="fname">Work Email</label>
                  <input type="email" name="work-email" v-model="employeeDetails.email">
                </div>
                <div class="employee-input-wrapper">
                  <label for="fname">Mobile</label>
                  <input type="number" name="mobile" v-model="employeeDetails.mNumber">
                </div>
              </div>
              <div class="employee-input-container">
                <div class="employee-input-wrapper">
                  <label for="fname">Postal Code</label>
                  <input type="text" name="postal-code" v-model="employeeDetails.postal">
                </div>
                <div class="employee-input-wrapper">
                  <label for="fname">Start Date</label>
                  <v-date-picker :date='new Date()' v-model="employeeDetails.startDate"
                    :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'>
                  </v-date-picker>
                </div>
              </div>
              <div class="employee-input-container">
                <div class="employee-input-wrapper">
                  <label for="fname" class="medical-text">Medical Credits</label>
                  <label class="subtext">*If there are no credits to allocate, please key in 0</label>
                  <input type="number" min="0" value="0" name="medical-credits" v-model="employeeDetails.mCredits">
                </div>
                <div class="employee-input-wrapper">
                  <label for="fname" class="wellness-text">Wellness Credits</label>
                  <label class="subtext">*If there are no credits to allocate, please key in 0</label>
                  <input type="number" min="0" value="0" name="wellness-credits" v-model="employeeDetails.wCredits">
                </div>
              </div>
            </form>
          </div>

          <!-- View dependent sercion-->
          <div class="dependent-details-wrapper" v-if="selected_emp_dep_tab  == 2">
            <div class="employee-tier-title">
              DEPENDENT
              <span>4</span> OF
              <span>4</span>
            </div>
            <div class="employee-details-header">
              <h1>Dependent details</h1>
              <button class="btn-remove">
                <img :src="'../assets/img/icons/dustbin.png'">Remove
              </button>
            </div>
            <form class="form-input-container">
              <div class="employee-input-container">
                <div class="employee-input-wrapper">
                  <label for="fname">First / Given Name</label>
                  <input type="text" name="fname" v-model="dependentDetails.fname">
                </div>
                <div class="employee-input-wrapper">
                  <label for="fname">Last / Family Name</label>
                  <input type="text" name="lname" v-model="dependentDetails.lname">
                </div>
              </div>
              <div class="employee-input-container">
                <div class="employee-input-wrapper nric">
                  <label>NRIC</label>
                  <label>FIN</label>
                  <input type="text" name="nric-fin" v-model="dependentDetails.nricFinNo">
                </div>
                <div class="employee-input-wrapper dob">
                  <label for="">Date of Birth</label>
                  <input type="text" name="lname" placeholder="DD/MM/YYYY" v-model="dependentDetails.dob">
                </div>
              </div>
              <div class="employee-input-container">
                <div class="employee-input-wrapper">
                  <label for="fname">Relationship</label>
                  <select v-model="dependentDetails.relation">
                    <option value="Spouse">Spouse</option>
                    <option value="Child">Child</option>
                    <option value="Family">Family</option>
                  </select>
                  <img :src="'../assets/img/icons/down-arrow.svg'">
                </div>
                <div class="employee-input-wrapper">
                  <label for="fname">Start Date</label>
                  <input type="text" name="stard-date" v-model="dependentDetails.startDate">
                </div>
              </div>
            </form>
            <div class="summary-left-right-btn" v-if="true">
              <img v-show="depPrevChevronState && dependentStorage.length === 0" class="summary-left-btn"
                @click="prevNextEmp('prev', 2)" :src="'../assets/img/icons/left.png'">
              <img v-show="depPrevChevronState && dependentStorage.length != 0" class="summary-left-btn"
                @click="prevNextEmp('prev', 1)" :src="'../assets/img/icons/left.png'">
              <img v-show="depNextChevronState && dependentStorage.length === 0" class="summary-right-btn"
                @click="prevNextEmp('next', 2)" :src="'../assets/img/icons/right.png'">
              <img v-show="depNextChevronState && dependentStorage.length != 0" class="summary-right-btn"
                @click="prevNextEmp('next', 1)" :src="'../assets/img/icons/right.png'">
            </div>
          </div>

          <!-- Add dependent section -->
          <div class="dependent-details-wrapper" v-if="dependentState ">
            <div class="employee-tier-title">
              DEPENDENT
              <span>4</span> OF
              <span>4</span>
            </div>
            <div class="employee-details-header">
              <h1>Dependent details</h1>
            </div>
            <form class="form-input-container">
              <div class="employee-input-container">
                <div class="employee-input-wrapper">
                  <label for="fname">First / Given Name</label>
                  <input type="text" name="fname" v-model="dependentDetails.fname">
                </div>
                <div class="employee-input-wrapper">
                  <label for="fname">Last / Family Name</label>
                  <input type="text" name="lname" v-model="dependentDetails.lname">
                </div>
              </div>
              <div class="employee-input-container">
                <div class="employee-input-wrapper nric">
                  <label>
                    <input type="radio" name="id_status" value="nric"> NRIC
                  </label>
                  <label>
                    <input type="radio" name="id_status" value="fin"> FIN
                  </label>
                  <input type="text" name="nric-fin" v-model="dependentDetails.nricFinNo">
                </div>
                <div class="employee-input-wrapper dob">
                  <label for="">Date of Birth</label>
                  <v-date-picker :max-date='new Date()' v-model="dependentDetails.dob"
                    :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'>
                  </v-date-picker>
                  <!-- <input type="text" name="lname" placeholder="DD/MM/YYYY"> -->
                </div>
              </div>
              <div class="employee-input-container">
                <div class="employee-input-wrapper">
                  <label for="fname">Relationship</label>
                  <select v-model="dependentDetails.relation">
                    <option value="Spouse">Spouse</option>
                    <option value="Child">Child</option>
                    <option value="Family">Family</option>
                  </select>
                  <img :src="'../assets/img/icons/down-arrow.svg'">
                </div>
                <div class="employee-input-wrapper">
                  <label for="fname">Start Date</label>
                  <v-date-picker :max-date='new Date()' v-model="dependentDetails.startDate"
                    :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'>
                  </v-date-picker>
                  <!-- <input type="text" name="stard-date"> -->
                </div>
              </div>
            </form>
            <div class="summary-left-right-btn" v-if="dependentStorage.length !=0">
              <img v-show="depPrevChevronState" class="summary-left-btn" @click="prevNextEmp('prev', 1)"
                :src="'../assets/img/icons/left.png'">
              <img v-show="depNextChevronState" class="summary-right-btn" @click="prevNextEmp('next', 1)"
                :src="'../assets/img/icons/right.png'">
            </div>
            <div class="dependent-details-btn">
              <button @click="cancelDep" class="btn-cancel">CANCEL</button>
              <div class="btn-right-container">
                <button class="btn-add" @click="prevNextEmp('add', 1)">ADD</button>
                <button class="btn-save-continue" @click="addDependentStorage('save')">SAVE & CONTINUE</button>
              </div>
            </div>
          </div>

          <!-- side content summary -->
          <div v-if="isState === 'web' || isState === 'dependent'" class="summary-right-container">
            <button id="summary-btn" class="summary-right-button" @click="toggleSummary">SUMMARY</button>
            <div id="summary-content" class="list-of-employee list-employee-active">
              <h4>Employee Summary</h4>
              <ul class="list-of-employee-details">
                <li v-for="(summary,index) in employeeStorage" v-bind:key="summary.id">
                  <div>
                    <span>{{index + 1}}</span>.
                    <span>{{summary.fname}} </span>
                    <span>{{summary.lname}}</span>
                  </div>
                  <div v-if="summary.dependents[0] !=null">
                    <div class="summary-dependent" v-for="(dependent, letter) in summary.dependents[0]"
                      :key="dependent.id">
                      <span>{{ String.fromCharCode('a'.charCodeAt() + letter) }}</span>.
                      <span>{{dependent.fname}}</span>
                      <span>{{dependent.lname}}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="prev-next-button-container">
        <div class="button-container">
          <button v-if="isState === 'web'" @click="$router.go(-1)" class="back-btn">Back</button>
          <button v-if="isState === 'dependent'" :disabled="true" class="back-btn btn-disabled">Back</button>

          <div class="btn-enroll-container">
            <button v-if="false" class="btn-employee">DELETE</button>
            <button v-if="employeeStorage.length != 0 && isState === 'web'" :disabled="prevDisabled"
              class="btn-employee" @click="prevNextEmp('prev', 0)">PREVIOUS EMPLOYEE</button>
            <button v-if="isState === 'web'" class="btn-employee" @click="prevNextEmp('next', 0)">NEXT EMPLOYEE</button>
            <button class="next-btn" v-if="isState === 'web'" @click="enroll('enrollsum')">Enroll</button>
          </div>
        </div>
      </div>
    </div>

  </transition>
</template>

<style lang="scss">
  @import "./src/assets/css/company/enrollment.scss";
</style>