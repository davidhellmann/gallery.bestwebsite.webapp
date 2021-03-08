<template>
  <SectionEl>
    <div class="container mt-24">
      <BlockSiteSummary :entry="entries[0] || null"></BlockSiteSummary>
    </div>
  </SectionEl>
</template>

<script>
import websites from '../graphql/entries.websites.gql'
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
        limit: 7,
        queryCategories: true,
        queryPreviewScreenshot: true,
        queryStarratings: true,
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
.nuxt-link-exact-active {
  color: red;
}
</style>
