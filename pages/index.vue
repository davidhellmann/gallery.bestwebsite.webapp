<template>
  <div>
    <SectionEl>
      <div class="container mt-24">
        <BlockSiteSummary v-if="entries" :entry="entries[0]"></BlockSiteSummary>
      </div>
    </SectionEl>
    <SectionEl>
      <div class="container mt-24">
        <BlockRelatedWebsites
          v-if="entries"
          :entries="entries"
        ></BlockRelatedWebsites>
      </div>
    </SectionEl>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import websites from '../graphql/entries.websites.gql'
import heevImages from '../graphql/heevImages.gql'
import BlockSiteSummary from '~/components/Block/BlockSiteSummary'
import BlockRelatedWebsites from '~/components/Block/BlockRelatedWebsites'
import SectionEl from '~/components/Section/SectionEl.vue'

export default defineComponent({
  components: {
    SectionEl,
    BlockSiteSummary,
    BlockRelatedWebsites,
  },
  data() {
    return {
      searchResults: [],
      pending: false,
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
})
</script>
