<template>
  <div :class="[tw]">
    <TextHeadline size="h2" variant="block">{{ headline }}</TextHeadline>
    <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      <template v-for="(entry, index) in entries">
        <li :key="index">
          <CardWebsite :entry="entry" />
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import TextHeadline from '@/components/Text/Headline'
import CardWebsite from '~/components/Card/CardWebsite'
// import Link from '~/components/Link/Link'
export default defineComponent({
  name: 'BlockRelatedWebsites',
  components: {
    TextHeadline,
    // Link,
    CardWebsite,
  },
  props: {
    tw: {
      type: String,
      default: '',
    },
    entries: {
      type: Array,
      default: () => [],
      required: true,
    },
    limit: {
      type: Number,
      default: 6,
    },
    headline: {
      type: String,
      default: 'Latest Winners',
    },
  },
  data() {
    return {}
  },
  computed: {},
})
</script>
