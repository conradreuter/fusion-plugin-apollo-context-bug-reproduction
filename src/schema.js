// @flow
import gql from 'fraql'
import {makeExecutableSchema} from 'graphql-tools'

const schema = makeExecutableSchema({
  resolvers: {
    Query: {
      foo: () => 'bar',
    },
  },
  typeDefs: gql`
    type Query {
      foo: String
    }
  `,
})

export default schema
