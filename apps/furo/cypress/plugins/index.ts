// eslint-disable-next-line
// @ts-ignore
import synpressPlugins from '@synthetixio/synpress/plugins'

const plugins: Cypress.PluginConfig = (on, config) => {
  synpressPlugins(on, config)
}

export default plugins
