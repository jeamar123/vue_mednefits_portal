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
      modalEditEmployee: false,
      modalEditDependent: false,
      toggle_overiew_type: 1
    };
  },
  methods: {
		toggleTabOverview( opt ) {
			this.toggle_overiew_type = opt;
		},
		overviewInfo() {
			if(this.overviewInfoShow == false) {
				this.overviewInfoShow = true;
			}
			else {
				this.overviewInfoShow = false;
			}
		},
		openUpdateEmployeeModal( data ) {
			let x = data;
			if( x === 'edit' ) {
				this.modalEditEmployee = !this.modalEditEmployee;
			} else if( x === 'close' ) {
				this.modalEditEmployee = !this.modalEditEmployee;
			}
		},
		openUpdateDependentModal( data ) {
			let x = data;
			if( x === 'edit' ) {
				this.modalEditDependent = !this.modalEditDependent;
			} else if( x === 'close' ) {
				this.modalEditDependent = !this.modalEditDependent;
			}
		}
	}
};



export default employee

</script>

<style lang="scss" scoped>
	@import './src/assets/css/company/employee.scss'
</style>
