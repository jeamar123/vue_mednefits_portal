<script>
/* eslint-disable */
import ImgPreview from "../../views/company/modal/ImagePreview"; //image popup
import moment from 'moment'

// Methods here
let claim = {
   components: {
    ImgPreview
  },
  data() {
    return {
      timeFrame: {},
    	eclaimSpendingType: {
    		value: 0,
        text: ""
      },
      viewData : 'All',
      viewEclaim: false,
      test : [
        {
          id: 1,
          name: 'test',
          showTransDetails: false,
        },
        {
          id: 2,
          name: 'test',
          showTransDetails: false,
        }
      ],
      showPreview: false,
    };
  },
  methods: {
  	spendType(value, text) {
      //spending either medical or wellness
      this.eclaimSpendingType.value = value;
      this.eclaimSpendingType.text = text;
    },
    toggleDetails(data) {
        data.showTransDetails = !data.showTransDetails;
    },
    viewEclaimToggle(opt, data) {
      console.log('Toggle');

    
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
      
    }
  }
};

export default claim;
</script>

<style lang="scss">
@import "./src/assets/css/company/claim.scss";
</style>

