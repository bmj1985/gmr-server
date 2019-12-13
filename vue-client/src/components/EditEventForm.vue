<template>
  <form>
    <fieldset class="event-fieldset">
      <b-field label="Title">
        <b-input placeholder="Event title" v-model="gmrEvent.title"></b-input>
      </b-field>
      <b-field label="Select day and time">
        <b-datetimepicker
          rounded
          placeholder="Click to select..."
          icon="calendar-today"
          :datepicker="{ showWeekNumber }"
          :timepicker="{ enableSeconds, hourFormat: format }"
          v-model="date"
        >
        </b-datetimepicker>
      </b-field>
      <b-field label="Trailhead" class="trailhead-wrapper">
        <div class="trailhead-content">
          <b-select
            placeholder="Select a trailhead"
            v-model="gmrEvent.trailhead"
          >
            <option
              v-for="trailhead in trailheads"
              :value="trailhead"
              :key="trailhead.name"
            >
              {{ trailhead.name }}
            </option>
          </b-select>
          <button class="button">Update Trailhead</button>
        </div>
      </b-field>
      <b-field label="Description">
        <Tiptap />
      </b-field>
      <b-field label="Run Route Link">
        <b-input
          placeholder="Run link"
          v-model="gmrEvent.runRouteLink"
        ></b-input>
      </b-field>
    </fieldset>
    <button type="submit" @click.prevent="onSubmit(gmrEvent)">
      Edit Event
    </button>
  </form>
</template>

<script>
import Vue from 'vue'
import Tiptap from './Tiptap'
import { parse } from 'date-fns'
import { mapActions } from 'vuex'
export default Vue.extend({
  name: 'EditEventForm',
  components: { Tiptap },
  props: {
    gmrEvent: { type: Object }
  },
  data: () => ({
    trailheads: [
      {
        name: 'Green Mountain/Rooney',
        address: '1000 S. Rooney Road, Lakewood, CO 80228'
      },
      {
        name: 'Mountain Toad',
        address: '900 Washington Ave, Golden, CO 80401',
        coordinates: [39.758076, -105.224173]
      },
      {
        name: 'Matthews / Winters Park Trailhead',
        address: '1103 County Highway 93 Golden, CO 80401'
      },
      {
        name: 'Golden City Brewery',
        address: '920 12th St, Golden, CO 80401'
      }
    ],
    showWeekNumber: false,
    formatAmPm: true,
    enableSeconds: false
  }),
  computed: {
    date: {
      get() {
        return parse(this.gmrEvent && this.gmrEvent.date)
      },
      set(newVal) {
        this.gmrEvent.date = newVal
      }
    },
    format() {
      return this.formatAmPm ? '12' : '24'
    }
  },
  methods: {
    ...mapActions('gmr-events', {
      updateEvent: 'update'
    }),
    onSubmit(event) {
      console.log(this && this.$store && this.$store.state)
      this.updateEvent(event).catch(err => console.log(err))
    },
    setEditingEventTitle() {
      this.$store.state.editingEvent.title = this.event.title
    },
    setEditingEventTime() {
      this.editingEvent.time = this.time
    },
    addEvent() {
      this.setEditingEventTime()
      console.log(this.editingEvent)
    }
  }
})
</script>
<style scoped lang="scss">
form {
  padding: 1.5rem;
}
* {
  background: white;
}
</style>
