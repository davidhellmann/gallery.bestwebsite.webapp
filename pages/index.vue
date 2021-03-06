<template>
  <SectionEl>
    <div class="container mt-24">
      <BlockSiteSummary :entry="entries[0] || null"></BlockSiteSummary>
    </div>
  </SectionEl>
</template>

<script>
import websites from '../graphql/entries.gql'
import heevImages from '../graphql/heevImages.gql'
import BlockSiteSummary from '~/components/Block/BlockSiteSummary'
import SectionEl from '~/components/Section/SectionEl'

export default {
  components: {
    SectionEl,
    BlockSiteSummary,
  },
  data() {
    return {
      searchResults: [],
    }
  },
  apollo: {
    entries: {
      query: websites,
      variables: {
        section: 'websites',
        limit: 7,
        queryCategories: true,
        queryPreviewScreenshot: true,
      },
    },
    assets: {
      query: heevImages,
      variables: {
        title: [
          'Heev Bestwebsite Banner Desktop',
          'Heev Bestwebsite Banner Mobile',
        ],
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
