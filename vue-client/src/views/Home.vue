<template>
  <Container>
    <div class="photo-container"></div>
    <RunDescription />
  </Container>
</template>

<script>
import Vue from 'vue'
import RunDescription from '../components/RunDescription'
import Container from '@/UIComponents/Container'

export default Vue.extend({
  name: 'Home',
  components: { RunDescription, Container }
})
</script>

<style scoped lang="scss">
.photo-container {
  flex: 1;
  height: 100%;
  background-image: url('../assets/northtable.png');
  background-repeat: no-repeat;
  background-size: contain;
  @media only screen and (max-width: 760px) {
    display: none;
  }
  @media only screen and (max-width: 600px) {
    img {
      max-width: calc(570px - 2rem);
      max-height: calc(570px - 2rem);
    }
  }
  @media only screen and (max-width: 760px) {
    img {
      max-width: calc(730px - 2rem);
      max-height: calc(730px - 2rem);
    }
  }
}
</style>
