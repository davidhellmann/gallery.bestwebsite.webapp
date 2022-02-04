<template>
  <Link
    :class="[
      'flex flex-row items-center font-medium text-gray-900 group dark:text-gray-100 w-56 h-16 text-uiBase relative',
      tw,
    ]"
    to="/"
  >
    <span
      class="w-3 h-3 absolute left-0 transition transition-all transform -translate-y-px rounded-xl bg-blue-500 dark:bg-gray-400 group-hover:bg-dot-red inline-block"
    ></span>
    <span
      class="w-3 h-3 absolute left-0 group-hover:translate-x-4 opacity-0 group-hover:opacity-100 transition transition-all transform -translate-y-px rounded-xl bg-blue-500 dark:bg-gray-400 group-hover:bg-dot-yellow inline-block"
    ></span>
    <span
      class="w-3 h-3 absolute left-0 group-hover:translate-x-8 opacity-0 group-hover:opacity-100 transition transition-all transform -translate-y-px rounded-xl bg-blue-500 dark:bg-gray-400 group-hover:bg-dot-green inline-block"
    ></span>
    <span
      class="absolute left-0 w-44 transition transform translate-x-6 group-hover:translate-x-14"
      >Best Website Gallery</span
    >
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
