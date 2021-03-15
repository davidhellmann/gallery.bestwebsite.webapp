<template>
  <div
    :class="[
      'rounded-xl overflow-hidden shadow hover:shadow-2xl transition duration-300 transform hover:-translate-y-0.5 cursor-pointer',
      tw,
    ]"
  >
    <Link :to="entry.uri" class="group inline-block">
      <ImageRes
        class="group-hover:opacity-10 transition duration-300"
        :image="entry.imagePreviewScreenshot[0] || null"
        :lazy="false"
      />
    </Link>
    <RatingWebsite v-if="ratings.length > 0" :ratings="ratings" />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Link from '@/components/Link/Link'
import ImageRes from '~/components/Image/ImageRes'
import RatingWebsite from '~/components/Rating/RatingWebsite'

export default defineComponent({
  name: 'CardWebsite',
  components: { Link, RatingWebsite, ImageRes },
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
  },
  data() {
    return {
      ratings: [],
    }
  },
  mounted() {
    this.addRatings()
  },
  methods: {
    addRatings() {
      if (this.entry.starratingsDesign) {
        this.ratings.push({
          name: 'Design',
          rating: this.entry.starratingsDesign,
        })
      }
      if (this.entry.starratingsCreativity) {
        this.ratings.push({
          name: 'Creativity',
          rating: this.entry.starratingsCreativity,
        })
      }
      if (this.entry.starratingsUsability) {
        this.ratings.push({
          name: 'Usability',
          rating: this.entry.starratingsUsability,
        })
      }
    },
  },
})
</script>
