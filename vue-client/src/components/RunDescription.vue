<template>
  <div class="text-container">
    <div class="welcome">
      <h3>Welcome to</h3>
      <img class="logo is-96x96" alt="GMR logo" src="../assets/gmr_logo.png" />
      <p class="next-run">Our next run will be:</p>
      <h2 class="date">
        {{ isAdminDashboard ? editingEventDate : nextEventDate }}
      </h2>
    </div>
    <div v-if="isAdminDashboard" class="run-description">
      <h2 class="title">{{ editingEvent.title }}</h2>
      <div class="run-details">
        <span v-html="editingEvent.details" class="rawHtml"></span>
      </div>
      <div class="route">
        <p>
          Link to route:
          <a :href="link" target="_blank">{{ link }}</a>
        </p>
      </div>
    </div>
    <div v-if="nextEvent.details" class="run-description">
      <h2 class="title">{{ nextEvent.title }}</h2>
      <div class="run-details">
        <span v-html="nextEvent.details" class="rawHtml"></span>
      </div>
      <p class="route">
        Link to route:
        <a :href="link" target="_blank">{{ nextEvent.link }}</a>
      </p>
    </div>
    <div
      v-if="!isAdminDashboard && !nextEvent.details"
      :class="{ pending: pendingRunDetails }"
    >
      {{ pendingRunDetails }}
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { models } from 'feathers-vuex'
import { format } from 'date-fns'

export default Vue.extend({
  name: 'RunDescription',
  data() {
    return {
      events: [],
      pendingRunDetails:
        'Runs are usually posted between Thursday an Monday prior.'
    }
  },
  computed: {
    nextEvent() {
      if (this.events.length > 0) {
        return this.events[0]
      }
      return new models.api.GmrEvent()
    },
    nextEventDate() {
      return format(this.nextEvent.date, 'dddd MMMM Do, YYYY h:mm aa')
    },
    editingEvent() {
      return this.$store.state.editingEvent
    },
    editingEventDate() {
      return format(
        this.$store.state.editingEvent.date,
        'dddd MMMM Do, YYYY h:mm aa'
      )
    },
    link() {
      return (
        this.$store &&
        this.$store.state &&
        this.$store.state.editingEvent &&
        this.$store.state.editingEvent.link
      )
    },
    isAdmin() {
      const admin =
        this.$store.state.auth &&
        this.$store.state.auth.user &&
        this.$store.state.auth.user.permissions.find(v => v === 'admin')
      if (admin === 'admin') {
        return true
      }
      return false
    },
    isAdminDashboard() {
      return this.$route.path === '/admindashboard'
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
    &.pending {
      text-align: center;
    }
    text-align: justify;
    font-size: 1.25rem;
    box-shadow: 0;
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
