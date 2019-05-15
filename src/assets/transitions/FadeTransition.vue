<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  
}
</script>

<style>

.fade-enter-active,
.fade-leave-active {
  /* transition: opacity; */
-webkit-transition: all .3s cubic-bezier(0.780, 0.000, 0.305, 1.000); 
   -moz-transition: all .3s cubic-bezier(0.780, 0.000, 0.305, 1.000); 
     -o-transition: all .3s cubic-bezier(0.780, 0.000, 0.305, 1.000); 
        transition: all .3s cubic-bezier(0.780, 0.000, 0.305, 1.000); /* custom */

-webkit-transition-timing-function: cubic-bezier(0.780, 0.000, 0.305, 1.000); 
   -moz-transition-timing-function: cubic-bezier(0.780, 0.000, 0.305, 1.000); 
     -o-transition-timing-function: cubic-bezier(0.780, 0.000, 0.305, 1.000); 
        transition-timing-function: cubic-bezier(0.780, 0.000, 0.305, 1.000); /* custom */
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
