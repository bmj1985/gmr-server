<template>
  <div id="app">
    <NavBar class="header" />
    <main>
      <router-view></router-view>
    </main>
    <footer id="footer">
      <div class="social-icons">
        <a
          href="https://www.facebook.com/groups/goldenmountainrunners"
          target="_blank"
        >
          <i class="fab fa-facebook-square fa-2x" />
        </a>
        <a
          href="https://www.instagram.com/goldenmountainrunners"
          target="_blank"
        >
          <i class="fab fa-instagram fa-2x" />
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import NavBar from '@/components/NavBar'

export default Vue.extend({
  name: 'app',
  components: { NavBar },
  computed: {
    // The user is automatically set by the feathers-vuex auth module upon login.
    user() {
      return this.$store.state.auth.user
    }
  },
  watch: {
    // When the user is set, redirect to the Chat page.
    // user(newVal) {
    //   if (newVal === undefined) {
    //     this.$router.replace({ name: 'Login' })
    //   } else {
    //     this.$router.replace({ name: 'Home' })
    //   }
    // }
  },
  mounted() {
    this.$store.dispatch('auth/authenticate').catch(error => {
      if (!error.message.includes('Could not find stored JWT')) {
        console.error(error)
      }
    })
  }
})
</script>

<style lang="scss">
@import './styles/_reset';
@import './styles/_global';

// Import Bulma's core
@import '~bulma/sass/utilities/_all';

// Set your colors
$primary: #6cace4;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);
$gmr-blue: #6cace4;
$gmr-grey: #53565a;
$gmr-grey-invert: findColorInvert($gmr-grey);
$primary-0: #6cabe4;
$primary-1: #cbe4fb;
$primary-1-invert: findColorInvert($primary-1);
$primary-2: #96c6f1;
$primary-3: #4992d4;
$primary-4: #2a77bd;
$primary-4-invert: findColorInvert($primary-4);
$box-shadow-grey: rgba(0, 0, 0, 0.23);
$box-shadow-white: rgba(0, 0, 0, 0.8);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  'white': (
    $white,
    $black
  ),
  'black': (
    $black,
    $white
  ),
  'light': (
    $light,
    $light-invert
  ),
  'dark': (
    $dark,
    $dark-invert
  ),
  'primary': (
    $primary,
    $primary-invert
  ),
  'info': (
    $info,
    $info-invert
  ),
  'success': (
    $success,
    $success-invert
  ),
  'warning': (
    $warning,
    $warning-invert
  ),
  'danger': (
    $danger,
    $danger-invert
  ),
  'twitter': (
    $twitter,
    $twitter-invert
  ),
  'gmr-blue': (
    $primary,
    $primary-invert
  ),
  'gmr-grey': (
    $gmr-grey,
    $gmr-grey-invert
  ),
  'light-blue': (
    $primary-1,
    $primary-1-invert
  ),
  'dark-blue': (
    $primary-4,
    $primary-4-invert
  )
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import '~bulma';
@import '~buefy/src/scss/buefy';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  .header {
    height: 6vh;
  }

  main {
    height: 89vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('./assets/goldentopo.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    router-view {
      height: 100%;
      overflow: scroll;
    }
  }

  #footer {
    height: 5vh;
    width: 100vw;
    background: $primary-0;
    box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.19), 0 -6px 6px rgba(0, 0, 0, 0.23);
    z-index: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .slack-invite {
      display: flex;
      align-self: flex-start;
      justify-self: flex-start;
      margin: 1rem;
    }
    .social-icons {
      display: flex;
      a {
        text-decoration: none;
        i {
          margin: 1rem;
          color: $gmr-grey;
        }
      }
    }
  }
}
</style>
