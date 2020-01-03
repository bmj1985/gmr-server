<template>
  <Container>
    <div class="photo-container"></div>
    <div class="text-container">
      <WelcomeToGmr :gmrEvent="nextGmrEvent" />
      <RunDescription :gmrEvent="nextGmrEvent" />
    </div>
  </Container>
</template>

<script>
import Vue from 'vue'
import RunDescription from '../components/RunDescription'
import WelcomeToGmr from '../components/WelcomeToGmr'
import Container from '@/UIComponents/Container'
// import { mapActions } from 'vuex'
// import { nextTuesday } from '../utils'
// import { closestTo, isEqual, isFuture } from 'date-fns'
// import { models } from 'feathers-vuex'

export default Vue.extend({
  name: 'Home',
  components: { RunDescription, Container, WelcomeToGmr },
  data: () => ({ nextGmrEvent: {} }),
  // created() {
  //   this.findEvents({
  //     query: {
  //       $sort: { createdAt: -1 },
  //       $limit: 25
  //     }
  //   })
  //     .then(res => {
  //       const runDate = closestTo(
  //         nextTuesday(),
  //         res.data.map(data => data.date)
  //       )
  //       if (
  //         res.data.filter(
  //           gmrEvent =>
  //             isEqual(gmrEvent.date, runDate) && isFuture(gmrEvent.date)
  //         ).length > 0
  //       ) {
  //         this.nextGmrEvent = res.data.filter(
  //           gmrEvent =>
  //             isEqual(gmrEvent.date, runDate) && isFuture(gmrEvent.date)
  //         )[0]
  //       } else this.nextGmrEvent = new models.api.GmrEvent()
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       if (err.code === 408 || err.code === 500) {
  //         console.log('Something is wrong with our server.')
  //       }
  //     })
  // },
  // methods: {
  //   ...mapActions('gmrEvents', {
  //     findEvents: 'find'
  //   })
  // }
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
.text-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  margin: 2rem;
  overflow: scroll;
}
</style>
