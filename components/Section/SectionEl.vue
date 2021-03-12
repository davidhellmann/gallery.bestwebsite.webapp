<template>
  <section :class="[tw]">
    <slot></slot>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'SectionEl',
  props: {
    tw: {
      type: String,
      default: '',
    },
  },
})
</script>
