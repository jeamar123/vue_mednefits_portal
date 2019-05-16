<script>
// Methods here
let overview = {
  data() {
    return {
      spendingType: 'medical' //default is medical
    };
  },
  methods: {
    spendType(data){
      //spending either medical or wellness
      this.spendingType = data;
    },
    //emit/transfer data data to another component
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