import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory'
import possibleTypes from './../possibleTypes.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: possibleTypes,
})

export default function ({ $config: { apiUrl } }) {
  return {
    httpEndpoint: apiUrl,
    getAuth: () => 'Bearer UfZVKdBbtqGmlidg9M8aiSU37yzyzEnf',
    tokenName: 'apollo-token',
    cache: new InMemoryCache({
      fragmentMatcher,
    }),
  }
}
