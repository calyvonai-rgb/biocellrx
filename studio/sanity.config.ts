import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import founder from './schema/founder'
import siteMedia from './schema/siteMedia'
import siteSettings from './schema/siteSettings'
import homePage from './schema/homePage'
import servicesPage from './schema/servicesPage'
import aboutPage from './schema/aboutPage'

export default defineConfig({
  name: 'biocellrx',
  title: 'BioCellRx',
  projectId: '16oneaei',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [founder, siteMedia, siteSettings, homePage, servicesPage, aboutPage],
  },
})
