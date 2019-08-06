// @flow
import gql from 'fraql'
import React from 'react'
import {Query} from 'react-apollo'

const Root = () => (
  <Query query={Root.query} skip={__NODE__}>
    {({data, loading, error}) => (
      <pre suppressHydrationWarning>{JSON.stringify({data, loading, error}, null, 2)}</pre>
    )}
  </Query>
)

Root.query = gql`
  query {
    foo
  }
`

export default <Root />
