<template>
  <b-navbar class="is-primary">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="../assets/gmr_logo.png" alt="GMR Logo" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-dropdown label="Menu">
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <template slot="end">
      <div v-if="!isUser">
        <Login />
      </div>
      <div v-else>
        <Logout />
      </div>
    </template>
  </b-navbar>
</template>

<script>
import Vue from 'vue'
import Login from './Login'
import Logout from './Logout'
export default Vue.extend({
  name: 'NavBar',
  components: { Login, Logout },
  computed: {
    isUser() {
      return (
        this.$store.state.auth &&
        this.$store.state.auth.user &&
        this.$store.state.auth.user._id &&
        this.$store.state.auth.user._id.length > 0
      )
    }
  }
})
</script>

<style scoped>
.navbar {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var($primary-0);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.login-button {
  width: 100%;
  min-width: 83px;
}

.modal-card-foot {
  flex-direction: column;
}
#google-sign-in-image {
  max-height: 3rem;
}
</style>
