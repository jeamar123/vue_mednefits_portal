<script>
import moment from 'moment'
//Methods here
let localNetwork = {
  data() {
    return {
      sampleData: false,
      test: false,
      map: '',
      hoverState: ''
    };
  },
  methods: {
    testClicked() {
      this.test = true;
      console.log(this.test);
    },
    hover(data) {
      this.hoverState = data;
    }
  },
  mounted() {
    
  }
};

export default localNetwork
</script>

<style lang="scss" scoped>
@import "./src/assets/css/company/plan-coverage.scss";
</style>
