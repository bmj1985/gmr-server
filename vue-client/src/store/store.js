import Vue from 'vue'
import Vuex from 'vuex'
import auth from './store.auth'

Vue.use(Vuex)

const requireModule = require.context(
  // The path where the service modules live
  './services',
  // Whether to look in subfolders
  false,
  // Only include .js files (prevents duplicate imports`)
  /.js$/
)
const servicePlugins = requireModule
  .keys()
  .map(modulePath => requireModule(modulePath).default)

console.log('servicePlugins:', servicePlugins)

export default new Vuex.Store({
  state: {
    editingEvent: null
  },
  mutations: {},
  actions: {},
  plugins: [...servicePlugins, auth]
})
