<template>
  <component :is="component" :data="data" v-if="component" />
</template>
<script>
export default {
  name: 'dynamic-link',
  props: ['data', 'type'],
  data() {
    return {
      component: null
    }
  },
  computed: {
    loader() {
      if (!this.type) {
        return null
      }
      return () => import(`templates/${this.type}`)
    }
  },
  mounted() {
    this.loader()
      .then(() => {
        this.component = () => this.loader()
      })
      .catch(() => {
        this.component = () => import('templates/default')
      })
  }
}
</script>
