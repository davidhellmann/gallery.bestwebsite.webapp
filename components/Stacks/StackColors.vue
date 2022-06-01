<template>
  <ul :class="['flex flex-row border-t mt-6 pt-5', tw]">
    <li v-for="item in items" :key="item.title">
      <Link
        :to="item.uri"
        tw="inline-block rounded-full w-8 h-8 p-1 mr-1 mt-1 shadow-sm hover:shadow-md transition duration-300 transform hover:-translate-y-0.5"
      >
        <span
          class="inline-block rounded-full w-full h-full border border-gray-200"
          :style="{
            backgroundColor:
              item.categoryFieldsColors[0].color || 'transparent',
          }"
        ></span>
      </Link>
    </li>
  </ul>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Link from '@/components/Link/Link'

export default defineComponent({
  name: 'StackColors',
  components: { Link },
  props: {
    tw: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      required: true,
      default: null,
    },
  },
})
</script>
