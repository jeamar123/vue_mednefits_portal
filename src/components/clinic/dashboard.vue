<script>
	import axios from 'axios'

	var dashboard = {
		data() {
			return {
				showIconLoader : false,
				showLoader : false,
				user_id : null,
				isLogoutDropShow : false,
				showupdatePassModal : false,
				update_pass_data : {},
				isWhiteHeader : false,
				showMenuCollapse : false
			}
		},
		created() {
			// if( localStorage.getItem('vue_session') == null ){
			// 	location.href = '/auth';
			// }else{
			// 	this.user_id = localStorage.getItem('vue_session');
			// }

			// setTimeout(()=>{
			//   this.showIconLoader = false;
			// },3000);
		},
		methods: {
			swal( title, message, type ) {
        this.$swal( title, message, type);
      },
			showIconLoading() {
      	this.showIconLoader = true;
      },
      hideIconLoading() {
      	setTimeout(()=>{
				  this.showIconLoader = false;
				},1000);
      },
      showLoading() {
      	this.showLoader = true;
      },
      hideLoading() {
      	setTimeout(()=>{
				  this.showLoader = false;
				},1000);
      },
      toggleLogout() {
      	this.isLogoutDropShow = !this.isLogoutDropShow ? true : false;
      },
      closeLogout() {
      	this.isLogoutDropShow = false;
      },
      logout( ){
      	this.showLoading();
				axios.get( axios.defaults.serverUrl + '/app/e_claim/logout')
					.then(res => {
						console.log( res );
						this.hideLoading();
						location.href = '/auth';
						this.$router.push({ name: 'MemberAuth' });
					})
					.catch(err => {
						console.log( err );
						this.hideLoading();
					});
      },
    }
	}

	export default dashboard
</script>

<style lang="scss" scoped>
@import "./src/assets/css/clinic/dashboard.scss";
</style>






