<template>
  <div class="text-container" :class="{ isPendingEvent: isPendingEvent }">
    <div class="welcome">
      <h3>Welcome to</h3>
      <img class="logo is-96x96" alt="GMR logo" src="../assets/gmr_logo.png" />
      <p class="next-run">Our next run will be:</p>
      <h2 class="date">
        {{ eventDate }}
      </h2>
    </div>
    <div v-if="!isPendingEvent" class="run-description">
      <h2 class="title">{{ event.title }}</h2>
      <h3 class="trailhead-address">
        {{ event.trailhead && event.trailhead.address }}
      </h3>
      <div class="run-details">
        <span v-html="event.details" class="rawHtml"></span>
      </div>
      <div class="route">
        <p>
          Link to route:
          <a :href="event.runRouteLink" target="_blank">{{
            event.runRouteLink
          }}</a>
        </p>
      </div>
    </div>
    <div v-if="isPendingEvent" :class="{ pending: pendingRunDetails }">
      {{ pendingRunDetails }}
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { formatDate } from '../utils'

export default Vue.extend({
  name: 'RunDescription',
  props: { event },
  data() {
    return {
      pendingRunDetails:
        'Details coming soon! Runs are usually posted between the Thursday and Monday prior.'
    }
  },
  computed: {
    eventDate() {
      return formatDate(this.event.date)
    },
    isPendingEvent() {
      return this.event && !this.event.details && !this.event.title
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.rawHtml {
  font-size: 1.25rem;
  font-family: inherit;
  line-height: 1.2;
}

a {
  text-decoration: none;
  color: #365899;
}
.text-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  margin: 2rem;
  overflow: scroll;

  &.isPendingEvent {
    justify-content: flex-start;
  }
  @media only screen and (max-width: 450px) {
    margin: 0;
    justify-content: flex-start;
    align-items: space-evenly;
    line-height: 1.2;
    text-align: center;
  }
  .welcome {
    /* height: 55%; */
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    .next-run {
      padding: 0.5rem;
    }
    .date {
      padding: 0.5rem;
      padding-top: 0;
    }
    h2 {
      font-size: 2rem;
      @media only screen and (max-width: 450px) {
        font-size: 1rem;
      }
    }
    h3 {
      font-size: 1.75rem;
    }
    .logo {
      height: 10rem;
      width: 10rem;
      @media only screen and (max-width: 450px) {
        height: 7rem;
        width: 7rem;
      }
    }
  }
  .run-description {
    margin-top: 0.5rem;
    height: 45%;
    line-height: 1.1;
    h2 {
      font-size: 1.25rem;
      text-align: center;
      font-weight: 800;
    }
    p {
      margin-top: 0.75rem;
    }
    text-align: justify;
    font-size: 1.25rem;
    box-shadow: 0;
  }
  .pending {
    margin-top: 3rem;
    text-align: center;
    font-size: 1.25rem;
  }
  .trailhead-address {
    text-align: center;
    margin-bottom: 1rem;
  }
  .route {
    font-size: 1.25rem;
    color: black;
  }
  @media only screen and (max-width: 450px) {
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.25rem;
    }
    .logo {
      height: 7rem;
      width: 7rem;
    }
    .run-description {
      &.pending {
        text-align: center;
      }
      text-align: justify;
      font-size: 1.1rem;
      box-shadow: 0;
    }
    .route {
      font-size: 1rem;
    }
  }
}
</style>
