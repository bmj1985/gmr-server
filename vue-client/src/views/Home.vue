<template>
  <Container>
    <div class="photo-container"></div>
    <RunDescription :event="nextGmrEvent" />
  </Container>
</template>

<script>
import Vue from 'vue'
import RunDescription from '../components/RunDescription'
import Container from '@/UIComponents/Container'
import { mapActions } from 'vuex'
import { nextTuesday } from '../utils'
import { closestTo, isEqual, isFuture } from 'date-fns'
import { models } from 'feathers-vuex'

export default Vue.extend({
  name: 'Home',
  components: { RunDescription, Container },
  data: () => ({ nextGmrEvent: {} }),
  created() {
    this.findEvents({
      query: {
        $sort: { createdAt: -1 },
        $limit: 25
      }
    })
      .then(res => {
        const runDate = closestTo(
          nextTuesday(),
          res.data.map(data => data.date)
        )
        if (
          res.data.filter(
            runEvent =>
              isEqual(runEvent.date, runDate) && isFuture(runEvent.date)
          ).length > 0
        ) {
          this.nextGmrEvent = res.data.filter(
            runEvent =>
              isEqual(runEvent.date, runDate) && isFuture(runEvent.date)
          )[0]
        } else this.nextGmrEvent = new models.api.GmrEvent()
      })
      .catch(err => console.log(err))
  },
  methods: {
    ...mapActions('gmr-events', {
      findEvents: 'find'
    })
  }
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
