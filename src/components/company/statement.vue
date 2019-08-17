<script>
import axios from 'axios';
import moment from 'moment'
//Methods here
let statement = {
  data() {
    return {
      range_values : moment().format('M'),
      range_marks : { '1' : 'JAN', '2' : 'FEB', '3' : 'MAR', '4' : 'APR', '5' : 'MAY', '6' : 'JUN', '7' : 'JUL', '8' : 'AUG', '9' : 'SEP', '10' : 'OCT', '11' : 'NOV', '12' : 'DEC', },
      current_year : moment( ).format('YYYY'),
      start_date : new Date(moment().startOf('month')),
      end_date : new Date(moment().endOf('month')),
      showRangeMonthSlider: true,
      showInputDate: false,
      overview_active: true,
      full_active: false,
      showTransDetails: false,
      inDragging : false,
      isFromSlider : false,
      timeFrame: {},
      year_active: {
        value: 0,
        text: ""
      },
      viewStatementType: {
    		value: 0,
        text: ""
      },
      spendingTypeOpt: {
        value: 0,
        text: ""
      },
      networkType: {
        value: 0,
        text: ""
      },
      formats: {
        input: ['MM/DD/YYYY'], 
        data: ['YYYY-MM-DD']
      },
      download_token: null,
      options: {},
      overview_data: {},
      employee_list: [],
      slideCtr: 0,
    };
  },
  created(){
    this.getSession();
    this.getDownloadToken();
    this.getEmployeeLists();
  },
  methods: {
    sliderDragged( value ){
      console.log( value );
      console.log( this.inDragging );
      console.log( this.isFromSlider );
      // setTimeout(() => {
        if( this.inDragging == false && this.isFromSlider == true){
          this.setFirstEndDate( value );
          this.isFromSlider = false;
          // this.setFirstEndDate( value[0], value[1] );
          // this.getStatementData( );
        }
      // }, 500);
    },
    setFirstEndDate( firstMonth, lastMonth ){
      this.start_date = moment( firstMonth + " " + this.current_year,'MM YYYY' ).startOf('month').format('YYYY-MM-DD');
      this.end_date   = moment( firstMonth + " " + this.current_year,'MM YYYY' ).endOf('month').format('YYYY-MM-DD');
      // this.end_date   = moment( lastMonth + " " + this.current_year,'MM YYYY' ).endOf('month').format('YYYY-MM-DD');
    },
    dateSelected( start, end ){
      this.start_date = moment( start ).format('YYYY-MM-DD');
      this.end_date   = moment( end ).format('YYYY-MM-DD');
      this.getStatementData();
    },
    showCustomDate(value, text) {
      this.year_active.value = value;
      this.year_active.text = text;
      if (this.year_active.text == 'this-year') {
        this.showRangeMonthSlider = true;
        this.showInputDate = false;
        this.current_year = moment( ).format('YYYY');
      }
      if (this.year_active.text == 'last-year') {
        this.showRangeMonthSlider = true;
        this.showInputDate = false;
        this.current_year = moment( ).subtract( 1, 'years' ).format('YYYY');
      }
      this.start_date = new Date(moment( moment( this.start_date ).format('MMMM') + " " + this.current_year ).startOf('year'));
      this.end_date = new Date(moment( moment( this.end_date ).format('MMMM') + " " + this.current_year ).endOf('month'));
      if (this.year_active.text == 'custom') {
        this.showRangeMonthSlider = false;
        this.showInputDate = true;
      }else{
        this.getStatementData( );
      }
    },
  	statementType(value, text) {
      //spending either medical or wellness
      this.viewStatementType.value = value;
      this.viewStatementType.text = text;

      if ( this.viewStatementType.text == 'full') {
        this.overview_active = false;
        this.full_active = true;
      } else if ( this.viewStatementType.text == 'overview') {
        this.overview_active = true;
        this.full_active = false;
      }
    },
    setSpendingType(value, text) {
      this.spendingTypeOpt.value = value;
      this.spendingTypeOpt.text = text;
    },
    netType(value, text) {
      this.networkType.value = value;
      this.networkType.text = text;
    },
    toggleDetails() {

      this.showTransDetails = !this.showTransDetails;
    },
    getDownloadToken(){
      this.$parent.showLoading();
      axios.get( axios.defaults.serverUrl + '/hr/get_download_token' )
        .then(res => {
          this.$parent.hideLoading();
          console.log(res);
          if( res.status == 200 ){
            this.download_token = res.data;
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
    getSession(){
      this.$parent.showLoading();
      axios.get( axios.defaults.serverUrl + '/get-hr-session' )
        .then(res => {
          this.$parent.hideLoading();
          console.log(res);
          if( res.status == 200 ){
            this.options = res.data;
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
      this.$parent.showLoading();
      axios.get( axios.defaults.serverUrl + '/hr/employee_lists' )
        .then(res => {
          this.$parent.hideLoading();
          console.log(res);
          if( res.status == 200 ){
            this.employee_list = res.data.data;
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
    getStatementData(  ){
      this.isFromSlider = false;
      var data = {
        start : moment(this.start_date).format('YYYY-MM-DD'),
        end : moment(this.end_date).format('YYYY-MM-DD'),
      }
      this.$parent.showLoading();
      axios.post( axios.defaults.serverUrl + '/hr/get_statement', data )
        .then(res => {
          this.$parent.hideLoading();
          console.log(res);
          if( res.status == 200 ){
            this.overview_data = res.data.data;
          }else{
            this.$parent.swal('Error!', res.data.message, 'error');
          }
        })
        .catch(err => {
          console.log( err );
          this.$parent.hideLoading();
          this.$parent.swal('Error!', err,'error');
        });
    }
  }
};

export default statement
</script>

<style lang="scss" scoped>
@import "./src/assets/css/company/statement.scss";
</style>
