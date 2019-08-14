<script>
/* eslint-disable */ 
import axios from 'axios';
import moment from "moment";

// methods here
let employee = {
	components: {
		
  },
  data() {
    return {
      member_count : 0,
      employees : {},
      page_ctr: 5,
      page_active: 1,
    };
  },
  created(){
    this.employeeOverviewApi();
  },
  methods: {
    singleEmployee(index) {
      this.$router.push({
        // path: `/company/employee/${emp.member_id}`,
        name: 'CompanyEmployeeDetails',
        params: {
          id: this.employees.data[index].user_id,
          emp : this.employees.data[index],
          indexOfEmployees: index,
          page_ctr: this.page_ctr,
          page_active :this.page_active
        }
      });

      let employees_serialized = JSON.stringify(this.employees.data[index]);
      localStorage.setItem('selectedEmployee', employees_serialized);
    },
    // api calls
    employeeOverviewApi() {
      this.getTotalMembers();
      this.getEmployeeList();
    },
    getTotalMembers () {
      axios.get( `${axios.defaults.serverUrl}/hr/get_total_members`)
      .then(res => {
        // console.log( res );
        this.member_count = res.data.total_members;
      })
      .catch(err => {
        console.log( err );
        this.$parent.hideLoading();
        this.$parent.swal('Error!', err,'error');
      });
    },
    getEmployeeList() {
      let num = this.page_ctr;
      let page = this.page_active;
      axios.get( `${axios.defaults.serverUrl}/hr/employee/list/${num}?page=${page}`)
        .then(res => {
          this.employees = res.data;
            
          this.employees.data.map( (value, key) => {
            // this.employees.data[key].push({
            //   fname: this.employees.data[key].name.substring( 0, value.name.lastIndexOf(" ") ),
            //   lname: this.employees.data[ key ].name.substring( value.name.lastIndexOf(" ") + 1 )
            // });
            value.fname = this.employees.data[key].name.substring( 0, value.name.lastIndexOf(" ") );
            value.lname = this.employees.data[key].name.substring( value.name.lastIndexOf(" ") + 1 );
            value.start_date = moment( value.start_date ).format("DD MMMM YYYY");
            value.expiry_date = moment( value.expiry_date ).format("DD MMMM YYYY");
            value.dob = new Date( value.dob );
            value.start_date_format = moment( value.start_date ).format("DD/MM/YYYY");
            value.expiry_date_fromat = moment( value.expiry_date ).format("DD/MM/YYYY");
            value.end_date_format = moment( value.expiry_date ).format("DD/MM/YYYY");
          });

          // let employees_serialized = JSON.stringify(this.employees.data);
          // localStorage.setItem('employeesLocal', employees_serialized);
        })
        .catch(err => {
          console.log( err );
          this.$parent.hideLoading();
          this.$parent.swal('Error!', err,'error');
        });
    }
	}
};



export default employee

</script>

<style lang="scss">
  @import './src/assets/css/company/employee.scss'
</style>

