<script>
/* eslint-disable */
// import Enrollment from "../Enrollment.vue";
import moment from "moment";
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;
let webInput = {
  components: {},
  data() {
    return {
      isState: "web",
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
      dependentDetails: {
        dob: '',
        startDate : ''
      }, //used in web input
      employeeStorage: [],
      dependentStorage: [],
    };
  },
  methods: {
    addToStorage(source, index) {
      //used in web input
      // store to temp storage when adding employees
      if (source == "next") {
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
      } else if (source == "enroll" && this.employeeStorage.length === 0 && !this.isEmpty(this.employeeDetails) ) {
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
      } else if (source == "enroll" && this.employeeStorage.length == this.indexData && !this.isEmpty(this.employeeDetails)) {
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
    addDependentStorage(data) {
      //used in web input
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
        // this.dependentDetails.dob = undefined;
        // this.dependentDetails.startDate = undefined;
        this.$refs.formDep.reset();
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
    prevNextEmp(data, type) {
      //used in web input
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
            console.log("prev disabled");
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
            console.log("prev disabled");
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
    addDependent() {
      //used in web input toggle dependent
      this.dependentState = !this.dependentState;
      if (this.dependentState === true) {
        this.isState = "dependent";
        this.depPrevChevronState = false;
        this.depNextChevronState = false;
        this.dependentDetails = {};
        this.depIndexData = 0;
      }
    },
    selectEmpDepTab(opt) {
      //used in web input
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
    cancelDep() {
      // use in add dependent
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
    toggleSummary() {
      //used in web input side nav summary
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
          isState: "enrollsum"
        });
        this.addToStorage('enroll');
        this.$router.push({
          name: 'CompanyEnroll',
          params: {
            employeeStorage : this.employeeStorage
          }
        });
        // this.addToStorage("enroll");
        // this.indexData = this.employeeStorage.length;
        this.prevDisabled = false;
      }
    },
    //to check is object empty -  globall
    isEmpty(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) return false;
      }
      return true;
    }
  },
  created() {

  },
};
export default webInput;
</script>

<style lang="scss">
@import "./src/assets/css/company/enrollment.scss";
</style>