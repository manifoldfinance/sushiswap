const synpressPlugins = require('@synthetixio/synpress/plugins')

/** @type {Cypress.PluginConfig} */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  console.log('test')
  synpressPlugins(on, config)
}
