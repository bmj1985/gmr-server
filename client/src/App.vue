<template>
  <div id="app">
    <header>
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <div class="social-icons">
        <a href="https://www.facebook.com/groups/goldenmountainrunners" target="_blank">
          <i class="fab fa-facebook-square fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/goldenmountainrunners" target="_blank">
          <i class="fab fa-instagram fa-2x"></i>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'app'
})
</script>

<style lang="scss">
@import './styles/_reset';
@import './styles/_global';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  header {
    height: 7vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $primary-0;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    z-index: 10;
  }

  main {
    height: 85vh;
    width: 100vw;
    background-image: url('./assets/goldentopo.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    router-view {
      height: 100%;
      overflow: scroll;
    }
  }

  footer {
    height: 8vh;
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
