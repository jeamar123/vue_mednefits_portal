<script>
/* eslint-disable */
import axios from 'axios';
// Methods here
let intro = {
  data() {
    return {
      introData: {},
    };
  },
  created() {
		this.getCompanyStatus();
		console.log( axios.defaults.headers );
	},
  methods: {
  	getCompanyStatus(){
  		this.$parent.showLoading();
    	axios.get( axios.defaults.serverUrl + '/hr/check_plan' )
				.then(res => {
					this.$parent.hideLoading();
					console.log(res);
					if( res.data.status ){
						this.introData = res.data.data;
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

export default intro;
</script>

<style lang="scss" scoped>
@import "./src/assets/css/company/intro.scss";
</style>