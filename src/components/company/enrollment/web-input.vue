<script>
/* eslint-disable */
// import Enrollment from "../Enrollment.vue";
import axios from 'axios';
import moment from "moment";
// import jQuery from "jquery";
// const $ = jQuery;
// window.$ = $;
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
      depPrevChevronState: false,
      depNextChevronState: false,
      employeeDetails: {
        mCredits : 0,
        wCredits : 0,
      },
      dependentDetails: {
        dob: '',
        startDate : undefined
      },
      employeeStorage: [],
      dependentStorage: [],
      enrollment_progress: {}, //enrollment count
      dependent_progress: {}, //dependent count
      isTiering: JSON.parse( localStorage.getItem('isRequiredTiering') ),
      activeTier: JSON.parse( localStorage.getItem('tierSelected') ),
      employeeCountIndex: 0,
      dependentCountIndex: 0,
      tierEmployeeCountIndex: 0,
      tierDependentCountIndex: 0,
    };
  },
  created() {
    console.log( this.activeTier );

    this.getCompanyEnrollmentCountStatus();
    this.getDependentCountStatus();

    this.tierEmployeeCountIndex = this.activeTier.member_enrolled_count + 1;
    this.tierDependentCountIndex = this.activeTier.dependent_enrolled_count + 1;
  },
  methods: {
    checkDependentForm( data ){
      console.log( data );
      var err = 0;
      if( !data.fname ){
        this.$parent.swal( 'Error!', 'First name is required!', 'error' );
        return false;
      }
      if( !data.lname ){
        this.$parent.swal( 'Error!', 'Last name is required!', 'error' );
        return false;
      }
      if( !data.nricFinNo ){
        this.$parent.swal( 'Error!', 'NRIC/FIN is required!', 'error' );
        return false;
      }else{
        if( this.checkNRIC( data.nricFinNo ) == false ){
          this.$parent.swal( 'Error!', 'Invalid NRIC!', 'error' );
          return false;
        }
      }
      if( !data.dob ){
        this.$parent.swal( 'Error!', 'Date of Birth is required!', 'error' );
        return false;
      }
      if( !data.relation ){
        this.$parent.swal( 'Error!', 'Relationship is required!', 'error' );
        return false;
      }
      if( !data.startDate ){
        this.$parent.swal( 'Error!', 'Start Date is required!', 'error' );
        return false;
      }
      return true; 
    },
    checkEmployeeForm( data ){
      console.log( data );
      var err = 0;
      if( !data.fname ){
        this.$parent.swal( 'Error!', 'First name is required!', 'error' );
        return false;
      }
      if( !data.lname ){
        this.$parent.swal( 'Error!', 'Last name is required!', 'error' );
        return false;
      }
      if( !data.nricFinNo ){
        this.$parent.swal( 'Error!', 'NRIC/FIN is required!', 'error' );
        return false;
      }else{
        if( this.checkNRIC( data.nricFinNo ) == false ){
          this.$parent.swal( 'Error!', 'Invalid NRIC!', 'error' );
          return false;
        }
      }
      if( !data.dob ){
        this.$parent.swal( 'Error!', 'Date of Birth is required!', 'error' );
        return false;
      }
      if( !data.email ){
        this.$parent.swal( 'Error!', 'Email Address is required!', 'error' );
        return false;
      }else{
        if( this.checkEmail( data.email ) == false ){
          this.$parent.swal( 'Error!', 'Invalid Email!', 'error' );
          return false;
        }
      }
      if( !data.mNumber ){
        this.$parent.swal( 'Error!', 'Mobile Number is required!', 'error' );
        return false;
      }
      if( !data.postal ){
        this.$parent.swal( 'Error!', 'Postal Code is required!', 'error' );
        return false;
      }
      if( !data.startDate ){
        this.$parent.swal( 'Error!', 'Start Date is required!', 'error' );
        return false;
      }
      return true; 
    },
    checkNRIC( value ){
      var nric_pattern = new RegExp('^[stfgSTFG]{1}[0-9]{7}[a-zA-z]{1}$');
      return nric_pattern.test( value );
    },
    checkEmail( value ){
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test( value );
    },
    addToStorage(source, index) {
      //used in web input
      // store to temp storage when adding employees
      // if( this.checkEmployeeForm( this.employeeDetails ) == false ){
      //   return false;
      // }
      if (source == "next") {
        //this.dependentStorage.length != 0 && !this.isEmpty(this.dependentDetails)
        if( this.checkEmployeeForm( this.employeeDetails ) == false ){
          return false;
        }
        this.employeeStorage.push({
          first_name: this.employeeDetails.fname,
          last_name: this.employeeDetails.lname,
          idType: this.employeeDetails.idType,
          nric: this.employeeDetails.nricFinNo,
          dob: this.employeeDetails.dob,
          email: this.employeeDetails.email,
          mobile: this.employeeDetails.mNumber,
          mobile_area_code: this.employeeDetails.mAreaCode,
          postal_code: this.employeeDetails.postal,
          plan_start: this.employeeDetails.startDate,
          medical_credits: this.employeeDetails.mCredits,
          wellness_credits: this.employeeDetails.wCredits,
          dependents: this.dependentStorage
        });
      } else if (source == "enroll" && this.employeeStorage.length === 0 && !this.isEmpty(this.employeeDetails) ) {
        //this.dependentStorage.length != 0 && !this.isEmpty(this.dependentDetails)
        if( this.checkEmployeeForm( this.employeeDetails ) == false ){
          return false;
        }
        this.employeeStorage.push({
          first_name: this.employeeDetails.fname,
          last_name: this.employeeDetails.lname,
          idType: this.employeeDetails.idType,
          nric: this.employeeDetails.nricFinNo,
          dob: this.employeeDetails.dob,
          email: this.employeeDetails.email,
          mobile: this.employeeDetails.mNumber,
          mobile_area_code: this.employeeDetails.mAreaCode,
          postal_code: this.employeeDetails.postal,
          plan_start: this.employeeDetails.startDate,
          medical_credits: this.employeeDetails.mCredits,
          wellness_credits: this.employeeDetails.wCredits,
          dependents: this.dependentStorage
        });
      } else if (source == "enroll" && this.employeeStorage.length == this.indexData && !this.isEmpty(this.employeeDetails)) {
        //this.dependentStorage.length != 0 && !this.isEmpty(this.dependentDetails)
        if( this.employeeDetails.fname && this.employeeDetails.lname ){
          if( this.checkEmployeeForm( this.employeeDetails ) == false ){
            return false;
          }
          this.employeeStorage.push({
            first_name: this.employeeDetails.fname,
            last_name: this.employeeDetails.lname,
            idType: this.employeeDetails.idType,
            nric: this.employeeDetails.nricFinNo,
            dob: this.employeeDetails.dob,
            email: this.employeeDetails.email,
            mobile: this.employeeDetails.mNumber,
            mobile_area_code: this.employeeDetails.mAreaCode,
            postal_code: this.employeeDetails.postal,
            plan_start: this.employeeDetails.startDate,
            medical_credits: this.employeeDetails.mCredits,
            wellness_credits: this.employeeDetails.wCredits,
            dependents: this.dependentStorage
          });
        }
      } else if( this.checkEmployeeForm( this.employeeDetails ) == false ) {
        console.log("no data to be pushed");
        return false;
      }
      this.dependentStorage = [];
      this.employeeDetails = {
        mCredits : 0,
        wCredits : 0,
      };
      this.employeeDetails.dob = undefined;
      console.log( this.employeeStorage );
      return true;
    },
    addDependentStorage(data) {
      //used in web input
      let arrStorage = this.employeeStorage;
      let limit = arrStorage.length;
      if( this.checkDependentForm( this.dependentDetails ) == false ){
        return false;
      }
      if (data == "add" && !this.isEmpty(this.dependentDetails)) {
        //if add button click
        // this.dependentState = !this.dependentState;
        // if (this.dependentState === false) {
        //   this.isState = "web";
        // }
        // store to temp storage when adding employees
        this.dependentStorage.push({
          first_name: this.dependentDetails.fname,
          last_name: this.dependentDetails.lname,
          relationship: this.dependentDetails.relation,
          nric: this.dependentDetails.nricFinNo,
          dob: this.dependentDetails.dob,
          plan_start: this.dependentDetails.startDate
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
                first_name: this.dependentDetails.fname,
                last_name: this.dependentDetails.lname,
                relationship: this.dependentDetails.relation,
                nric: this.dependentDetails.nricFinNo,
                dob: this.dependentDetails.dob,
                plan_start: this.dependentDetails.startDate
              });
              this.dependentDetails = {};
            } else if (
              this.dependentStorage.length != 0 &&
              !this.isEmpty(this.dependentDetails)
            ) {
              arrStorage[this.indexData].dependents = [this.dependentStorage];

              console.log("save both to existing employee");
              arrStorage[this.indexData].dependents.push({
                first_name: this.dependentDetails.fname,
                last_name: this.dependentDetails.lname,
                relationship: this.dependentDetails.relation,
                nric: this.dependentDetails.nricFinNo,
                dob: this.dependentDetails.dob,
                plan_start: this.dependentDetails.startDate
              });
              this.dependentStorage = [];
              this.dependentDetails = {};
            } else {
              arrStorage[this.indexData].dependents.push({
                first_name: this.dependentDetails.fname,
                last_name: this.dependentDetails.lname,
                relationship: this.dependentDetails.relation,
                nric: this.dependentDetails.nricFinNo,
                dob: this.dependentDetails.dob,
                plan_start: this.dependentDetails.startDate
              });
              this.dependentDetails = {};
            }
            // store to temp storage when adding employees
          }
        }
      }
      return true;
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
            this.tierEmployeeCountIndex -= 1;
            index = --this.indexData;
            this.employeeDetails = {
              fname: arrStorage[index].first_name,
              lname: arrStorage[index].last_name,
              nricFinNo: arrStorage[index].nric,
              dob: arrStorage[index].dob,
              email: arrStorage[index].email,
              mNumber: arrStorage[index].mobile,
              postal: arrStorage[index].postal_code,
              mCredits: arrStorage[index].medical_credits,
              wCredits: arrStorage[index].wellness_credits,
              startDate: arrStorage[index].plan_start,
              dependents: arrStorage[index].dependents
            };
            if (index == 0) {
              this.prevDisabled = true;
            }
            if (arrStorage[index].dependents.length != 0) {
              this.empDepNavState = true;
            }
          }
        } else if (data == "next") {
          this.prevDisabled = false;
          let limit = arrStorage.length;
          
          if (limit == index) {
            if( this.addToStorage("next") == true ){
              limit = arrStorage.length;
              this.tierEmployeeCountIndex += 1;
              index = ++this.indexData;
              this.empDepNavState = false;
              this.employeeDetails = {
                mCredits : 0,
                wCredits : 0,
                startDate : undefined
              };
            }
          } else if (index >= limit) {
            this.empDepNavState = false;
          } else {
            this.employeeStorage[ index ] = {
              first_name: this.employeeDetails.fname,
              last_name: this.employeeDetails.lname,
              idType: this.employeeDetails.idType,
              nric: this.employeeDetails.nricFinNo,
              dob: this.employeeDetails.dob,
              email: this.employeeDetails.email,
              mobile: this.employeeDetails.mNumber,
              mobile_area_code: this.employeeDetails.mAreaCode,
              postal_code: this.employeeDetails.postal,
              plan_start: this.employeeDetails.startDate,
              medical_credits: this.employeeDetails.mCredits,
              wellness_credits: this.employeeDetails.wCredits,
              dependents: this.dependentStorage
            };
            this.tierEmployeeCountIndex += 1;
            index = ++this.indexData;
            if (arrStorage[index] === undefined) {
              this.empDepNavState = false;
              this.employeeDetails = {
                mCredits : 0,
                wCredits : 0,
                startDate : undefined
              };
            } else {
              this.employeeDetails = {
                fname: arrStorage[index].first_name,
                lname: arrStorage[index].last_name,
                nricFinNo: arrStorage[index].nric,
                dob: arrStorage[index].dob,
                email: arrStorage[index].email,
                mNumber: arrStorage[index].mobile,
                postal: arrStorage[index].postal_code,
                mCredits: arrStorage[index].medical_credits,
                wCredits: arrStorage[index].wellness_credits,
                startDate: arrStorage[index].plan_start,
                dependents: arrStorage[index].dependents
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
            this.tierDependentCountIndex -= 1;
            depIndex = --this.depIndexData;
            this.dependentDetails = {
              fname: depArrStorage[depIndex].first_name,
              lname: depArrStorage[depIndex].last_name,
              relation: depArrStorage[depIndex].relationship,
              nricFinNo: depArrStorage[depIndex].nric,
              dob: depArrStorage[depIndex].dob,
              startDate: depArrStorage[depIndex].plan_start
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
          if (limit == depIndex) {
            // !this.isEmpty(this.employeeDetails)
            if( this.addDependentStorage("add") == true ){
              this.depPrevChevronState = true;
              // limit = depArrStorage.length;
              this.tierDependentCountIndex += 1;
              depIndex = ++this.depIndexData;
              this.dependentDetails = {};
            }
          }
        } else if (data == "next") {
          let limit = depArrStorage.length;
          if (depIndex >= limit) {
            this.depPrevChevronState = true;
            this.depNextChevronState = false;
          } else {
            this.dependentStorage[ depIndex ] = {
              first_name: this.dependentDetails.fname,
              last_name: this.dependentDetails.lname,
              relationship: this.dependentDetails.relation,
              nric: this.dependentDetails.nricFinNo,
              dob: this.dependentDetails.dob,
              plan_start: this.dependentDetails.startDate
            };
            this.tierDependentCountIndex += 1;
            depIndex = ++this.depIndexData;
            if (depArrStorage[depIndex] === undefined) {
              this.dependentDetails = {};
              this.depNextChevronState = false;
              this.depPrevChevronState = true;
            } else {
              this.dependentDetails = {
                fname: depArrStorage[depIndex].first_name,
                lname: depArrStorage[depIndex].last_name,
                relation: depArrStorage[depIndex].relationship,
                nricFinNo: depArrStorage[depIndex].nric,
                dob: depArrStorage[depIndex].dob,
                startDate: depArrStorage[depIndex].plan_start
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
            let limit = viewDept.dependents.length;
            this.tierDependentCountIndex -= 1;
            depIndex = --this.depIndexData;
            this.dependentDetails = {
              fname: viewDept.dependents[depIndex].fname,
              lname: viewDept.dependents[depIndex].lname,
              relation: viewDept.dependents[depIndex].relation,
              nricFinNo: viewDept.dependents[depIndex].nricFinNo
              // dob: viewDept.dependents.dob,
              // startDate: viewDept.dependents.startDate
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
          let limit = viewDept.dependents.length - 1;
          if (depIndex == limit) {
            this.depPrevChevronState = true;
            this.depNextChevronState = false;
          } else {
            this.tierDependentCountIndex += 1;
            depIndex = ++this.depIndexData;
            if (viewDept.dependents[depIndex] === undefined) {
              this.dependentDetails = {};
              // this.depNextChevronState = false;
              // this.depPrevChevronState = true;
            } else {
              this.depPrevChevronState = true;
              this.dependentDetails = {
                fname: viewDept.dependents[depIndex].fname,
                lname: viewDept.dependents[depIndex].lname,
                relation: viewDept.dependents[depIndex].relation,
                nricFinNo: viewDept.dependents[depIndex].nricFinNo,
                dob: viewDept.dependents[depIndex].dob,
                startDate: viewDept.dependents[depIndex].startDate
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
      console.log( this.dependentStorage );
      if (this.selected_emp_dep_tab == 2) {
        if (this.dependentStorage.length != 0) {
          this.depIndexData = this.dependentStorage.length - 1;
          this.dependentDetails = {
            fname: this.dependentStorage[this.depIndexData].first_name,
            lname: this.dependentStorage[this.depIndexData].last_name,
            relation: this.dependentStorage[this.depIndexData].relationship,
            nricFinNo: this.dependentStorage[this.depIndexData].nric,
            dob: this.dependentStorage[this.depIndexData].dob,
            startDate: this.dependentStorage[this.depIndexData].plan_start
          };
          if (this.depIndexData >= 1) {
            this.depPrevChevronState = true;
            this.depNextChevronState = false;
          }
        } else if (this.employeeStorage.length != 0) {
          let viewDept = this.employeeStorage[this.indexData];
          this.depIndexData = viewDept.dependents.length - 1;
          this.dependentDetails = {
            fname: this.dependentStorage[this.depIndexData].first_name,
            lname: this.dependentStorage[this.depIndexData].last_name,
            relation: this.dependentStorage[this.depIndexData].relationship,
            nricFinNo: this.dependentStorage[this.depIndexData].nric,
            dob: this.dependentStorage[this.depIndexData].dob,
            startDate: this.dependentStorage[this.depIndexData].plan_start
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
        if( this.addToStorage('enroll') == true ){
          this.isState = "enrollsum";
          this.$emit("webInputData", {
            isState: "enrollsum"
          });
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
      }
    },
    //to check is object empty globall
    isEmpty(obj) {
      for (var key in obj) {
        if( key != 'mCredits' && key != 'wCredits' ){
          if (obj.hasOwnProperty(key)) return false;
        }
      }
      return true;
    },
    getCompanyEnrollmentCountStatus(){
      this.$parent.showLoading();
      axios.get( axios.defaults.serverUrl + '/hr/enrollment_progress' )
        .then(res => {
          this.$parent.hideLoading();
          console.log(res);
          if( res.status == 200 ){
            this.enrollment_progress = res.data.data;
            this.employeeCountIndex = this.enrollment_progress.completed + 1;
          }else{
            this.$parent.swal('Error!', res.data.message, 'error');
          }
        })
        .catch(err => {
          console.log( err );
          this.$parent.hideLoading();
          this.$parent.swal('Error!', err,'error');
        });
    },
    getDependentCountStatus(){
      this.$parent.showLoading();
      axios.get( axios.defaults.serverUrl + '/hr/get_dependent_status' )
        .then(res => {
          this.$parent.hideLoading();
          console.log(res);
          if( res.status == 200 ){
            this.dependent_progress = res.data;
            this.dependentCountIndex = this.dependent_progress.occupied_seats + 1;
          }else{
            this.$parent.swal('Error!', res.data.message, 'error');
          }
        })
        .catch(err => {
          console.log( err );
          this.$parent.hideLoading();
          this.$parent.swal('Error!', err,'error');
        });
    },
    getCompanyPaymentStatus(){
      this.$parent.showLoading();
      axios.get( axios.defaults.serverUrl + '/hr/check_plan' )
        .then(res => {
          this.$parent.hideLoading();
          console.log(res);
          if( res.status == 200 ){
            // this.dependent_progress = res.data.data;
          }else{
            this.$parent.swal('Error!', res.data.message, 'error');
          }
        })
        .catch(err => {
          console.log( err );
          this.$parent.hideLoading();
          this.$parent.swal('Error!', err,'error');
        });
    },
  },
};
export default webInput;
</script>

<style lang="scss">
@import "./src/assets/css/company/enrollment.scss";
</style>