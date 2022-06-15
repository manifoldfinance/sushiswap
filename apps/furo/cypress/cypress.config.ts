import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://furo-delta.vercel.app/furo',
    //baseUrl: 'http://localhost:3005/furo',
    userAgent: 'synpress',
    viewportHeight: 768,
    viewportWidth: 1366,
    chromeWebSecurity: false,
    env: {
      SECRET_WORDS: 'test test test test test test test test test test test junk',
    },
  },
})
