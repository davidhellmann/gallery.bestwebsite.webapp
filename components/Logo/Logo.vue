<template>
  <Link
    :class="[
      'flex flex-row items-center font-medium text-gray-900 group dark:text-gray-100 text-uiBase',
      tw,
    ]"
    to="/"
  >
    <span
      class="w-3 h-3 group-hover:w-5 group-hover:h-5 transition transition-all transform -translate-y-px mr-2 rounded-xl bg-blue-500 dark:bg-gray-400 inline-block"
    ></span>
    Best Website Gallery
  </Link>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Link from '@/components/Link/Link'
export default defineComponent({
  name: 'Logo',
  components: { Link },
  props: {
    tw: {
      type: String,
      default: '',
    },
  },
})
</script>
