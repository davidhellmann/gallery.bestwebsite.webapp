<!---->
<template>
  <div
    :class="['fixed inset-0 bg-gray-100 opacity-80', tw]"
    style="backdrop-filter: blur(50px)"
  >
    LayoutNavOverlay
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'LayoutNavOverlay',
  components: {},
  props: {
    tw: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {}
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
})
</script>
