<template>
  <div :class="['fixed top-0 left-0 right-0 h-12 md:h-24 z-10 ', tw]">
    <div
      class="absolute inset-0 bg-gray-100 opacity-90"
      style="backdrop-filter: blur(10px)"
    ></div>
    <LayoutNavMain />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import LayoutNavMain from '@/components/Layout/NavMain'
export default defineComponent({
  name: 'LayoutHeader',
  components: { LayoutNavMain },
  props: {
    tw: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {}
  },
})
</script>
