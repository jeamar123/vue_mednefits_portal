<script>
	import axios from 'axios';
	import Modal from "../../../views/clinic/modal/Modal.vue";
	import moment from 'moment';

	var clinicProfile = {
		components: {
	    Modal
	  },
		data() {
			return {
				timeFrame: {},
				detail_active: {
	        value: 0,
	        text: ""
				},
				year_active: {
	        value: 0,
	        text: ""
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
	      viewSelector: false,
	      viewStatementAccount: false,
			}
		},
		methods: {
			selectTransDetail(value, text) {
	      this.detail_active.value = value;
	      this.detail_active.text = text; 
	    },
	    setYear(value, text) {
	      this.year_active.value = value;
	      this.year_active.text = text; 
	    },
	    btnView() {
	    	if( this.viewSelector === false ) {
	    		this.viewSelector = true;
	    	} else {
	    		this.viewSelector = false;
	    	}
	    },
	    viewStatement() {
	    	if( this.viewStatementAccount === false ) {
	    		this.viewStatementAccount = true;
		    } else {
		    	this.viewStatementAccount = false;
		    }
	    }
		}
	
	}

	export default clinicProfile
</script>

<style lang="scss" scoped>
@import "./src/assets/css/clinic/settings.scss";
</style>