<template>
  <div class="add-event-container">
    <h2 class="title">Add Event</h2>
    <form>
      <fieldset class="event-fieldset">
        <b-field label="Title">
          <b-input placeholder="Event title" v-model="title"></b-input>
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
              v-model="editingEvent.trailhead"
            >
              <option
                v-for="trailhead in trailheads"
                :value="trailhead"
                :key="trailhead.name"
              >
                {{ trailhead.name }}
              </option>
            </b-select>
            <button class="button">Add Trailhead</button>
          </div>
        </b-field>
        <b-field label="Description">
          <TextEditor />
        </b-field>
        <b-field label="Run Route Link">
          <b-input
            placeholder="Run link"
            v-model="editingEvent.runRouteLink"
          ></b-input>
        </b-field>
      </fieldset>
      <button type="submit" @click.prevent="onSubmit(editingEvent)">
        Add Event
      </button>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import { models } from 'feathers-vuex'
import TextEditor from './TextEditor'
import { format } from 'date-fns'
import { mapActions } from 'vuex'
export default Vue.extend({
  name: 'AddEvent',
  components: { TextEditor },
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
        name: 'Matthews/Winters',
        address: '1103 County Highway 93 Golden, CO 80401'
      }
    ],
    rawEventDetails: '',
    showWeekNumber: false,
    formatAmPm: true,
    enableSeconds: false
  }),
  computed: {
    editingEvent() {
      return this.$store.state.editingEvent
    },
    title: {
      get() {
        return this.editingEvent && this.editingEvent.title
      },
      set(newVal) {
        this.editingEvent.title = newVal
      }
    },
    date: {
      get() {
        return this.editingEvent && this.editingEvent.date
      },
      set(newVal) {
        this.editingEvent.date = newVal
      }
    },
    details: {
      get() {
        return this.editingEvent && this.editingEvent.details
      },
      set(newVal) {
        this.editingEvent.details = newVal
      }
    },
    link: {
      get() {
        return this.editingEvent && this.editingEvent.runRouteLink
      },
      set(newVal) {
        this.editingEvent.runRouteLink = newVal
      }
    },
    time() {
      const eventTime = format(this.editingEvent.date, 'h:mma')
      return eventTime
    },
    format() {
      return this.formatAmPm ? '12' : '24'
    }
  },
  methods: {
    ...mapActions('gmr-events', {
      createEvent: 'create'
    }),
    onSubmit(event) {
      this.createEvent(event).catch(err => console.log(err))
    },
    setEditingEventTitle() {
      if (!this.$store.state.editingEvent) {
        this.$store.state.editingEvent = new models.api.GmrEvent()
      }
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
.trailhead-wrapper {
  flex-direction: column;
}
.trailhead-content {
  flex-direction: row;
}
.add-event-container {
  flex: 1;
  overflow: scroll;
  align-self: flex-start;
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
}

.event-fieldset {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
}
.input-wrapper {
  margin-top: 2rem;
  height: 45px;
  width: 90%;
  display: flex;
  align-items: center;
  color: black;
  position: relative;
  border: solid 1px rgb(166, 166, 166);
  font-size: 14px;
  line-height: 1.3em;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-font-smoothing: subpixel-antialiased;
  @media screen and (max-width: 481px) {
    margin-top: 10%;
  }
  :focus-within {
    border: solid 1px green;
  }
  input {
    min-width: 150px;
    outline: none;
    border: 1px transparent solid;
    display: block;
    word-break: normal;
    font: inherit;
    margin: 0px;
    left: 0;
    background: transparent;
    line-height: 2rem;
    cursor: text;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    -webkit-writing-mode: horizontal-tb !important;
    -webkit-box-direction: normal;
    font-size: 1.5rem;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 0.25rem;
    width: 100%;
    color: black;
    :focus {
      cursor: text;
    }
    ::placeholder {
      color: grey;
    }
  }
  label {
    font-size: 1rem;
    font-weight: normal;
    position: absolute;
    top: -25px;
    left: -2%;
    transform: none;
    opacity: 1;
    padding: 0 2%;
    z-index: 1;
    user-select: none;
    pointer-events: none;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-sizing: border-box;
    text-align: left;
    cursor: default;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}

textarea {
  height: 500px;
  width: 400px;
}
.details-container {
  margin-top: 2rem;
  width: 90%;
  display: flex;
  align-items: center;
  color: black;
  position: relative;
  border: solid 1px rgb(166, 166, 166);
  font-size: 14px;
  line-height: 1.3em;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-font-smoothing: subpixel-antialiased;
  text-align: left;
  label {
    font-size: 1rem;
    font-weight: normal;
    position: absolute;
    top: -25px;
    left: -2%;
    transform: none;
    opacity: 1;
    padding: 0 2%;
    z-index: 1;
    user-select: none;
    pointer-events: none;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-sizing: border-box;
    text-align: left;
    cursor: default;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}
</style>
