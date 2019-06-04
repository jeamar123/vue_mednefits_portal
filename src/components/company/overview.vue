<script>
// Methods here
let overview = {
  data() {
    return {
      spendingType:{
        value: 0,
        text: ''
      } //default is medical
    };
  },
  methods: {
    spendType(value, text){
      //spending either medical or wellness
      this.spendingType.value = value;
      this.spendingType.text = text;
      console.log(this.spendingType);
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