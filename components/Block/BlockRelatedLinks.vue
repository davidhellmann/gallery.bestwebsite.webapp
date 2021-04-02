<template>
  <div :class="[tw]">
    <TextHeadline size="h2" variant="block" text-color-variant="default">{{
      headline
    }}</TextHeadline>
    <ul class="grid grid-cols-4 gap-8">
      <template v-for="(entry, index) in entries">
        <li :key="index">
          <CardLink
            :entry="entry"
            :fallback-image="fallbackImage || null"
            tw="h-full"
          />
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import TextHeadline from '@/components/Text/Headline'
import CardLink from '@/components/Card/CardLink'
export default defineComponent({
  name: 'BlockRelatedLinks',
  components: {
    CardLink,
    TextHeadline,
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
      default: 'Interesting Links',
    },
    fallbackImage: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {}
  },
  computed: {},
})
</script>
