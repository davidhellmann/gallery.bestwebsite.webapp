<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">davidhellmann-webapp</h1>

      <ul style="display: flex; flex-flow: row wrap">
        <li v-for="entry in entries" :key="entry.id" class="box">
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
import { defineComponent } from '@nuxtjs/composition-api'
import websites from '../graphql/entries.websites.gql'

export default defineComponent({
  apollo: {
    entries: {
      query: websites,
      variables: {
        limit: 2,
      },
    },
  },
})
</script>
