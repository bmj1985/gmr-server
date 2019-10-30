<template>
  <div class="level">
    <b-navbar-item tag="div">
      <a class="button is-light-blue login-button">
        <strong>Sign up</strong>
      </a>
    </b-navbar-item>
    <b-navbar-item tag="div">
      <b-dropdown position="is-bottom-left" aria-role="menu" trap-focus>
        <a slot="trigger" role="button">
          <span class="button is-dark-blue login-button">Login</span>
        </a>
        <b-dropdown-item
          aria-role="menu-item"
          :focusable="false"
          custom
          paddingless
        >
          <form action="">
            <div class="modal-card" style="width:300px;">
              <section class="modal-card-header">
                <div>
                  <a :href="API_URL">
                    <img
                      id="google-sign-in-image"
                      src="../assets/googleassets/2x/btn_google_signin_dark_focus_web@2x.png"
                    />
                  </a>
                </div>
              </section>
              <p>OR</p>
              <section class="modal-card-body">
                <form
                  class="form"
                  method="post"
                  @submit.prevent="onSubmit(email, password)"
                >
                  <b-field label="Email">
                    <b-input
                      type="email"
                      placeholder="Your email"
                      required
                      class="block"
                      name="email"
                      v-model="user.email"
                    >
                    </b-input>
                  </b-field>

                  <b-field label="Password">
                    <b-input
                      type="password"
                      password-reveal
                      placeholder="Your password"
                      required
                      class="block"
                      name="password"
                      v-model="user.password"
                    >
                    </b-input>
                  </b-field>

                  <b-checkbox>Remember me</b-checkbox>
                </form>
              </section>
              <footer class="modal-card-foot">
                <button class="button is-dark-blue login-button" type="submit">
                  <p>
                    Login
                  </p>
                </button>
              </footer>
            </div>
          </form>
        </b-dropdown-item>
      </b-dropdown>
    </b-navbar-item>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import API_URL from '@/API_URL.js'
export default Vue.extend({
  name: 'Login',
  data: () => ({
    valid: false,
    user: {
      username: '',
      password: '',
      email: ''
    },
    API_URL: `${API_URL}/oauth/google`
  }),
  computed: {
    ...mapState('auth', { loading: 'isAuthenticatePending' })
  },
  methods: {
    ...mapActions('auth', ['authenticate']),
    onSubmit(email, password) {
      this.authenticate({ strategy: 'local', email, password })
        // Just use the returned error instead of mapping it from the store.
        .catch(error => {
          // Convert the error to a plain object and add a message.
          let type = error.className
          error = Object.assign({}, error)
          error.message =
            type === 'not-authenticated'
              ? 'Incorrect email or password.'
              : 'An error prevented login.'
          this.error = error
        })
    }
  }
})
</script>

<style scoped>
.login-button {
  min-width: 83px;
}
</style>
