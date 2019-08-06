// @flow
import {RenderToken} from 'fusion-core'
import {
  ApolloClientPlugin,
  ApolloClientToken,
  ApolloContextToken,
  ApolloRenderEnhancer,
  GraphQLSchemaToken,
} from 'fusion-plugin-apollo'
import App from 'fusion-react'
import {FetchToken} from 'fusion-tokens'
import unfetch from 'unfetch'

import createContext from './context'
import root from './root'
import schema from './schema'

export default () => {
  const app = new App(root)
  registerUniversalPlugins(app)
  registerServerPlugins(app)
  return app
}

function registerUniversalPlugins(app) {
  app.register(ApolloClientToken, ApolloClientPlugin)
  app.register(FetchToken, unfetch)
  app.enhance(RenderToken, ApolloRenderEnhancer)
}

function registerServerPlugins(app) {
  app.register(ApolloContextToken, createContext)
  app.register(GraphQLSchemaToken, schema)
}
