<template>
  <div
    :class="[
      'rounded-xl overflow-hidden shadow hover:shadow-2xl transition duration-300 transform hover:-translate-y-0.5 cursor-pointer flex flex-col',
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
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Link from '@/components/Link/Link'
import ImageRes from '~/components/Image/ImageRes'

export default defineComponent({
  name: 'CardLink',
  components: { Link, ImageRes },
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
  data() {
    return {
      ratings: [],
    }
  },
  mounted() {},
  methods: {},
})
</script>
