<template>
  <Container>
    <!-- <div class="event-list">
      <h2>Upcoming events</h2>
      <ol>
        <li>Caleb & Kelsey Wedding</li>
      </ol>
    </div> -->
    <!-- <div class="member-list">
      <h2>Member</h2>
      <ol>
        <li>Caleb & Kelsey Wedding</li>
      </ol>
    </div> -->
    <!-- <div class="route-list">
      <h2>Route List</h2>
      <ul>
        <li>Mt. Galbraith</li>
        <li>Mt Galbraith from Toad</li>
        <li>Chimney Gulch to First Road</li>
      </ul>
    </div> -->
    <AddEvent />
    <RunDescription />
  </Container>
</template>

<script>
import Vue from 'vue'
import Container from '@/UIComponents/Container'
import AddEvent from '@/components/AddEvent'
import RunDescription from '@/components/RunDescription'
import { models } from 'feathers-vuex'
export default Vue.extend({
  name: 'AdminDashboard',
  components: { Container, AddEvent, RunDescription },
  methods: {
    console() {
      console.log('Button is clicked from admin dashboard')
    }
  },
  created() {
    this.$store.state.editingEvent = new models.api.GmrEvent()
  }
})
</script>
