<template>
  <Container>
    <AddEvent />
    <RunDescription :event="editingEvent" v-if="windowWidth > 450" />
  </Container>
</template>

<script>
import Vue from 'vue'
import Container from '@/UIComponents/Container'
import AddEvent from '@/components/AddEvent'
import RunDescription from '@/components/RunDescription'
import { models } from 'feathers-vuex'
export default Vue.extend({
  name: 'AddEventWithPreview',
  components: { Container, AddEvent, RunDescription },
  created() {
    this.$store.state.editingEvent = new models.api.GmrEvent()
  },
  computed: {
    editingEvent() {
      return this.$store.state.editingEvent
    },
    windowWidth() {
      return window.innerWidth
    }
  }
})
</script>
