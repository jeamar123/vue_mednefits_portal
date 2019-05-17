<script>

import FadeTransition from "../../assets/transitions/FadeTransition";
import ModalTransition from "../../assets/transitions/ModalTransition";
// methods here
let employee = {
	components: {
    FadeTransition,
    ModalTransition
  },
  data() {
    return {
      sampleData: false,
      overviewInfoShow: false,
      modalEdit: false,
      toggle_overiew_type: 1
    };
  },
  methods: {
		toggleTabOverview( opt ) {
			this.toggle_overiew_type = opt;
		},
		overviewInfo() {
			console.log('overview info');
			if(this.overviewInfoShow == false) {
				this.overviewInfoShow = true;
			}
			else {
				this.overviewInfoShow = false;
			}
		},
		editEmp( data ) {
			let x = data;
			if( x === 'edit' ) {
				this.modalEdit = !this.modalEdit;
			} else if( x === 'close' ) {
				this.modalEdit = !this.modalEdit;
			}
		}
	}
};



export default employee

</script>

<style lang="scss" scoped>
	@import './src/assets/css/company/employee.scss'
</style>
