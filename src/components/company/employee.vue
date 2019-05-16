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
		}
	}
};



export default employee

</script>

<style lang="scss" scoped>
	@import './src/assets/css/company/employee.scss'
</style>
