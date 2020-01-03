<template>
  <div>
    <div v-for="upcomingGmrEvent in upcomingGmrEvents" :key="upcomingGmrEvent._id">{{upcomingGmrEvent.name}}</div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  name: 'FindEvents',
  computed: {
    ...mapState('gmrEvents', { areGmrEventsLoading: 'isFindPending' }),
    ...mapGetters('gmrEvents', { findGmrEventsInStore: 'find' } ),
    // Query for future appointments
    queryUpcoming() {
      return { date: { $gt: new Date() }}
    },
    // Query for past appointments
    queryPast() {
      return { date: { $lt: new Date() }}
    },
    // The list of upcoming appointments.
    upcomingGmrEvents () {
      return this.findGmrEventsInStore({ query: this.queryUpcoming }).data
    },
    // The list of past appointments
    pastGmrEvents () {
      console.log('pastGmrEvents', this.queryPast)
      return this.findGmrEventsInStore({ query: this.queryPast }).data
    }
  },
  methods: {
    ...mapActions('gmrEvents', { findGmrEvents: 'find' })
  },
  created () {
    // Find all appointments. We'll use the getters to separate them.
    this.findGmrEvents({
      query: {}
    })
  }
})
</script>