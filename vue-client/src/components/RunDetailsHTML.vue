<template>
  <span class="rawHtml" v-html="details"></span>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'RunDetailsHTML',
  props: ['details']
})
</script>

<style>
.rawHtml {
  font-size: 1.25rem;
  font-family: inherit;
  line-height: 1.2;
}
.rawHtml * {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
