import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {structureTool} from 'sanity/structure'
import {user} from './schemaTypes/user'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import { products } from './schemaTypes/productos'
import { category } from './schemaTypes/categories'
import { informacionGeneral } from './schemaTypes/informacion_general'
import { subCategory } from './schemaTypes/sub_category'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'pymejecafetero',

  projectId: 'uh6mvxf6',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: [...user,...products,...category,...informacionGeneral,...subCategory]
  },
})

