import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_PROJECT_ID || '86exk9f3',
    dataset: process.env.SANITY_DATASET || 'production'
  }
})
