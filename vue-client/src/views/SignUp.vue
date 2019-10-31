<template>
  <div class="description-container">
    <div class="logo-container">
      <img
        src="../assets/gmr_logo.png"
        alt="GMR Logo"
        class="image is-square"
      />
    </div>
    <div class="form-container">
      <div class="wrapper">
        <section>
          <GoogleSignInButton />
        </section>
        <p id="or">OR</p>
        <p class="sign-up-text">Sign Up With Email and Password</p>
        <section>
          <form
            class="form"
            method="post"
            @submit.prevent="onSubmit(email, password)"
          >
            <fieldset>
              <b-field
                label="Email"
                :labelPosition="labelPosition"
                :type="emailType"
                :message="emailMessage"
              >
                <b-input
                  type="email"
                  placeholder="Your email"
                  required
                  class="block"
                  name="email"
                  v-model="email"
                >
                </b-input>
              </b-field>

              <b-field
                label="Password"
                :labelPosition="labelPosition"
                :type="passwordType"
                :message="passwordMessage"
              >
                <b-input
                  type="password"
                  password-reveal
                  placeholder="Your password"
                  required
                  class="block"
                  name="password"
                  v-model="password"
                >
                </b-input>
              </b-field>
              <b-field
                label="Confirm Password"
                :labelPosition="labelPosition"
                :message="confirmPasswordMessage"
                :type="confirmPasswordType"
              >
                <b-input
                  type="password"
                  password-reveal
                  placeholder="Confirm your password"
                  required
                  class="block"
                  name="password"
                  v-model="confirmPassword"
                >
                </b-input>
              </b-field>
              <footer>
                <button class="button is-dark-blue signup-button" type="submit">
                  <p>
                    Sign Up
                  </p>
                </button>
              </footer>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import GoogleSignInButton from '@/components/GoogleSignInButton'
import { mapActions, mapMutations } from 'vuex'
import { emailIsValid, passwordIsValid } from '@/utils.js'
export default Vue.extend({
  name: 'SignUp',
  components: { GoogleSignInButton },
  data: () => ({
    valid: false,
    password: '',
    email: '',
    confirmPassword: ''
  }),
  computed: {
    isSignUpPage() {
      return this.$route.name === 'SignUp'
    },
    labelPosition() {
      if (window.innerWidth < 500) {
        return 'on-border'
      }
      return null
    },
    isPasswordMatch() {
      return this.password === this.confirmPassword
    },
    emailMessage() {
      if (this.email.length === 0) {
        return null
      }
      if (emailIsValid(this.email)) {
        return null
      }
      return 'Please enter a valid email.'
    },
    emailType() {
      if (this.email.length === 0) {
        return null
      }
      if (emailIsValid(this.email)) {
        return null
      }
      return 'is-danger'
    },
    passwordMessage() {
      // A valid password has at least one uppercase, one lowercase, one digit, one special charachter, and is at least 8 characters long
      if (this.password.length === 0) {
        return null
      }
      if (passwordIsValid(this.password)) {
        return null
      }
      return 'Please enter a valid password.'
    },
    passwordType() {
      if (this.password.length === 0) {
        return null
      }
      if (passwordIsValid(this.password)) {
        return null
      }
      return 'is-danger'
    },
    confirmPasswordMessage() {
      // A valid password has at least one uppercase, one lowercase, one digit, one special charachter, and is at least 8 characters long
      if (this.password.length === 0) {
        return null
      }
      if (this.confirmPassword === this.password) {
        return null
      }
      return 'Passwords do not match.'
    },
    confirmPasswordType() {
      if (this.confirmPassword.length === 0) {
        return null
      }
      if (this.confirmPassword === this.password) {
        return null
      }
      return 'is-danger'
    }
  },
  methods: {
    dismissError() {
      this.error = undefined
      this.clearCreateError()
    },
    onSubmit(email, password) {
      debugger
      this.dismissError()

      // Automatically log the user in after successful signup.
      this.createUser({ email, password })
        .then(response =>
          this.authenticate({ strategy: 'local', email, password })
        )
        // Just use the returned error instead of mapping it from the store.
        .catch(error => {
          // Convert the error to a plain object and add a message.
          let type = error.errorType
          error = Object.assign({}, error)
          error.message =
            type === 'uniqueViolated'
              ? 'That email address is unavailable.'
              : 'An error prevented signup.'
          this.error = error
        })
    },
    ...mapActions('users', {
      createUser: 'create'
    }),
    ...mapMutations('users', {
      clearCreateError: 'clearCreateError'
    }),
    ...mapActions('auth', ['authenticate'])
  }
})
</script>

<style scoped lang="scss">
.description-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background: white;
  border-radius: 10px;
  padding: 5rem;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  // text-shadow: 0 2px 4px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  width: 95%;
  height: 95%;
  overflow: scroll;
  @media only screen and (max-width: 760px) {
    height: 100%;
    width: 100%;
    border-radius: 0;
  }
  /* margin: 1rem; */

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: contain;
      padding: 2rem;
      max-height: 30rem;
      @media only screen and (max-width: 450px) {
        height: 15rem;
      }
    }
  }
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25rem;
    text-align: left;
    .wrapper {
      width: 100%;
      @media only screen and (max-width: 450px) {
        width: 80vw;
      }
    }
  }

  .field {
    /* padding-bottom: 0.25rem; */
  }

  a {
    text-decoration: none;
    color: #365899;
  }
  @media only screen and (max-width: 760px) {
    flex-direction: column;
  }
  #or {
    text-align: center;
    padding-top: 1rem;
  }
  .sign-up-text {
    text-align: center;
    padding: 1rem;
  }
  .signup-button {
    width: 100%;
  }
  footer {
    padding-top: 1rem;
  }
}
</style>
