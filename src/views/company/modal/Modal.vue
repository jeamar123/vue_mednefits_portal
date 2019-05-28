<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <div class="employee-name-container">
              <slot name="header">
              <!-- Header Content Here -->
              </slot>
            </div>
            <slot name="body">
              <!-- <form>
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
                      :max-date="new Date()"
                      :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'
                    ></v-date-picker>
                  </div>
                  <div class="employee-input-wrapper">
                    <label>Bank Account Number</label>
                    <input type="number" name="bank-account-number">
                  </div>
                </div>
              </form> -->
            </slot>
           
            <div class="modal-btn-container">
              <slot name="footer">
                <!-- Footer Content here -->
              </slot>
            </div>
          
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
      sampleData : false
    };
  },
};
</script>

<style lang="scss">
@import "./src/assets/css/company/employee.scss";

.modal-enter-active,
.modal-leave-active {
  opacity: 0 !important;
 
}
.modal-enter,
.modal-leave-to {
   /* transition: opacity; */
  -webkit-transition: all 300ms cubic-bezier(0.25, 0.25, 0.75, 0.75);
  -moz-transition: all 300ms cubic-bezier(0.25, 0.25, 0.75, 0.75);
  -o-transition: all 300ms cubic-bezier(0.25, 0.25, 0.75, 0.75);
  transition: all 300ms cubic-bezier(0.25, 0.25, 0.75, 0.75); /* linear */

  -webkit-transition-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
  -moz-transition-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
  -o-transition-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
  transition-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75); /* linear */
}
</style>