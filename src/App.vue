<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <transition name="fade" mode="out-in">
    <RouterView/>
  </transition>
  
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
