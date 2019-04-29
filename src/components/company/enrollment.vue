<script>
// Methods here
let enrollment = {
  data() {
    return {
      isType: '',
      isState: 'enrollment',
    };
  },
  methods: {
    type(data) {
      this.isType = data;
      console.log(this.isType);
    },
    next() {
      if (this.isType === 'web') {
        this.isState = 'web';
        this.$emit('title-change', {
          isState: 'web'
        });
        console.log(this.isState);
      } else if (this.isType === 'excel') {
        this.isState = 'excel';
        console.log(this.isState);
      } else {
        console.log('select 1 item');
      }
    },
    employeeDetails() {
      console.log('submit employee details');
    },
    excel() {
      console.log('excel details');
    }
  }
};

export default enrollment;
</script>

<style lang="scss" scoped>
@import "./src/assets/css/company/enrollment.scss";
</style>