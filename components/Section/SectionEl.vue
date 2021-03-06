<template>
  <section :class="[tw]">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'SectionEl',
  props: {
    tw: {
      type: String,
      default: '',
    },
  },
}
</script>
