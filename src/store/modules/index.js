/**
 * Automatically imports all the modules and exports as a single module object
 */
import camelCase from 'lodash/camelCase'
const requireModule = require.context('.', false, /\.js$/)
const modules = {}

requireModule.keys().forEach(filename => {
  // Don't register this file as a Vuex module
  if (filename === './index.js') return

  const moduleName = camelCase(
    // replace the .store.js
    filename.replace(/(\.\/|\.store\.js)/g, '')
  ).replace(/^\w/, c => c.toUpperCase()) // change the first letter to caps

  modules[moduleName] = requireModule(filename).default || requireModule(filename)
})

export default modules
