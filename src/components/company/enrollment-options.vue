<script>

// Methods here
let enrollmentOptions = {
  data() {
    return {
      isRequiredTiering: null,
    };
  },
  methods: {
    toggleEnrollmentOptions( opt ) {
      this.isRequiredTiering = opt;
      console.log(this.isRequiredTiering);
    },
    next() {
      if ( this.isRequiredTiering === 1 ) {
        this.$router.push( "create-team-benefits-tier" );
        
      } else if ( this.isRequiredTiering === 0 ) {
        this.$router.push( "enrollment" );
      }
    }
  }
};

export default enrollmentOptions
</script>

<style lang="scss" scoped>
	@import './src/assets/css/company/enrollment.scss'
</style>