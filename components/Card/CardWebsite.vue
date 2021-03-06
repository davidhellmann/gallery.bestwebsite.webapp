<template>
  <div
    :class="[
      'rounded-xl overflow-hidden shadow hover:shadow-2xl transition duration-300 transform hover:-translate-y-0.5 cursor-pointer',
      tw,
    ]"
  >
    <ImageRes :image="entry.imagePreviewScreenshot[0] || null" :lazy="false" />
    <div class="bg-white flex justify-around">
      <ul class="flex flex-col w-1/2 px-8 py-4">
        <li class="flex items-center">
          <div
            class="flex-shrink-0 flex-grow-0 w-24 text-xs uppercase font-bold"
          >
            Design
          </div>
          <div class="flex-auto bg-gray-100 h-1.5 relative">
            <span
              class="bg-blue-800 h-full inline-block absolute left-0"
              :style="{ width: designRating * 10 + '%' }"
            ></span>
          </div>
          <div class="flex-shrink-0 flex-grow-0 w-12 ml-auto text-right">
            {{ designRating.toFixed(2) }}
          </div>
        </li>
        <li class="flex items-center">
          <div
            class="flex-shrink-0 flex-grow-0 w-24 text-xs uppercase font-bold"
          >
            Creativity
          </div>
          <div class="flex-auto bg-gray-100 h-1.5 relative">
            <span
              class="bg-blue-800 h-full inline-block absolute left-0"
              :style="{ width: creativityRating * 10 + '%' }"
            ></span>
          </div>
          <div class="flex-shrink-0 flex-grow-0 w-12 ml-auto text-right">
            {{ creativityRating.toFixed(2) }}
          </div>
        </li>
        <li class="flex items-center">
          <div
            class="flex-shrink-0 flex-grow-0 w-24 text-xs uppercase font-bold"
          >
            Usability
          </div>
          <div class="flex-auto bg-gray-100 h-1.5 relative">
            <span
              class="bg-blue-800 h-full inline-block absolute left-0"
              :style="{ width: usabilityRating * 10 + '%' }"
            ></span>
          </div>
          <div class="flex-shrink-0 flex-grow-0 w-12 ml-auto text-right">
            {{ usabilityRating.toFixed(2) }}
          </div>
        </li>
      </ul>
      <div class="w-1/2 px-8 py-4">
        {{
          ((designRating + creativityRating + usabilityRating) / 3).toFixed(2)
        }}
      </div>
    </div>
  </div>
</template>

<script>
import rating from '~/graphql/rating.gql'
import ImageRes from '~/components/Image/ImageRes'

export default {
  name: 'CardWebsite',
  components: { ImageRes },
  apollo: {
    design: {
      query: rating,
      result({ data }) {
        this.designRating = data.design
      },
      skip() {
        return this.skipQuery
      },
    },
    creativity: {
      query: rating,
      result({ data }) {
        this.creativityRating = data.creativity
      },
      skip() {
        return this.skipQuery
      },
    },
    usability: {
      query: rating,
      result({ data }) {
        this.usabilityRating = data.usability
      },
      skip() {
        return this.skipQuery
      },
    },
  },
  props: {
    tw: {
      type: String,
      default: '',
    },
    entry: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      elementId: null,
      skipQuery: true,
      designRating: 0,
      creativityRating: 0,
      usabilityRating: 0,
    }
  },
  mounted() {
    this.elementId = parseInt(this.entry.id)
    this.$apollo.queries.design.setVariables({
      id: this.elementId,
    })
    this.$apollo.queries.creativity.setVariables({
      id: this.elementId,
    })
    this.$apollo.queries.usability.setVariables({
      id: this.elementId,
    })
    this.skipQuery = false
  },
}
</script>
