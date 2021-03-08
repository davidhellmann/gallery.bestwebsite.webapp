<template>
  <div
    :class="[
      'rounded-xl overflow-hidden shadow hover:shadow-2xl transition duration-300 transform hover:-translate-y-0.5 cursor-pointer',
      tw,
    ]"
  >
    <a :href="entry.uri">
      <ImageRes
        :image="entry.imagePreviewScreenshot[0] || null"
        :lazy="false"
      />
    </a>
    <RatingWebsite v-if="ratings.length > 0" :ratings="ratings" />
  </div>
</template>

<script>
import ImageRes from '~/components/Image/ImageRes'
import RatingWebsite from '~/components/Rating/RatingWebsite'

export default {
  name: 'CardWebsite',
  components: { RatingWebsite, ImageRes },
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
}
</script>
