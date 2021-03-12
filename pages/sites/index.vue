<template>
  <div>Hello {{ $route.params.slug }}</div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  components: {},
  setup() {
    return {}
  },
  data() {
    return {}
  },
  // apollo: {
  //   entry: {
  //     query: websites,
  //     variables: {
  //       id: 99940,
  //       queryCategories: true,
  //       queryPreviewScreenshot: true,
  //       queryStarratings: true,
  //     },
  //   },
  // },
})
</script>
