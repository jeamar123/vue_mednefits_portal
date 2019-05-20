<script>
/* eslint-disable */
// imports here
import FadeTransition from "../../assets/transitions/FadeTransition";
import ModalTransition from "../../assets/transitions/ModalTransition";
import moment from "moment";
import jQuery from "jquery";
import { isNull } from "util";
import { parse } from "path";
const $ = jQuery;
window.$ = $;

// Methods here
let enrollment = {
  components: {
    FadeTransition,
    ModalTransition
  },
  data() {
    return {
      isType: "", //excel or web input
      isState: "enrollment", //navigation title
      empType: "empOnly",
      summaryBtn: false, // summary state
      dependentState: false,
      empDepNavState: false,
      selected_emp_dep_tab: 1,
      modalEdit: false, //edit modal
      // data binding store data from WEB INPUT forms
      indexData: 0, // counter for employee
      depIndexData: 0, // counter for dependent
      prevDisabled: false,
      employeeDetails: {},
      dependentDetails: {},
      employeeStorage: [
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
      dependentStorage: [
        //     {
        //       fname: "jazer",
        //       lname: "zayas"
        //     },
        //     {
        //       fname: "jazer",
        //       lname: "zayas"
        //     }
      ],
      date: new Date() // Jan 25th, 2018
    };
  },
  methods: {
    type(data) {
      this.isType = data;
      console.log(this.isType);
    },
    empBtnType(data) {
      this.empType = data;
    },
    toggleSummary() {
      console.log(this.summaryBtn);
      this.summaryBtn = !this.summaryBtn;
      if (this.summaryBtn === true) {
        $("#summary-btn").css({ right: "255px" });
        $("#summary-content").css({ width: "255px" });
      } else {
        $("#summary-btn").css({ right: "0" });
        $("#summary-content").css({ width: "0" });
      }
    },
    addDependent() {
      this.dependentState = !this.dependentState;
      if (this.dependentState === true) {
        this.isState = "dependent";
      }
    },
    prevNextEmp(data, type) {
      let arrStorage = this.employeeStorage;
      let depArrStorage = this.dependentStorage;
      let index = this.indexData;//for employee index
      let depIndex = this.depIndexData// for dependent index

      if (type == 0) {
        if (data == "prev") {
            if(index == 0) {
                console.log('prev is disabled');
            }else {
            index = --this.indexData;
            console.log("prev", index);
            console.log(arrStorage, arrStorage[index]);
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
            }
        } else if (data == "next") {
          this.prevDisabled = false;
          let limit = arrStorage.length;
          if (limit == index && !this.isEmpty(this.employeeDetails)) { // !this.isEmpty(this.employeeDetails)
            this.addToStorage();
            limit = arrStorage.length;
            index = ++this.indexData;
            this.employeeDetails = {};
            console.log(this.employeeDetails);
            console.log("add", index);
            console.log("limit", limit);
          } 
          else if (index >= limit) {
            console.log('next is disabled');
            console.log("limit", limit);
            console.log("index", index);
          } 
          else {
            index = ++this.indexData;
            console.log("next", index);
            console.log("limit", limit);
            console.log(arrStorage, arrStorage[index]);
            if(arrStorage[index] === undefined) {
              this.employeeDetails = {}
            }else {
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
        }
      } else if ( type == 1) {
        if (data == 'prev') {
          if (depIndex == 0) {
            console.log('prev is disabled');
          } else {
            depIndex = --this.depIndexData;
            console.log("prev", depIndex);
            console.log(depArrStorage, depArrStorage[depIndex]);
            this.dependentDetails = {
              fname: depArrStorage[depIndex].fname,
              lname: depArrStorage[depIndex].lname,
              relation: depArrStorage[depIndex].relation,
              nricFinNo: depArrStorage[depIndex].nricFinNo,
              dob: depArrStorage[depIndex].dob,
              startDate: depArrStorage[depIndex].startDate
            };
          }
        } else if (data == 'add') {
          let limit = depArrStorage.length;
          if (limit == depIndex && !this.isEmpty(this.dependentDetails)) { // !this.isEmpty(this.employeeDetails)
            this.addDependentStorage('add');
            limit = depArrStorage.length;
            depIndex = ++this.depIndexData;
            console.log("dependent", depArrStorage);
            this.dependentDetails = {};
            console.log("add", depIndex);
            console.log("limit", limit);
          } 
        } else if (data == 'next') {
          let limit = depArrStorage.length;
          if (depIndex >= limit) {
            console.log('next is disabled');
            console.log("limit", limit);
            console.log("index", depIndex);
          } else {
            depIndex = ++this.depIndexData;
            console.log("next", depIndex);
            console.log("limit", limit);
            console.log(depArrStorage, depArrStorage[index]);
            if(depArrStorage[depIndex] === undefined) {
              this.dependentDetails = {}
            }else {
              this.dependentDetails = {
                fname: depArrStorage[depIndex].fname,
                lname: depArrStorage[depIndex].lname,
                relation: depArrStorage[depIndex].relation,
                nricFinNo: depArrStorage[depIndex].nricFinNo,
                dob: depArrStorage[depIndex].dob,
                startDate: depArrStorage[depIndex].startDate
              };
            }
          }
        }
      }
      // console.log("index", index, "length", index);
      // this.employeeDetails = {
      //   fname: arrStorage[index].fname,
      //   lname: arrStorage[index].lname,
      //   nricFinNo: arrStorage[index].nricFinNo,
      //   dob: arrStorage[index].dob,
      //   email: arrStorage[index].email,
      //   mNumber: arrStorage[index].mNumber,
      //   mAreaCode: arrStorage[index].mAreaCode,
      //   mCredits: arrStorage[index].mCredits,
      //   wCredits: arrStorage[index].wCredits,
      //   startDate: arrStorage[index].startDate
      // };
    },
    addToStorage(source, index) {
      // store to temp storage when adding employees
      console.log(this.employeeDetails);
      console.log(this.indexData);
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
      } else if (!this.isEmpty(this.employeeDetails)) {
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
      console.log(this.employeeStorage);
      this.dependentStorage = [];
      this.employeeDetails = {};
      this.employeeDetails.dob = undefined;
    },
    addDependentStorage(data) {
      if ( data = 'add' ) {
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
      } else {
        //else Save and Continue click
        this.dependentState = !this.dependentState;
        if (this.dependentState === false) {
          this.isState = "web";
          this.empDepNavState = true;
        }
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
      }
      
    },
    selectEmpDepTab(opt) {
      this.selected_emp_dep_tab = opt;
    },
    cancelDep() {
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
    enroll() {
      this.isState = "enrollsum";
      this.$emit("enrollmentData", {
        isState: "enrollsum"
      });
      this.addToStorage();
    },
    next() {
      if (this.isType === "web") {
        this.isState = "web";
        this.$emit("enrollmentData", {
          isState: "web"
        });
      } else if (this.isType === "excel") {
        this.isState = "excel";
        this.$emit("enrollmentData", {
          isState: "excel"
        });
      } else {
        console.log("select 1 item");
      }
    },
    back(data) {
      this.isState = data;
      if (this.isState === "enrollment") {
        this.dependentState = false;
        this.$emit("enrollmentData", {
          isState: "enrollment"
        });
      } else if (this.isState === "web") {
        this.isState = "web";
        this.$emit("enrollmentData", {
          isState: "web"
        });
      }
    },
    editEmployee(data, index) {
      let x = data;
      this.indexData = index;
      if (x === "edit") {
        this.modalEdit = !this.modalEdit;
        console.log(this.employeeStorage[index]);
        this.employeeDetails = {
          fname: this.employeeStorage[index].fname,
          lname: this.employeeStorage[index].lname,
          nricFinNo: this.employeeStorage[index].nricFinNo,
          dob: this.employeeStorage[index].dob,
          email: this.employeeStorage[index].email,
          mNumber: this.employeeStorage[index].mNumber,
          mAreaCode: this.employeeStorage[index].mAreaCode,
          mCredits: this.employeeStorage[index].mCredits,
          wCredits: this.employeeStorage[index].wCredits,
          startDate: this.employeeStorage[index].startDate
        };
      } else if (x === "close") {
        this.modalEdit = !this.modalEdit;
      }
    },
    update() {
      this.$swal({
        title: "Confirm",
        text: "Are you sure you want to update this employee?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        customClass: "warning-global-container"
      }).then(result => {
        if (result.value) {
          this.modalEdit = false;
          let index = this.indexData;
          this.addToStorage("edit", index);
          this.$swal(
            "Updated!",
            "Employee details has been updated.",
            "success"
          );
        }
      });
    },
    remove() {
      this.$swal({
        title: "Confirm",
        text: "Are you sure you want to remove this employee?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        customClass: "warning-global-container"
      }).then(result => {
        if (result.value) {
          this.modalEdit = false;
          //delete employee
          let index = this.indexData;
          const data = this.employeeStorage.indexOf(index);
          this.employeeStorage.splice(data, 1);
          //succes SWAL
          this.$swal(
            "Deleted!",
            "Employee details has been deleted.",
            "success"
          );
        }
      });
    },
    excel() {
      console.log("excel details");
    },
    //to check is object empty
    isEmpty(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) return false;
      }
      return true;
    }
  },
  filters: {
    formatDate: function(value) {
      if (value) {
        return moment(String(value)).format("MM/DD//YYYY");
      }
    }
  },
  created() {
    console.log("enrolment page");
  }
};

export default enrollment;
</script>

<style lang="scss">
@import "./src/assets/css/company/enrollment.scss";
</style>