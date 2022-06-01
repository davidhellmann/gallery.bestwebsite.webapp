<template>
  <div :class="['flex flex-row flex-wrap border-t mt-6 pt-5', tw]">
    <template v-for="(cats, name) in items">
      <span :key="name" class="text-2xs font-bold whitespace-pre mt-3 mr-3"
        >{{ name }}:</span
      >
      <Link
        v-for="cat in cats"
        :key="cat.title"
        :to="cat.uri"
        variant="tag"
        size="tag"
        >{{ cat.title }}</Link
      >
    </template>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Link from '@/components/Link/Link'

export default defineComponent({
  name: 'StackTags',
  components: { Link },
  props: {
    tw: {
      type: String,
      default: '',
    },
    items: {
      type: Object,
      required: true,
      default: null,
    },
  },
})
</script>
