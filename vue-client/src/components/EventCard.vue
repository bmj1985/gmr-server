<template>
  <div class="card " :class="{ isAdmin: isAdmin }">
    <header class="card-header">
      <p class="c">
        {{ formattedDate }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <RunDescription :gmrEvent="gmrEvent" />
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
import RunDescription from './RunDescription'
export default Vue.extend({
  name: 'EventCard',
  components: { RunDescription },
  props: { gmrEvent: { type: Object } },
  computed: {
    formattedDate() {
      return formatDate(this.gmrEvent.date)
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
    }
  }
})
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  margin: 0.25rem;
  padding: 0.25rem;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  text-align: left;

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
.address {
  text-align: center;
}
.run-link {
  margin-top: 1rem;
}
.card-footer {
  justify-self: flex-end;
}
.detail-paragraph {
  text-align: left;
}
</style>
