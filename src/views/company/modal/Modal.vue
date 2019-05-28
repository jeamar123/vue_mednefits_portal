<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          
          <div class="modal-header">
            <div class="employee-name-container">
              <slot name="header">
              <!-- Header Content Here -->
              </slot>
            </div>
          </div>

          <div class="modal-body">
            <slot name="body">
            </slot>        
          </div>

          <div class="modal-footer">
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