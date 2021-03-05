<template>
  <div class="container">
    <div>
      <Logo />
      <Button to="/" variant="primary">Home</Button>
      <Button to="/test" variant="secondary">Test</Button>
      <ul style="display: flex; flex-flow: row wrap">
        <li v-for="entry in entries" :key="entry.id" class="box bg-yellow-500">
          <h3>{{ entry.title }}</h3>
          Slug: {{ entry.slug }}<br />
          URI: {{ entry.uri }}<br />
          Post Date: {{ entry.postDate }}<br />
          Entry Type: {{ entry.typeHandle }}<br />
        </li>
      </ul>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button/Button'
import articleTeaser from '../graphql/entries.gql'

export default {
  components: {
    Button,
  },
  apollo: {
    entries: {
      query: articleTeaser,
      variables: {
        section: 'articles',
        limit: 3,
      },
    },
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.box {
  background-color: #f4f4f4;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
}

.nuxt-link-exact-active {
  color: red;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
