<script>
/* eslint-disable */
// methods here

import Intro from './intro';

let dashboard = {
  components: {
    Intro,
  },
  data() {
    return {
      sampleData: true,
    };
  }
};

export default dashboard;
</script>

<style lang="scss" scoped>
	@import './src/assets/company/dashboard.scss'
</style>