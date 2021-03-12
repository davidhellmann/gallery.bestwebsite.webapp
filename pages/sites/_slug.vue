<template>
  <SectionEl>
    <div class="container mt-24">
      <Link to="/">Back to home</Link>
      <BlockSiteSummary :entry="entry || null"></BlockSiteSummary>
    </div>
  </SectionEl>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import websites from '~/graphql/entry.websites.gql'
import BlockSiteSummary from '~/components/Block/BlockSiteSummary.vue'
import SectionEl from '~/components/Section/SectionEl.vue'
import Link from '~/components/Link/Link.vue'
export default defineComponent({
  components: {
    SectionEl,
    BlockSiteSummary,
    Link,
  },
  setup() {
    return {}
  },
  data() {
    return {
      searchResults: [],
    }
  },
  apollo: {
    entry: {
      query: websites,
      variables: {
        id: 99940,
        queryCategories: true,
        queryPreviewScreenshot: true,
        queryStarratings: true,
      },
    },
  },
})
</script>
