<script>
import moment from 'moment'
//Methods here
let statement = {
  data() {
    return {
      year_active: {
        value: 0,
        text: ""
      },
      timeFrame: {},
      showRangeMonthSlider: true,
      showInputDate: false,
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
      overview_active: true,
      full_active: false,
      showTransDetails: false,
       //Date range data
      inDragging : false,
      range_values : [6],
      range_marks : { '1' : 'JAN', '2' : 'FEB', '3' : 'MAR', '4' : 'APR', '5' : 'MAY', '6' : 'JUN', '7' : 'JUL', '8' : 'AUG', '9' : 'SEP', '10' : 'OCT', '11' : 'NOV', '12' : 'DEC', },
      current_year : moment( ).format('YYYY'),
      start_date : new Date(moment().startOf('year')),
      end_date : new Date(moment().endOf('month')),
      formats: {
        input: ['MM/DD/YYYY'], 
        data: ['YYYY-MM-DD']
      },
    };
  },
  methods: {
    showCustomDate(value, text) {
      this.year_active.value = value;
      this.year_active.text = text;
      if (this.year_active.text == 'this-year') {
        this.showRangeMonthSlider = true;
        this.showInputDate = false;
      }
      else if (this.year_active.text == 'last-year') {
        this.showRangeMonthSlider = true;
        this.showInputDate = false;
      }
      else if (this.year_active.text == 'custom') {
        this.showRangeMonthSlider = false;
        this.showInputDate =true;
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
    }
  }
};

export default statement
</script>

<style lang="scss" scoped>
@import "./src/assets/css/company/statement.scss";
</style>
