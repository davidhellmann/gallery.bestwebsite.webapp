const fs = require('fs')
const fetch = require('cross-fetch')
require('dotenv').config()
const fileLocationForFetchedTypes = './possibleTypes.json'
const apiUrl = process.env.API_BASE_URL + '/api'
const apiToken = process.env.GRAPHQL_TOKEN
if (apiUrl == null) throw new Error('❌ No API_URL found in .env')

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + apiToken,
  },
  body: JSON.stringify({
    variables: {},
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then((result) => result.json())
  .then((result) => {
    // here we're filtering out any type information unrelated to unions or interfaces
    result.data.__schema.types = result.data.__schema.types.filter(
      (type) => type.possibleTypes !== null
    )

    fs.writeFile(
      fileLocationForFetchedTypes,
      JSON.stringify(result.data),
      (err) => {
        if (err) {
          throw new Error('❌ Error writing possibleTypes.json', err)
        } else {
          console.log('✅ Fragment types successfully extracted!') // eslint-disable-line
        }
      }
    )
  })
