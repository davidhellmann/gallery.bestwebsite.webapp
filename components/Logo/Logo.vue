<template>
  <Link :class="[tw]" to="/">
    <span></span>
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
