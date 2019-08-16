<script>
import Modal from "../../views/clinic/modal/Modal.vue";
import moment from "moment";

var dashboardSummary = {
	components: {
    Modal
  },
	data() {
		return {
			timeFrame: {},
			year_active: {
        value: 0,
        text: ""
      },
			modalClaim: {
        verifyUser: false,
        manualClaims: false,
        eCardModal: false,
        checkClaims: false,
      },
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
		}
	},
	methods: {
		setYear(value, text) {
      this.year_active.value = value;
      this.year_active.text = text; 
    }
	}

}

export default dashboardSummary;
</script>

<style lang="scss">
@import "./src/assets/css/clinic/dashboard-summary.scss";
</style>
