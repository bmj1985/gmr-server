<template>
  <div class="card " :class="{ isAdmin: isAdmin }">
    <header class="card-header">
      <p class="c">
        {{ formattedDate }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <p class="title">
          {{ runEvent.title }}
        </p>
        <p>{{ runEvent.trailhead.address }}</p>
        <!-- <span v-html="runEvent.details"></span> -->
        <ProseMirrorJSONToTemplate :content="runEvent.details" />
        <!-- <p
          v-for="(paragraph, i) in paragraphs"
          :key="i"
          class="detail-paragraph"
        >
          {{ paragraph }}
        </p> -->
        <a :href="runEvent.runRouteLink" target="_blank">{{
          runEvent.runRouteLink
        }}</a>
      </div>
    </div>
    <footer class="card-footer" v-if="isAdmin">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { formatDate } from '../utils'
import ProseMirrorJSONToTemplate from './ProseMirrorJSONToTemplate/ProseMirrorJSONToTemplate'
export default Vue.extend({
  name: 'EventCard',
  props: { runEvent: { type: Object } },
  components: { ProseMirrorJSONToTemplate },
  computed: {
    formattedDate() {
      return formatDate(this.runEvent.date)
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
    paragraphs() {
      console.log('Details:', this.runEvent.details)
      return this.runEvent.details.content
    }
  }
})
</script>

<style scoped lang="scss">
.card {
  width: 400px;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  &.isAdmin {
    justify-content: space-between;
  }
}
.card-header {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  text-align: center;
  padding: 0.5rem;
}
.card-content {
  padding: 0.5rem;
  margin: 0.5rem;
}
.title {
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
}
.card-footer {
  justify-self: flex-end;
}
.detail-paragraph {
  text-align: left;
}
</style>
