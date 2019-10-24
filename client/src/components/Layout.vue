<template class="layout">
  <NavBar class="test" />
</template>

<script>
import Vue from 'vue'
import NavBar from '@/components/NavBar.vue'
export default Vue.extend({
  name: 'Layout',
  commponents: { NavBar }
})
</script>

<style>
.layout {
  width: 100vw;
  height: 100vh;
  background: green;
}
</style>
