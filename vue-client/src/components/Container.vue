<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
import Vue from 'vues'
export default Vue.extend({
  name: 'Container'
})
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 98%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background: white;
  border-radius: 10px;
  padding: 0.75rem;
  margin: 0;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  @media only screen and (max-width: 760px) {
    height: 100%;
    width: 100%;
    border-radius: 0;
  }
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-radius: 0;
  }
}
</style>
