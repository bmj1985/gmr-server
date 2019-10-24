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
      <b-navbar-item tag="div">
        <a class="button is-light-blue">
          <strong>Sign up</strong>
        </a>
      </b-navbar-item>
      <b-navbar-item tag="div">
        <b-dropdown position="is-bottom-left" aria-role="menu" trap-focus>
          <a class="navbar-item" slot="trigger" role="button">
            <span class="button is-dark-blue">Login</span>
          </a>
          <b-dropdown-item
            aria-role="menu-item"
            :focusable="false"
            custom
            paddingless
          >
            <form action="">
              <div class="modal-card" style="width:300px;">
                <section class="modal-card-body">
                  <b-field label="Email">
                    <b-input type="email" placeholder="Your email" required>
                    </b-input>
                  </b-field>

                  <b-field label="Password">
                    <b-input
                      type="password"
                      password-reveal
                      placeholder="Your password"
                      required
                    >
                    </b-input>
                  </b-field>

                  <b-checkbox>Remember me</b-checkbox>
                </section>
                <footer class="modal-card-foot">
                  <button class="button is-dark-blue login-button">
                    Login
                  </button>
                </footer>
              </div>
            </form>
          </b-dropdown-item>
        </b-dropdown>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'NavBar'
})
</script>

<style scoped>
.navbar {
  /* height: 7vh; */
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $primary-0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.login-button {
  width: 100%;
}
</style>

