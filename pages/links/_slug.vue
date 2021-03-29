<template>
  <SectionEl>
    <div class="container mt-24">
      <Link to="/">Back to home</Link>
      <BlockLinkSummary
        v-if="entry"
        :entry="entry || null"
        :fallback-image="fallbackImageLink || []"
      ></BlockLinkSummary>
    </div>
  </SectionEl>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import fallbackImages from '~/graphql/assets.fallbacks.gql'
import links from '~/graphql/entry.links.gql'
import BlockLinkSummary from '~/components/Block/BlockLinkSummary.vue'
import SectionEl from '~/components/Section/SectionEl.vue'
import Link from '~/components/Link/Link.vue'

export default defineComponent({
  components: {
    SectionEl,
    BlockLinkSummary,
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
      query: links,
      variables() {
        return {
          slug: this.$route.params.slug || null,
          queryOGImage: true,
          queryCategories: true,
        }
      },
    },
    fallbackImageLink: {
      query: fallbackImages,
    },
  },
})
</script>
