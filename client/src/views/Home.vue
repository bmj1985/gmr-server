<template>
  <div class="home">
    <RunDescription />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RunDescription from '@/components/RunDescription.vue'

export default Vue.extend({
  name: 'home',
  components: { RunDescription }
})
</script>

<style lang="scss" scoped>
@import '../styles/_global';
.home {
  overflow: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .description-container {
    width: 95%;
    height: 95%;
    margin: 1rem;
  }
}
</style>
