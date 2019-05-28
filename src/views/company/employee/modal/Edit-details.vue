<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <slot name="body">
              <div class="employee-name-container">
                <span>allan cheam alzula</span>
                <img @click="openUpdateEmployeeModal( 'close' )" :src="'../assets/img/icons/close-blue.svg'">
              </div>
              <h1>Edit employee details</h1>
              <form>
                <div class="employee-input-container">
                  <div class="employee-input-wrapper">
                    <label for="fname">First Name</label>
                    <input type="text" name="fname">
                  </div>
                  <div class="employee-input-wrapper">
                    <label for="work-email">Work Email</label>
                    <input type="text" name="work-email">
                  </div>
                </div>
                <div class="employee-input-container">
                  <div class="employee-input-wrapper">
                    <label for="lname">Last Name</label>
                    <input type="text" name="lname">
                  </div>
                  <div class="employee-input-wrapper">
                    <label for="number">Mobile Number</label>
                    <input type="number" name="number">
                  </div>
                </div>
                <div class="employee-input-container">
                  <div class="employee-input-wrapper">
                    <label>NRIC</label>
                    <input type="text" name="nric-fin">
                  </div>
                  <div class="employee-input-wrapper">
                    <label for="postal-code">Postal Code</label>
                    <input type="number" name="postal-code">
                  </div>
                </div>
                <div class="employee-input-container">
                  <div class="employee-input-wrapper">
                    <label>Member ID</label>
                    <input type="number" name="member-id">
                  </div>
                  <div class="employee-input-wrapper">
                    <label for="postal-code">Postal Code</label>
                    <select>
                      <option>Building and Estate Management</option>
                      <option>Education</option>
                      <option>Engineering</option>
                    </select>
                    <img :src="'../assets/img/icons/down-arrow.svg'">
                  </div>
                </div>
                <div class="employee-input-container">
                  <div class="employee-input-wrapper dob">
                    <label for="fname">Date of Birth</label>
                    <v-date-picker
                        :max-date='new Date()'
                        :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'
                    >
                    </v-date-picker>
                  </div>
                  <div class="employee-input-wrapper">
                    <label>Bank Account Number</label>
                    <input type="number" name="bank-account-number">
                  </div>
                </div>
                <div class="modal-btn-container">
                  <button>CANCEL</button>
                  <button>SAVE & CONTINUE</button>
                </div>
              </form>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  data() {
    return {
      modalEditEmployee: false,
    };
  },
  methods: {

    openUpdateEmployeeModal( data ) {
      let x = data;
      if( x === 'edit' ) {
        this.modalEditEmployee = true;
      } else if( x === 'close' ) {
        console.log('nigana ang x');
        this.modalEditEmployee = false;
        this.$emit("editDetailsData", {
           modalEditEmployee: false,
        });
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  @import './src/assets/css/company/employee.scss';

  .modal-enter-active,
  .modal-leave-active {
  /* transition: opacity; */
  -webkit-transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); 
   -moz-transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); 
     -o-transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); 
        transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */

  -webkit-transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); 
     -moz-transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); 
       -o-transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); 
          transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
  }
  .modal-enter,
  .modal-leave-to {
    opacity: 0;
  }

</style>