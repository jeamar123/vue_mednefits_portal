<script>
import moment from 'moment'
//Methods here
let localNetwork = {
  data() {
    return {
      sampleData: false,
      test: false,
      map: ''
    };
  },
  methods: {
    testClicked() {
      this.test = true;
      console.log(this.test);
    }
  }
};

export default localNetwork
</script>

<style lang="scss" scoped>
@import "./src/assets/css/company/plan-coverage.scss";
</style>
