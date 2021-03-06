<template>
  <div :class="['bg-white flex justify-around', tw]">
    <ul :class="['flex flex-col w-1/2 px-8 py-4']">
      <li
        v-for="item in formattedRatings"
        :key="item.name"
        class="flex items-center"
      >
        <div class="flex-shrink-0 flex-grow-0 w-24 text-xs uppercase font-bold">
          {{ item.name }}
        </div>
        <div class="flex-auto bg-gray-100 h-1.5 relative">
          <span
            class="bg-blue-800 h-full inline-block absolute left-0"
            :style="{ width: item.ratingPercent }"
          ></span>
        </div>
        <div class="flex-shrink-0 flex-grow-0 w-12 ml-auto text-right">
          {{ item.rating }}
        </div>
      </li>
    </ul>
    <div v-if="finalResult" class="w-1/2 px-8 py-4">
      {{ finalResult }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'RatingWebsite',
  props: {
    tw: {
      type: String,
      default: '',
    },
    ratings: {
      type: Array,
      required: true,
      default: null,
    },
  },
  data() {
    return {
      formattedRatings: [],
      finalResult: null,
    }
  },
  mounted() {
    this.formatRatings()
  },
  methods: {
    formatRatings() {
      this.ratings.forEach((item) => {
        this.formattedRatings.push({
          name: item.name,
          rating: this.formatRating(item.rating),
          ratingPercent: `${this.formatRating(item.rating) * 10}%`,
        })
      })

      this.calcFinalResult(this.formattedRatings)
    },
    formatRating(rating) {
      return parseFloat(rating).toFixed(2)
    },
    calcFinalResult(ratings) {
      this.finalResult = (
        Object.values(ratings).reduce(
          (t, { rating }) => t + parseFloat(rating),
          0
        ) / 3
      ).toFixed(2)
    },
  },
}
</script>
