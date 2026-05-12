import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import founder from './schema/founder'

export default defineConfig({
  name: 'biocellrx',
  title: 'BioCellRx',
  projectId: '16oneaei',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [founder],
  },
})
