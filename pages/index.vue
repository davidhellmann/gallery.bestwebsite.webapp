<template>
  <div>
    <SectionEl>
      <div class="container mt-24">
        <BlockSiteSummary
          v-if="entriesWebsites"
          :entry="entriesWebsites[0]"
        ></BlockSiteSummary>
      </div>
    </SectionEl>
    <SectionEl>
      <div class="container mt-48">
        <BlockRelatedWebsites
          v-if="entriesWebsites"
          :entries="entriesWebsites.slice(1)"
        ></BlockRelatedWebsites>
      </div>
    </SectionEl>
    <SectionEl>
      <div class="container mt-48">
        <BlockRelatedLinks
          v-if="entriesLinks"
          :entries="entriesLinks"
          :fallback-image="fallbackImageLink || []"
        ></BlockRelatedLinks>
      </div>
    </SectionEl>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import BlockRelatedLinks from '@/components/Block/BlockRelatedLinks'
import websites from '../graphql/entries.websites.gql'
import links from '../graphql/entries.links.gql'
import heevImages from '../graphql/heevImages.gql'
import fallbackImages from '../graphql/assets.fallbacks.gql'
import BlockSiteSummary from '~/components/Block/BlockSiteSummary'
import BlockRelatedWebsites from '~/components/Block/BlockRelatedWebsites'
import SectionEl from '~/components/Section/SectionEl.vue'

export default defineComponent({
  components: {
    BlockRelatedLinks,
    SectionEl,
    BlockSiteSummary,
    BlockRelatedWebsites,
  },
  data() {
    return {}
  },
  apollo: {
    entriesWebsites: {
      query: websites,
      variables: {
        limit: 7,
        queryCategories: true,
        queryPreviewScreenshot: true,
        queryStarratings: true,
      },
    },
    entriesLinks: {
      query: links,
      variables: {
        limit: 12,
        queryCategories: true,
        queryOGImage: true,
      },
    },
    fallbackImageLink: {
      query: fallbackImages,
    },
    heevImages: {
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
