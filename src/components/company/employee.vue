<script>
import EmployeeDetails from "../../views/company/employee/Employee-details.vue";
import FadeTransition from "../../assets/transitions/FadeTransition";
import ModalTransition from "../../assets/transitions/ModalTransition";
// methods here
let employee = {
	components: {
		EmployeeDetails,
    FadeTransition,
    ModalTransition
  },
  data() {
    return {
      overviewInfoShow: false,
    };
  },
  methods: {
  	
		overviewInfo() {
			if(this.overviewInfoShow == false) {
				this.overviewInfoShow = true;
			}
			else {
				this.overviewInfoShow = false;
			}
		},
	}
};



export default employee

</script>

<style lang="scss" scoped>
	@import './src/assets/css/company/employee.scss'
</style>
