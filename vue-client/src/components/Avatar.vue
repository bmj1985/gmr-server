<template>
  <figure class="image is-48x48">
    <img class="is-rounded" :src="profilePicture" style="margin:0.1rem;" />
  </figure>
</template>

<script>
export default {
  name: 'Avatar',
  computed: {
    profilePicture() {
      return this.$store.state.auth.user.profilePicture
    }
  }
}
</script>

<style>
</style>