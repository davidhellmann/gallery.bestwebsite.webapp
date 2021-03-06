<!--
https://github.com/craftcms/cms/issues/7534HAHA
https://craftcms.com/docs/3.x/graphql.html#the-entrycount-query
https://gist.github.com/daltonrooney/927a68196e915829349b7a087a1644a5
https://github.com/craftcms/cms/issues/4847
https://stackoverflow.com/questions/48068520/nuxt-js-how-to-get-route-url-params-in-a-page
-->

<template>
  <div class="container">
    <!--    <SiteSummary :entry="entries[0] || null"></SiteSummary>-->
    <pre>
    {{ entries }}
    </pre>
  </div>
</template>

<script>
// import websites from '../graphql/entries.gql'
import websiteSearch from '../graphql/websiteSearch.gql'
import heevImages from '../graphql/heevImages.gql'
// import SiteSummary from '~/components/Block/SiteSummary'

export default {
  // components: { SiteSummary },
  data() {
    return {
      searchResults: [],
    }
  },
  mounted() {
    console.log(this.$route)
  },
  apollo: {
    entries: {
      query: websiteSearch,
      variables: {
        section: 'websites',
        limit: 32,
        search: 'David',
        relatedToCategories: [
          { title: ['beige', 'blue', 'black'], group: 'color' },
          { title: 'wordpress', group: 'cms' },
        ],
      },
    },
    // entries: {
    //   query: websites,
    //   variables: {
    //     section: 'websites',
    //     limit: 7,
    //     queryCategories: true,
    //     queryPreviewScreenshot: true,
    //   },
    // },
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
