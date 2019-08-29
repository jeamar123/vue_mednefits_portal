<script>
/* eslint-disable */
import ImgPreview from "../../views/company/modal/ImagePreview"; //image popup
import axios from 'axios';
import moment from 'moment';
import JSZip from 'jszip';
import FileSaver from 'file-saver';

// Methods here
let claim = {
  components: {
    ImgPreview
  },
  data() {
    return {
      current_year : moment( ).format('YYYY'),
      start_date : new Date(moment().startOf('month')),
      end_date : new Date(moment().endOf('month')),
    	eclaimSpendingType: {
    		value: 0,
        text: "medical"
      },
      viewData : 'All',
      viewEclaim: false,
      formats: {
        input: ['MM/DD/YYYY'], 
        data: ['YYYY-MM-DD']
      },
      showPreview: false,
      options: {},
      employee_list: [],
      company_details: {},
      search_emp: "",
      isActiveSearch: false,
      pageCtr: 1,
      claim_data: {},
    };
  },
  created(){
    this.getSession();
  },
  computed: {
    searchedEmployee(){
      if( this.search_emp != '' ){
        return this.employee_list.filter((value) => {
          return value.Name.startsWith( this.search_emp );
        })
      }else{
        return this.employee_list;
      }
    },
    filteredEclaimTransactions(){
      if( this.viewData != 'All' ){
        return this.claim_data.e_claim_transactions.filter((value) => {
          return value.status_text == this.viewData;
        })
      }else{
        return this.claim_data.e_claim_transactions;
      }
    },
  },
  methods: {
    closeSearchEmp(){
      this.isActiveSearch = false;
      // this.search_emp = "";
    },
    selectEmployeeSearch( id, name ){
      this.selected_user_id = id;
      this.search_emp = name;
      this.getClaimsByEmployee();
    },
    searchEmployeeChanged( value ){
      if( value.length > 0 ){
        this.isActiveSearch = true;
      }else{
        this.isActiveSearch = false;
      }
    },
  	spendType(value, text) {
      //spending either medical or wellness
      this.eclaimSpendingType.value = value;
      this.eclaimSpendingType.text = text;
      this.getClaims();
    },
    toggleDetails(data) {

      data.showTransDetails = !data.showTransDetails;
    },
    viewEclaimToggle(opt, data) {
      if ( opt == 0 ) { //open dropdown
        if( data == 'open')
          this.viewEclaim = !this.viewEclaim;
      }
      else if( opt == 1) { // select item from dropdown
        if(data == 'All'){
          this.viewData = data;
          this.viewEclaim = false;
        } 
        else if (data == 'Pending') {
          this.viewData = data;
          this.viewEclaim = false;
        }
        else if (data == 'Approved') {
          this.viewData = data;
          this.viewEclaim = false;
        }
        else if (data == 'Rejected') {
          this.viewData = data;
          this.viewEclaim = false;
        }
      }
    },
    getSession(){
      this.$parent.showLoading();
      axios.get( axios.defaults.serverUrl + '/get-hr-session' )
        .then(res => {
          // this.$parent.hideLoading();
          console.log(res);
          if( res.status == 200 ){
            this.options = res.data;
            this.getEmployeeLists();
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
    getEmployeeLists(){
      // this.$parent.showLoading();
      axios.get( axios.defaults.serverUrl + '/hr/employee_lists' )
        .then(res => {
          // this.$parent.hideLoading();
          console.log(res);
          if( res.status == 200 ){
            this.employee_list = res.data.data;
            this.getCompanyDetails();
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
    getCompanyDetails(){
      // this.$parent.showLoading();
      axios.get( axios.defaults.serverUrl + '/hr/details' )
        .then(res => {
          // this.$parent.hideLoading();
          console.log(res);
          if( res.status == 200 ){
            this.company_details = res.data.data;
            this.getClaims();
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
    getClaimsByEmployee(){
      var data = {
        start : moment(this.start_date).format('YYYY-MM-DD'),
        end : moment(this.end_date).format('YYYY-MM-DD'),
        spending_type : this.eclaimSpendingType.text,
        user_id : this.selected_user_id,
      }
      this.closeSearchEmp();
      this.$parent.showLoading();
      axios.post( axios.defaults.serverUrl + '/hr/search_employee_e_claim_activity', data)
        .then(res => {
          this.$parent.hideLoading();
          console.log(res);
          if( res.status == 200 ){
            this.claim_data = res.data;
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
    getClaims(){
      var data = {
        start : moment(this.start_date).format('YYYY-MM-DD'),
        end : moment(this.end_date).format('YYYY-MM-DD'),
        page : this.pageCtr,
        spending_type : this.eclaimSpendingType.text,
      }
      this.$parent.showLoading();
      axios.get( axios.defaults.serverUrl + '/hr/e_claim_activity?page=' + data.page + '&start=' + data.start + '&end=' + data.end + '&spending_type=' + data.spending_type )
        .then(res => {
          this.$parent.hideLoading();
          console.log(res);
          if( res.status == 200 ){
            this.claim_data = res.data.data;
            if( this.claim_data.last_page > 0 && this.pageCtr != this.claim_data.last_page ){
              this.pageCtr += 1;
              this.getClaims();
            }
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
  }
};

export default claim;
</script>

<style lang="scss">
@import "./src/assets/css/company/claim.scss";
</style>

