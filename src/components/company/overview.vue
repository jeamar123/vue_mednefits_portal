<script>
// Methods here
let overview = {
  data() {
    return {
      sampleData: true
    };
  },
  methods: {
    toEnrollment(data) {
      this.$emit('overviewData',{
        isState: data
      });
    }
  }
};

export default overview
</script>

<style lang="scss" scoped>
	@import './src/assets/css/company/overview.scss'
</style>