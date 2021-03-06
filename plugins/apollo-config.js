import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory'
import possibleTypes from './../possibleTypes.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: possibleTypes,
})

export default function ({ $config: { apiBaseUrl, apiToken } }) {
  return {
    httpEndpoint: apiBaseUrl,
    getAuth: () => `Bearer ${apiToken}`,
    tokenName: 'apollo-token',
    cache: new InMemoryCache({
      fragmentMatcher,
    }),
  }
}
