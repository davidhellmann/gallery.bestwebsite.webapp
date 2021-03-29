<template>
  <div
    :class="[
      'rounded-xl overflow-hidden shadow hover:shadow-2xl bg-white transition duration-300 transform hover:-translate-y-0.5 cursor-pointer flex flex-col',
      tw,
    ]"
  >
    <Link :to="entry.uri" class="group inline-block">
      <ImageRes
        v-if="entry.imageOGImage.length > 0 || fallbackImage.length > 0"
        class="group-hover:opacity-10 transition duration-300"
        :image="entry.imageOGImage[0] || fallbackImage[0]"
      />
    </Link>
    <div class="p-8">
      <span class="text-gold text-xs">{{ stripUrlComputed }}</span>
      <TextHeadline size="div" variant="h3">
        {{ entry.title }}
      </TextHeadline>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Link from '@/components/Link/Link'
import TextHeadline from '@/components/Text/Headline'
import { useRootUrl } from '~/composables/useRootUrl'
import ImageRes from '~/components/Image/ImageRes'

export default defineComponent({
  name: 'CardLink',
  components: { TextHeadline, Link, ImageRes },
  props: {
    tw: {
      type: String,
      default: '',
    },
    entry: {
      type: Object,
      required: true,
      default: null,
    },
    fallbackImage: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const { stripUrlComputed } = useRootUrl(props.entry.singleLinkSource)
    return { stripUrlComputed }
  },
})
</script>
