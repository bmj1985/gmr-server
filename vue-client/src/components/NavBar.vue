<template>
  <b-navbar class="is-primary">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="../assets/gmr_logo.png"
          alt="GMR Logo"
          class="image is-28x28"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-dropdown label="Menu">
        <router-link to="/admindashboard" class="navbar-item" v-if="isAdmin">
          Admin Dashboard
        </router-link>
        <router-link to="/admindashboard" class="navbar-item" v-if="isUser">
          Dashboard
        </router-link>
      </b-navbar-dropdown>
    </template>
    <template slot="end">
      <div v-if="!isUser">
        <LoginSignUpNav />
      </div>
      <div v-else>
        <Logout />
      </div>
    </template>
  </b-navbar>
</template>

<script>
import Vue from 'vue'
import LoginSignUpNav from './LoginSignUpNav'
import Logout from './Logout'
export default Vue.extend({
  name: 'NavBar',
  components: { LoginSignUpNav, Logout },
  computed: {
    isUser() {
      return (
        this.$store.state.auth &&
        this.$store.state.auth.user &&
        this.$store.state.auth.user._id &&
        this.$store.state.auth.user._id.length > 0
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
    }
  }
})
</script>

<style scoped lang="scss">
@import '../styles/_global';
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
.navbar {
  align-items: center;
}
</style>
